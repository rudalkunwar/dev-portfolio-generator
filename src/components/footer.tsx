import Link from "next/link";
import { Icon } from "@/components/icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon name="rocket" size={24} className="text-foreground" />
                            <span className="font-semibold text-lg">Dev Portfolio Generator</span>
                        </div>
                        <p className="text-sm text-foreground/70 leading-relaxed max-w-md">
                            Build and launch modern developer portfolios fast with themes, markdown content,
                            and SEO-ready pages. Opinionated, fast, and fully customizable.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://github.com/rudalkunwar/dev-portfolio-generator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/60 hover:text-foreground transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <Icon name="layers" size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-foreground/60 hover:text-foreground transition-colors"
                                aria-label="Documentation"
                            >
                                <Icon name="fileText" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4 text-foreground/90">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#get-started" className="text-foreground/70 hover:text-foreground transition-colors">
                                    Get Started
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/rudalkunwar/dev-portfolio-generator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/70 hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4 text-foreground/90">Built With</h3>
                        <ul className="space-y-2 text-sm text-foreground/70">
                            <li>Next.js 15</li>
                            <li>React 19</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/50">
                        © {currentYear} Dev Portfolio Generator. MIT Licensed.
                    </p>
                    <p className="text-xs text-foreground/50">
                        Built with ❤️ for developers
                    </p>
                </div>
            </div>
        </footer>
    );
}