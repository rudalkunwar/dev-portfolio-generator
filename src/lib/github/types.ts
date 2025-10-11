export interface GitHubProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  htmlUrl: string;
  location: string | null;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  blog: string | null;
  twitterUsername: string | null;
  company: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GitHubRepoSummary {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers: number;
  forks: number;
  watchers: number;
  openIssues: number;
  sizeInKb: number;
  isFork: boolean;
  isPrivate: boolean;
  archived: boolean;
  pushedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface GitHubRepoStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalOpenIssues: number;
  languageBytes: Array<{ language: string; bytes: number }>;
  languages: Array<{ language: string; percentage: number }>;
  topStarred: GitHubRepoSummary[];
  recentlyUpdated: GitHubRepoSummary[];
}

export interface GitHubActivityItem {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  createdAt: string;
  payload: Record<string, unknown>;
}

export interface GitHubOverview {
  profile: GitHubProfile;
  stats: GitHubRepoStats;
  repositories: GitHubRepoSummary[];
  activity: GitHubActivityItem[];
}
