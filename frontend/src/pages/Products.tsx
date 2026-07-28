import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { 
  Search, 
  Layers, 
  Database, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Bot, 
  ArrowRight, 
  Filter, 
  Check, 
  ExternalLink,
  Sparkles,
  PhoneCall,
  X,
  Zap,
  Tag,
  CircleCheck,
  Building2
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  tags: string[];
  features: string[];
  techStack: string[];
  pricing: string;
  demoNote: string;
}

const productsData: Product[] = [
  {
    id: "1",
    name: "Luminate ERP",
    slug: "luminate-erp",
    tagline: "Enterprise Grade Resource & Operations Planner",
    category: "ERP & Operations",
    description: "A centralized, high-performance platform for multi-depot inventory tracking, automated GST/tax billing, and streamlined supply chain workflows designed for medium and large scale operations.",
    icon: <Layers size={24} />,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
    tags: ["Enterprise", "SaaS", "Offline Sync"],
    features: [
      "Real-time Inventory & Warehouse Management",
      "Automated Double-entry Bookkeeping",
      "Interactive Sales & Purchase Workflows",
      "Customizable GST & Tax Invoice Engines"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
    pricing: "Starts from $499/month",
    demoNote: "Includes 14-day parallel run assistance & on-premise migration support."
  },
  {
    id: "2",
    name: "NovaCRM Suite",
    slug: "novacrm-suite",
    tagline: "Next-Gen Lead Conversion & Relationship Engine",
    category: "CRM & Sales",
    description: "Supercharge your business sales. Turn prospects into recurring customers using dynamic sales pipelines, automated email sequences, and customer behavioral insights.",
    icon: <Users size={24} />,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    tags: ["Sales Automation", "AI Integration"],
    features: [
      "Dynamic Drag-and-Drop Deal Pipelines",
      "Automated Email & WhatsApp Sequences",
      "Integrated Call Logs & Meeting Schedulers",
      "Unified Customer Profile Timeline"
    ],
    techStack: ["Next.js", "Express", "MongoDB", "Redis"],
    pricing: "Starts from $149/month",
    demoNote: "Includes standard API keys for immediate CRM integrations."
  },
  {
    id: "3",
    name: "Sentrix Shield",
    slug: "sentrix-shield",
    tagline: "Industrial Zero-Trust Infrastructure Protection",
    category: "Security & Cloud",
    description: "Secure your host containers and cloud storage assets. Sentrix provides automated vulnerability checks, token expirations, and active threat detection for private server modules.",
    icon: <ShieldCheck size={24} />,
    iconColor: "text-red-600",
    iconBg: "bg-red-50 border-red-100",
    tags: ["Cybersecurity", "Zero-Trust", "Compliance"],
    features: [
      "Real-time Host Log Vulnerability Scanning",
      "Automated Identity Provider Integration (OIDC)",
      "Instant IP Whipping & Advanced rate-limiting",
      "Ready audit reports for ISO 27001 compliance"
    ],
    techStack: ["Go", "eBPF", "SQLite3", "Kubernetes"],
    pricing: "Custom Enterprise Quotes",
    demoNote: "Includes full network topology audits before launching."
  },
  {
    id: "4",
    name: "ApexHR Platform",
    slug: "apexhr",
    tagline: "Unified Workforce Performance & Payroll Portal",
    category: "HR & Operations",
    description: "Eliminate spreadsheet chaos for your workforce. ApexHR lets you coordinate leaves, check real-time attendance, generate customizable PDF payrolls, and schedule peer feedbacks.",
    icon: <Building2 size={24} />,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
    tags: ["HRMS", "Bio Integration", "SaaS"],
    features: [
      "Flexible Leave & Compensatory Off Rules",
      "One-click Payroll & Salary Slips with TDS calculation",
      "Employee Self-Service Dashboard with Mobile Support",
      "Confidential Goal Tracking & Peer Reviews"
    ],
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "AWS S3"],
    pricing: "Starts from $2.5/user/month",
    demoNote: "Biometric attendance hardware configuration files are pre-loaded."
  },
  {
    id: "5",
    name: "AuraBI & Analytics",
    slug: "aurabi",
    tagline: "High-Velocity Business Intelligence Engine",
    category: "Data & BI",
    description: "Convert raw database tables into beautiful, executive-ready charts. AuraBI pulls live queries from your local servers and outputs custom reporting dashboards.",
    icon: <BarChart3 size={24} />,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-100",
    tags: ["Big Data", "D3 Charts", "Dashboards"],
    features: [
      "Multi-source Data Connectors (SQL/NoSQL/APIs)",
      "Drag-and-Drop Dashboard Widget Customizations",
      "Scheduled Slack/Email Reports in Automated PDF",
      "Instant Predictive Trends with High Speed Indexes"
    ],
    techStack: ["Python", "FastAPI", "React", "D3.js"],
    pricing: "Starts from $299/month",
    demoNote: "Available in both Server-Hosted and Desktop-Client configurations."
  },
  {
    id: "6",
    name: "Leochat Core",
    slug: "leochat-core",
    tagline: "Secure AI Assistant Connected to Private Docs",
    category: "AI & Custom",
    description: "Empower your customer support or operations desk using a customized conversational model trained purely on internal files, policies, and database schemas with zero data leakage.",
    icon: <Bot size={24} />,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50 border-purple-100",
    tags: ["LLM", "RAG Pipeline", "AI Search"],
    features: [
      "Retrieval-Augmented Generation (RAG) with hybrid search",
      "Instant PDF/DOCX Parsing & Custom Rule Guardrails",
      "Simple Embeddable Widgets for customer-facing web apps",
      "Granular admin workspace with dynamic accuracy meters"
    ],
    techStack: ["Gemini Pro", "ChromaDB", "FastAPI", "Tailwind"],
    pricing: "Custom Deployment Models",
    demoNote: "Comes with ready-to-run vector sync hooks for database schemas."
  }
];

const categories = ["All", "ERP & Operations", "CRM & Sales", "Security & Cloud", "Data & BI", "AI & Custom"];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Demo Request Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoProduct, setDemoProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleOpenDemo = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setDemoProduct(product);
    setFormData({
      name: "",
      email: "",
      phone: "",
      requirements: `I am interested in setting up a demo for ${product.name} software. Please send details to my email.`
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Re-use the existing `/api/enquiry` backend endpoint to persist enquiry data
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[PRODUCT DEMO REQUEST] - Product: ${demoProduct?.name}. Requirements: ${formData.requirements}`
        })
      });

      if (response.ok) {
        toast.success(`Thank you! Demo request for ${demoProduct?.name} submitted successfully.`);
        setIsModalOpen(false);
        setFormData({ name: "", email: "", phone: "", requirements: "" });
      } else {
        const errData = await response.json();
        toast.error(errData.error || "Failed to submit demo request.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Connecting to server failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-white py-20 px-8 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">
            Premium Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Our Business <span className="text-blue-600">Software Products</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Ready-to-deploy, high-integrity enterprise platforms built to solve core management, operational, security, and AI challenges.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Controls - Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search Box */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <Search size={16} className="text-blue-600" />
              Search Products
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name, tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 pl-3 pr-10 text-sm focus:outline-none focus:border-blue-600 transition-all text-slate-800 placeholder:text-slate-400"
              />
              <Search size={16} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Categories list */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <Filter size={16} className="text-blue-600" />
              Categories
            </h3>
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-left text-sm py-2 px-3 rounded-md transition-all font-medium flex items-center justify-between ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>{category}</span>
                  {selectedCategory === category && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="bg-slate-900 text-white p-6 rounded-xl relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
            <Zap className="text-amber-400 mb-3" size={24} />
            <h4 className="font-bold text-md mb-2">Need a Custom Product?</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              We specialize in custom engineering. If our pre-built suites do not cover your target flow, we can modularize them or build from scratch.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ x: 5 }}
              className="text-xs text-blue-400 font-bold inline-flex items-center gap-1.5"
            >
              Consult with Architects <ArrowRight size={12} />
            </motion.a>
          </div>
        </div>

        {/* Product Listing - Right 3 Columns */}
        <div className="lg:col-span-3 space-y-6">
          
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-extrabold text-slate-800">{filteredProducts.length}</span> software solutions
            </p>
            {searchTerm || selectedCategory !== "All" ? (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-xs text-blue-600 hover:underline font-bold"
              >
                Clear Filters
              </button>
            ) : null}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-16 text-center shadow-sm">
              <Bot size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No Software Found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No products match "{searchTerm}" under "{selectedCategory}". Try adjusting your keywords or clearing the filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layoutId={`card-${product.id}`}
                  onClick={() => setSelectedProduct(product)}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Icon and Tag section */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${product.iconBg} ${product.iconColor}`}>
                        {product.icon}
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-bold tracking-tight mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Core Features:</p>
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-500 gap-2">
                          <CircleCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-600">
                      {product.pricing}
                    </span>
                    <button
                      onClick={(e) => handleOpenDemo(product, e)}
                      className="inline-flex items-center gap-1 bg-white hover:bg-blue-600 hover:text-white border border-slate-200 text-blue-600 text-xs font-bold py-1.5 px-3 rounded-md transition-all active:scale-95 shadow-sm"
                    >
                      <span>Request Demo</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Banner Section */}
      <section className="mt-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-slate-900 rounded-xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[80px]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/20 text-blue-300 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-blue-500/30">
              <Sparkles size={12} /> Ready Integration Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Looking for a Production-Ready Deployment?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              All our business products are constructed cleanly with modular API services. We guide you through setup, database clustering, and security hardening files step-by-step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partner"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-bold transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Partner Integration Portal</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md text-sm font-bold transition-all inline-flex items-center justify-center gap-2"
              >
                <PhoneCall size={14} />
                <span>Get a Custom Architecture Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details Lightbox Modal (For product details) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl border border-slate-200"
            >
              <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${selectedProduct.iconBg} ${selectedProduct.iconColor}`}>
                    {selectedProduct.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-none mb-1">
                      {selectedProduct.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Key Product Advantages</h4>
                  <div className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-600 gap-2.5">
                        <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProduct.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Price Estimate</h4>
                    <p className="text-xs font-bold text-slate-700">
                      {selectedProduct.pricing}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                  <p className="text-xs text-blue-800 leading-relaxed">
                    <span className="font-extrabold">Implementation Note:</span> {selectedProduct.demoNote}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-4">
                <button
                  onClick={(e) => {
                    setSelectedProduct(null);
                    handleOpenDemo(selectedProduct, e);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-md text-sm transition-all text-center"
                >
                  Request Customized Demo
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-300 py-2.5 px-4 rounded-md text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Demo Request Modal */}
      <AnimatePresence>
        {isModalOpen && demoProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-xl max-w-lg w-full relative z-10 shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${demoProduct.iconBg} ${demoProduct.iconColor}`}>
                    {demoProduct.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-none mb-1">
                      Request a Demo
                    </h3>
                    <p className="text-xs text-slate-500">
                      Product: {demoProduct.name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 transition-all font-bold"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2 text-slate-950 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2 text-slate-950 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2 text-slate-950 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                    Specific Requirements or Custom Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-md px-3.5 py-2 text-slate-950 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  />
                </div>

                <div className="p-4 bg-slate-50 rounded-lg text-xs text-slate-500 italic">
                  * Note: Clicking "Submit Request" immediately uploads this demo inquiry to our backend database. An architect will schedule a virtual call.
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-white hover:bg-slate-100 text-slate-700 font-bold border border-slate-300 py-2 px-4 rounded-md text-sm transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md text-sm transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
