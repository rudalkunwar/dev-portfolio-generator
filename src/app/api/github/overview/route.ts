import { NextRequest } from "next/server";
import { fetchOverview } from "@/lib/github/service";

export const runtime = "nodejs";

function toBoolean(value: string | null): boolean | undefined {
  if (value === null) {
    return undefined;
  }
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

function parseNumber(value: string | null): number | undefined {
  if (!value) {
    return undefined;
  }
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? undefined : parsed;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") ?? undefined;
    const repositoriesLimit =
      parseNumber(searchParams.get("repositoriesLimit")) ??
      parseNumber(searchParams.get("reposLimit"));
    const activityLimit = parseNumber(searchParams.get("activityLimit"));
    const includeForks = toBoolean(searchParams.get("includeForks"));
    const includePrivate = toBoolean(searchParams.get("includePrivate"));
    const topic = searchParams.get("topic") ?? undefined;

    const overview = await fetchOverview({
      username,
      repositoriesLimit,
      includeForks,
      includePrivate,
      topic,
      activityLimit,
    });

    return Response.json({ overview });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch GitHub overview.";
    return Response.json({ error: message }, { status: 500 });
  }
}
