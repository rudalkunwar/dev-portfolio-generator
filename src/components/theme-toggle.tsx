"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    function handleToggle() {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <button
            type="button"
            onClick={handleToggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/15 bg-background/70 text-foreground/80 transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
        >
            {mounted ? (
                <Icon name={isDark ? "sun" : "moon"} size={18} />
            ) : (
                <div className="h-4 w-4 rounded-full bg-foreground/40" />
            )}
        </button>
    );
}
