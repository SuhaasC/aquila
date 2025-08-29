import { PageTransition } from "@/components/ui/page-transition";
import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/FadeIn";

export default function Privacy() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-navy to-slate-900 text-white py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-6 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                How we collect, use, and protect your information when you interact with Aquilastrat.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none">
              <FadeIn>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Information We Collect</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We collect information you provide directly to us, such as when you fill out contact forms, 
                      request consultations, or communicate with us via email. This may include your name, email address, 
                      company information, and details about your business challenges.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">How We Use Your Information</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="text-slate-700 leading-relaxed space-y-2 ml-6">
                      <li>• Respond to your inquiries and provide requested services</li>
                      <li>• Schedule and conduct consultations</li>
                      <li>• Send you relevant information about our services</li>
                      <li>• Improve our website and service offerings</li>
                      <li>• Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Information Sharing</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties. 
                      We may share your information only in limited circumstances, such as when required by law 
                      or with your explicit consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Data Security</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                      over the internet is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Cookies and Analytics</h2>
                    <p className="text-slate-700 leading-relaxed">
                      Our website uses cookies and similar technologies to enhance your browsing experience. 
                      We also use Google Analytics to understand how visitors interact with our site. 
                      You can control cookie settings through your browser preferences.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Your Rights</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      You have the right to:
                    </p>
                    <ul className="text-slate-700 leading-relaxed space-y-2 ml-6">
                      <li>• Access the personal information we hold about you</li>
                      <li>• Request correction of inaccurate information</li>
                      <li>• Request deletion of your personal information</li>
                      <li>• Opt out of marketing communications</li>
                      <li>• Lodge a complaint with relevant authorities</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Contact Us</h2>
                    <p className="text-slate-700 leading-relaxed">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us at{" "}
                      <a href="mailto:suhaas@aquilastrat.com" className="text-brand-gold hover:text-brand-navy transition-colors">
                        suhaas@aquilastrat.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Updates to This Policy</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any material 
                      changes by posting the new policy on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-sm text-slate-500 mt-4">
                      Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
}
