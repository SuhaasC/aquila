"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { 
  Mail, 
  Phone, 
  Send,
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Database,
  Zap,
  TrendingUp,
  ArrowRight,
  Target,
  Shield
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-brand-gold/60 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-brand-gold/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-brand-gold/30 rounded-full animate-pulse delay-2000"></div>
          
          <div className="relative z-10 w-full text-center max-w-6xl mx-auto px-4 sm:px-6">
            {/* Main Headline */}
            <FadeIn>
              <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
                <span className="text-white">Let's start a</span>
                <span className="block text-brand-gold">conversation.</span>
              </h1>
            </FadeIn>
            
            {/* Sub-headline */}
            <FadeIn delay={0.1}>
              <p className="mb-6 sm:mb-8 max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed px-4">
                Ready to transform your strategic thinking? We're here to help you navigate complexity and make better decisions.
              </p>
            </FadeIn>
            
            {/* Description */}
            <FadeIn delay={0.2}>
              <p className="mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-4">
                Whether it's data management challenges, strategic clarity, or scaling decisions — the first step is a structured conversation.
              </p>
            </FadeIn>
            
            {/* CTA Button */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <Button 
                  size="lg"
                  className="inline-flex items-center rounded-xl border border-brand-gold bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-brand-navy hover:bg-brand-gold hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-brand-gold/25"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Conversation
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Contact Form Section */}
        <Section className="bg-white relative overflow-hidden" id="contact-form">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,32,96,0.03)_1px,transparent_0)] bg-[size:60px_60px]"></div>
          
          <div className="relative z-10">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4 sm:mb-6 tracking-tight leading-tight">
                  Get in Touch
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Tell us about your strategic challenge. We'll respond within 24 hours with a structured approach.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start max-w-7xl mx-auto">
              {/* Contact Form */}
              <FadeIn delay={0.1}>
                <Card className="p-8 sm:p-12 bg-white border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border-slate-300 focus:border-brand-navy focus:ring-brand-navy/20"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border-slate-300 focus:border-brand-navy focus:ring-brand-navy/20"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-3">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full border-slate-300 focus:border-brand-navy focus:ring-brand-navy/20"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-3">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-slate-300 focus:border-brand-navy focus:ring-brand-navy/20"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border-slate-300 focus:border-brand-navy focus:ring-brand-navy/20 resize-none"
                        placeholder="Tell us about your strategic challenge, what you'd like to discuss, or how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </FadeIn>

              {/* Contact Information */}
              <div className="space-y-8">
                <FadeIn delay={0.15}>
                  <div className="bg-gradient-to-br from-brand-navy/5 to-slate-50 p-8 rounded-3xl border border-brand-navy/10">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-6">
                      Contact Details
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-brand-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-navy mb-1">Email</h4>
                          <p className="text-slate-700">suhaas@aquilastrat.com</p>
                          <p className="text-sm text-slate-500 mt-1">We typically respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-brand-gold" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-navy mb-1">Phone</h4>
                          <p className="text-slate-700">+1 (555) 123-4567</p>
                          <p className="text-sm text-slate-500 mt-1">Available during business hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-brand-navy" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-brand-navy mb-1">Location</h4>
                          <p className="text-slate-700">Remote-first, globally accessible</p>
                          <p className="text-sm text-slate-500 mt-1">Virtual consultations available worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-gradient-to-br from-brand-gold/5 to-amber-50 p-8 rounded-3xl border border-brand-gold/10">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-6">
                      What to Expect
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Calendar, text: "Initial consultation within 48 hours", color: "text-brand-gold" },
                        { icon: CheckCircle, text: "Tailored strategic approach discussion", color: "text-green-600" },
                        { icon: CheckCircle, text: "Clear next steps and timeline", color: "text-green-600" },
                        { icon: CheckCircle, text: "No pressure, no obligation", color: "text-green-600" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                            <item.icon className={`w-4 h-4 ${item.color}`} />
                          </div>
                          <span className="text-slate-700 font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-6">
                      Response Time
                    </h3>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-slate-700 font-semibold">Within 24 hours</p>
                        <p className="text-sm text-slate-500">For urgent matters, please call directly</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Section>

        {/* Strategic Consulting Section */}
        <Section className="bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4 sm:mb-6 tracking-tight leading-tight">
                  Strategic Consulting?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  For strategic clarity, growth acceleration, or ongoing partnership, we have a dedicated consultation process.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Strategic Diagnostic</h4>
                      <p className="text-slate-700">90-minute focused session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Growth Architecture</h4>
                      <p className="text-slate-700">6-8 week intensive</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Strategic Partner</h4>
                      <p className="text-slate-700">Ongoing partnership</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Card className="p-8 bg-brand-navy/5 border-brand-navy/10">
                    <h3 className="text-xl font-semibold text-brand-navy mb-4">Strategic Consultation</h3>
                    <p className="text-slate-600 mb-6">
                      Get a focused consultation on your strategic challenges with our specialized team.
                    </p>
                    <Button 
                      className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white"
                      onClick={() => window.location.href = '/consulting-contact'}
                    >
                      Schedule Strategic Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Data Management Section */}
        <Section className="bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4 sm:mb-6 tracking-tight leading-tight">
                  Data Management Challenges?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  For regulatory compliance, market data integration, or claims process optimization, we have a dedicated consultation process.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-navy/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Regulatory Data</h4>
                      <p className="text-slate-700">Solvency II, IFRS 17, MiFID II compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Market & Risk Data</h4>
                      <p className="text-slate-700">Integration, feeds, and automation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Claims Process</h4>
                      <p className="text-slate-700">Workflow optimization and automation</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Card className="p-8 bg-brand-navy/5 border-brand-navy/10">
                    <h3 className="text-xl font-semibold text-brand-navy mb-4">Data-Specific Consultation</h3>
                    <p className="text-slate-600 mb-6">
                      Get a focused consultation on your data challenges with our specialized team.
                    </p>
                    <Button 
                      className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white"
                      onClick={() => window.location.href = '/data-contact'}
                    >
                      Schedule Data Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>



      </PageTransition>
      <Footer />
    </div>
  );
}

