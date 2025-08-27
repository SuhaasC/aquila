import { Header } from "./header";
import { Footer } from "./footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
