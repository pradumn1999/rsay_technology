import { motion } from "motion/react";
import { BrainCircuit, Cloud, Database, BarChart3, ShieldCheck, Zap, Globe, Cpu, Smartphone, Code2, Server, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="pt-24 pb-24">
      <header className="bg-white py-20 px-8 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Comprehensive Solutions</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            Our Technology <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            From foundational cloud infrastructure to cutting-edge AI integrations, we provide the full spectrum of technical expertise to drive your business forward.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-8">
        <ServiceSection 
          id="ai"
          title="Artificial Intelligence"
          icon={<BrainCircuit className="w-12 h-12" />}
          description="We build intelligent systems that learn, adapt, and drive efficiency across your entire organization."
          features={[
            { title: "Custom LLM Training", desc: "Fine-tune large language models on your private data for specialized internal tools." },
            { title: "Predictive Analytics", desc: "Anticipate market trends and customer behavior using historical data patterns." },
            { title: "Computer Vision", desc: "Modern visual recognition systems for security, retail, and manufacturing." },
            { title: "Machine Learning Ops", desc: "Scalable ML pipelines that handle everything from training to deployment." }
          ]}
          color="blue"
          image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
        />

        <ServiceSection 
          id="cloud"
          title="Cloud Infrastructure"
          icon={<Cloud className="w-12 h-12" />}
          description="High-availability, scalable, and secure cloud ecosystems designed for the modern web."
          features={[
            { title: "Multi-Cloud Strategy", desc: "Optimize costs and redundancy across AWS, Azure, and Google Cloud." },
            { title: "Serverless Architecture", desc: "Build applications that scale automatically without the overhead of management." },
            { title: "Containerization", desc: "Microservices orchestration using Docker and Kubernetes for portability." },
            { title: "Cloud Security Audits", desc: "Continuous monitoring and hardening of your digital perimeter." }
          ]}
          color="indigo"
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
          reverse
        />

        <ServiceSection 
          id="data"
          title="Data Intelligence"
          icon={<Database className="w-12 h-12" />}
          description="Transform raw data into a strategic asset through advanced engineering and visualization."
          features={[
            { title: "Data Warehousing", desc: "Unified storage solutions for big data that allow for lightning-fast querying." },
            { title: "ETL Pipeline Design", desc: "Automated data flow from multiple sources with clean transformation layers." },
            { title: "Real-time Dashboards", desc: "Beautiful visualizations of your KPIs updated as the events happen." },
            { title: "Statistical Modeling", desc: "Rigorous mathematical analysis to prove or disprove business hypotheses." }
          ]}
          color="cyan"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        />
      </div>

      <AdditionalServices />
      <CTA />
    </div>
  );
}

function ServiceSection({ title, icon, description, features, image, reverse = false, color }: any) {
  const colorMap: any = {
    blue: "bg-blue-600",
    indigo: "bg-indigo-600",
    cyan: "bg-cyan-600"
  };

  const textMap: any = {
    blue: "text-blue-600",
    indigo: "text-indigo-600",
    cyan: "text-cyan-600"
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full text-left">
        <div className={`w-14 h-14 ${colorMap[color]} rounded-lg flex items-center justify-center text-white shadow-sm mb-8`}>
          {icon}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">{title}</h2>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature: any) => (
            <div key={feature.title} className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className={`w-1.5 h-1.5 rounded-full ${colorMap[color]}`} />
                <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] w-full border border-slate-200">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </div>
  );
}

function AdditionalServices() {
  const others = [
    { title: "Web Dev", icon: <Globe />, desc: "High-performance PWAs and SPAs." },
    { title: "Mobile Dev", icon: <Smartphone />, desc: "Native iOS and Android excellence." },
    { title: "API Design", icon: <Code2 />, desc: "Robust, well-documented REST & GraphQL." },
    { title: "DevOps", icon: <Server />, desc: "CI/CD automation for instant deployments." },
    { title: "SecOps", icon: <Lock />, desc: "Zero-trust security implementation." },
    { title: "Performance", icon: <Zap />, desc: "Optimization of bottlenecked systems." }
  ];

  return (
    <section className="py-24 bg-slate-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-16">Other Strategic Capabilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {others.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center group cursor-default"
            >
              <div className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-8 sm:px-12">
      <div className="bg-slate-900 rounded-xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Discuss Your Custom Requirements</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. Our consultation process ensures we design a custom tech strategy that fits your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
          >
            <span>Book a Consultation</span>
            <BarChart3 size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
