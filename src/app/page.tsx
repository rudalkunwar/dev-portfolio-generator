import Link from "next/link";
import { Icon, IconKey } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/60">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent)] bg-[repeating-linear-gradient(45deg,theme(colors.foreground/5)_0_8px,transparent_8px_16px)]" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-28 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1 text-xs text-foreground/70 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Launch your portfolio in minutes
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight bg-clip-text bg-[linear-gradient(90deg,theme(colors.foreground),theme(colors.foreground)/60)]">
            Dev Portfolio Generator
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed">
            Opinionated, fast, and themeable starter to build and ship a modern developer portfolio: projects, blog, timeline, skills, and more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background font-medium px-6 py-3 text-sm md:text-base shadow-sm hover:shadow transition-shadow"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/rudalkunwar/dev-portfolio-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background/60 backdrop-blur px-6 py-3 text-sm md:text-base font-medium hover:bg-foreground/5 transition-colors"
            >
              GitHub Repo →
            </a>
          </div>
          <div className="mt-16 grid w-full grid-cols-2 md:grid-cols-4 gap-6 text-sm text-foreground/60">
            {[
              { title: "Next.js 15", subtitle: "App Router", icon: "globe" },
              { title: "React 19", subtitle: "RSC + 19 APIs", icon: "cpu" },
              { title: "Tailwind v4", subtitle: "Design tokens", icon: "palette" },
              { title: "SEO Ready", subtitle: "Meta + OG", icon: "sparkle" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-2 rounded-md border border-foreground/10 bg-background/40 px-4 py-5 hover:border-foreground/20 transition-colors"
              >
                <div className="rounded-md p-2 bg-foreground/5 text-foreground/70">
                  <Icon name={item.icon as IconKey} size={22} />
                </div>
                <span className="font-medium text-foreground/80 text-sm">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-wide">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features */}
      <main className="flex-1">
        <section id="features" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
              Batteries Included
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Project Showcase",
                  body:
                    "Display projects with images, tech stack badges, links, and optional GitHub stars integration.",
                  icon: "grid",
                },
                {
                  title: "Content System",
                  body:
                    "Write blog posts & bios in Markdown/MDX (planned) with automatic routing and syntax highlighting.",
                  icon: "fileText",
                },
                {
                  title: "Theming",
                  body:
                    "Switch or extend themes with a token-based design layer. Dark mode included by default.",
                  icon: "palette",
                },
                {
                  title: "SEO & Social",
                  body:
                    "Preconfigured metadata, Open Graph tags, sitemap (planned) and sensible defaults.",
                  icon: "globe",
                },
                {
                  title: "Performance",
                  body:
                    "Image optimization, font loading strategy, and route-level code splitting out of the box.",
                  icon: "lightning",
                },
                {
                  title: "Extensible",
                  body:
                    "Add sections: timeline, skills, testimonials, contact form (API route) with minimal friction.",
                  icon: "puzzle",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="group relative rounded-lg border border-foreground/10 bg-background/60 p-6 backdrop-blur shadow-sm hover:shadow-lg transition-all hover:translate-y-[-2px]"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-md bg-foreground/5 p-2 text-foreground/70 group-hover:text-foreground group-hover:bg-foreground/10 transition-colors">
                    <Icon name={f.icon as IconKey} size={22} />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground/90">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/65">
                    {f.body}
                  </p>
                  <div className="pointer-events-none absolute inset-0 rounded-lg ring-0 group-hover:ring-2 ring-foreground/10 transition" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="py-24 bg-foreground/5 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.foreground/10),transparent_70%)]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to build yours?
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              Scaffold the project locally and start customizing sections, content, and theme tokens.
            </p>
            <div className="mt-8 inline-flex flex-col gap-3 items-center">
              <code className="rounded-md bg-background px-4 py-2 text-sm font-mono border border-foreground/15 shadow-sm">
                npx create-next-app@latest dev-portfolio-generator
              </code>
              <span className="text-xs text-foreground/60">
                (Already done? Run the dev server and begin editing)
              </span>
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/"
                className="rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium hover:shadow"
              >
                Open Starter
              </Link>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-foreground/20 bg-background/70 px-6 py-3 text-sm font-medium hover:bg-background/90"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
