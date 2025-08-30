import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ways to Work Together", href: "/#services-section" },
  { name: "Data Management", href: "/data-management" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const smallprint = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const social = [
  { name: "LinkedIn", href: "https://linkedin.com/company/aquilastrat", external: true },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Brand Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl inline-block">
              <img 
                src="/logo-footer.png" 
                alt="Aquilastrat" 
                className="h-32 w-auto"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-serif text-brand-gold font-semibold leading-relaxed">
                Strategic Partners for Leaders Who Move Markets
              </h2>
              <p className="text-white/80 leading-relaxed max-w-md text-sm">
                We work with a small number of founders and executives to isolate the problems that matter, and act on them with precision.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm md:text-base font-medium group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#services-section" className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm md:text-base font-medium group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Strategic Diagnostic
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm md:text-base font-medium group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Growth Architecture
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm md:text-base font-medium group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Data Management
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm md:text-base font-medium group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Strategic Partner
                  </span>
                </Link>
              </li>
            </ul>
            
            {/* LinkedIn Icon below Services */}
            <div className="pt-4">
              <Link
                href={social[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-gold transition-all duration-300 text-sm font-medium group flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  {social[0].name}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-white/60 font-medium">
                © {new Date().getFullYear()} Aquilastrat. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  Privacy
                </Link>
                <span className="text-white/40">•</span>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span className="text-sm text-white/60">Understated strategy for founders</span>
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
