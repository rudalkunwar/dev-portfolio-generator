import { NextRequest } from "next/server";
import { fetchUserProfile } from "@/lib/github/service";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username") ?? undefined;

    const profile = await fetchUserProfile(username);

    return Response.json({ profile });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch GitHub profile.";
    return Response.json({ error: message }, { status: 500 });
  }
}
