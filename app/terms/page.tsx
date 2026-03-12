import { PageTransition } from "@/components/ui/page-transition";
import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/FadeIn";

const LAST_UPDATED = "March 12, 2026";

export default function Terms() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-brand-navy to-slate-900 text-white py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-6 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                The terms and conditions governing your use of Aquilastrat&apos;s services and website.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none">
              <FadeIn>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Acceptance of Terms</h2>
                    <p className="text-slate-700 leading-relaxed">
                      By accessing and using Aquilastrat&apos;s website and services, you accept and agree to be bound
                      by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Services Description</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Aquilastrat provides strategic guidance and data management services, including:
                    </p>
                    <ul className="text-slate-700 leading-relaxed space-y-2 ml-6">
                      <li>• Executive decision retainer engagements</li>
                      <li>• Strategic diagnosis, decision framing, and strategic calibration support</li>
                      <li>• Founder decision support for significant business decisions</li>
                      <li>• Data management and integration services</li>
                      <li>• Regulatory reporting and compliance-oriented data workflows</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Client Responsibilities</h2>
                    <p className="text-slate-700 leading-relaxed mb-4">As a client, you agree to:</p>
                    <ul className="text-slate-700 leading-relaxed space-y-2 ml-6">
                      <li>• Provide accurate and complete information</li>
                      <li>• Participate actively in strategy sessions</li>
                      <li>• Maintain confidentiality of proprietary information</li>
                      <li>• Pay agreed-upon fees in a timely manner</li>
                      <li>• Use our services for lawful purposes only</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Intellectual Property</h2>
                    <p className="text-slate-700 leading-relaxed">
                      All content on this website, including text, graphics, logos, and software, is the property of
                      Aquilastrat and is protected by copyright and other intellectual property laws. Our methodologies,
                      frameworks, and deliverables remain our proprietary information unless stated otherwise in a
                      written agreement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Confidentiality</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We maintain strict confidentiality regarding all client information and business matters. We will
                      not disclose any confidential information without your express written consent, except as required
                      by law.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Limitation of Liability</h2>
                    <p className="text-slate-700 leading-relaxed">
                      Aquilastrat provides strategic guidance and data management services. While we strive for
                      accuracy and effectiveness, we cannot guarantee specific business outcomes. Our liability is
                      limited to the amount paid for our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Payment Terms</h2>
                    <p className="text-slate-700 leading-relaxed">
                      Payment terms are specified in individual service agreements. Generally, payment is due upon
                      receipt of invoice. Late payments may result in suspension of services and additional fees.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Termination</h2>
                    <p className="text-slate-700 leading-relaxed">
                      Either party may terminate our engagement with written notice. Upon termination, you remain
                      responsible for payment of services rendered up to the termination date.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Governing Law</h2>
                    <p className="text-slate-700 leading-relaxed">
                      These terms are governed by the laws of the jurisdiction in which Aquilastrat operates. Any
                      disputes will be resolved through good faith negotiation or mediation.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Contact Information</h2>
                    <p className="text-slate-700 leading-relaxed">
                      For questions about these Terms of Service, please contact us at{" "}
                      <a href="mailto:contact@aquilastrat.com" className="text-brand-gold hover:text-brand-navy transition-colors">
                        contact@aquilastrat.com
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-serif text-brand-navy mb-4">Updates to Terms</h2>
                    <p className="text-slate-700 leading-relaxed">
                      We may update these Terms of Service from time to time. We will notify you of any material
                      changes by posting the updated terms on this page.
                    </p>
                    <p className="text-sm text-slate-500 mt-4">Last Updated: {LAST_UPDATED}</p>
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
