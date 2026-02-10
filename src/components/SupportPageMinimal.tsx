"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

type FormStep = 1 | 2 | 3;

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  issueType: string;
  priority: string;
  description: string;
  attachments: string;
}

export function SupportPageMinimal() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [showForm, setShowForm] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    issueType: '',
    priority: '',
    description: '',
    attachments: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as FormStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const steps = [
    { number: 1, label: 'Contact Information' },
    { number: 2, label: 'Issue Details' },
    { number: 3, label: 'Additional Info' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1
          className="text-black mb-4"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 400,
            fontFamily: 'Jost, sans-serif',
          }}
        >
          Support
        </h1>

        <p
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            fontFamily: 'Jost, sans-serif',
          }}
        >
          Need technical assistance with your LED display? Our support team is ready to help you.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => {
              setShowForm(true);
              setShowContact(false);
            }}
            className="cursor-pointer px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              fontFamily: 'Jost, sans-serif',
            }}
          >
            Submit Ticket
          </button>

          <button
            onClick={() => {
              setShowContact(true);
              setShowForm(false);
            }}
            className="cursor-pointer px-8 py-3 bg-transparent text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              fontFamily: 'Jost, sans-serif',
            }}
          >
            Call Support
          </button>
        </div>
      </div>

      {/* Form Section */}
      <AnimatePresence mode="wait">
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-6"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2
                className="text-black mb-3"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                Submit a Support Ticket
              </h2>

              <p
                className="text-gray-600 mb-8"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                Fill out the form below to get started and our technical support team will be in touch shortly.
              </p>

              {/* Step Indicators */}
              <div className="flex items-center gap-6 mb-10 border-b border-gray-200 pb-4">
                {steps.map((step) => (
                  <button
                    key={step.number}
                    onClick={() => setCurrentStep(step.number as FormStep)}
                    className="cursor-pointer flex items-center gap-2 transition-colors"
                    style={{ fontFamily: 'Jost, sans-serif' }}
                  >
                    <div
                      className={`flex items-center justify-center w-7 h-7 rounded-full text-sm ${
                        currentStep === step.number
                          ? 'bg-black text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                      style={{ fontWeight: 400 }}
                    >
                      {step.number}
                    </div>
                    <span
                      className={currentStep === step.number ? 'text-black' : 'text-gray-400'}
                      style={{ fontSize: '0.95rem', fontWeight: 300 }}
                    >
                      {step.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="text-black mb-6"
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                          fontWeight: 400,
                          fontFamily: 'Jost, sans-serif',
                        }}
                      >
                        1. Contact Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Full Name */}
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone (Optional)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="text-black mb-6"
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                          fontWeight: 400,
                          fontFamily: 'Jost, sans-serif',
                        }}
                      >
                        2. Issue Details
                      </h3>

                      <div className="space-y-6 mb-8">
                        {/* Issue Type */}
                        <div>
                          <label
                            htmlFor="issueType"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Issue Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="issueType"
                            name="issueType"
                            value={formData.issueType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          >
                            <option value="">Select issue type</option>
                            <option value="technical">Technical Issue</option>
                            <option value="installation">Installation Support</option>
                            <option value="maintenance">Maintenance Request</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Priority */}
                        <div>
                          <label
                            htmlFor="priority"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Priority <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="priority"
                            name="priority"
                            value={formData.priority}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif' }}
                          >
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>

                        {/* Description */}
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Description <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            placeholder="Please describe your issue in detail..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif', lineHeight: 1.6 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="text-black mb-6"
                        style={{
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                          fontWeight: 400,
                          fontFamily: 'Jost, sans-serif',
                        }}
                      >
                        3. Additional Info
                      </h3>

                      <div className="space-y-6 mb-8">
                        {/* Attachments */}
                        <div>
                          <label
                            htmlFor="attachments"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Attachments (Optional)
                          </label>
                          <div className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-black transition-colors cursor-pointer">
                            <p className="text-gray-500" style={{ fontSize: '0.9rem', fontFamily: 'Jost, sans-serif' }}>
                              Drag and drop files here or click to browse
                            </p>
                            <p className="text-gray-400 text-sm mt-2" style={{ fontFamily: 'Jost, sans-serif' }}>
                              Max file size: 10MB
                            </p>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div>
                          <label
                            htmlFor="additionalNotes"
                            className="block text-black mb-2"
                            style={{ fontSize: '0.9rem', fontWeight: 400, fontFamily: 'Jost, sans-serif' }}
                          >
                            Additional Notes
                          </label>
                          <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            rows={4}
                            placeholder="Any additional information that might help us assist you..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                            style={{ fontSize: '0.95rem', fontFamily: 'Jost, sans-serif', lineHeight: 1.6 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 pt-6">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="cursor-pointer px-8 py-3 bg-transparent text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'Jost, sans-serif',
                      }}
                    >
                      Back
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="cursor-pointer px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors min-w-[140px]"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'Jost, sans-serif',
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="cursor-pointer px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors min-w-[140px]"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 400,
                        fontFamily: 'Jost, sans-serif',
                      }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-6"
          >
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2
                className="text-black mb-3 text-center"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                Contact Support
              </h2>

              <p
                className="text-gray-600 mb-8 text-center"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontFamily: 'Jost, sans-serif',
                }}
              >
                Call us directly for immediate assistance with your LED display solutions.
              </p>

              <div className="space-y-6">
                {/* Phone Support */}
                <div className="flex items-center justify-center gap-4 p-6 border border-gray-200 rounded-lg">
                  <Phone size={24} className="text-black" />
                  <div>
                    <p className="text-black font-medium" style={{ fontSize: '1.1rem', fontFamily: 'Jost, sans-serif' }}>
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>
                      Mon - Fri: 9am - 6pm PST
                    </p>
                  </div>
                </div>

                {/* Emergency Line */}
                <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
                  <Phone size={24} className="text-black" />
                  <div>
                    <p className="text-black font-medium" style={{ fontSize: '1.1rem', fontFamily: 'Jost, sans-serif' }}>
                      +1 (555) 911-DISP
                    </p>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
