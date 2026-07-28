import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Calculator,
  Check,
  Cloud,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Gauge,
  Headphones,
  Laptop,
  Layers3,
  LockKeyhole,
  PackageCheck,
  Play,
  ReceiptText,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const businessTypes = [
  {
    name: "Hardware",
    icon: Wrench,
    challenges: ["Unit-wise stock and loose item tracking", "Purchase rate changes across suppliers", "Fast billing for mixed hardware orders"],
    help: ["Category-wise inventory with reorder alerts", "Supplier purchase history and margin visibility", "GST invoices with item-wise tax handling", "Barcode billing for counter sales"],
  },
  {
    name: "Grocery",
    icon: ShoppingCart,
    challenges: ["Daily high-volume billing", "Expiry and batch management", "Managing loose, packed, and weighed items"],
    help: ["Fast POS billing with barcode scanner support", "Batch and expiry tracking for packaged goods", "Stock alerts for fast-moving items", "Customer credit and payment tracking"],
  },
  {
    name: "Garments",
    icon: Store,
    challenges: ["Size, color, and style variants", "Seasonal stock movement", "Discount and exchange management"],
    help: ["Variant-wise inventory for size and color", "Easy exchange and return workflows", "Offer and discount billing controls", "Sales reports by category and brand"],
  },
  {
    name: "Pet Shop",
    icon: Sparkles,
    challenges: ["Multiple food brands and pack sizes", "Expiry tracking for pet food", "Repeat customer purchase records"],
    help: ["Brand and pack-size inventory tracking", "Expiry alerts for food and supplements", "Customer purchase history for repeat sales", "Simple GST billing for retail counters"],
  },
  {
    name: "Paint",
    icon: Layers3,
    challenges: ["Shade, quantity, and brand-wise stock", "Custom mixing record management", "Large supplier purchase tracking"],
    help: ["Shade and brand-wise stock visibility", "Purchase and supplier ledger management", "Estimate and invoice generation", "Low-stock alerts for fast-moving shades"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    challenges: ["IMEI tracking requirements", "Managing accessories and devices together", "Warranty management and after-sales service"],
    help: ["Device-wise IMEI tracking with purchase history", "Accessory inventory synchronization", "Warranty and customer support management", "Fast GST billing and professional invoices"],
  },
  {
    name: "Electronics",
    icon: Laptop,
    challenges: ["Serial number and warranty tracking", "Multiple product categories", "Installation and service records"],
    help: ["Serial-wise stock and warranty records", "Category-wise reports for electronics inventory", "Customer service history tracking", "Professional invoices and delivery challans"],
  },
  {
    name: "Toys",
    icon: Star,
    challenges: ["Wide variety of SKUs", "Age-group and category based stock", "Festive demand spikes"],
    help: ["SKU-wise inventory with easy search", "Category and age-group tagging", "Seasonal sales reports", "Quick billing for busy counters"],
  },
  {
    name: "Stationery",
    icon: FileText,
    challenges: ["Bulk school and office orders", "Low-value high-volume items", "Credit sales to regular customers"],
    help: ["Bulk billing and estimate creation", "Low-stock reminders for fast-moving items", "Customer ledger and payment follow-up", "GST-ready retail and wholesale invoices"],
  },
];

const featureCards = [
  {
    title: "GST Billing",
    desc: "Create GST-compliant invoices instantly with CGST, SGST, and IGST support for smooth tax compliance.",
    icon: Calculator,
    color: "bg-sky-50 text-sky-700",
  },
  {
    title: "E-Way Bill",
    desc: "Generate e-way bills in one click and stay fully aligned with GST regulations.",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Touch POS Billing",
    desc: "Speed up checkout with touchscreen billing and barcode scanning for quick transactions.",
    icon: ReceiptText,
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "Multi-Payment Modes",
    desc: "Accept cash, card, UPI, wallets, and net banking with seamless payment handling.",
    icon: CircleDollarSign,
    color: "bg-violet-50 text-violet-700",
  },
  {
    title: "Order to Invoice",
    desc: "Convert orders into invoices automatically while tracking end-to-end fulfillment.",
    icon: ShoppingCart,
    color: "bg-rose-50 text-rose-700",
  },
  {
    title: "Sales, Purchase & Returns",
    desc: "Manage sales, purchase bills, credit notes, debit notes, and returns with accurate adjustments.",
    icon: BarChart3,
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "WhatsApp Sharing",
    desc: "Send invoices, outstanding reports, quotations, and documents directly to customers via WhatsApp.",
    icon: Smartphone,
    color: "bg-lime-50 text-lime-700",
  },
  {
    title: "Real-Time Stock",
    desc: "Monitor live inventory, stock transfers, stock conversions, and complete movement history.",
    icon: Boxes,
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Expiry Control",
    desc: "Track near-expiry items, set reorder levels, and trigger push-sale offers automatically.",
    icon: ShieldCheck,
    color: "bg-orange-50 text-orange-700",
  },
  {
    title: "Barcode / QR Code Management",
    desc: "Print, scan, and search barcodes or QR codes with support for thermal and desktop printers.",
    icon: Search,
    color: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    title: "Purchase Import",
    desc: "Import purchase data from Excel or capture invoices as images or PDFs with no manual work.",
    icon: PackageCheck,
    color: "bg-teal-50 text-teal-700",
  },
  {
    title: "Multi-Store & Godown",
    desc: "Manage multiple branches and warehouses with centralized transfers and stock visibility.",
    icon: Store,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Full Accounting",
    desc: "Maintain journals, vouchers, ledgers, P&L statements, balance sheets, and complete financial records.",
    icon: Layers3,
    color: "bg-slate-50 text-slate-700",
  },
  {
    title: "50+ Reports",
    desc: "Generate detailed sales, purchase, inventory, GST, and financial reports with graphs and year-on-year comparisons.",
    icon: Gauge,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Credit Limit Control",
    desc: "Set customer credit limits and receive instant alerts when billing crosses the limit.",
    icon: LockKeyhole,
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "User Roles & Access",
    desc: "Assign permissions to users, operators, and administrators with secure audit trail support.",
    icon: Users,
    color: "bg-sky-50 text-sky-700",
  },
  {
    title: "Auto Cloud Backup",
    desc: "Back up business data to the cloud daily with secure encryption and instant recovery.",
    icon: Cloud,
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Offers & Discounts",
    desc: "Create item-wise, category-wise, and bill-wise offers, discounts, and promotional schemes easily.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "Loyalty & Gift Cards",
    desc: "Build customer loyalty using reward points, gift cards, coupons, and voucher management.",
    icon: Star,
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    title: "AI-Powered Features",
    desc: "Leverage AI for image uploads, smart product suggestions, intelligent search, and inventory insights.",
    icon: Zap,
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "E-Commerce Ready",
    desc: "Launch online stores quickly and manage online orders and inventory from one platform.",
    icon: Laptop,
    color: "bg-lime-50 text-lime-700",
  },
  {
    title: "Mobile Reporting Application",
    desc: "Access real-time sales, inventory, collections, and reports anytime from your mobile.",
    icon: Smartphone,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Multi-Company",
    desc: "Manage multiple companies from a single login and switch between businesses seamlessly.",
    icon: Building2,
    color: "bg-slate-50 text-slate-700",
  },
  {
    title: "Bulk SMS & Email",
    desc: "Send bulk SMS, emails, and WhatsApp notifications for bills, reminders, and promotions.",
    icon: Headphones,
    color: "bg-rose-50 text-rose-700",
  },
  {
    title: "Hardware Integration",
    desc: "Work smoothly with barcode scanners, weighing scales, cash drawers, receipt printers, and POS hardware.",
    icon: Wrench,
    color: "bg-sky-50 text-sky-700",
  },
  {
    title: "Gorilla Technology",
    desc: "Generate GST and non-GST bills instantly using product categories without managing individual inventory.",
    icon: Zap,
    color: "bg-violet-50 text-violet-700",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Rs.13,000",
    cta: "Get Started",
    features: ["Billing Software", "Inventory Management", "GST Billing", "Basic Reports", "1 Hour Support Window"],
  },
  {
    name: "Growth",
    price: "Rs.18,000",
    cta: "Book Demo",
    popular: true,
    features: ["Everything in Starter", "Advanced Reports", "Multi-User Access", "Business Analytics", "Unlimited Standard Support"],
  },
  {
    name: "Enterprise",
    price: "Rs.25,000",
    cta: "Contact Sales",
    features: ["Everything in Growth", "Advanced Customisation", "Priority Processing", "Dedicated Onboarding", "Priority 24/7 Support"],
  },
];

const invoiceTemplates = [
  {
    title: "A4 Business Invoice",
    category: "A4",
    description: "Professional layout for retail, wholesale, and B2B billing.",
    file: "/invoice/A4/2.pdf",
    badge: "Formal billing",
  },
  {
    title: "A4 Retail Invoice",
    category: "A4",
    description: "Clean structure for stores, services, and frequent invoicing.",
    file: "/invoice/A4/3.pdf",
    badge: "Fast checkout",
  },
  {
    title: "A4 Premium Invoice",
    category: "A4",
    description: "Polished format with added business and totals details.",
    file: "/invoice/A4/4.pdf",
    badge: "Branded bills",
  },
  {
    title: "A4 Modern Invoice",
    category: "A4",
    description: "A neat invoice look for daily billing and reporting.",
    file: "/invoice/A4/5.pdf",
    badge: "Daily use",
  },
  {
    title: "A4 Summary Invoice",
    category: "A4",
    description: "Compact and structured for smaller orders and summaries.",
    file: "/invoice/A4/6.pdf",
    badge: "Clear summary",
  },
  {
    title: "Thermal Receipt 1",
    category: "3inch-thermal",
    description: "Compact thermal format designed for quick retail printing.",
    file: "/invoice/3inch-thermal/1.pdf",
    badge: "Quick print",
  },
  {
    title: "Thermal Receipt 2",
    category: "3inch-thermal",
    description: "Slim bill format for counters, kiosks, and mobile vendors.",
    file: "/invoice/3inch-thermal/2.pdf",
    badge: "Counter ready",
  },
  {
    title: "Thermal Receipt 3",
    category: "3inch-thermal",
    description: "High-speed receipt style for busy purchase environments.",
    file: "/invoice/3inch-thermal/3.pdf",
    badge: "POS flow",
  },
  {
    title: "Thermal Receipt 4",
    category: "3inch-thermal",
    description: "Practical thermal template for retail shops and service counters.",
    file: "/invoice/3inch-thermal/4.pdf",
    badge: "Retail use",
  },
  {
    title: "Thermal Receipt 5",
    category: "3inch-thermal",
    description: "Simple and effective print-out for fast billing and receipts.",
    file: "/invoice/3inch-thermal/5.pdf",
    badge: "Fast billing",
  },
  {
    title: "A5 Compact Invoice",
    category: "A5",
    description: "Portable invoice design suited for deliveries and service bills.",
    file: "/invoice/A5/2.pdf",
    badge: "Portable",
  },
  {
    title: "A5 Delivery Invoice",
    category: "A5",
    description: "Simple and structured layout for deliveries and field sales.",
    file: "/invoice/A5/4.pdf",
    badge: "Field sales",
  },
  {
    title: "A5 Summary Invoice",
    category: "A5",
    description: "Clean summary format for smaller orders and quick documentation.",
    file: "/invoice/A5/5.pdf",
    badge: "Easy share",
  },
  {
    title: "A5 Service Invoice",
    category: "A5",
    description: "Neat format made for services, repairs, and follow-up bills.",
    file: "/invoice/A5/6.pdf",
    badge: "Service use",
  },
  {
    title: "A5 Office Invoice",
    category: "A5",
    description: "Professional compact invoice for office and small-business billing.",
    file: "/invoice/A5/7.pdf",
    badge: "Office ready",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Hardware Store Owner",
    text: "Billing time has reduced significantly, and inventory management is now completely under control.",
  },
  {
    name: "Priya Sharma",
    role: "Grocery Retailer",
    text: "The software is simple to use and has helped us improve stock accuracy and customer satisfaction.",
  },
  {
    name: "Amit Jain",
    role: "Mobile Shop Owner",
    text: "IMEI tracking and GST billing features save us hours every week. Highly recommended.",
  },
];

export default function Software() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  const [demoFormData, setDemoFormData] = useState({ name: "", email: "", phone: "" });
  const [hasSubmittedDemo, setHasSubmittedDemo] = useState(false);
  const popupTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const storedValue = window.localStorage.getItem("softwareDemoSubmitted");
    if (storedValue === "true") {
      setHasSubmittedDemo(true);
      return;
    }

    popupTimerRef.current = window.setInterval(() => setIsDemoOpen(true), 25000);
    return () => {
      if (popupTimerRef.current) {
        window.clearInterval(popupTimerRef.current);
      }
    };
  }, []);

  const clearPopupTimer = () => {
    if (popupTimerRef.current) {
      window.clearInterval(popupTimerRef.current);
      popupTimerRef.current = null;
    }
  };

  const handleDemoSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDemoSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: demoFormData.name,
          email: demoFormData.email,
          phone: demoFormData.phone,
          message: "Demo request from Software page",
        }),
      });

      if (response.ok) {
        window.localStorage.setItem("softwareDemoSubmitted", "true");
        setHasSubmittedDemo(true);
        clearPopupTimer();
        toast.success("Demo request submitted successfully.");
        setDemoFormData({ name: "", email: "", phone: "" });
        setIsDemoOpen(false);
      } else {
        toast.error("Unable to submit request. Please try again.");
      }
    } catch (error) {
      toast.error("Network error while sending enquiry.");
    } finally {
      setIsDemoSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt-20 bg-white text-slate-950">
        <SoftwareHero />
        <BusinessTypeSection />
        <FeatureSection />
        <InvoiceSection />
        <ControlSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <SoftwareCta />
      </div>

      {isDemoOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 py-8">
          <div className="relative w-full max-w-xl rounded-md bg-white p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsDemoOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100"
              aria-label="Close demo form"
            >
              <X size={18} />
            </button>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                  Demo Request
                </p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Book a quick software demo
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill your details and we will follow up with the best plan for your business.
                </p>
              </div>

              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Name</span>
                    <input
                      required
                      value={demoFormData.name}
                      onChange={(event) => setDemoFormData((prev) => ({ ...prev, name: event.target.value }))}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Email</span>
                    <input
                      required
                      type="email"
                      value={demoFormData.email}
                      onChange={(event) => setDemoFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Phone Number</span>
                  <input
                    required
                    type="tel"
                    value={demoFormData.phone}
                    onChange={(event) => setDemoFormData((prev) => ({ ...prev, phone: event.target.value }))}
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                    placeholder="+91 98765 43210"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-8">
                  <button
                    type="submit"
                    disabled={isDemoSubmitting}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isDemoSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDemoOpen(false)}
                    className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function SoftwareHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white pt-16 pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            <Sparkles size={14} />
            AI-Powered Billing & Accounting Software
          </div> */}
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            AI-Powered Billing Software for <span className="text-blue-600">Retail & Wholesale</span> Businesses
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Generate GST-compliant invoices, manage inventory in real time, track accounts effortlessly, and accelerate billing with intelligent automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="https://api.whatsapp.com/send?phone=6299502265" target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Book Free Demo
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 active:scale-[0.98]"
            >
              <Play size={17} />
              Watch Video
            </Link>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["GST Ready", ReceiptText],
              ["Offline Billing", LockKeyhole],
              ["Barcode Support", PackageCheck],
              ["Multi User", Users],
            ].map(([label, Icon]) => (
              <div key={label as string} className="flex flex-col items-center gap-2 text-center text-xs font-bold text-slate-700">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-50 text-blue-600">
                  <Icon size={19} />
                </div>
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
            <img
                  src="/images/biling-machin.jpeg"
                  alt="RSAY logo"
                  className="h-full w-full object-contain"
                />
        </div>
        {/* <DashboardPreview /> */}
      </div>
    </section>
  );
}

// function DashboardPreview() {
//   const rows = ["Nova Traders", "Square Shoes", "Capital Enterprises"];

//   return (
//     <div className="relative">
//       <div className="absolute inset-8 bg-blue-100 blur-3xl" />
//       <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200">
//         <div className="grid min-h-[430px] grid-cols-[112px_1fr]">
//           <aside className="bg-slate-950 p-4 text-white">
//             <div className="mb-8 flex items-center gap-2 text-sm font-extrabold">
//               <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600">
//                 <ReceiptText size={16} />
//               </div>
//               BillMaster
//             </div>
//             {["Dashboard", "Sales", "Purchase", "Inventory", "Reports", "Settings"].map((item, index) => (
//               <div
//                 key={item}
//                 className={`mb-2 rounded-md px-3 py-2 text-[11px] font-semibold ${index === 0 ? "bg-blue-600 text-white" : "text-slate-400"
//                   }`}
//               >
//                 {item}
//               </div>
//             ))}
//           </aside>
//           <div className="bg-slate-50 p-5">
//             <div className="mb-5 flex items-center justify-between">
//               <h3 className="text-sm font-extrabold text-slate-900">Dashboard</h3>
//               <div className="flex h-9 w-44 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-400">
//                 <Search size={14} />
//                 Search
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
//               {[
//                 ["Total Sales", "Rs.45,000", "text-emerald-600"],
//                 ["Total Profit", "Rs.1,25,000", "text-emerald-600"],
//                 ["Total Invoices", "1,250", "text-blue-600"],
//                 ["Outstanding", "Rs.2,35,000", "text-rose-600"],
//               ].map(([label, value, color]) => (
//                 <div key={label} className="rounded-md border border-slate-100 bg-white p-3">
//                   <p className="text-[10px] font-semibold text-slate-400">{label}</p>
//                   <p className="mt-1 text-sm font-extrabold text-slate-950">{value}</p>
//                   <p className={`mt-1 text-[10px] font-bold ${color}`}>+8.4%</p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
//               <div className="rounded-md border border-slate-100 bg-white p-4">
//                 <div className="mb-6 flex items-center justify-between">
//                   <p className="text-xs font-extrabold text-slate-900">Sales Overview</p>
//                   <BarChart3 size={16} className="text-blue-600" />
//                 </div>
//                 <div className="flex h-28 items-end gap-3">
//                   {[34, 58, 49, 72, 63, 82, 74, 96].map((height, index) => (
//                     <div key={index} className="flex-1 rounded-t-md bg-blue-100">
//                       <div className="rounded-t-md bg-blue-500" style={{ height: `${height}%` }} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="rounded-md border border-slate-100 bg-white p-4">
//                 <p className="mb-4 text-xs font-extrabold text-slate-900">Top Selling Items</p>
//                 {["Rice Basmati", "Anchor Switch", "Mobile Case", "Engine Oil"].map((item, index) => (
//                   <div key={item} className="mb-3 flex items-center gap-3">
//                     <span className="w-20 text-[10px] font-semibold text-slate-500">{item}</span>
//                     <div className="h-1.5 flex-1 rounded-full bg-slate-100">
//                       <div className="h-1.5 rounded-full bg-blue-500" style={{ width: `${82 - index * 13}%` }} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-4 rounded-md border border-slate-100 bg-white p-4">
//               <p className="mb-3 text-xs font-extrabold text-slate-900">Recent Invoices</p>
//               {rows.map((row, index) => (
//                 <div key={row} className="grid grid-cols-3 border-t border-slate-100 py-2 text-[11px] text-slate-500">
//                   <span>INV-{1001 + index}</span>
//                   <span>{row}</span>
//                   <span className="text-right font-bold text-slate-900">Rs.{(index + 1) * 8750}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function BusinessTypeSection() {
  const [selectedType, setSelectedType] = useState("Mobile");
  const selectedBusiness = businessTypes.find((type) => type.name === selectedType) ?? businessTypes[0];
  const SelectedIcon = selectedBusiness.icon;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Industries We Serve" title="Built for Your Business Type" desc="Every business has unique challenges. Our software adapts to your workflow and helps you grow." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {businessTypes.map(({ name, icon: Icon }) => {
              const active = selectedBusiness.name === name;

              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedType(name)}
                  className={`flex min-h-28 flex-col items-center justify-center gap-3 rounded-md border bg-white text-sm font-bold transition ${active ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm" : "border-slate-200 text-slate-700 hover:border-blue-200"
                    }`}
                >
                  <Icon size={25} />
                  {name}
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-8 sm:grid-cols-[1fr_130px]">
              <div>
                <h3 className="text-2xl font-extrabold text-blue-700">{selectedBusiness.name} Shop</h3>
                <div className="mt-5">
                  <p className="mb-3 text-xs font-extrabold uppercase text-rose-600">Common Challenges</p>
                  {selectedBusiness.challenges.map((item) => (
                    <LineItem key={item} tone="red" text={item} />
                  ))}
                </div>
                <div className="mt-6">
                  <p className="mb-3 text-xs font-extrabold uppercase text-emerald-600">How We Help</p>
                  {selectedBusiness.help.map((item) => (
                    <LineItem key={item} tone="green" text={item} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex h-36 w-24 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700">
                  <SelectedIcon size={54} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleFeatures = isExpanded ? featureCards : featureCards.slice(0, 9);

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader eyebrow="Why Businesses Choose Us" title="Everything You Need to Run Your Business Efficiently" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleFeatures.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-md ${color}`}>
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
          >
            {isExpanded ? "See less" : "See more"}
            <ChevronRight size={16} className={isExpanded ? "rotate-90" : ""} />
          </button>
        </div>
      </div>
    </section>
  );
}

function InvoiceSection() {
  const [selectedCategory, setSelectedCategory] = useState("A4");
  const [selectedTemplate, setSelectedTemplate] = useState<(typeof invoiceTemplates)[number] | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const categoryFilters = [
    { value: "A4", label: "A4 Invoice" },
    { value: "3inch-thermal", label: "3-Inch Thermal" },
    { value: "A5", label: "A5 Invoice" },
  ];

  const filteredTemplates = invoiceTemplates.filter((template) => template.category === selectedCategory);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScrollLeft - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedTemplate(null);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [selectedCategory]);

  const scrollTrack = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const movement = direction === "left" ? -320 : 320;
    track.scrollBy({ left: movement, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeader
          eyebrow="Invoice Templates"
          title="Beautiful, Compliant Invoices"
          desc="Choose from professional invoice formats tailored to your business."
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => {
              const active = filter.value === selectedCategory;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedCategory(filter.value)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${active ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                    }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTrack("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
              aria-label="Scroll left"
            >
              <ChevronRight className="rotate-180" size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredTemplates.map((template) => (
            <button
              key={template.title}
              type="button"
              onClick={() => setSelectedTemplate(template)}
              className="min-w-[280px] max-w-[280px] snap-start rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:min-w-[320px] cursor-pointer"
            >
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <iframe
                    src={template.file}
                    title={template.title}
                    className="h-56 w-full rounded-lg bg-white"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">{template.badge}</p>
                <h3 className="mt-2 text-lg font-extrabold text-slate-950">{template.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{template.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-blue-200 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">
            Use These Templates in Your Business
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {selectedTemplate ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-md">
          <div className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-white p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedTemplate(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src={selectedTemplate.file}
                title={selectedTemplate.title}
                className="h-[82vh] w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ControlSection() {
  const items = [
    ["Inventory Management", "Real-time stock tracking and low-stock alerts", Boxes],
    ["Sales Dashboard", "Track sales, profit and business performance instantly", Gauge],
    ["Accounting & Reports", "Powerful reports and account management", CircleDollarSign],
  ] as const;

  return (
    <section className="bg-slate-50 py-18">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.55fr_1fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">One Platform. Complete Control.</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Manage Your Business Seamlessly</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">Everything you need, in one place.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([title, desc, Icon]) => (
            <div key={title} className="text-center">
              <div className="mb-4 flex aspect-video items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                <Icon size={42} className="text-blue-600" />
              </div>
              <h3 className="text-sm font-extrabold text-slate-950">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.45fr_1fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">Trusted by Business Owners</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Loved by Thousands of Businesses</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-6 text-slate-600">"{review.text}"</p>
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="font-extrabold text-slate-950">{review.name}</p>
                <p className="text-xs font-semibold text-slate-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">Pricing Plans</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Simple Pricing. Powerful Features.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">Choose a plan that matches your business growth stage.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-md border bg-white p-6 shadow-sm ${plan.popular ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[10px] font-extrabold uppercase text-white">Most Popular</div>}
              <h3 className="text-lg font-extrabold text-slate-950">{plan.name}</h3>
              <p className="mt-3 text-3xl font-black text-slate-950">{plan.price}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">One-Time Payment</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <LineItem key={feature} tone="green" text={feature} />
                ))}
              </div>
              <Link
                to="/contact"
                className={`mt-7 flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-bold transition ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-slate-300 text-slate-800 hover:border-blue-300 hover:text-blue-700"
                  }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which is the best billing software in India?",
      answer:
        "In 2024, Retail Singh billing software is set to lead the industry as the premier choice in India. Boasting exceptional customer care, cutting-edge technologies, and an unwavering commitment to innovation, Retail Singh secures its top-ranking position through these remarkable attributes.",
    },
    {
      question: "What are the top 5 billing software in India?",
      answer:
        "As per our extensive analysis, we have identified the top 5 leading billing software in India: Retail Singh, Vyapar, My Bill Book, Swipe-billing, and Zoho Invoice.",
    },
    {
      question: "Which is the best supermarket billing software?",
      answer:
        "With a plethora of features, Retail Singh continues to reign as the premier supermarket billing software in India, offering numerous advantages to supermarkets.",
    },
    {
      question: "Who can provide the best bakery billing software with barcode?",
      answer:
        "Retail Singh offers the finest bakery billing software equipped with barcode functionality. Our software includes a barcode design feature, quick barcode printing option, and easy configuration on any thermal printer.",
    },
    {
      question: "What is the most popular GST billing software in India?",
      answer:
        "Retail Singh GST billing software is the leading choice for GST billing in India. With its user-friendly interface and comprehensive features, it provides everything you need to efficiently manage your billing processes. In addition, Retail Singh offers dedicated customer support, software installation, and hardware setup.",
    },
    {
      question: "Which is the best cosmetic billing software in India?",
      answer:
        "Plenty of cosmetic billing software options are available in India. However, the trend has shifted towards using Retail Singh billing software. This software offers an array of extensive features. For instance, cosmetic shop owners can conveniently upload bulk product details, as Retail Singh’s Excel sheet facilitates the addition of thousands of product details.",
    },
    {
      question: "How secure is the data with Retail Singh billing software?",
      answer:
        "At Retail Singh, safeguarding business data is our utmost priority. Our billing software offers essential features such as data encryption, frequent backups, and role-based access controls. We adhere to industry standards like GDPR and PCI DSS to effectively protect your data.",
    },
    {
      question: "Why should most people select Retail Singh for footwear shops?",
      answer:
        "Selecting Retail Singh for footwear shops is a wise choice due to its ease of use and advanced features. Notably, the auto-image update option revolutionizes inventory management, particularly beneficial for supermarkets. Additionally, Retail Singh offers AI technology, further enhancing its capabilities.",
    },
    {
      question: "Who can provide the best gift shop billing software?",
      answer:
        "Retail Singh is the ultimate choice for gift shop billing software, providing unmatched functionality designed specifically for the industry. With Retail Singh, you not only access comprehensive billing capabilities but also advanced features such as barcode design and quick barcode printing options.",
    },
    {
      question: "Which is the best mobile shop billing software or e-commerce application?",
      answer:
        "Retail Singh’s mobile shop billing software stands as the top choice for e-commerce applications in India. Its cutting-edge features enable users to effortlessly sell their products through the integrated e-commerce platform. This synergy empowers businesses to expand their market reach, boost sales, and take full advantage of Retail Singh’s comprehensive software suite.",
    },
    {
      question: "Which billing software can provide the best loyalty programs to customers?",
      answer:
        "Various billing software solutions come equipped with built-in loyalty program features designed to reward customers for repeat purchases, offer discounts, and track customer activity. For instance, Retail Singh offers an exclusive digital loyalty card technology in India, allowing businesses to create personalized loyalty cards for customers, and seamlessly add or deduct loyalty points from their purchases. As the sole provider of digital loyalty card technology in India, Retail Singh sets itself apart as a leader in this innovative service.",
    },
    {
      question: "Which software can prevent overstocking or understocking of inventory?",
      answer:
        "Overstocking poses a significant challenge in the retail industry. However, Retail Singh software offers accurate inventory reports and identifies bestselling items, empowering businesses to prevent overstocking effectively. By utilizing Retail Singh, businesses can proactively manage their inventory and enhance their operational efficiency.",
    },
    {
      question: "Which billing software integrates with weighing scales and POS hardware?",
      answer:
        "Retail Singh billing software solutions in India seamlessly integrate with weighing scales and POS hardware, enabling smooth incorporation of weight measurements into the billing process.",
    },
    {
      question: "Which software is good for being customizable to specific business needs?",
      answer:
        "Retail Singh billing software offers a range of customizable features for pricing, labelling, and reporting, catering to the distinct needs of various businesses, from small produce stands to large-scale grocery stores.",
    },
    {
      question: "What is the most highly regarded fruits and vegetables billing software?",
      answer:
        "There is no doubt that Retail Singh is the ultimate top pick. Retail Singh has rapidly gained widespread recognition, consistently providing precisely what customers want.",
    },
    {
      question: "Who can provide the best garment billing software with a barcode?",
      answer:
        "The Retail Singh offers top-notch garment billing software complete with barcode functionality. Our software includes a barcode design feature, quick barcode printing option, and easy configuration for thermal printers. With Retail Singh, you can streamline your garment barcode billing process effortlessly.",
    },
    {
      question: "Which is the most user-friendly garment billing software in India?",
      answer:
        "Retail Singh stands out as the top choice among the myriad retail billing software programs in India. Its user-friendly interface and seamless purchase bill creation empower every shop employee to serve customers effortlessly. In the realm of garment billing software, Retail Singh reigns supreme.",
    },
    {
      question: "Which billing software can provide AI technology for a shop?",
      answer:
        "In India, Retail Singh Billing Software stands out as the singular AI technology provider, offering substantial benefits for both customers and store owners. For instance, the Retail Singh Garment Software empowers garment shop owners to effortlessly create and update product images using its advanced AI tool — a unique capability exclusive to this software.",
    },
    {
      question: "What is the most preferred pet shop billing software?",
      answer:
        "Retail Singh stands out as the undisputed top choice for pet shop billing software, swiftly gaining prominence by perfectly aligning with customer demands.",
    },
    {
      question: "Where to find the best restaurant billing software?",
      answer:
        "Retail Singh restaurant billing software is unequivocally the top choice for any restaurant in India. Their extensive range of services caters to all the needs of a restaurant, delivering seamless A to Z solutions.",
    },
    {
      question: "What are the topmost invoice billing software?",
      answer:
        "In the realm of invoice billing software, there is a multitude of options available worldwide. Among these, Retail Singh stands out as the premier choice. Notably, Retail Singh is the most preferred software, with Marg following closely behind in second place. Busy and Tally Prime also hold positions as highly favorable options.",
    },
    {
      question: "Which is the best software for a footwear shop?",
      answer:
        "Retail Singh has firmly established itself as the go-to footwear solution, setting the standard as the foremost software solution for all footwear retail needs. Famed for its exceptional inventory management capabilities, Retail Singh is the undisputed choice for footwear shops in the retail sector.",
    },
    {
      question: "Which is the most advanced billing software for a hardware shop? And why?",
      answer:
        "In the realm of billing software programs in India, Retail Singh stands out as the unrivaled choice according to public consensus. What sets Retail Singh apart is its unique feature that sets it apart from its competitors – the ability to specify each product in a hardware shop and utilize the rack and track location option. This empowers customers to swiftly obtain the goods they desire, ultimately saving precious time. Moreover, it offers valuable insights into the location of various items.",
    },
    {
      question: "Which billing software had a customizable barcode?",
      answer:
        "In India, Retail Singh offers customizable barcodes, allowing users to generate barcodes using unique product identifiers and selecting their preferred format. The Retail Singh billing software includes a Visual Studio installation, enabling customers to design their own distinctive barcode labels.",
    },
    {
      question: "Which electrical billing software is widely considered the top choice?",
      answer:
        "Retail Singh stands as the ultimate answer, rising swiftly to the forefront. It delivers exactly what the customer desires.",
    },
    {
      question: "Which is the most advanced billing software for an electrical shop? And why?",
      answer:
        "Retail Singh has become widely acclaimed as a leading billing software in India thanks to its distinctive features. Notably, the innovative rack and track location feature empowers customers to efficiently place orders and save valuable time, while also ensuring access to crucial location details.",
    },
    {
      question: "Which billing software can generate detailed reports on sales, inventory, and other key metrics?",
      answer:
        "Retail Singh billing software provides powerful reporting and analytics tools for tracking and analyzing various business aspects.",
    },
    {
      question: "What type of weighing machines are compatible with fruits and vegetables billing software?",
      answer:
        "Retail Singh's fruits and vegetables billing software is designed to seamlessly integrate with a variety of weighing machines, such as digital scales, electronic weighing scales, and POS-integrated scales. However, Retail Singh stands out as the optimal choice in this category.",
    },
    {
      question: "Which home appliance billing software is widely regarded as the best option?",
      answer:
        "Retail Singh stands as the unrivaled solution, swiftly dominating the forefront of the industry. It directly aligns with customer needs, while harnessing cutting-edge AI and unwavering customer support to drive its billing software forward.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const mid = Math.ceil(faqs.length / 2);
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
     
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            These FAQs cover the most common questions businesses ask about billing software, GST, inventory, POS, and smart retail features.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4">
            {faqs.slice(0, mid).map((faq, idx) => {
             
              const originalIndex = idx;
              const isOpen = openIndex === originalIndex;

              return (
                <div key={faq.question} className="rounded-md border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleFaq(originalIndex)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-950 hover:bg-slate-50 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`shrink-0 text-xl text-slate-400 transition-all duration-300 ${isOpen ? "rotate-45 text-blue-600" : "rotate-0"}`}>
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4">
            {faqs.slice(mid).map((faq, idx) => {
      
              const originalIndex = mid + idx;
              const isOpen = openIndex === originalIndex;

              return (
                <div key={faq.question} className="rounded-md border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleFaq(originalIndex)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-950 hover:bg-slate-50 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={`shrink-0 text-xl text-slate-400 transition-all duration-300 ${isOpen ? "rotate-45 text-blue-600" : "rotate-0"}`}>
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SoftwareCta() {
  return (
    <section className="bg-white px-6 pb-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-blue-600 p-6 text-white shadow-xl shadow-blue-100 md:grid-cols-[0.65fr_1fr_0.5fr] md:items-center md:p-8">
        <div className="hidden min-h-28 items-center justify-center rounded-md bg-white/15 md:flex">
          <ShieldCheck size={64} />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Ready to Simplify Billing, Inventory & Accounting?</h2>
          <p className="mt-3 text-sm leading-6 text-blue-50">Join thousands of businesses using AI-powered billing software to save time, reduce errors, and grow confidently.</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/contact" className="rounded-md bg-white px-5 py-3 text-center text-sm font-extrabold text-blue-700 transition hover:bg-blue-50">
            Book Free Demo
          </Link>
          <Link to="/contact" className="rounded-md bg-emerald-500 px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-emerald-600">
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>}
    </div>
  );
}

function LineItem({ text, tone }: { text: string; tone: "green" | "red" }) {
  return (
    <div className="mb-2 flex items-start gap-2 text-sm text-slate-600">
      <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${tone === "green" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
        <Check size={11} />
      </span>
      <span>{text}</span>
    </div>
  );
}
