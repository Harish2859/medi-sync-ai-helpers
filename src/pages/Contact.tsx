
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitResult({
        success: true,
        message: 'Thank you for your message. Our team will get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-medisync-50 to-mint-50 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
                Contact MediSync AI
              </h1>
              <p className="text-lg text-gray-700">
                We're here to help with any questions or concerns about our AI-powered healthcare platform.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="font-semibold text-xl text-gray-900">Send us a message</h2>
                    <p className="text-sm text-gray-500 mt-1">Fill out the form below and we'll get back to you soon</p>
                  </div>
                  
                  <div className="p-6">
                    {submitResult && (
                      <div className={`mb-6 p-4 rounded-md flex items-start ${
                        submitResult.success ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'
                      }`}>
                        {submitResult.success ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={`text-sm ${submitResult.success ? 'text-green-700' : 'text-red-700'}`}>
                          {submitResult.message}
                        </p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-medisync-500 focus:border-medisync-500 sm:text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-medisync-500 focus:border-medisync-500 sm:text-sm"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-medisync-500 focus:border-medisync-500 sm:text-sm"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Billing">Billing & Subscription</option>
                          <option value="Partnership">Partnership Opportunities</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-medisync-500 focus:border-medisync-500 sm:text-sm"
                            placeholder="How can we help you?"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-medisync-600 hover:bg-medisync-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medisync-500 ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-medisync-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-2">
                        We'll respond to your inquiry within 24 hours
                      </p>
                      <a 
                        href="mailto:support@medisyncai.com" 
                        className="text-medisync-600 hover:text-medisync-700 font-medium"
                      >
                        support@medisyncai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-mint-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">
                        Mon-Fri from 8am to 8pm EST
                      </p>
                      <a 
                        href="tel:+1-555-123-4567" 
                        className="text-medisync-600 hover:text-medisync-700 font-medium"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-medisync-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-2">
                        Our headquarters location
                      </p>
                      <address className="not-italic text-gray-600">
                        123 Health Avenue<br />
                        Medical District<br />
                        New York, NY 10001
                      </address>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 bg-gray-100 rounded-xl overflow-hidden h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279988557!2d-74.14448736581402!3d40.70583158946876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679944828899!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find quick answers to common questions about MediSync AI
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                  <span className="font-medium text-gray-900">How can I get technical support?</span>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    For technical support, please email support@medisyncai.com or call our support line at +1 (555) 123-4567. Our technical team is available Monday through Friday, 8am to 8pm EST.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                  <span className="font-medium text-gray-900">What are your business hours?</span>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    Our general customer support is available 24/7 through our AI chatbot. For human support, our office hours are Monday through Friday from 8am to 8pm EST, and Saturday from 9am to 5pm EST. We are closed on Sundays and major holidays.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                  <span className="font-medium text-gray-900">How can I report a bug or suggest a feature?</span>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    We welcome your feedback! To report a bug or suggest a feature, please use the contact form above or email us directly at feedback@medisyncai.com with details of your experience or suggestion.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                  <span className="font-medium text-gray-900">How can healthcare providers partner with MediSync AI?</span>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    We're always looking to expand our network of healthcare providers. For partnership inquiries, please contact our partnerships team at partners@medisyncai.com or call +1 (555) 987-6543 to discuss integration options and collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
