import { motion } from "motion/react";
import { Users, Target, Rocket, Eye, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <Hero />
      <MissionVision />
      {/* <Journey /> */}
      <Team />
      {/* <Stats /> */}
    </div>
  );
}

function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Who We Are</span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Innovating at the Intersection of <span className="text-blue-600">Humanity and Tech</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Founded in 2026, RSAY began with a simple mission: to make enterprise-grade software accessible and scalable for businesses of all sizes.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Today, we are a global team of developers, designers, and strategists working together to build the next generation of digital infrastructure. We believe that technology should be an enabler, not a barrier, to growth.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover" />
              <div className="bg-blue-600 p-8 rounded-xl text-white shadow-sm">
                < Award size={40} className="mb-4 opacity-50" />
                <h4 className="text-2xl font-extrabold">12+</h4>
                <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Years of Industry Excellence</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900 p-8 rounded-xl text-white shadow-sm">
                <Globe size={40} className="mb-4 opacity-50" />
                <h4 className="text-2xl font-extrabold">50+</h4>
                <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Global Fortune 500 Clients</p>
              </div>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-8">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To empower businesses through high-integrity software solutions that solve complex problems with elegant code and intuitive design.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-8">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
              <Eye size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To be the primary catalyst for the world's digital transformation, setting new standards for quality and security in the software services industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const milestones = [
    { year: "2012", title: "Inception", desc: "RSAY founded in a small garage in Silicon Valley with 3 developers." },
    { year: "2015", title: "Global Expansion", desc: "Opened our first international office in London to serve the European market." },
    { year: "2018", title: "Enterprise Shift", desc: "Pivot towards major Fortune 500 integrations and AI-first research." },
    { year: "2021", title: "Cloud Leadership", desc: "Recognized as a leading global partner for major cloud infrastructure providers." },
    { year: "2024", title: "AI Revolution", desc: "Launched our dedicated Generative AI and LLM Ops division." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">Our Journey So Far</h2>
        <div className="relative">
          {/* Main line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white md:bg-transparent relative z-10 md:pb-12 text-center md:text-left">
                  <div className={`w-4 h-4 rounded-full mx-auto md:mx-0 mb-4 ring-8 ring-blue-50 transition-colors group-hover:bg-blue-600 ${idx % 2 === 0 ? 'bg-blue-600 md:translate-y-[41px]' : 'bg-slate-300 md:translate-y-[41px]'}`} />
                  <span className="text-blue-600 font-bold text-2xl mb-2 block">{item.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: "Johnathan Leo", role: "Founder & CEO", image: "https://i.pravatar.cc/300?u=1" },
    { name: "Samantha Reed", role: "Head of AI", image: "https://i.pravatar.cc/300?u=2" },
    { name: "David Koda", role: "CTO", image: "https://i.pravatar.cc/300?u=3" },
    { name: "Aria Chen", role: "VP of Engineering", image: "https://i.pravatar.cc/300?u=4" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">The Minds Behind RSAY</h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Our leadership team combines academic excellence with decades of practical, hands-on experience in the world's leading tech firms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 group"
            >
              <div className="mb-6 relative mx-auto w-32 h-32">
                <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
              <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Lines of Code", value: "25M+" },
    { label: "Deployments", value: "45,000+" },
    { label: "Developer Team", value: "300+" },
    { label: "Revenue Saved", value: "$1.2B" }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4">
              <p className="text-5xl md:text-6xl font-black text-blue-600">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.3em] font-bold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
