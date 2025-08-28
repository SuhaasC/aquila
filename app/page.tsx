"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Target, 
  Zap, 
  Shield, 
  Eye, 
  ArrowUpRight,
  Lightbulb,
  Clock
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageTransition>
        {/* HERO SECTION */}
        <Section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,32,96,0.03)_1px,transparent_0)] bg-[size:120px_120px]"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Subtle Accent Elements */}
          <div className="absolute top-20 sm:top-32 left-8 sm:left-20 w-1 h-1 bg-brand-gold/40 rounded-full"></div>
          <div className="absolute top-32 sm:top-48 right-8 sm:right-20 w-1 h-1 bg-brand-navy/40 rounded-full"></div>
          <div className="absolute bottom-32 sm:bottom-48 left-1/2 w-1 h-1 bg-brand-gold/30 rounded-full"></div>
          
          <div className="relative z-10 w-full text-center">
            {/* Hero Image - Enhanced */}
            <div className="relative mb-8 sm:mb-12">
              <div className="w-full max-w-5xl mx-auto">
                <figure className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/hero-bg.jpg" 
                    alt="Strategic business transformation and growth" 
                    width={2070}
                    height={1164}
                    className="w-full aspect-[16/9] object-cover"
                    priority
                  />
                  {/* Hero Pattern Overlay */}
                  <div className="absolute inset-0">
                    <Image 
                      src="/hero-pattern.png" 
                      alt="Strategic pattern overlay" 
                      fill
                      className="object-cover opacity-20"
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </figure>
              </div>
            </div>

            {/* Main Headline - Enhanced */}
            <div>
              <h1 className="mb-6 sm:mb-8 max-w-3xl mx-auto text-brand-navy">
                The Strategy
                <span className="block text-brand-gold mt-2 sm:mt-3 bg-gradient-to-r from-brand-gold to-brand-gold/80 bg-clip-text text-transparent">Partner</span>
              </h1>
            </div>
            
            {/* Sub-headline */}
            <div>
              <p className="mb-6 sm:mb-8 max-w-3xl mx-auto font-serif text-brand-ink">
                For decisions that define the next chapter.
              </p>
            </div>
            
            {/* Description */}
            <div>
              <p className="mb-12 sm:mb-16 max-w-2xl mx-auto text-brand-ink">
                Trusted by founders navigating complexity, scale, and pivotal choices.
              </p>
            </div>
            
            {/* Tagline - Enhanced */}
            <div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-16 sm:mb-20">
                <div className="flex items-center gap-3 text-brand-gold font-serif">
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                  <span>Quietly engaged</span>
                </div>
                <div className="flex items-center gap-3 text-brand-navy font-serif">
                  <div className="w-2 h-2 bg-brand-navy rounded-full animate-pulse"></div>
                  <span>Precisely effective</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button - Enhanced */}
            <div>
              <div className="relative">
                <Button 
                  className="inline-flex items-center rounded-xl border border-brand-gold bg-white px-6 py-3 text-brand-navy font-medium transition hover:bg-brand-navy hover:text-brand-gold focus:ring-2 focus:ring-brand-gold/40"
                  onClick={() => window.location.href = '/consulting-contact'}
                >
                  Request a Private Conversation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 sm:ml-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* PHILOSOPHY SECTION */}
        <Section className="bg-slate-900 text-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-2">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:80px_80px]"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 md:gap-32 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <FadeIn delay={0.05}>
                <h2 className="text-white leading-tight">
                  Clarity Is a
                  <span className="block text-brand-gold mt-2 sm:mt-3">Discipline</span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="space-y-4 sm:space-y-6 text-white/90">
                  <p className="max-w-2xl text-white">
                    In fast-moving companies, complexity builds quietly.
                  </p>
                  <p className="max-w-2xl text-white">
                    Noise increases. Signals blur. Execution slows.
                  </p>
                  <p className="text-brand-gold font-semibold max-w-2xl">
                    What&apos;s needed isn&apos;t more input, but sharper perspective.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80 max-w-2xl">
                      we work with a small number of founders and executives to isolate the problems that matter, and act on them with precision.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-medium text-xs sm:text-sm">Quietly</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-medium text-xs sm:text-sm">Quickly</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-medium text-xs sm:text-sm">Focused</p>
                  </div>
                </div>
              </FadeIn>
            </div> 
            
            {/* Right Image */}
            <FadeIn delay={0.1}>
              <div className="relative">
                <figure className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/clarity.jpg" 
                    alt="Clarity and strategic discipline in business" 
                    width={2070}
                    height={1553}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                </figure>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* SERVICES SECTION */}
        <Section className="bg-slate-50 relative overflow-hidden" id="services-section">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20 sm:mb-24">
              <h2 className="text-brand-navy mb-6 sm:mb-8 max-w-3xl mx-auto">
                Ways to Work Together
              </h2>
              <p className="max-w-3xl mx-auto text-brand-ink">
                Each engagement is shaped by the same principle: eliminate noise, focus on what matters, and create the conditions for clear decisions.
              </p>
            </div>
          </FadeIn>

          {/* Service Cards */}
          <div className="space-y-16 sm:space-y-20">
            {/* Strategic Diagnostic */}
            <FadeIn delay={0.05}>
              <Card className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-0.5">
                <div className="p-8 sm:p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                    <div>
                      <div className="mb-6 sm:mb-8">
                        <div className="text-xs tracking-wider text-slate-500 uppercase mb-3">90-minute diagnostic</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-2 sm:mb-3">
                          The Strategic Diagnostic
                        </h3>
                        <div className="w-8 h-0.5 sm:w-10 h-0.5 bg-brand-gold"></div>
                      </div>
                      
                      <p className="font-medium mb-6 sm:mb-8 max-w-2xl text-brand-ink">
                        A focused, confidential session to uncover what&apos;s really holding the business back.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4 leading-relaxed max-w-2xl text-brand-ink">
                        <p>
                          This engagement is designed for founders facing uncertainty when growth slows, complexity builds, or key decisions feel delayed.
                        </p>
                        <p>
                          In a single, sharply facilitated session, we isolate the most critical constraint within your growth model.
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-200/60">
                        <ul className="space-y-2 text-brand-ink">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Identify core growth constraints</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Surface 2-3 actionable shifts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Save weeks of second-guessing</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative">
                      <figure className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                          src="/diagnostic.jpg" 
                          alt="Strategic diagnostic and business assessment" 
                          width={2070}
                          height={1553}
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/10"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Growth Architecture Reset */}
            <FadeIn delay={0.1}>
              <Card className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-0.5">
                <div className="p-8 sm:p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="relative">
                        <figure className="rounded-2xl overflow-hidden shadow-2xl">
                          <Image 
                            src="/growth.jpg" 
                            alt="Business growth acceleration and scaling" 
                            width={2015}
                            height={1343}
                            className="w-full aspect-[4/3] object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-900/10"></div>
                        </figure>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="mb-6 sm:mb-8">
                        <div className="text-xs tracking-wider text-slate-500 uppercase mb-3">6-8 week intensive</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-2 sm:mb-3">
                          Growth Architecture Reset
                        </h3>
                        <div className="w-8 h-0.5 sm:w-10 h-0.5 bg-brand-gold"></div>
                      </div>
                      
                      <p className="font-medium mb-6 sm:mb-8 max-w-2xl text-brand-ink">
                        A short, intensive engagement to rebuild your revenue model from the inside out.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4 leading-relaxed max-w-2xl text-brand-ink">
                        <p>
                          This is for companies that aren&apos;t short on ambition - but are leaking momentum through unclear messaging, disjointed execution, or strategy that no longer fits the market.
                        </p>
                        <p>
                          Over 6–8 weeks, we work closely with your leadership team to reset the core architecture of growth.
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-200/60">
                        <ul className="space-y-2 text-brand-ink">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Clarify value proposition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Fix conversion breakdowns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Eliminate wasteful complexity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Strategic Partner Retainer */}
            <FadeIn delay={0.15}>
              <Card className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-0.5">
                <div className="p-8 sm:p-12 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                    <div>
                      <div className="mb-6 sm:mb-8">
                        <div className="text-xs tracking-wider text-slate-500 uppercase mb-3">Ongoing partnership</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-2 sm:mb-3">
                          Strategic Partner Retainer
                        </h3>
                        <div className="w-8 h-0.5 sm:w-10 h-0.5 bg-brand-gold"></div>
                      </div>
                      
                      <p className="font-medium mb-6 sm:mb-8 max-w-2xl text-brand-ink">
                        A discreet, ongoing partnership for founders who value quiet strategic edge.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4 leading-relaxed max-w-2xl text-brand-ink">
                        <p>
                          For leadership teams navigating change, risk, or sustained growth, this retainer provides ongoing access to high-trust counsel and intelligence.
                        </p>
                        <p>
                          We act as a quiet partner - available to think alongside you, challenge assumptions, and surface unseen opportunities or threats.
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-200/60">
                        <ul className="space-y-2 text-brand-ink">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Monthly strategic briefings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Signal filtering from noise</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <span>Direct input on key decisions</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative">
                      <figure className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                          src="/retainer.jpg" 
                          alt="Strategic partnership and ongoing collaboration" 
                          width={2070}
                          height={1553}
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/10"></div>
                      </figure>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Growth Acceleration Section */}
          <FadeIn delay={0.2}>
            <Card className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-0.5 mt-20">
              <div className="p-8 sm:p-12 md:p-16">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative">
                      <figure className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                          src="/growth.jpg" 
                          alt="Business growth acceleration and scaling strategies" 
                          width={2070}
                          height={1553}
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/10"></div>
                      </figure>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="mb-6 sm:mb-8">
                      <div className="text-xs tracking-wider text-slate-500 uppercase mb-3">Accelerated scaling</div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-2 sm:mb-3">
                        Growth Acceleration
                      </h3>
                      <div className="w-8 h-0.5 sm:w-10 h-0.5 bg-brand-gold"></div>
                    </div>
                    
                    <p className="font-medium mb-6 sm:mb-8 max-w-2xl text-brand-ink">
                      Transform your growth trajectory with strategic acceleration frameworks.
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4 leading-relaxed max-w-2xl text-brand-ink">
                      <p>
                        For companies ready to scale beyond current constraints, this engagement focuses on identifying and removing the bottlenecks that limit growth velocity.
                      </p>
                      <p>
                        We work with your team to implement proven acceleration strategies while maintaining the quality and culture that made you successful.
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200/60">
                      <ul className="space-y-2 text-brand-ink">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Identify growth bottlenecks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implement scaling frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Maintain quality during scale</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* When to Engage Section */}
          <div className="mt-24 sm:mt-28 bg-brand-navy/5 rounded-lg sm:rounded-xl p-10 sm:p-14 border border-brand-navy/10">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 sm:mb-6 max-w-3xl mx-auto">
                  When to Engage
                </h3>
                <p className="max-w-3xl mx-auto text-brand-ink">
                  This work is most valuable when something important is at stake - and clarity feels just out of reach.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.05}>
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
                {[
                                          "Growth has slowed, but the underlying cause isn&apos;t obvious.",
                  "Strategic decisions are piling up, with no clear way forward.",
                  "The team is executing, but direction feels scattered.",
                  "Complexity is building - and starting to cost time, focus, and opportunity.",
                                          "You&apos;ve outgrown past strategies, but haven&apos;t replaced them with better ones.",
                  "External pressures are mounting, requiring strategic clarity."
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn delay={0.1}>
              <div className="mt-16 sm:mt-20 text-center">
                <Link href="/contact">
                  <Button 
                    className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Request a Conversation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* PROCESS SECTION */}
        <Section className="bg-slate-900 text-white relative overflow-hidden" id="process-section">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-2">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:60px_60px]"></div>
          </div>
          
          <FadeIn>
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-white mb-6 sm:mb-8 max-w-3xl mx-auto">
                How We Work
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                The process is intentionally simple.
              </p>
              <p className="text-brand-gold font-semibold mt-3 sm:mt-4 max-w-3xl mx-auto">
                Not because strategy is easy - but because clarity demands focus.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.05}>
            <div className="relative mb-16 sm:mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/8 transform -translate-y-1/2 hidden lg:block"></div>
              <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 relative z-10">
                {[
                  {
                    icon: Target,
                    title: "Diagnose with precision",
                    description: "We begin by identifying the single constraint limiting progress. Not symptoms. The root."
                  },
                  {
                    icon: Lightbulb,
                    title: "Design for impact",
                    description: "Together, we define the few actions that will move the business forward. No bloat. No noise. Just what matters."
                  },
                  {
                    icon: Shield,
                    title: "Guide with discipline",
                    description: "We stay close enough to sharpen decisions, and light enough not to burden your team."
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center relative group">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white/8 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-6 sm:mb-8 border border-white/20 shadow-sm">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-4 sm:mb-6 group-hover:text-brand-gold transition-colors duration-300 max-w-3xl mx-auto">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="py-20">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <img src="/founder.png" alt="Suhaas, Founder of Aquilastrat" className="w-28 h-28 mx-auto rounded-full grayscale hover:grayscale-0 transition" />
                <blockquote className="text-2xl md:text-3xl font-serif text-slate-200">
                  &ldquo;Strategy isn&apos;t about adding more — it&apos;s about knowing exactly what to strip away until the right decision becomes unavoidable.&rdquo;
                </blockquote>
                                  <div className="space-y-2">
                    <p className="text-sm text-slate-400">Suhaas Chittapurath</p>
                    <p className="text-sm text-slate-400">Founder, Aquilastrat</p>
                  </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* INVITATION SECTION */}
        <Section className="bg-white text-brand-navy relative overflow-hidden border-t-2 border-b-2 border-brand-gold">
          <div className="relative z-10 text-center">
            <FadeIn>
              <h2 className="mb-6 sm:mb-8 max-w-3xl mx-auto text-brand-navy">
                An Invitation
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6 sm:mb-8"></div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 max-w-3xl mx-auto">
                <p className="text-brand-ink">
                  Most leaders don&apos;t need more advice. They need a space to think with someone who sees the signal through the noise.
                </p>
                <p className="text-brand-ink">
                  If that&apos;s what you&apos;re looking for, the door is open.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative">
                <Link href="/consulting-contact">
                  <Button 
                    className="inline-flex items-center rounded-xl border border-brand-gold bg-white px-6 py-3 text-brand-navy font-medium transition hover:bg-brand-navy hover:text-brand-gold focus:ring-2 focus:ring-brand-gold/40"
                  >
                    Request a Private Conversation
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 sm:ml-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Section>
      </PageTransition>
      <Footer />
    </div>
  );
}
