import React, { useState } from "react";
import { toast } from "sonner";
import { 
  Handshake, 
  Search, 
  ShieldCheck, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  ChevronRight,
  Loader2,
  Copy,
  CheckCircle2,
  AlertCircle,
  Coins,
  Award,
  Clock,
  Briefcase,
  Layers,
  CheckSquare,
  HelpCircle,
  ChevronDown,
  TrendingUp,
  Store,
  FileSpreadsheet
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function Partner() {
  // Slider state for interactive commission calculator
  const [onboardCount, setOnboardCount] = useState(15);
  // State for active FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Calculation parameters based on RSAY distribution program
  const pricePerLicense = 4500; // Estimated partner commission share per activation
  const recurringBonus = 1200; // Recurring renewals per year
  const monthlyEarnings = onboardCount * pricePerLicense;
  const yearlyRecurring = onboardCount * recurringBonus * 12;

  const partnerTypes = [
    {
      title: "CA & Tax Consultant",
      desc: "Simplify tax audits for your clients by referring RSAY's error-proof ledger & billing systems.",
      color: "border-blue-200 bg-blue-50/50"
    },
    {
      title: "Software Reseller / Distributor",
      desc: "Add RSAY to your existing point of sale software catalog and double your hardware deal margins.",
      color: "border-indigo-200 bg-indigo-50/50"
    },
    {
      title: "Retail Store Owner",
      desc: "Recommend RSAY POS to neighboring retail businesses in your market and earn dynamic overrides.",
      color: "border-teal-200 bg-teal-50/50"
    },
    {
      title: "Hardware Store Owner",
      desc: "Bundle our billing core with your barcode scanners, scales, and thermal receipt hardware sales.",
      color: "border-amber-200 bg-amber-50/50"
    }
  ];

  const clientBenefits = [
    {
      title: "GST-Ready Invoicing",
      desc: "Instant GST-compliant bills generation on mobile or desktop with local thermal receipt printing support."
    },
    {
      title: "Auto GSTR Reports",
      desc: "Generate offline and online tax ledger tallies, GSTR-1, and GSTR-3B audit reports with a single click."
    },
    {
      title: "Instant Data Sharing",
      desc: "Securely share accounts data, store records, and stock status instantly with legal consultants or team mates."
    },
    {
      title: "Spot Error Checking",
      desc: "Built-in validation checks flag tax discrepancies or ledger typos right at the billing entry stage."
    }
  ];

  const valueOfferings = [
    {
      title: "Up to 50% Margin",
      desc: "Enjoy the highest activation and monthly subscription recurring shares in the store management market."
    },
    {
      title: "Exclusive Partner Kits",
      desc: "Access localized marketing assets, custom store demo parameters, and RSAY branding flex templates."
    },
    {
      title: "Dedicated Channel Manager",
      desc: "A designated partnership officer is assigned to handle technical setups, register training, and regional events."
    }
  ];

  const faqItems = [
    {
      q: "What is RSAY Partner Program?",
      a: "It is a strategic dealer network that enables business consultants, software resellers, and retail partners to distribute RSAY POS solutions to retail and restaurant businesses, earning dynamic commission margins and recurring revenues."
    },
    {
      q: "Can I recommend RSAY without becoming a full-time partner?",
      a: "Absolutely! You can sign up as an Associate Affiliate Partner. Simply refer stores when opportunities arise, and receive guaranteed payout rewards upon successful store onboarding."
    },
    {
      q: "How much can I earn as a RSAY Partner?",
      a: "Earnings are directly proportional to activations. With typical commission rates, referring 15-20 active stores per month can yield over ₹1,50,000 to ₹2,00,000 in monthly income plus growing annual recurring renewal bonuses."
    },
    {
      q: "Do I need to invest to join the RSAY Partner Program?",
      a: "No upfront security deposit or capital investment is required to join. RSAY offers free partner registration, comprehensive training resources, and marketing enablement toolkits."
    },
    {
      q: "Does recommending RSAY create any professional conflict of interest?",
      a: "No. Since RSAY acts as a collaborative business management utility (aligning compliance and transactional reporting), it actively helps CAs and tax consultants audit businesses faster, minimizing compliance friction."
    },
    {
      q: "Can I manage multiple client accounts from one dashboard?",
      a: "Yes! Partners receive access to a consolidated Client Portal. You can monitor active client licenses, follow up on pending renewals, and direct premium tax audits from a single unified workspace."
    },
    {
      q: "Do I need advanced technical knowledge about POS setups?",
      a: "Not at all. RSAY provides extensive video guides, remote technical assistances, and on-site support engineers globally. We will configure the systems and hardware registers on your behalf."
    },
    {
      q: "How do I receive my partnership commission payouts?",
      a: "All partnership commission shares are processed weekly. Payouts are directly transferred to your verified business bank accounts with full digital ledger summaries."
    }
  ];

  const steps = [
    {
      title: "Register for Free",
      desc: "Complete the easy partnership application form below to immediately generate your secure Partner ID."
    },
    {
      title: "Refer Businesses",
      desc: "Showcase RSAY's easy offline billing core and inventory dashboards to local shops, restaurants, or superstores."
    },
    {
      title: "Earn Every Day",
      desc: "Secure healthy commissions on each store activation and build reliable recurring passive income on renewals."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-slate-50">
      {/* 1. HERO HEADER */}
      <header className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-blue-500 font-extrabold text-xs uppercase tracking-[0.3em] mb-4 bg-blue-500/10 px-4 py-1.5 rounded-full inline-block border border-blue-500/20">
            RSAY Partnership Network
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Turn Your Client Network Into a <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">₹1 Lakh/Month</span> Income
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Empower retail businesses and restaurants with our offline-ready billing software. Offer trusted compliance solutions while driving high-velocity recurring revenues.
          </p>
        </div>
      </header>

      {/* 2. WHICH KIND OF PARTNER ARE YOU */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Roles</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Which Kind of Partner Are You?</h2>
          <p className="text-slate-500 mt-2">Choose the path that fits your existing client relationships and business expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {partnerTypes.map((type, idx) => (
            <div key={idx} className={cn("p-8 rounded-2xl border transition-all duration-300 hover:shadow-md hover:scale-[1.01] bg-white", type.color)}>
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                {idx === 0 && <Briefcase className="text-blue-600" size={24} />}
                {idx === 1 && <Layers className="text-indigo-600" size={24} />}
                {idx === 2 && <Store className="text-emerald-600" size={24} />}
                {idx === 3 && <TrendingUp className="text-amber-600" size={24} />}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{type.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CLIENTS LOVE RSAY */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Product Value</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight leading-none">
                Why Your Clients Will Love RSAY?
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                RSAY POS delivers continuous offline performance, intuitive desktop billing mechanisms, and real-time ledger accounting. It simplifies complicated statutory audits so your clients save hours every day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {clientBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-250 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl -z-0" />
              <h3 className="text-2xl font-black text-slate-900 mb-2 relative z-10">Unmatched Partner Enablers</h3>
              <p className="text-slate-500 text-sm mb-8">What you get ready-to-use when you onboard clients with us:</p>

              <div className="space-y-6">
                {valueOfferings.map((offering, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-sm flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      {idx === 0 && <Coins size={20} />}
                      {idx === 1 && <Award size={20} />}
                      {idx === 2 && <ShieldCheck size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{offering.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{offering.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC INCOME CALCULATOR */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">Earnings Tool</span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">Calculate Your Potential Earnings</h2>
            <p className="text-slate-400 mt-2">Use our interactive dynamic slider to see how much you can build in recurring channels.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-300 font-semibold">Active Store Activation References</span>
                  <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-lg font-black font-mono border border-blue-450">{onboardCount} Stores</span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="100"
                  value={onboardCount}
                  onChange={(e) => setOnboardCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-8"
                />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckSquare size={18} className="text-blue-400 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300">Instant direct margin share estimated at ₹{pricePerLicense.toLocaleString()} per register license setup.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckSquare size={18} className="text-blue-400 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300">Continuous annual renewal overrides on cloud hosting database synchronization parameters.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Total Project Margin Estimates</span>
                  <div className="mt-2 mb-6">
                    <p className="text-xs text-slate-500 font-medium">Estimated Activation Intake:</p>
                    <p className="text-5xl font-black text-blue-600 font-mono tracking-tighter mt-1">₹{monthlyEarnings.toLocaleString()}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <p className="text-xs text-slate-500 font-medium">Projected Annual Recurring Retention (Renewals):</p>
                    <p className="text-3xl font-black text-indigo-600 font-mono tracking-tighter mt-1">₹{yearlyRecurring.toLocaleString()}/year</p>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 italic mt-8 border-t border-slate-50 pt-4">
                  * Note: Calculations represent general estimation models. Channel structures, premium hardware bundles, and regional tax brackets alter ultimate figures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. START EARNING IN 3 SIMPLE STEPS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Start Earning in 3 Simple Steps</h2>
          <p className="text-slate-500 mt-2">Become a certified partner in less than 5 minutes. No complex document processes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10 hidden md:block" />

          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl relative group hover:border-blue-300 transition-colors">
              <span className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md group-hover:bg-blue-600 transition-colors">
                0{idx + 1}
              </span>
              <div className="pt-4">
                <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PARTNER REGISTRATION FORM & VERIFICATION SECTION (PRESERVED CRITICAL CUSTOM LOGIC) */}
      <section id="registration-section" className="py-20 bg-slate-100 border-t border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Enrollment & Portal</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Active Distributor Registration</h2>
            <p className="text-slate-500 mt-2">Enter your legal enterprise details below or check verification status in real-time.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <PartnerRegistration />
            <PartnerVerification />
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING PARTNER TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Success Stories from Across India</h2>
          <p className="text-slate-500 mt-2">Hear from established business consultants and hardware distributors on why they love RSAY.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-600 italic leading-relaxed text-sm mb-6">
              "Transitioning from legacy billing software distribution to RSAY's dynamic offline model was our best commercial decision. We onboarded 120+ active retail stores in Gujarat last year, and renewal flow is incredibly smooth."
            </p>
            <div>
              <p className="font-extrabold text-slate-900">Rajesh Shah</p>
              <p className="text-xs text-slate-400">Software Distributor, Ahmedabad</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-600 italic leading-relaxed text-sm mb-6">
              "Being a tax professional, clients constantly look to us for efficient invoicing systems. Recommending RSAY guarantees clean ledger compliance, and the automated GSTR-1 saves our team from weekly typing chaos."
            </p>
            <div>
              <p className="font-extrabold text-slate-900">Anit Kumar, CA</p>
              <p className="text-xs text-slate-400">Tax Advisory Consultant, Bangalore</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl relative shadow-sm hover:shadow-md transition-shadow">
            <p className="text-slate-600 italic leading-relaxed text-sm mb-6">
              "Bundling thermal ticket printers and touchscreen registers with RSAY's point of sale licensing double-charged our store hardware sales. The dedicated Channel Support officer handles configuration in minutes."
            </p>
            <div>
              <p className="font-extrabold text-slate-900">Manpreet Singh</p>
              <p className="text-xs text-slate-400">POS Hardware Outlet Owner, Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DETAILED FAQ ACCORDION SECTION */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Frictionless Answers</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-2">Find instant answers regarding commissions, dashboards, payouts, and licenses.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/40">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-extrabold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className={cn("text-slate-400 transition-transform duration-300", isOpen ? "rotate-180" : "")} size={20} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6 pt-0 border-t border-slate-100 text-sm text-slate-600 leading-relaxed bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function PartnerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredId, setRegisteredId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRegisteredId(null);
    
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Welcome aboard, partner!");
        setRegisteredId(data.partner_id);
        setFormData({ name: "", email: "", phone: "", company: "" });
      } else {
        toast.error(data.error || "Registration failed.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyId = () => {
    if (registeredId) {
      navigator.clipboard.writeText(registeredId);
      toast.success("Partner ID copied to clipboard!");
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-xl shadow-sm">
      <div className="flex items-center space-x-6 mb-10 pb-10 border-b border-slate-100">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
          <Handshake size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Become a Partner</h2>
          <p className="text-slate-500 text-sm">Apply to join the RSAY partner network.</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {registeredId ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-50 border border-blue-100 p-8 rounded-xl text-center"
          >
            <CheckCircle2 size={64} className="text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Registration Complete!</h3>
            <p className="text-slate-600 mb-8 text-sm">Your unique RSAY Partner ID is:</p>
            
            <div className="bg-white border-2 border-dashed border-blue-300 p-6 rounded-lg flex items-center justify-between mb-8">
              <span className="text-3xl font-mono font-black text-blue-600 tracking-tighter">{registeredId}</span>
              <button 
                onClick={copyId}
                className="p-3 hover:bg-slate-50 rounded-md transition-colors text-slate-400 hover:text-blue-600"
              >
                <Copy size={24} />
              </button>
            </div>

            <button
              onClick={() => setRegisteredId(null)}
              className="text-blue-600 font-bold flex items-center justify-center space-x-2 mx-auto hover:underline"
            >
              <span>Register another company</span>
              <ChevronRight size={20} />
            </button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">
                <User size={12} />
                <span>Contact Name</span>
              </div>
              <input
                required
                type="text"
                placeholder="Michael Scott"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">
                  <Mail size={12} />
                  <span>Email</span>
                </div>
                <input
                  required
                  type="email"
                  placeholder="michael@dundermifflin.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-5 py-3.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm placeholder:text-slate-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">
                  <Phone size={12} />
                  <span>Phone</span>
                </div>
                <input
                  required
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-slate-50 border border-slate-200 rounded-md px-5 py-3.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm placeholder:text-slate-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">
                <Building2 size={12} />
                <span>Company Name</span>
              </div>
              <input
                required
                type="text"
                placeholder="Dunder Mifflin Paper Company"
                className="w-full bg-slate-50 border border-slate-200 rounded-md px-5 py-3.5 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm placeholder:text-slate-400"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <button
              disabled={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-md transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2 shadow-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Join Network</span>
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function PartnerVerification() {
  const [partnerId, setPartnerId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerId.trim()) return;

    setIsVerifying(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`/api/partner/${partnerId.trim()}`);
      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Partner not found");
      }
    } catch (err) {
      setError("Network error occurred.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col space-y-12">
      <div className="bg-slate-900 text-white p-10 md:p-12 rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-column justify-between items-start md:items-left gap-6">
          <div className="portal-info">
            <h2 className="text-2xl font-bold text-white mb-1">Partner Verification Portal</h2>
            <p className="text-sm text-slate-400">Verify official RSAY service providers and registered partners.</p>
          </div>

          <form onSubmit={handleVerify} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              required
              type="text"
              placeholder="Enter Partner ID (LEO-XXXX)"
              className="bg-white/10 border border-white/20 rounded-md px-5 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all font-mono"
              value={partnerId}
              onChange={(e) => setPartnerId(e.target.value.toUpperCase())}
            />
            <button
              disabled={isVerifying}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all active:scale-[0.98] disabled:opacity-50 text-sm whitespace-nowrap"
            >
              {isVerifying ? <Loader2 className="animate-spin" size={20} /> : "Verify Identity"}
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white border border-emerald-100 p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <ShieldCheck size={32} className="text-emerald-500" />
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Verified Level 1</h3>
              </div>
              <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Active Partner</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Company</p>
                <p className="text-xl font-bold text-slate-900">{result.company}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Partner ID</p>
                <p className="text-xl font-mono font-bold text-blue-600">{result.partner_id}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Contact Person</p>
                <p className="text-lg font-medium text-slate-700">{result.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Partner Since</p>
                <p className="text-lg font-medium text-slate-700">{new Date(result.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-rose-50 border border-rose-100 p-8 rounded-xl flex items-center space-x-6"
          >
            <div className="w-14 h-14 bg-rose-500 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm">
              <AlertCircle size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rose-900 mb-1 tracking-tight">Verification Failed</h3>
              <p className="text-rose-700 text-sm leading-relaxed tabular-nums">The ID "{partnerId}" is not currently in our database or has been deactivated.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-8 rounded-xl border border-slate-200 text-slate-400 text-xs italic bg-white shadow-sm">
        * Security Note: All partner IDs are generated using military-grade random algorithms and are strictly bound to a single legal entity. Sharing or spoofing IDs is a violation of our ecosystem policy.
      </div>
    </div>
  );
}
