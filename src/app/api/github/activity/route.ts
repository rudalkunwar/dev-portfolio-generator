import { NextRequest } from "next/server";
import { fetchActivity } from "@/lib/github/service";

export const runtime = "nodejs";

function parseLimit(value: string | null): number | undefined {
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
    const limit = parseLimit(searchParams.get("limit"));

    const activity = await fetchActivity({ username, limit });

    return Response.json({ activity });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch GitHub activity.";
    return Response.json({ error: message }, { status: 500 });
  }
}
