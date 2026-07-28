import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
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
        toast.success("Message sent! Leveling up your request.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Process interrupted. Please try again.");
      }
    } catch (err) {
      toast.error("Connection failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-24">
      <header className="bg-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Let's Build Something <span className="text-blue-600">Great Together</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you navigate the digital landscape.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Form */}
          <div>
            <div className="bg-slate-50 p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-slate-300 rounded-md px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-white border border-slate-300 rounded-md px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-slate-300 rounded-md px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full bg-white border border-slate-300 rounded-md px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all text-sm placeholder:text-slate-400"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
                <InfoCard 
                  icon={<Mail />} 
                  title="Email" 
                  value="retailsingh@gmail.com" 
                  sub="Our support team usually responds within 4 hours."
                />
                <InfoCard 
                  icon={<Phone />} 
                  title="Phone" 
                  value="+91 9608524375" 
                  sub="Mon-Fri from 9am to 6pm PST."
                />
                {/* <InfoCard 
                  icon={<MapPin />} 
                  title="Office" 
                  value="123 Innovation Drive" 
                  sub="Silicon Valley, CA 94025"
                /> */}
                <InfoCard 
                  icon={<Clock />} 
                  title="Business Hours" 
                  value="9:00 AM - 6:00 PM" 
                  sub="Monday to Friday, Weekends Off"
                />
              </div>
            </div>

            {/* <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Find Us on the Map</h3>
              <div className="aspect-video w-full bg-white rounded-xl border border-slate-200 overflow-hidden relative flex items-center justify-center">
                <div className="text-slate-400 text-center p-8">
                  <MapPin size={48} className="mx-auto mb-4 opacity-20 text-blue-600" />
                  <p className="font-bold text-slate-800">Google Maps Placeholder</p>
                  <p className="text-xs">In a production app, an interactive map would load here.</p>
                </div>
              </div>
            </div> */}

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Follow Our Updates</h3>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Github, MessageSquare].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white hover:border-blue-100 transition-all shadow-sm">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value, sub }: any) {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">{title}</h4>
        <p className="text-lg font-bold text-slate-900 mb-1">{value}</p>
        <p className="text-sm text-slate-500 leading-snug">{sub}</p>
      </div>
    </div>
  );
}
