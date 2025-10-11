import { NextRequest } from "next/server";
import { fetchRepositories } from "@/lib/github/service";

export const runtime = "nodejs";

const SORT_OPTIONS = new Set(["created", "updated", "pushed", "full_name"]);
const DIRECTION_OPTIONS = new Set(["asc", "desc"]);

function toBoolean(value: string | null, fallback = false): boolean {
  if (value === null) {
    return fallback;
  }
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") ?? undefined;
    const topic = searchParams.get("topic") ?? undefined;
    const includeForks = toBoolean(searchParams.get("includeForks"));
    const includePrivate = toBoolean(searchParams.get("includePrivate"));

    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

    const sortParam = searchParams.get("sort");
    const sort = SORT_OPTIONS.has(sortParam ?? "")
      ? (sortParam as "created" | "updated" | "pushed" | "full_name")
      : undefined;

    const directionParam = searchParams.get("direction");
    const direction = DIRECTION_OPTIONS.has(directionParam ?? "")
      ? (directionParam as "asc" | "desc")
      : undefined;

    const repositories = await fetchRepositories({
      username,
      limit,
      includeForks,
      includePrivate,
      topic,
      sort,
      direction,
    });

    return Response.json({ repositories });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch GitHub repositories.";
    return Response.json({ error: message }, { status: 500 });
  }
}
