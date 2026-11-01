import React, { useState } from 'react';
import { Send, MessageCircle, MapPin, Phone, Mail, Clock, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../constants/config';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Retail Distribution',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const inquiryOptions = [
    'Retail Distribution & Supermarkets',
    'Wholesale & Bulk Orders',
    'Consumer Feedback & Inquiries',
    'Business & Brand Partnerships',
    'Supply Chain / Vendor',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry for O'CHOCO Rollay Biscuits:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}
Message: ${formData.message}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: 'Retail Distribution',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#1F0B08] text-[#FFF5E8] overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D99A32]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99A32] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with O'CHOCO</span>
            <span aria-hidden="true" className="text-[#592318]">·</span>
            <span>Commercial & Consumer Desk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF5E8] tracking-tight">
            Get in Touch
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EBD8BD]/85 leading-relaxed">
            Whether you are a retailer looking to stock O'CHOCO Rollay Biscuits, a wholesale distributor in Ethiopia, or a biscuit enthusiast, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & WhatsApp Access */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-gradient-to-b from-[#35140F] to-[#2A0F0B] border border-[#592318] p-8 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-[#FFF5E8]">
                  Commercial Contact
                </h3>
                <p className="text-xs text-[#EBD8BD]/80 mt-1">
                  Representative placeholders for O'CHOCO Rollay Biscuits in Ethiopia.
                </p>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#592318] border border-[#D99A32]/20 flex items-center justify-center text-[#D99A32] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D99A32]">
                      Location
                    </p>
                    <p className="text-sm font-medium text-[#FFF5E8]">
                      {BRAND_CONFIG.contact.address}
                    </p>
                    <p className="text-xs text-[#EBD8BD]/70">Available nationwide in Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#592318] border border-[#D99A32]/20 flex items-center justify-center text-[#D99A32] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D99A32]">
                      Phone
                    </p>
                    <a
                      href={`tel:${BRAND_CONFIG.contact.phoneCallable}`}
                      className="text-sm font-medium text-[#FFF5E8] hover:text-[#D99A32] transition-colors"
                    >
                      {BRAND_CONFIG.contact.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#EBD8BD]/70">Ethiopian Business Hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#592318] border border-[#D99A32]/20 flex items-center justify-center text-[#D99A32] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D99A32]">
                      Email Inquiries
                    </p>
                    <a
                      href={`mailto:${BRAND_CONFIG.contact.email}`}
                      className="text-sm font-medium text-[#FFF5E8] hover:text-[#D99A32] transition-colors"
                    >
                      {BRAND_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#592318] border border-[#D99A32]/20 flex items-center justify-center text-[#D99A32] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D99A32]">
                      Hours
                    </p>
                    <p className="text-sm font-medium text-[#FFF5E8]">
                      {BRAND_CONFIG.contact.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-[#592318]">
                <a
                  href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-2xl text-sm font-bold bg-[#25D366] text-[#123E1E] hover:bg-[#22bf5b] transition-all shadow-lg shadow-[#25D366]/20 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-[#123E1E]" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
                <p className="text-[11px] text-center text-[#EBD8BD]/60 mt-2">
                  Configurable phone number: {BRAND_CONFIG.contact.phoneDisplay}
                </p>
              </div>

            </div>

            {/* Quick Distribution Note */}
            <div className="p-6 rounded-2xl bg-[#592318]/25 border border-[#592318] text-xs text-[#EBD8BD]/80 space-y-1">
              <p className="font-bold text-[#D99A32] uppercase tracking-wider">
                Distribution Network
              </p>
              <p>
                Inquiries are welcomed for Addis Ababa, Hawassa, Adama, Bahir Dar, Dire Dawa, and surrounding regional markets.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#35140F] to-[#2A0F0B] border border-[#592318] p-8 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#D99A32]/20 border border-[#D99A32] text-[#D99A32] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#FFF5E8]">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-sm text-[#EBD8BD]/90 max-w-md mx-auto">
                      Your inquiry regarding <strong className="text-[#D99A32]">{formData.inquiryType}</strong> has been received. Our team will review your details promptly.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1F0B08] border border-[#592318] max-w-md mx-auto text-left text-xs space-y-2 text-[#EBD8BD]/80">
                    <div className="flex justify-between border-b border-[#592318] pb-1.5">
                      <span className="text-[#D99A32]">Contact:</span>
                      <span className="text-[#FFF5E8]">{formData.name} ({formData.phone})</span>
                    </div>
                    <div className="flex justify-between border-b border-[#592318] pb-1.5">
                      <span className="text-[#D99A32]">Email:</span>
                      <span className="text-[#FFF5E8]">{formData.email}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-[#D99A32] block mb-1">Message:</span>
                      <p className="text-[#FFF5E8] italic line-clamp-3">"{formData.message}"</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#592318] text-[#FFF5E8] hover:bg-[#D99A32] hover:text-[#35140F] transition-all cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-[#D99A32]/40 text-[#D99A32] hover:bg-[#D99A32]/10 transition-all cursor-pointer"
                    >
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#FFF5E8]">
                      Inquiry Submission Form
                    </h3>
                    <p className="text-xs text-[#EBD8BD]/80 mt-1">
                      Fill out the form below. All fields marked with * are required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Abebe Bekele"
                        className="w-full px-4 py-3 rounded-xl bg-[#1F0B08] border border-[#592318] focus:border-[#D99A32] focus:ring-1 focus:ring-[#D99A32] text-sm text-[#FFF5E8] placeholder-[#EBD8BD]/40 outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+251 9..."
                        className="w-full px-4 py-3 rounded-xl bg-[#1F0B08] border border-[#592318] focus:border-[#D99A32] focus:ring-1 focus:ring-[#D99A32] text-sm text-[#FFF5E8] placeholder-[#EBD8BD]/40 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1F0B08] border border-[#592318] focus:border-[#D99A32] focus:ring-1 focus:ring-[#D99A32] text-sm text-[#FFF5E8] placeholder-[#EBD8BD]/40 outline-none transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label htmlFor="contact-type" className="block text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                        Inquiry Type *
                      </label>
                      <select
                        id="contact-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1F0B08] border border-[#592318] focus:border-[#D99A32] focus:ring-1 focus:ring-[#D99A32] text-sm text-[#FFF5E8] outline-none transition-all cursor-pointer"
                      >
                        {inquiryOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1F0B08] text-[#FFF5E8]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#D99A32]">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your distribution needs, retail store location, or wholesale volume requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1F0B08] border border-[#592318] focus:border-[#D99A32] focus:ring-1 focus:ring-[#D99A32] text-sm text-[#FFF5E8] placeholder-[#EBD8BD]/40 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full text-sm font-bold text-[#35140F] bg-gradient-to-r from-[#F0B24B] via-[#D99A32] to-[#C28322] hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-[#D99A32]/25 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#35140F] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#35140F]" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#EBD8BD]/60">
                    We respect your privacy. Inquiries are handled directly by the PAPELÉE distributor team in Ethiopia.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
