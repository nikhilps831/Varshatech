"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe, MessageSquare, Send, CheckCircle2, Shield, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "Power Plants",
    product: "",
    quantity: "",
    location: "",
    message: "",
    preferredContact: "Phone / WhatsApp"
  });

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: "Contact Page Form"
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedId(data.enquiryId);
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry.");
      }
    } catch (err) {
      setErrorMessage("Network error submitting enquiry. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <span>GET IN TOUCH WITH OUR NAGPUR TEAM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact VERSATECH EPC
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Reach out to our project engineering department for technical consultations, product quotations, or plant site visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-blueprint-grid text-white p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">
                  REGISTERED OFFICE & WORKS
                </span>
                <h3 className="text-2xl font-black text-white mt-1">VERSATECH EPC</h3>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div className="leading-relaxed">
                    <strong className="text-white block font-semibold mb-0.5">Address:</strong>
                    {COMPANY_INFO.address}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Phone Numbers:</strong>
                    {COMPANY_INFO.phones.map((p) => (
                      <div key={p}>
                        <a href={`tel:${p}`} className="hover:text-orange-400 transition-colors font-mono">
                          {p}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Email Addresses:</strong>
                    <div><a href={`mailto:${COMPANY_INFO.emails.sales}`} className="hover:text-orange-400 transition-colors">{COMPANY_INFO.emails.sales}</a></div>
                    <div><a href={`mailto:${COMPANY_INFO.emails.info}`} className="hover:text-orange-400 transition-colors">{COMPANY_INFO.emails.info}</a></div>
                    <div><a href={`mailto:${COMPANY_INFO.emails.primary}`} className="hover:text-orange-400 transition-colors">{COMPANY_INFO.emails.primary}</a></div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Website:</strong>
                    <a href={`http://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors font-mono">
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phones[0]}`}
                  className="btn-secondary-blue py-3 rounded text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello VERSATECH EPC, I would like to enquire about your material handling systems.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md h-64 bg-slate-100">
              <iframe
                title="VERSATECH EPC Location Map"
                src="https://maps.google.com/maps?q=33%2C%20Sarvashree%20Nagar%2C%20Umred%20Road%2C%20Dighori%2C%20Nagpur%20%E2%80%93%20440034%2C%20Maharashtra%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Contact / Quote Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                SEND TECHNICAL REQUIREMENT
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below to receive a detailed engineering quote and proposal.
              </p>
            </div>

            {submittedId ? (
              <div className="text-center py-10 bg-white p-6 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-3" />
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-mono font-bold">
                  Enquiry ID: {submittedId}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-3">Enquiry Received Successfully</h4>
                <p className="text-slate-600 text-xs max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you for contacting VERSATECH EPC. Your requirement has been received. Our team will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmittedId(null)}
                  className="mt-6 text-xs font-bold text-orange-600 underline uppercase"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <div>{errorMessage}</div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Company Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Works Name"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sales@company.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone / WhatsApp Number <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9000000000"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Industry Sector
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Power Plants">Power Plants</option>
                      <option value="Coal Handling Plants">Coal Handling Plants</option>
                      <option value="Cement Plants">Cement Plants</option>
                      <option value="Mining">Mining</option>
                      <option value="Chemical Industries">Chemical Industries</option>
                      <option value="Steel / Metal Industries">Steel / Metal Industries</option>
                      <option value="Construction">Construction</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Fertilizer Industries">Fertilizer Industries</option>
                      <option value="Food Industries">Food Industries</option>
                      <option value="Grain Handling">Grain Handling</option>
                      <option value="Quarries">Quarries</option>
                      <option value="Industrial Manufacturing">Industrial Manufacturing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Target Equipment / Solution
                    </label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="e.g. Dense Phase Ash Vessel / Silo"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Requirement Details <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe material characteristics, capacity (TPH/m3), operating temperatures, or project timelines..."
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-orange px-8 py-3 rounded text-xs font-extrabold uppercase tracking-wider flex items-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND ENQUIRY</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
