
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Users, FileText, ShieldCheck, Brain, Stethoscope, Activity, Pill, Heart, Thermometer } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import CustomCursor from '../components/CustomCursor';
import DiagnosticCard from '../components/DiagnosticCard';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ParallaxElement = ({ children, factor = 0.1 }: { children: React.ReactNode, factor?: number }) => {
    const translate = scrollY * factor;
    return (
      <div 
        className="parallax" 
        style={{ transform: `translate3d(0, ${translate}px, 0)` }}
      >
        {children}
      </div>
    );
  };

  // Features data
  const features = [
    {
      title: 'AI Symptom Checker',
      description: 'Advanced AI analysis of your symptoms with medical-grade accuracy.',
      icon: <Brain className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose'
    },
    {
      title: 'Smart Health Reports',
      description: 'Comprehensive health insights and personalized recommendations.',
      icon: <FileText className="w-6 h-6 text-mint-600" />,
      to: '/reports'
    },
    {
      title: 'Doctor Recommendations',
      description: 'Connect with qualified healthcare professionals based on your needs.',
      icon: <Stethoscope className="w-6 h-6 text-medisync-600" />,
      to: '/doctors'
    },
    {
      title: 'Secure Medical Records',
      description: 'Your health data is protected with state-of-the-art encryption.',
      icon: <ShieldCheck className="w-6 h-6 text-mint-600" />,
      to: '/records'
    }
  ];

  // Process steps
  const steps = [
    {
      number: '01',
      title: 'Input Your Symptoms',
      description: 'Describe your symptoms in detail or use our guided symptom selector.',
      icon: <Thermometer className="w-6 h-6 text-medisync-600" />
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI processes your symptoms using a vast medical knowledge base.',
      icon: <Brain className="w-6 h-6 text-medisync-600" />
    },
    {
      number: '03',
      title: 'Review Results',
      description: 'Get a comprehensive analysis of possible conditions and next steps.',
      icon: <Activity className="w-6 h-6 text-medisync-600" />
    },
    {
      number: '04',
      title: 'Professional Consultation',
      description: 'Connect with healthcare providers for further evaluation if needed.',
      icon: <Stethoscope className="w-6 h-6 text-medisync-600" />
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "MediSync AI helped me identify my condition before seeing a doctor, saving critical time in my treatment.",
      author: "Emma Thompson",
      role: "Patient"
    },
    {
      text: "As a healthcare provider, I'm impressed with the accuracy of MediSync's diagnostic suggestions.",
      author: "Dr. James Wilson",
      role: "Cardiologist"
    },
    {
      text: "The app's interface is so intuitive and the AI chatbot genuinely feels like talking to a medical professional.",
      author: "Michael Chen",
      role: "Patient"
    }
  ];

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-10">
              <ParallaxElement factor={0.05}>
                <span className="inline-block bg-medisync-100 text-medisync-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  AI-Powered Healthcare
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  Your AI-Powered<br />
                  <span className="text-gradient">Health Assistant</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  Get instant medical insights, check symptoms, and connect with doctors—powered by advanced artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/diagnose" className="btn-primary">
                    <span>Get Diagnosed</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/login" className="btn-secondary">
                    Login as Patient
                  </Link>
                  <Link to="/signup" className="btn-secondary">
                    Signup as Patient
                  </Link>
                </div>
              </ParallaxElement>
            </div>
            <div className="relative">
              <ParallaxElement factor={0.1}>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-medisync-100 rounded-full blur-3xl opacity-60"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mint-100 rounded-full blur-3xl opacity-70"></div>
                  
                  <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-2xl glass-card">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medisync-400 to-mint-400"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center">
                            <Heart className="w-5 h-5 text-medisync-600" />
                          </div>
                          <div className="ml-3">
                            <h3 className="font-semibold text-gray-900">Health Analysis</h3>
                            <p className="text-xs text-gray-500">Powered by AI</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-gray-900">98%</span>
                          <p className="text-xs text-gray-500">Accuracy</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Heart Rate</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">72 bpm</span>
                            <Activity className="w-4 h-4 text-medisync-500 ml-1" />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-medisync-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Blood Pressure</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">120/80</span>
                            <Gauge className="w-4 h-4 text-mint-600 ml-1" />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-mint-400 to-mint-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Sleep Quality</span>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">7.2 hrs</span>
                            <Moon className="w-4 h-4 text-medisync-500 ml-1" />
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-medisync-500 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">AI Recommendation</p>
                        <div className="p-3 bg-mint-50 rounded-lg border border-mint-100">
                          <p className="text-sm text-gray-700">Your vitals look good! Consider increasing water intake and adding 15 minutes to your daily exercise routine.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-mint-100 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-medisync-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/4"></div>
      </section>
      
      {/* How It Works Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How It Works</h2>
            <p className="text-gray-600">Our AI-powered platform provides accurate health insights through a simple four-step process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-medisync-600 flex items-center justify-center text-white font-medium group-hover:bg-medisync-700 transition-colors">
                  {step.number}
                </div>
                <div className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-medisync-50 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-medisync-100 text-medisync-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Comprehensive Health Solutions</h2>
            <p className="text-gray-600">Explore our range of AI-powered features designed to support your healthcare journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <DiagnosticCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                to={feature.to}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-mint-100 text-mint-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">What Our Users Say</h2>
            <p className="text-gray-600">Real experiences from patients and healthcare professionals who use MediSync AI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-medisync-500 mr-2" />
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-medisync-600 to-medisync-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl mx-auto">Ready to take control of your health?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Join thousands of users who trust MediSync AI for accurate health insights and personalized recommendations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-white text-medisync-700 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/diagnose" 
              className="px-8 py-3 bg-white/10 text-white border border-white/30 rounded-md font-medium hover:bg-white/20 transition-colors"
            >
              Try Diagnosis
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

function Moon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default Index;
