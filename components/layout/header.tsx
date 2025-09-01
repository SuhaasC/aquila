"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ways to Work Together", href: "/#services-section" },
  { name: "Data Management", href: "/data-management" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-surface">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Wordmark */}
        <Link href="/" className="flex items-center">
          <img 
            src="/logo-header.png?v=2" 
            alt="Aquilastrat" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isAnchorLink = item.href.startsWith('/#');
            
            if (isAnchorLink) {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    "hover:underline underline-offset-4"
                  )}
                >
                  {item.name}
                </button>
              );
            }
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-primary border-b-2 border-accent pb-1"
                    : "text-text hover:underline underline-offset-4"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-text hover:text-primary">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
