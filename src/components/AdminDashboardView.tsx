"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Search, Download, Filter, RefreshCw, CheckCircle2, Clock, FileText, Phone, Mail, MessageSquare, AlertCircle, Shield, User, Building, MapPin, Tag, Plus, Edit3 } from "lucide-react";
import { EnquiryRecord } from "@/lib/db";

export default function AdminDashboardView() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);

  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState<EnquiryRecord["status"]>("NEW");
  const [newNote, setNewNote] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "admin" || passcode === "versatech2008" || passcode === "1234") {
      setIsAuthenticated(true);
      fetchEnquiries();
    } else {
      setAuthError("Invalid admin passcode. Try 'admin' or 'versatech2008'.");
    }
  };

  const fetchEnquiries = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/enquiries");
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.data);
      } else {
        setError(data.error || "Failed to load enquiries");
      }
    } catch (err) {
      setError("Network error fetching enquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry) return;
    setUpdatingStatus(true);

    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          note: newNote
        })
      });

      const data = await res.json();
      if (data.success) {
        setSelectedEnquiry(data.data);
        setNewNote("");
        fetchEnquiries();
      } else {
        alert(data.error || "Failed to update enquiry status");
      }
    } catch (err) {
      alert("Error updating status");
    } finally {
      setUpdatingStatus(false);
    }
  };

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        item.id.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.product.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [enquiries, statusFilter, searchQuery]);

  const stats = useMemo(() => {
    return {
      total: enquiries.length,
      newCount: enquiries.filter((e) => e.status === "NEW").length,
      inProgress: enquiries.filter((e) => e.status === "CONTACTED" || e.status === "IN DISCUSSION").length,
      quotationSent: enquiries.filter((e) => e.status === "QUOTATION SENT").length,
      won: enquiries.filter((e) => e.status === "WON").length,
      closed: enquiries.filter((e) => e.status === "CLOSED").length,
    };
  }, [enquiries]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl text-white">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-white rounded-xl p-1.5 flex items-center justify-center mx-auto mb-3 shadow-md">
              <Image
                src="/logo.png"
                alt="VERSATECH EPC Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-black tracking-wide">VERSATECH EPC ADMIN</h2>
            <p className="text-xs text-slate-400 mt-1">Enquiry Management & Lead Pipeline Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-red-950/80 border border-red-800 text-red-300 text-xs rounded">
                {authError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                Enter Admin Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode: admin or versatech2008"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary-orange py-3 rounded text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              ACCESS DASHBOARD
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500">
            Internal Corporate Tool • VERSATECH EPC Nagpur
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-orange-400 uppercase">LIVE B2B ENQUIRY BACKEND</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white mt-1">
              VERSATECH EPC Admin Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Manage incoming quote requests, customer communications, status updates, and reports.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchEnquiries}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded border border-slate-700 flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>

            <a
              href="/api/enquiries/export"
              target="_blank"
              download
              className="btn-primary-orange px-4 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* Analytics Summary Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-[11px] font-bold text-slate-500 uppercase">Total Enquiries</div>
            <div className="text-2xl font-black text-slate-900 mt-1">{stats.total}</div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm">
            <div className="text-[11px] font-bold text-blue-800 uppercase">New</div>
            <div className="text-2xl font-black text-blue-900 mt-1">{stats.newCount}</div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl shadow-sm">
            <div className="text-[11px] font-bold text-amber-800 uppercase">In Discussion</div>
            <div className="text-2xl font-black text-amber-900 mt-1">{stats.inProgress}</div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl shadow-sm">
            <div className="text-[11px] font-bold text-indigo-800 uppercase">Quotation Sent</div>
            <div className="text-2xl font-black text-indigo-900 mt-1">{stats.quotationSent}</div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl shadow-sm">
            <div className="text-[11px] font-bold text-emerald-800 uppercase">Won</div>
            <div className="text-2xl font-black text-emerald-900 mt-1">{stats.won}</div>
          </div>

          <div className="bg-slate-200 border border-slate-300 p-4 rounded-xl shadow-sm">
            <div className="text-[11px] font-bold text-slate-700 uppercase">Closed</div>
            <div className="text-2xl font-black text-slate-800 mt-1">{stats.closed}</div>
          </div>
        </div>

        {/* Toolbar: Search + Status Filters */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-96 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ID, Name, Company, Phone, Product..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full md:w-auto">
            {["ALL", "NEW", "CONTACTED", "QUOTATION SENT", "IN DISCUSSION", "WON", "CLOSED"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider transition-colors border ${
                  statusFilter === st
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Main Table & Details View */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-500 text-sm">Loading enquiries...</div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">No enquiries found matching filters.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-800 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3">Ref ID</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Customer & Company</th>
                    <th className="p-3">Product / Solution</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEnquiries.map((enq) => {
                    const isSelected = selectedEnquiry?.id === enq.id;
                    return (
                      <tr
                        key={enq.id}
                        className={`hover:bg-blue-50/50 transition-colors ${
                          isSelected ? "bg-blue-50/80 font-medium" : ""
                        }`}
                      >
                        <td className="p-3 font-mono font-bold text-slate-900">{enq.id}</td>
                        <td className="p-3 text-slate-500 whitespace-nowrap">
                          {new Date(enq.dateTime).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">{enq.name}</div>
                          <div className="text-[11px] text-slate-500">{enq.company}</div>
                          <div className="text-[10px] text-slate-400">{enq.phone}</div>
                        </td>
                        <td className="p-3 max-w-xs">
                          <div className="font-semibold text-slate-800 truncate">{enq.product}</div>
                          <div className="text-[10px] text-orange-600 font-mono">{enq.industry}</div>
                        </td>
                        <td className="p-3 text-slate-600">{enq.location || "N/A"}</td>
                        <td className="p-3">
                          <span
                            className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase ${
                              enq.status === "NEW"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : enq.status === "QUOTATION SENT"
                                ? "bg-indigo-100 text-indigo-800 border border-indigo-200"
                                : enq.status === "WON"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : enq.status === "CLOSED"
                                ? "bg-slate-200 text-slate-700"
                                : "bg-amber-100 text-amber-800 border border-amber-200"
                            }`}
                          >
                            {enq.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              setSelectedEnquiry(enq);
                              setNewStatus(enq.status);
                            }}
                            className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded text-[11px] font-bold uppercase transition-colors"
                          >
                            Manage
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detailed Modal / Editor for Selected Enquiry */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 my-8">
              
              <div className="bg-blueprint-grid text-white p-6 flex items-center justify-between border-b border-slate-700">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-orange-400 font-bold">{selectedEnquiry.id}</span>
                    <span className="text-xs text-slate-400">
                      • {new Date(selectedEnquiry.dateTime).toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-0.5">{selectedEnquiry.name}</h3>
                  <p className="text-xs text-slate-300">{selectedEnquiry.company}</p>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-slate-700">
                
                {/* Contact Actions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={`tel:${selectedEnquiry.phone}`}
                    className="p-3 bg-blue-50 border border-blue-200 rounded flex items-center space-x-2 text-blue-900 font-bold"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Call: {selectedEnquiry.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${selectedEnquiry.name}, regarding your VERSATECH EPC enquiry (${selectedEnquiry.id})...`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-50 border border-emerald-200 rounded flex items-center space-x-2 text-emerald-900 font-bold"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Customer</span>
                  </a>

                  <a
                    href={`mailto:${selectedEnquiry.email}?subject=${encodeURIComponent(`VERSATECH EPC Proposal – ${selectedEnquiry.id}`)}`}
                    className="p-3 bg-slate-100 border border-slate-200 rounded flex items-center space-x-2 text-slate-900 font-bold"
                  >
                    <Mail className="w-4 h-4 text-slate-600" />
                    <span>Send Email</span>
                  </a>
                </div>

                {/* Requirement Overview */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 uppercase font-bold block">Industry Sector:</span>
                      <span className="font-semibold text-slate-900">{selectedEnquiry.industry}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-bold block">Product / Solution:</span>
                      <span className="font-semibold text-slate-900">{selectedEnquiry.product}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-bold block">Quantity / Capacity:</span>
                      <span className="font-semibold text-slate-900">{selectedEnquiry.quantity || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-bold block">Plant Location:</span>
                      <span className="font-semibold text-slate-900">{selectedEnquiry.location || "N/A"}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-400 uppercase font-bold block mb-1">Customer Requirement Message:</span>
                    <p className="text-slate-800 text-sm whitespace-pre-wrap leading-relaxed">
                      {selectedEnquiry.message}
                    </p>
                  </div>
                </div>

                {/* Status Modifier & Internal Notes */}
                <form onSubmit={handleStatusUpdate} className="bg-slate-900 text-white p-5 rounded-lg space-y-4">
                  <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                    Update Enquiry Status & Internal Notes
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                        Select New Status
                      </label>
                      <select
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value as any)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="QUOTATION SENT">QUOTATION SENT</option>
                        <option value="IN DISCUSSION">IN DISCUSSION</option>
                        <option value="WON">WON</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase text-slate-300 mb-1">
                        Add Internal Follow-Up Note
                      </label>
                      <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="e.g. Sent technical drawing PDF via email..."
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={updatingStatus}
                      className="btn-primary-orange px-6 py-2 rounded text-xs font-bold uppercase tracking-wider"
                    >
                      {updatingStatus ? "Saving..." : "Save Status & Notes"}
                    </button>
                  </div>
                </form>

                {/* Internal Notes History */}
                {selectedEnquiry.notes && selectedEnquiry.notes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Internal Activity History
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {selectedEnquiry.notes.map((note, idx) => (
                        <li key={idx} className="p-2 bg-slate-100 rounded border border-slate-200">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-5 py-2 bg-slate-800 text-white rounded text-xs font-bold uppercase"
                >
                  Close Manager
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
