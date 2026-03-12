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
        <Section className="relative flex items-center justify-center bg-white overflow-hidden">
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
            <FadeIn variant="slide-up" delay={0.2}>
              <div className="relative mb-8 sm:mb-12">
                <div className="w-full max-w-5xl mx-auto">
                  <figure className="rounded-2xl overflow-hidden shadow-2xl relative transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl">
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
            </FadeIn>

            {/* Main Headline - Enhanced */}
            <FadeIn variant="scale" delay={0.4}>
              <div>
                <h1 className="mb-8 sm:mb-10 max-w-5xl mx-auto text-brand-navy text-4xl sm:text-5xl md:text-[3.2rem] leading-[1.24]">
                  <span className="block md:whitespace-nowrap">Strategic Clarity for Founders</span>
                  <span className="block md:whitespace-nowrap pb-2 sm:pb-3 text-brand-gold mt-2 sm:mt-3 bg-gradient-to-r from-brand-gold to-brand-gold/80 bg-clip-text text-transparent">
                    Navigating Complex Decisions
                  </span>
                </h1>
              </div>
            </FadeIn>
            
            {/* Sub-headline */}
            <FadeIn variant="slide" delay={0.6}>
              <div>
                <p className="mb-4 sm:mb-6 max-w-3xl mx-auto font-serif text-brand-ink">
                  When companies grow, complexity grows with them.
                </p>
              </div>
            </FadeIn>
            
            {/* Description */}
            <FadeIn variant="fade" delay={0.8}>
              <div>
                <div className="mb-6 sm:mb-7 max-w-2xl mx-auto space-y-3 text-brand-ink">
                  <p>Inputs multiply. Priorities compete. Decisions slow.</p>
                  <p>
                    Aquilastrat provides founders with an external intelligence and clarity layer for the decisions
                    that shape the next stage of the business.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* CTA Button - Enhanced */}
            <FadeIn variant="slide-up" delay={1.0}>
              <div>
                <div className="relative">
                  <Button 
                    className="inline-flex text-sm sm:text-base items-center rounded-xl border border-brand-gold bg-white px-8 py-4 text-brand-navy font-medium transition-all duration-300 hover:bg-brand-navy hover:text-brand-gold hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-brand-gold/40 transform"
                    onClick={() => window.location.href = '/consulting-contact'}
                  >
                    Request a Strategic Conversation
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </FadeIn>
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
                    What's needed isn't more input, but sharper perspective.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80 max-w-2xl">
                      We work with a small number of founders to isolate the constraints that actually determine
                      progress and frame the decisions that matter most.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8">
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-300 hover:scale-110">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-medium text-xs sm:text-sm">Quietly</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-300 hover:scale-110">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-medium text-xs sm:text-sm">Quickly</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg transform">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-300 hover:scale-110">
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
                <figure className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl transform">
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
          <FadeIn variant="scale">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-brand-navy mb-4 sm:mb-6 max-w-3xl mx-auto">
                Executive Decision Retainer
              </h2>
            </div>
          </FadeIn>

          <FadeIn variant="slide-up" delay={0.05}>
            <Card className="bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:-translate-y-2 transform group">
              <div className="p-8 sm:p-12 md:p-16">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-start">
                  <div>
                    <div className="mb-6 sm:mb-8">
                      <div className="text-xs tracking-wider text-slate-500 uppercase mb-3 transition-all duration-300 group-hover:text-brand-gold">
                        Ongoing strategic partnership
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-navy mb-2 sm:mb-3 transition-all duration-300 group-hover:text-brand-navy/90">
                        Executive Decision Retainer
                      </h3>
                      <div className="w-8 h-0.5 sm:w-10 h-0.5 bg-brand-gold transition-all duration-500 group-hover:w-16 group-hover:bg-brand-gold/80"></div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 leading-relaxed max-w-2xl text-brand-ink">
                      <p className="transition-all duration-300 group-hover:text-brand-ink/90">
                        Aquilastrat operates as an external decision intelligence layer for the founder.
                      </p>
                      <p className="transition-all duration-300 group-hover:text-brand-ink/90">
                        This is not consulting, execution, or advisory projects.
                      </p>
                      <p className="transition-all duration-300 group-hover:text-brand-ink/90">
                        It is an ongoing strategic partnership focused on improving the quality and clarity of
                        important decisions.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/60 transition-all duration-300 group-hover:border-brand-gold/30">
                      <h4 className="text-lg font-serif font-semibold text-brand-navy mb-4">
                        What this engagement focuses on
                      </h4>
                      <div className="space-y-4 text-brand-ink">
                        {[
                          {
                            title: "Strategic Diagnosis",
                            description:
                              "Identify the underlying constraint behind growth stalls, operational friction, or conflicting initiatives."
                          },
                          {
                            title: "Decision Framing",
                            description:
                              "Structure complex decisions so trade offs and second order effects become visible."
                          },
                          {
                            title: "Strategic Calibration",
                            description:
                              "Ensure teams, agencies, and initiatives remain aligned with the founder's actual priorities."
                          },
                          {
                            title: "Founder Decision Support",
                            description: "Direct access when significant decisions arise."
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2 transform">
                            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150"></div>
                            <div>
                              <p className="font-medium text-brand-navy">{item.title}</p>
                              <p className="text-brand-ink/90">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <figure className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl transform group-hover:shadow-brand-gold/20">
                      <Image
                        src="/retainer.jpg"
                        alt="Executive decision retainer and ongoing founder partnership"
                        width={2070}
                        height={1553}
                        className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 transition-all duration-300 group-hover:bg-slate-900/5"></div>
                    </figure>

                    <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-6 sm:p-8">
                      <h4 className="text-lg font-serif font-semibold text-brand-navy mb-4">
                        Typical engagement rhythm
                      </h4>
                      <ul className="space-y-2 text-brand-ink">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Weekly or biweekly strategic calls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Asynchronous decision discussions when needed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span>Concise written synthesis when clarity benefits</span>
                        </li>
                      </ul>

                      <div className="mt-6 pt-6 border-t border-slate-200/80">
                        <h4 className="text-lg font-serif font-semibold text-brand-navy mb-2">
                          Investment
                        </h4>
                        <p className="text-brand-ink">
                          Typical engagements range between £3,000 and £5,000 per month, depending on decision
                          complexity and level of involvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* When to Engage Section */}
          <div className="mt-16 sm:mt-20 bg-brand-navy/5 rounded-lg sm:rounded-xl p-10 sm:p-14 border border-brand-navy/10">
            <FadeIn variant="scale">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 sm:mb-6 max-w-3xl mx-auto">
                  When to Engage
                </h3>
                <p className="max-w-3xl mx-auto text-brand-ink">
                  This engagement becomes valuable when the business is moving quickly but strategic clarity is becoming harder to maintain.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn variant="slide-up" delay={0.05}>
              <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
                {[
                  "Growth has slowed, but the underlying cause isn't obvious.",
                  "Strategic decisions are piling up, with no clear way forward.",
                  "The team is executing, but direction feels scattered.",
                  "Complexity is building - and starting to cost time, focus, and opportunity.",
                  "You've outgrown past strategies, but haven't replaced them with better ones.",
                  "External pressures are mounting, requiring strategic clarity."
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start transition-all duration-300 hover:translate-x-2 hover:bg-white/50 p-2 rounded-lg transform">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150"></div>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA Button */}
            <FadeIn variant="slide-up" delay={0.1}>
              <div className="mt-16 sm:mt-20 text-center">
                <Link href="/consulting-contact">
                  <Button 
                    className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                  >
                    Request a Strategic Conversation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
          
          <FadeIn variant="slide-up">
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
          
          <FadeIn variant="slide-up" delay={0.05}>
            <div className="relative mb-16 sm:mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/8 transform -translate-y-1/2 hidden lg:block"></div>
              <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 relative z-10">
                {[
                  {
                    icon: Target,
                    title: "Diagnose with Precision",
                    description: "We begin by identifying the single constraint limiting progress. Not symptoms. The underlying cause."
                  },
                  {
                    icon: Lightbulb,
                    title: "Design for Impact",
                    description: "Together we frame the few decisions that will move the business forward and eliminate unnecessary initiatives."
                  },
                  {
                    icon: Shield,
                    title: "Guide with Discipline",
                    description: "We remain close enough to sharpen thinking and surface trade offs without adding operational complexity to your team."
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center relative group transition-all duration-500 hover:-translate-y-2 transform">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-white/8 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-6 sm:mb-8 border border-white/20 shadow-sm transition-all duration-300 hover:bg-white/12 hover:scale-110 hover:shadow-lg">
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-4 sm:mb-6 group-hover:text-brand-gold transition-colors duration-300 max-w-3xl mx-auto">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-tight max-w-2xl mx-auto">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn variant="scale" delay={0.1}>
            <div className="py-20">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <img src="/founder.png" alt="Suhaas, Founder of Aquilastrat" className="w-40 h-40 mx-auto rounded-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 transform shadow-lg hover:shadow-xl" />
                <blockquote className="text-2xl md:text-3xl font-serif text-slate-200">
                  &ldquo;Progress rarely comes from adding more. It comes from removing noise until the right decision becomes obvious.&rdquo;
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
            <FadeIn variant="slide-up">
              <h2 className="mb-6 sm:mb-8 max-w-3xl mx-auto text-brand-navy leading-tight">
                An Invitation
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6 sm:mb-8 transition-all duration-300 hover:w-20"></div>
            </FadeIn>
            <FadeIn variant="slide" delay={0.05}>
              <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 max-w-3xl mx-auto">
                <p className="text-brand-ink">
                  Most founders do not lack advice.
                </p>
                <p className="text-brand-ink">
                  They lack a space to think clearly about the decisions that matter most.
                </p>
                <p className="text-brand-ink">
                  If you are navigating complex choices and want sharper perspective before committing resources, we
                  can start with a strategic conversation.
                </p>
              </div>
            </FadeIn>
            <FadeIn variant="scale" delay={0.1}>
              <div className="relative">
                <Link href="/consulting-contact">
                  <Button 
                    className="inline-flex items-center rounded-xl border border-brand-gold bg-white px-6 py-3 text-brand-navy font-medium transition-all duration-300 hover:bg-brand-navy hover:text-brand-gold hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-brand-gold/40 transform"
                  >
                    Request a Strategic Conversation
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 sm:ml-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
