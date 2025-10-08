import Link from "next/link";
import { Icon } from "@/components/icons";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-screen-xl items-center px-6">
                <div className="mr-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <Icon name="rocket" size={24} className="text-foreground" />
                        <span className="font-bold text-lg">Dev Portfolio</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link
                        href="/"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/blog"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="ml-auto">
                    <a
                        href="https://github.com/rudalkunwar/dev-portfolio-generator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background/60 px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition-colors"
                    >
                        <Icon name="globe" size={16} className="mr-2" />
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}