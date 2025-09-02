"use client";

import { PageTransition } from "@/components/ui/page-transition";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Calendar, CheckCircle, Shield, Zap, TrendingUp, BarChart3, Database, Clock, AlertTriangle, Target } from "lucide-react";
import Image from "next/image";

export default function DataManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      <PageTransition>
        
        {/* Hero Section - Full Screen Impact */}
        <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy/95 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)]"></div>
            {/* Data Pattern Overlay */}
            <div className="absolute inset-0 opacity-15">
              <Image 
                src="/data-pattern.png" 
                alt="Data pattern overlay" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Floating Data Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-gold/60 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-brand-gold/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-brand-gold/30 rounded-full animate-pulse delay-2000"></div>
          
          <div className="relative z-10 w-full text-center max-w-6xl mx-auto px-4 sm:px-6">
            {/* Main Headline */}
            <FadeIn variant="scale">
              <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight">
                <div className="mb-2">
                  <span className="text-white">Your data. </span>
                  <span className="text-brand-gold">Structured.</span>
                </div>
                <div>
                  <span className="text-white">Validated. </span>
                  <span className="text-brand-gold">Compliant.</span>
                </div>
              </h1>
            </FadeIn>
            
            {/* Sub-headline */}
            <FadeIn variant="slide" delay={0.1}>
              <p className="mb-6 sm:mb-8 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed px-4">
                From broker files to market feeds, we transform fragmented inputs into trusted outputs that meet Solvency II, IFRS 17, MiFID II, Basel III, and other global standards.
              </p>
            </FadeIn>
            
            {/* Description */}
            <FadeIn variant="fade" delay={0.2}>
              <p className="mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-4">
                Insurance and capital markets firms must meet enterprise-grade reporting and compliance standards. We deliver data pipelines that reduce errors, accelerate reporting cycles, and provide the audit-ready confidence regulators demand.
              </p>
            </FadeIn>
            
            {/* CTA Buttons */}
            <FadeIn variant="slide-up" delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center px-4">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-brand-gold/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 transform"
                  onClick={() => window.location.href = '/data-contact'}
                >
                  Schedule a Private Consultation
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-300 group-hover:scale-110" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 transform"
                >
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </FadeIn>
            
            {/* Hero Stat */}
            <FadeIn variant="slide-up" delay={0.4}>
              <div className="mt-12 sm:mt-16 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 max-w-sm mx-auto transition-all duration-300 hover:bg-white/15 hover:scale-105 transform">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
                <span className="text-white font-medium text-sm sm:text-base">80% reduction in manual errors achieved through automation</span>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* The Data Challenge - Visual Impact */}
        <Section className="bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,32,96,0.03)_1px,transparent_0)] bg-[size:60px_60px]"></div>
          
          <div className="relative z-10">
            <FadeIn variant="slide-up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4 sm:mb-6 tracking-tight leading-tight">
                  The Data Challenge
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
                  Insurance and capital markets firms face the same complex frameworks as global institutions: Solvency II, IFRS 17, MiFID II, Basel III. Data arrives from multiple partners, brokers, and vendors in inconsistent formats such as EDI and CSV.
                </p>
              </div>
            </FadeIn>

            {/* Challenge Cards */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Side - Problem */}
              <FadeIn variant="slide-up" delay={0.1}>
                <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 relative overflow-hidden h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-2 transform">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/30 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                  <div className="relative z-10 h-full flex flex-col justify-start">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-slate-200 hover:scale-105">
                        <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 transition-all duration-300 hover:rotate-12" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">The Problem</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                      Without structured processes, teams spend weeks reconciling spreadsheets, checking discrepancies, and piecing together audit trails. The consequence is not just inefficiency.
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Delayed reporting cycles",
                        "Higher error rates",
                        "Increased regulatory exposure",
                        "Limited executive visibility"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-slate-700 text-sm sm:text-base transition-all duration-300 hover:translate-x-1 transform">
                          <div className="w-2 h-2 bg-brand-gold rounded-full transition-all duration-300 hover:scale-150"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </FadeIn>

              {/* Right Side - Impact */}
              <FadeIn variant="slide-up" delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-brand-navy to-slate-800 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-brand-gold/30 hover:scale-105">
                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold transition-all duration-300 hover:rotate-12" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold">The Impact</h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 mb-4 sm:mb-6">
                      40-60% of reporting effort is spent on manual reconciliation, leaving executives with limited visibility and little room for confidence.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl transition-all duration-300 hover:bg-white/15 hover:scale-105 transform">
                        <div className="text-2xl sm:text-3xl font-bold text-brand-gold">40-60%</div>
                        <div className="text-xs sm:text-sm text-slate-300">More staff hours</div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl transition-all duration-300 hover:bg-white/15 hover:scale-105 transform">
                        <div className="text-2xl sm:text-3xl font-bold text-brand-gold">Higher</div>
                        <div className="text-xs sm:text-sm text-slate-300">Error rates</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 transition-all duration-300 hover:rotate-12" />
                      <span className="text-sm sm:text-base font-semibold text-slate-800">Time to Resolution</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-slate-600">Manual Process</span>
                        <span className="text-xs sm:text-sm font-semibold text-red-600">2-3 weeks</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-slate-600">Automated Process</span>
                        <span className="text-xs sm:text-sm font-semibold text-green-600">2-3 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>

        {/* Our Solutions - Streamlined Layout */}
        <Section className="bg-gradient-to-br from-slate-50 to-white">
                    <FadeIn variant="scale">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                Three comprehensive solutions designed to transform your data operations from chaos to clarity
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20">
            {/* Regulatory Data Command Centre */}
            <FadeIn variant="slide-up" delay={0.1}>
              <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-brand-navy/10 rounded-full mb-6 sm:mb-8 transition-all duration-300 hover:bg-brand-navy/15 hover:scale-105 transform group-hover:bg-brand-navy/20">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy transition-all duration-300 group-hover:scale-110" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-navy uppercase transition-all duration-300 group-hover:text-brand-navy/90">Regulatory Excellence</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6 sm:mb-8 tracking-tight leading-relaxed lg:leading-tight transition-all duration-300 group-hover:text-brand-navy/90">
                      Regulatory Data Command Centre
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10 transition-all duration-300 group-hover:text-slate-600/90">
                      From first-mile chaos to audit-ready clarity. We automate regulatory reporting pipelines, transforming inconsistent partner and broker files into validated, auditable submissions.
                    </p>
                    <div className="space-y-4 sm:space-y-5">
                      {[
                        "Ingest any file, any format (EDI, CSV)",
                        "Automated cleansing, validation, and standardisation",
                        "Field-level lineage and compliance dashboards"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:translate-x-2 hover:text-brand-navy transform group-hover:translate-x-1">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-gold rounded-full transition-all duration-300 hover:scale-150 group-hover:scale-125 hover:bg-brand-gold/80"></div>
                          <span className="text-sm sm:text-base md:text-lg text-slate-700 transition-all duration-300 group-hover:text-slate-700/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden mb-6 sm:mb-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl transform group-hover:shadow-brand-navy/20">
                      <Image 
                        src="/regulatory.jpg" 
                        alt="Regulatory data command centre and compliance systems" 
                        width={800}
                        height={400}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8 bg-brand-navy/5 rounded-3xl border border-brand-navy/10 transition-all duration-300 hover:bg-brand-navy/10 hover:scale-105 transform group-hover:bg-brand-navy/15 group-hover:border-brand-navy/20">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2 sm:mb-3 transition-all duration-300 group-hover:text-brand-navy/90">Impact</div>
                        <div className="text-sm sm:text-base md:text-lg text-slate-600 transition-all duration-300 group-hover:text-slate-600/90">Faster reporting cycles, fewer errors, penalties avoided</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Market & Risk Data Integration */}
            <FadeIn variant="slide-up" delay={0.2}>
              <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
                  <div className="lg:order-2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-brand-gold/10 rounded-full mb-6 sm:mb-8 transition-all duration-300 hover:bg-brand-gold/15 hover:scale-105 transform group-hover:bg-brand-gold/20">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold transition-all duration-300 group-hover:scale-110" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-gold uppercase transition-all duration-300 group-hover:text-brand-gold/90">Speed & Efficiency</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6 sm:mb-8 tracking-tight leading-tight transition-all duration-300 group-hover:text-brand-navy/90">
                      Market & Risk Data Integration Layer
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10 transition-all duration-300 group-hover:text-slate-600/90">
                      Milliseconds matter. Fragmentation is costing more than you think. We unify market data feeds into a central, low-latency integration layer.
                    </p>
                    <div className="space-y-4 sm:space-y-5">
                      {[
                        "Single integration point across asset classes and vendors",
                        "Automated reconciliation and exception handling",
                        "Real-time P&L and exposure dashboards"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:translate-x-2 hover:text-brand-navy transform group-hover:translate-x-1">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-gold rounded-full transition-all duration-300 hover:scale-150 group-hover:scale-125 hover:bg-brand-gold/80"></div>
                          <span className="text-sm sm:text-base md:text-lg text-slate-700 transition-all duration-300 group-hover:text-slate-700/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:order-1 relative">
                    <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden mb-6 sm:mb-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl transform group-hover:shadow-brand-gold/20">
                      <Image 
                        src="/data-int.jpg" 
                        alt="Market and risk data integration layer" 
                        width={800}
                        height={400}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/10 transition-all duration-300 hover:bg-brand-gold/10 hover:scale-105 transform group-hover:bg-brand-gold/15 group-hover:border-brand-gold/20">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-brand-gold mb-2 sm:mb-3 transition-all duration-300 group-hover:text-brand-gold/90">Impact</div>
                        <div className="text-sm sm:text-base md:text-lg text-slate-600 transition-all duration-300 group-hover:text-slate-600/90">Reduced trade breaks, improved execution speed, significant operational savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Claims Process Optimisation */}
            <FadeIn variant="slide-up" delay={0.3}>
              <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-stretch">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 rounded-full mb-6 sm:mb-8 transition-all duration-300 hover:bg-green-500/15 hover:scale-105 transform group-hover:bg-green-500/20">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 transition-all duration-300 group-hover:scale-110" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wider text-green-600 uppercase transition-all duration-300 group-hover:text-green-600/90">Process Optimization</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6 sm:mb-8 tracking-tight leading-tight transition-all duration-300 group-hover:text-brand-navy/90">
                      Claims Process Optimisation
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-10 transition-all duration-300 group-hover:text-slate-600/90">
                      Faster claims, happier customers, lower costs. We streamline claims intake, routing, and triage while integrating seamlessly with existing core claims platforms.
                    </p>
                    <div className="space-y-4 sm:space-y-5">
                      {[
                        "Multi-channel automated intake",
                        "Rules-based triage and prioritisation",
                        "Real-time status tracking for customers, adjusters, and partners"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:translate-x-2 hover:text-brand-navy transform group-hover:translate-x-1">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-gold rounded-full transition-all duration-300 hover:scale-150 group-hover:scale-125 hover:bg-brand-gold/80"></div>
                          <span className="text-sm sm:text-base md:text-lg text-slate-700 transition-all duration-300 group-hover:text-slate-700/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full h-96 sm:h-[28rem] rounded-3xl overflow-hidden mb-6 sm:mb-8 transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl transform group-hover:shadow-green-500/20">
                      <Image 
                        src="/claims.jpg" 
                        alt="Claims process optimisation and workflow automation" 
                        width={800}
                        height={400}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 sm:p-8 bg-green-500/5 rounded-3xl border border-green-500/10 transition-all duration-300 hover:bg-green-500/10 hover:scale-105 transform group-hover:bg-green-500/15 group-hover:border-green-500/20">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-green-600/90">Impact</div>
                        <div className="text-sm sm:text-base md:text-lg text-slate-600 transition-all duration-300 group-hover:text-slate-600/90">Shorter claims cycles, higher customer satisfaction, reduced fraud leakage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Section>

        {/* Proof & Results - Impact Story */}
        <Section className="bg-brand-navy relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10">
            <FadeIn variant="slide-up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                  Proof & Results
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed px-4">
                  Experience that delivers clarity. Our approach is designed to deliver measurable clarity quickly, reducing errors, reconciling fragmented feeds, and strengthening compliance confidence.
                </p>
              </div>
            </FadeIn>

            {/* Impact Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Side - Story */}
              <FadeIn variant="slide-up" delay={0.1}>
                <div className="flex flex-col h-full space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 flex-1 transition-all duration-500 hover:bg-white/15 hover:-translate-y-1 transform">
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-brand-gold/30 hover:scale-110">
                        <Target className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold transition-all duration-300 hover:rotate-12" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">The Challenge</h3>
                        <p className="text-sm sm:text-base text-slate-300">Global asset manager with fragmented market data</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      Our team uncovered over $125M in valuation discrepancies hidden in fragmented market data and manual entry processes. These errors were invisible to existing controls.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 flex-1 transition-all duration-500 hover:bg-white/15 hover:-translate-y-1 transform">
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-500/30 hover:scale-110">
                        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 transition-all duration-300 hover:rotate-12" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">The Solution</h3>
                        <p className="text-sm sm:text-base text-slate-300">Automated reconciliation and validation controls</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      By implementing reconciliation and validation controls, the issues were exposed and corrected before filings, reducing trade breaks and avoiding significant regulatory exposure.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Right Side - Results */}
              <FadeIn variant="slide-up" delay={0.2}>
                <div className="space-y-6">
                  {/* Headline Stat */}
                  <div className="bg-gradient-to-br from-brand-gold to-amber-500 rounded-3xl p-6 sm:p-8 text-center text-brand-navy transition-all duration-500 hover:scale-105 hover:shadow-2xl transform">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">$125M</div>
                    <div className="text-lg sm:text-xl font-semibold">Discrepancy Uncovered</div>
                    <div className="text-xs sm:text-sm opacity-80 mt-2">Hidden errors revealed through automation</div>
                  </div>
                  
                  {/* Before/After Flow */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 transform">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 items-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-300 hover:bg-red-500/30 hover:scale-110">
                          <Database className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 transition-all duration-300 hover:rotate-12" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 leading-tight">Before</h4>
                        <p className="text-xs text-slate-300">Fragmented feeds & manual entry</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-red-400 via-brand-gold to-green-400 transition-all duration-300 hover:scale-110 transform"></div>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-300 hover:bg-green-500/30 hover:scale-110">
                          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 transition-all duration-300 hover:rotate-12" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 leading-tight">After</h4>
                        <p className="text-xs text-slate-300">Automated reconciliation & trusted clarity</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Outcomes */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {[
                      { icon: CheckCircle, text: "Errors exposed", color: "text-green-400" },
                      { icon: CheckCircle, text: "Risks corrected", color: "text-green-400" },
                      { icon: CheckCircle, text: "Regulatory confidence achieved", color: "text-green-400" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 transform">
                        <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color} flex-shrink-0 transition-all duration-300 hover:scale-110`} />
                        <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Closing Line */}
            <FadeIn variant="scale" delay={0.3}>
              <div className="text-center mt-12 sm:mt-16">
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-white max-w-3xl mx-auto leading-relaxed px-4">
                  The outcome: fewer blind spots, fewer errors, and complete confidence in your data.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Final CTA - Clean & Bold */}
        <Section className="bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 text-center">
            <FadeIn variant="slide-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6 tracking-tight leading-tight px-4">
                Move from fragmented data to trusted clarity
              </h2>
            </FadeIn>
            
            <FadeIn variant="slide" delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                Whether it's regulatory reporting, market data integration, or claims optimisation, the first step is a structured conversation. We'll cut through the complexity and define a clear path forward.
              </p>
            </FadeIn>
            
            <FadeIn variant="scale" delay={0.2}>
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-brand-gold/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 transform"
                onClick={() => window.location.href = '/data-contact'}
              >
                Schedule a Private Consultation
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-2 sm:ml-3 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </FadeIn>
          </div>
        </Section>

      </PageTransition>
      <Footer />
    </div>
  );
}
