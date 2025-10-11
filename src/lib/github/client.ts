import { Octokit } from "@octokit/rest";

let cachedClient: Octokit | null = null;

/**
 * Returns a singleton Octokit client configured with the optional personal access token.
 */
export function getOctokit(): Octokit {
  if (cachedClient) {
    return cachedClient;
  }

  const auth = process.env.GITHUB_TOKEN;

  cachedClient = new Octokit({
    auth,
    userAgent:
      "dev-portfolio-generator/0.1.0 (+https://github.com/rudalkunwar/dev-portfolio-generator)",
    request: {
      timeout: 10000,
    },
  });

  return cachedClient;
}
