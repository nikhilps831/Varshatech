"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Shield, Paperclip, MessageSquare, PhoneCall, Mail, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/data/companyData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSolution?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  initialProduct,
  initialSolution
}: EnquiryModalProps) {
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
    preferredContact: "Phone / WhatsApp",
    attachmentName: ""
  });

  const [loading, setLoading] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    } else if (initialSolution) {
      setFormData((prev) => ({ ...prev, product: `Solution: ${initialSolution}` }));
    }
  }, [initialProduct, initialSolution, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, attachmentName: e.target.files[0].name });
    }
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
          sourcePage: initialProduct ? `Product: ${initialProduct}` : initialSolution ? `Solution: ${initialSolution}` : "Global Quote CTA"
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedId(data.enquiryId);
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error submitting enquiry. Please contact us directly at " + COMPANY_INFO.phones[0]);
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmittedId(null);
    setErrorMessage("");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "Power Plants",
      product: "",
      quantity: "",
      location: "",
      message: "",
      preferredContact: "Phone / WhatsApp",
      attachmentName: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Header Bar */}
        <div className="bg-blueprint-grid text-white px-6 py-5 flex items-center justify-between border-b border-slate-700">
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">VERSATECH EPC B2B Portal</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide mt-1">REQUEST A TECHNICAL QUOTE</h3>
            <p className="text-xs text-slate-300">Engineering, Manufacturing & Turnkey Material Handling Solutions</p>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submittedId ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-mono font-semibold border border-slate-200">
                Enquiry Reference ID: {submittedId}
              </span>
              <h4 className="text-2xl font-bold text-slate-900 mt-3">Enquiry Received Successfully</h4>
              <p className="text-slate-600 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
                Thank you for contacting <strong className="text-slate-800">VERSATECH EPC</strong>. Your requirement has been routed to our senior project engineers in Nagpur, Maharashtra.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md mx-auto my-6 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Response Time:</span>
                  <span className="font-semibold text-slate-800">Within 24 Business Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email Notification Sent:</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.emails.sales}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Technical Support Hotlines:</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.phones[0]}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="btn-primary-orange px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-bold"
              >
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {errorMessage && (
                <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-start space-x-3 rounded">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>{errorMessage}</div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Company / Organization Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Vidarbha Thermal Power Ltd"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Business Email <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sales@company.com"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    placeholder="e.g. +91 9822012345"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    Target Product / Solution
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="e.g. Dense Phase Ash Vessel / Coal Conveyor"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Estimated Quantity / Capacity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 2 Units / 100 TPH System"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Location / Plant City
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Nagpur / Chandrapur / Raigarh"
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Detailed Requirement / Message <span className="text-orange-600">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify process conditions, material characteristics, capacity (TPH/m3), temperatures, or specific equipment requirements..."
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Upload Drawing / Specification / PDF
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="modal-file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.dwg,.dxf,.png,.jpg,.jpeg"
                      className="hidden"
                    />
                    <label
                      htmlFor="modal-file"
                      className="flex items-center justify-between w-full px-3 py-2.5 bg-slate-100 hover:bg-slate-200 border border-dashed border-slate-400 rounded cursor-pointer text-xs text-slate-700 transition-colors"
                    >
                      <span className="truncate">
                        {formData.attachmentName ? formData.attachmentName : "Choose Drawing / Spec File..."}
                      </span>
                      <Paperclip className="w-4 h-4 text-slate-500 ml-2 flex-shrink-0" />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center space-x-4 pt-1">
                    {["Phone / WhatsApp", "Email", "In-Person Meeting"].map((method) => (
                      <label key={method} className="flex items-center text-xs text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="mr-1.5 text-blue-600 focus:ring-blue-500"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-xs text-slate-500">
                  <Shield className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
                  Your business inquiry is handled with strict confidentiality.
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto btn-primary-orange px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
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
  );
}
