'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const services = [
  'Social Media Marketing',
  'SEO - Websites and Funnel Building',
  'Paid Ads and Lead Generation',
  'Branding and Design',
  'Influencer Marketing and UGC',
  'Content and Video Production',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    customService: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCustomService, setShowCustomService] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'service') {
      setShowCustomService(value === 'Other');
      if (value !== 'Other') {
        setFormData(prev => ({ ...prev, customService: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceValue = formData.service === 'Other' ? formData.customService : formData.service;
      
      const { error } = await supabase
        .from('contact')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: serviceValue,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        customService: '',
        message: ''
      });
      setShowCustomService(false);

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 px-4 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-14">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-medium px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              Contact us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Let's Build Something Impactful Together
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or need expert guidance? We'd love to hear from you. Share your requirements and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-8">Let's Get Started</h2>
              
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                  />
                </div>

                {/* Company */}
                <div className="group">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company/Brand name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a855f7'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="" disabled>Services you are interested in</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Service Field */}
                {showCustomService && (
                  <div className="group animate-fade-in-down">
                    <input
                      type="text"
                      name="customService"
                      value={formData.customService}
                      onChange={handleChange}
                      placeholder="Please specify your service requirements"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 animate-pulse-border"
                    />
                  </div>
                )}

                {/* Message */}
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-semibold rounded-lg shadow-lg shadow-purple-900/50 hover:shadow-purple-900/80 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center animate-fade-in">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center animate-fade-in">
                    Failed to send message. Please try again.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Side Image */}
          <div className="animate-fade-in-right hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20 group-hover:from-purple-600/30 group-hover:to-violet-600/30 transition-all duration-500 z-10"></div>
              <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl group-hover:border-purple-500/40 transition-all duration-500 z-20"></div>
              <img
                src="/contact-side.png"
                alt="Contact Us"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse-border {
          0%, 100% {
            border-color: rgb(168 85 247 / 0.5);
          }
          50% {
            border-color: rgb(168 85 247 / 1);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}