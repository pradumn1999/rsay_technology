import { motion } from "motion/react";
import React, { useState } from "react";
import { toast } from "sonner";
import { 
  ArrowRight, 
  ChevronRight, 
  BrainCircuit, 
  Cloud, 
  Database, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Users,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <EnquiryStrip />
      <ServicesSection />
      <WhyChooseUs />
      <WorkflowSection />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 bg-white">
      {/* Dynamic background element for premium red branding */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/35 rounded-full blur-[120px] -z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> 
              HIGH INTEGRITY TECHNOLOGY PARTNER
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] letter-spacing-[-0.03em]">
              Building Smart <span className="text-red-600">Digital Solutions</span> for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              From custom AI pipelines to scalable cloud infrastructure, we deliver production-ready software that drives growth and operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold text-base hover:bg-red-700 transition-all shadow-sm flex items-center space-x-2 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="bg-transparent text-slate-900 border border-slate-300 px-8 py-3 rounded-md font-semibold text-base hover:border-slate-800 transition-all flex items-center space-x-2 active:scale-95"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </motion.div>
          <div className="relative group">
            <div className="absolute inset-0 bg-red-100/50 rounded-2xl blur-[40px] -z-10 group-hover:bg-red-100/50 transition-colors" />
            <div className="w-full aspect-[4/3] bg-white rounded-2xl border border-slate-200 shadow-md flex items-center justify-center p-2 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                alt="Enterprise software development workspace" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnquiryStrip() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Enquiry sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send enquiry.");
      }
    } catch (err) {
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-red-50 pb-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="bg-white border border-red-200 p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-sm shadow-red-200/40">
          <div className="flex-shrink-0 w-32 border-r border-red-200 pr-4 hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-700 leading-tight">
              Quick<br />Enquiry
            </h4>
          </div>
          <form onSubmit={handleSubmit} className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            <input
              required
              type="text"
              placeholder="Name"
              className="bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-500 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              required
              type="text"
              placeholder="Project Detail"
              className="bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-500 transition-all"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              disabled={isSubmitting}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-md transition-all active:scale-[0.98] disabled:opacity-50 text-sm whitespace-nowrap"
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "AI Services",
      desc: "Custom machine learning models and LLM integrations for business automation.",
icon: <BrainCircuit size={20} className="text-red-600" />, 
      items: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Systems"]
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable architecture migration and cloud-native application development.",
      icon: <Cloud size={20} className="text-red-600" />, 
      items: ["AWS/Azure/GCP Management", "Microservices Architecture", "Serverless Computing"]
    },
    {
      title: "Data Engineering",
      desc: "Modern data warehousing and real-time streaming pipelines for insights.",
      icon: <Database size={20} className="text-red-600" />, 
      items: ["ETL Pipeline Design", "Database Optimization", "Real-time Dashboards"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
            Our Technology Expertise
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Comprehensive Solutions for Enterprise Scale
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-8 rounded-xl hover:border-red-600 hover:shadow-lg hover:shadow-slate-100 transition-all group"
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-6 bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 border-b border-slate-100 pb-4">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.items.map(item => (
                  <li key={item} className="flex items-center space-x-3 text-xs font-semibold text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    {
      title: "Expertise That Matters",
      desc: "Our team consists of industry veterans with over 15+ years of experience in enterprise software development.",
      icon: <Users size={24} />
    },
    {
      title: "Performance First",
      desc: "We build systems optimized for speed, reliability, and extreme scalability from day one.",
      icon: <Zap size={24} />
    },
    {
      title: "Data Driven Decisions",
      desc: "Every recommendation we make is backed by rigorous data analysis and market research.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Enterprise Security",
      desc: "We follow military-grade security protocols to ensure your data stays private and protected.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-4 block">The RSAY Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Why Global Leaders Trust RSAY for Scale
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We don't just build software; we build partnerships. Our holistic approach ensures that your technology infrastructure aligns perfectly with your business goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map(point => (
                <div key={point.title} className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600">
                    {point.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{point.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-red-600 rounded-3xl overflow-hidden shadow-2xl relative group border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-2xl font-bold mb-1">98.5%</p>
                  <p className="text-sm opacity-80">Client Satisfaction Rate over the last 5 years.</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-400/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    { number: "01", title: "Strategic Discovery", desc: "We deep dive into your business model and identify key opportunities." },
    { number: "02", title: "Architecture Design", desc: "Laying out a blueprint for scalable and efficient digital systems." },
    { number: "03", title: "Agile Development", desc: "Built with transparency, rapid iterations, and daily feedback loops." },
    { number: "04", title: "Quality Assurance", desc: "Rigorous testing to ensure military-grade performance and security." }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How We Build Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-slate-100 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black text-slate-150 group-hover:text-red-50 transition-colors mb-4 md:-mb-1 relative z-0">
                {step.number}
              </div>
              <div className="relative z-10 bg-white md:pt-4">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CTO, FinTech Global",
      text: "RSAY transformed our legacy systems into a high-performance cloud infrastructure in record time. Their AI expertise is simply unmatched.",
      avatar: "SJ"
    },
    {
      name: "Marcus Chen",
      role: "Director of Ops, RetailMax",
      text: "The data visualization dashboards RSAY built gave us insights we never knew existed. Our efficiency increased by 40% in just two quarters.",
      avatar: "MC"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, HealthStream",
      text: "Working with RSAY was the best decision we made. Professional, strategic, and they truly care about the quality of every line of code.",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Quote size={48} className="text-red-600 mx-auto mb-6 opacity-20" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Innovation Leaders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[2.5rem] relative"
            >
              <p className="text-slate-600 italic leading-relaxed mb-8 text-lg">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold leading-none mb-1">{review.name}</h4>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Elevate Your Technology Stack?
        </h2>
        <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of companies that have already transformed their digital future with RSAY's expert services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-50 transition-all shadow-2xl shadow-red-900/20 active:scale-95"
          >
            Start Your Journey
          </Link>
          <Link
            to="/partner"
            className="w-full sm:w-auto bg-red-700 text-white border border-red-500/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-red-800 transition-all active:scale-95"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
