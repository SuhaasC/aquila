"use client";

import { PageTransition } from "@/components/ui/page-transition";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Calendar, CheckCircle, Target, Shield, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function ConsultingContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState(null);

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Strategic Conversation",
          data,
        }),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send your request.");
      }

      e.currentTarget.reset();
      setSubmitState({ type: "success", message: "Request sent. We'll reach out within 24 hours." });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <PageTransition>
        
        {/* Hero Section */}
        <Section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy/95 to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 w-full text-center max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-white">
                Let's Discuss Your
                <span className="block text-brand-gold mt-2 sm:mt-3">Strategic Challenges</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed px-4">
                Ready to sharpen your decision clarity? Share your challenges and we will arrange a focused
                strategic conversation.
              </p>
            </FadeIn>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-navy mb-4 sm:mb-6">
                  Strategic Conversation
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Tell us about your strategic challenges and we will arrange a private strategic conversation.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Left Side - Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-lg">
                  <form onSubmit={handleSubmit} className="relative space-y-6 sm:space-y-8">
                    <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    {/* Basic Information */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                          placeholder="contact@aquilastrat.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select your role</option>
                        <option value="founder">Founder/CEO</option>
                        <option value="executive">Executive Team Member</option>
                        <option value="director">Director/VP</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>



                    <div>
                      <label htmlFor="companyStage" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Stage
                      </label>
                      <select
                        id="companyStage"
                        name="companyStage"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select company stage</option>
                        <option value="startup">Startup (0-2 years)</option>
                        <option value="early-growth">Early Growth (2-5 years)</option>
                        <option value="growth">Growth (5-10 years)</option>
                        <option value="scale">Scale (10+ years)</option>
                        <option value="established">Established Company</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium text-slate-700 mb-2">
                        Annual Revenue (Approximate)
                      </label>
                      <select
                        id="revenue"
                        name="revenue"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select approximate revenue</option>
                        <option value="under-1m">&lt; $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-20m">$5M - $20M</option>
                        <option value="20m-100m">$20M - $100M</option>
                        <option value="100m-plus">&gt; $100M</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        When Do You Need Help?
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1month">1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Tell Us About Your Challenge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors resize-none"
                        placeholder="Describe your strategic challenge, what you've tried, and what you hope to achieve..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        {isSubmitting ? "Sending..." : "Request Strategic Conversation"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      {submitState && (
                        <p
                          className={`mt-3 text-sm ${
                            submitState.type === "success" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {submitState.message}
                        </p>
                      )}
                    </div>
                  </form>
                </Card>
              </div>

              {/* Right Side - Info & Services */}
              <div className="space-y-6 sm:gap-8">
                {/* What to Expect */}
                <Card className="p-6 sm:p-8 bg-brand-navy/5 border-brand-navy/10">
                  <div className="text-center mb-6">
                    <Calendar className="w-12 h-12 text-brand-navy mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">What to Expect</h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>90-minute focused strategic conversation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>Strategic challenge identification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>Clear action plan discussion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>No pressure, no obligation</span>
                    </div>
                  </div>
                </Card>

                {/* Our Services */}
                <Card className="p-6 sm:p-8 bg-white border-slate-200">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-4 text-center">Engagement Focus</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Target className="w-8 h-8 text-brand-navy flex-shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm leading-snug font-medium text-brand-navy">Strategic Diagnosis</h4>
                        <p className="text-sm text-slate-600">Root constraint clarity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-brand-gold flex-shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm leading-snug font-medium text-brand-navy">Decision Framing</h4>
                        <p className="text-sm text-slate-600">Trade offs made explicit</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs sm:text-sm leading-snug font-medium text-brand-navy">Strategic Calibration</h4>
                        <p className="text-sm text-slate-600">Founder-priority alignment</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Response Time */}
                <Card className="p-6 sm:p-8 bg-brand-gold/5 border-brand-gold/10">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Response Time</h3>
                    <p className="text-sm text-slate-600">We will respond within 24 hours to continue the conversation.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Section>


      </PageTransition>
      <Footer />
    </div>
  );
}
