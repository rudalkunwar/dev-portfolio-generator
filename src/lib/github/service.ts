import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import { getOctokit } from "./client";
import type {
  GitHubActivityItem,
  GitHubOverview,
  GitHubProfile,
  GitHubRepoStats,
  GitHubRepoSummary,
} from "./types";

export interface FetchRepositoriesOptions {
  username?: string;
  limit?: number;
  includeForks?: boolean;
  includePrivate?: boolean;
  topic?: string;
  sort?: "created" | "updated" | "pushed" | "full_name";
  direction?: "asc" | "desc";
}

export interface FetchActivityOptions {
  username?: string;
  limit?: number;
}

export interface FetchOverviewOptions {
  username?: string;
  repositoriesLimit?: number;
  includeForks?: boolean;
  includePrivate?: boolean;
  topic?: string;
  activityLimit?: number;
}

type RestRepo =
  RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][number];

const DEFAULT_USERNAME =
  process.env.GITHUB_USERNAME ?? process.env.GITHUB_LOGIN ?? "";
const DEFAULT_REPO_LIMIT = 12;
const DEFAULT_ACTIVITY_LIMIT = 20;
const LANGUAGE_SAMPLE_LIMIT = 30;

function resolveUsername(username?: string): string {
  const resolved = username ?? DEFAULT_USERNAME;
  if (!resolved) {
    throw new Error(
      "GitHub username is required. Pass ?username=<login> or set GITHUB_USERNAME in your environment."
    );
  }
  return resolved;
}

function mapRepoSummary(repo: RestRepo): GitHubRepoSummary {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description ?? null,
    htmlUrl: repo.html_url,
    homepage: repo.homepage ?? null,
    topics: repo.topics ?? [],
    language: repo.language ?? null,
    stargazers: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    watchers: repo.watchers_count ?? 0,
    openIssues: repo.open_issues_count ?? 0,
    sizeInKb: repo.size ?? 0,
    isFork: Boolean(repo.fork),
    isPrivate: Boolean(repo.private),
    archived: Boolean(repo.archived),
    pushedAt: repo.pushed_at ?? new Date(0).toISOString(),
    createdAt: repo.created_at ?? new Date(0).toISOString(),
    updatedAt: repo.updated_at ?? new Date(0).toISOString(),
  };
}

export async function fetchUserProfile(
  username?: string
): Promise<GitHubProfile> {
  const octokit = getOctokit();
  const login = resolveUsername(username);

  const { data } = await octokit.users.getByUsername({ username: login });

  return {
    login: data.login,
    name: data.name ?? null,
    avatarUrl: data.avatar_url,
    htmlUrl: data.html_url,
    location: data.location ?? null,
    bio: data.bio ?? null,
    followers: data.followers,
    following: data.following,
    publicRepos: data.public_repos,
    publicGists: data.public_gists,
    blog: data.blog ?? null,
    twitterUsername: data.twitter_username ?? null,
    company: data.company ?? null,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function fetchRepositories(
  options: FetchRepositoriesOptions = {}
): Promise<GitHubRepoSummary[]> {
  const octokit = getOctokit();
  const username = resolveUsername(options.username);
  const limit = options.limit ?? DEFAULT_REPO_LIMIT;

  const repos = await octokit.paginate(octokit.repos.listForUser, {
    username,
    per_page: 100,
    sort: options.sort ?? "updated",
    direction: options.direction ?? "desc",
  });

  const filtered = repos.filter((repo) => {
    if (!options.includePrivate && repo.private) {
      return false;
    }
    if (!options.includeForks && repo.fork) {
      return false;
    }
    if (options.topic && !(repo.topics ?? []).includes(options.topic)) {
      return false;
    }
    return true;
  });

  return filtered.slice(0, limit).map(mapRepoSummary);
}

export async function fetchRepositoryStats(
  username?: string
): Promise<GitHubRepoStats> {
  const octokit = getOctokit();
  const login = resolveUsername(username);

  const repos = await octokit.paginate(octokit.repos.listForUser, {
    username: login,
    per_page: 100,
    sort: "updated",
    direction: "desc",
  });

  const visibleRepos = repos.filter((repo) => !repo.private);
  const summaries = visibleRepos.map(mapRepoSummary);

  const totalStars = summaries.reduce((sum, repo) => sum + repo.stargazers, 0);
  const totalForks = summaries.reduce((sum, repo) => sum + repo.forks, 0);
  const totalOpenIssues = summaries.reduce(
    (sum, repo) => sum + repo.openIssues,
    0
  );

  const languageTotals = new Map<string, number>();
  const candidates = visibleRepos
    .filter((repo) => !repo.archived && !repo.fork)
    .slice(0, LANGUAGE_SAMPLE_LIMIT);

  for (const repo of candidates) {
    try {
      const owner = repo.owner?.login ?? login;
      const { data } = await octokit.repos.listLanguages({
        owner,
        repo: repo.name,
      });
      Object.entries(data).forEach(([language, bytes]) => {
        const current = languageTotals.get(language) ?? 0;
        languageTotals.set(language, current + Number(bytes ?? 0));
      });
    } catch {
      // Ignore individual repository failures to keep the overall response resilient.
      continue;
    }
  }

  const languageBytes = Array.from(languageTotals.entries())
    .map(([language, bytes]) => ({ language, bytes }))
    .sort((a, b) => b.bytes - a.bytes);

  const totalBytes = languageBytes.reduce((sum, item) => sum + item.bytes, 0);
  const languages = totalBytes
    ? languageBytes.map(({ language, bytes }) => ({
        language,
        percentage: Number(((bytes / totalBytes) * 100).toFixed(2)),
      }))
    : [];

  const topStarred = [...summaries]
    .sort((a, b) => b.stargazers - a.stargazers)
    .slice(0, 6);

  const recentlyUpdated = [...summaries]
    .sort(
      (a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime()
    )
    .slice(0, 6);

  return {
    totalRepos: summaries.length,
    totalStars,
    totalForks,
    totalOpenIssues,
    languageBytes,
    languages,
    topStarred,
    recentlyUpdated,
  };
}

export async function fetchActivity(
  options: FetchActivityOptions = {}
): Promise<GitHubActivityItem[]> {
  const octokit = getOctokit();
  const username = resolveUsername(options.username);
  const limit = options.limit ?? DEFAULT_ACTIVITY_LIMIT;

  const { data } = await octokit.activity.listPublicEventsForUser({
    username,
    per_page: Math.min(limit, 100),
  });

  return data.slice(0, limit).map((event) => ({
    id: event.id,
    type: event.type ?? "UnknownEvent",
    repo: {
      name: event.repo?.name ?? "",
      url: event.repo?.name ? `https://github.com/${event.repo.name}` : "",
    },
    createdAt: event.created_at ?? new Date(0).toISOString(),
    payload: event.payload ?? {},
  }));
}

export async function fetchOverview(
  options: FetchOverviewOptions = {}
): Promise<GitHubOverview> {
  const {
    username,
    repositoriesLimit,
    includeForks,
    includePrivate,
    topic,
    activityLimit,
  } = options;

  const [profile, stats, repositories, activity] = await Promise.all([
    fetchUserProfile(username),
    fetchRepositoryStats(username),
    fetchRepositories({
      username,
      limit: repositoriesLimit,
      includeForks,
      includePrivate,
      topic,
    }),
    fetchActivity({ username, limit: activityLimit }),
  ]);

  return { profile, stats, repositories, activity };
}
