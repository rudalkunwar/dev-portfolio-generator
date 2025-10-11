import { NextRequest } from "next/server";
import { fetchRepositoryStats } from "@/lib/github/service";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") ?? undefined;

    const stats = await fetchRepositoryStats(username);

    return Response.json({ stats });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch GitHub repository stats.";
    return Response.json({ error: message }, { status: 500 });
  }
}
