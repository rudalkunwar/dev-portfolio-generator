"use client"
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        {/* <Icon name="rocket" size={24} className="text-foreground" /> */}
                        <span className="font-bold text-lg">Dev Portfolio</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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

                <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    {/* GitHub Button - Hidden on mobile */}
                    <a
                        href="https://github.com/rudalkunwar/dev-portfolio-generator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background/60 px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition-colors"
                    >
                        <Icon name="globe" size={16} className="mr-2" />
                        GitHub
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-foreground/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur">
                    <div className="container mx-auto px-6 py-4">
                        <nav className="flex flex-col space-y-4">
                            <div className="flex justify-end">
                                <ThemeToggle />
                            </div>
                            <Link
                                href="/"
                                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="pt-2 border-t border-foreground/10">
                                <a
                                    href="https://github.com/rudalkunwar/dev-portfolio-generator"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background/60 px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition-colors w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Icon name="globe" size={16} className="mr-2" />
                                    GitHub
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}