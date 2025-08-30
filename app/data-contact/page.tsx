"use client";

import { PageTransition } from "@/components/ui/page-transition";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Calendar, CheckCircle, Shield, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DataContact() {
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
            {/* Data Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="/data-pattern.png" 
                alt="Data pattern overlay" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="relative z-10 w-full text-center max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-white">
                Let's Discuss Your
                <span className="block text-brand-gold mt-2 sm:mt-3">Data Challenges</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed px-4">
                Ready to transform your data operations? Share your requirements and we'll schedule a focused consultation.
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
                  Data Management Consultation
                </h2>
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Tell us about your data needs and we'll arrange a private conversation to explore solutions.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Left Side - Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-lg">
                  <form className="space-y-6 sm:space-y-8">
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

                    {/* Data Management Specific Fields */}
                    <div>
                      <label htmlFor="dataType" className="block text-sm font-medium text-slate-700 mb-2">
                        Primary Data Challenge *
                      </label>
                      <select
                        id="dataType"
                        name="dataType"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select your primary challenge</option>
                        <option value="regulatory">Regulatory Reporting & Compliance</option>
                        <option value="market-data">Market & Risk Data Integration</option>
                        <option value="claims">Claims Process Optimization</option>
                        <option value="data-quality">Data Quality & Validation</option>
                        <option value="system-integration">System Integration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentSystem" className="block text-sm font-medium text-slate-700 mb-2">
                        Current Data Systems
                      </label>
                      <input
                        type="text"
                        id="currentSystem"
                        name="currentSystem"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                        placeholder="e.g., Excel, SQL Server, Bloomberg, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="dataVolume" className="block text-sm font-medium text-slate-700 mb-2">
                        Data Volume (Approximate)
                      </label>
                      <select
                        id="dataVolume"
                        name="dataVolume"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select approximate volume</option>
                        <option value="small">Small (&lt; 1M records)</option>
                        <option value="medium">Medium (1M - 10M records)</option>
                        <option value="large">Large (10M - 100M records)</option>
                        <option value="enterprise">Enterprise (&gt; 100M records)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                        Implementation Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="12plus">12+ months</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors resize-none"
                        placeholder="Tell us more about your specific data challenges, requirements, or questions..."
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit"
                        className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        Schedule Data Consultation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
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
                      <span>90-minute focused consultation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>Technical requirements review</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>Solution architecture discussion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span>Implementation roadmap</span>
                    </div>
                  </div>
                </Card>

                {/* Our Solutions */}
                <Card className="p-6 sm:p-8 bg-white border-slate-200">
                  <h3 className="text-lg font-semibold text-brand-navy mb-4 text-center">Our Solutions</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Shield className="w-8 h-8 text-brand-navy flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-brand-navy">Regulatory Data</h4>
                        <p className="text-sm text-slate-600">Compliance & reporting</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Zap className="w-8 h-8 text-brand-gold flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-brand-navy">Market Data</h4>
                        <p className="text-sm text-slate-600">Integration & feeds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-brand-navy">Claims Process</h4>
                        <p className="text-sm text-slate-600">Workflow optimization</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Response Time */}
                <Card className="p-6 sm:p-8 bg-brand-gold/5 border-brand-gold/10">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Response Time</h3>
                    <p className="text-sm text-slate-600">We'll respond within 24 hours to schedule your consultation.</p>
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
