
import React from 'react';
import { Brain, ShieldCheck, Heart, Users, Microscope, Award, Building, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const About = () => {
  // Team data
  const teamMembers = [
    {
      name: 'Dr. Elizabeth Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Former Chief of Medicine with 15+ years in healthcare tech innovation.'
    },
    {
      name: 'Michael Roberts',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'AI pioneer with expertise in machine learning and healthcare applications.'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Board-certified physician specializing in diagnostic medicine.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Product leader with focus on creating intuitive healthcare experiences.'
    }
  ];
  
  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'MediSync AI was founded with a vision to revolutionize healthcare through artificial intelligence.'
    },
    {
      year: '2019',
      title: 'Initial Funding',
      description: 'Secured $5M in seed funding to develop our core AI diagnostic algorithms.'
    },
    {
      year: '2020',
      title: 'Beta Launch',
      description: 'Released our beta platform to select healthcare partners for testing and validation.'
    },
    {
      year: '2021',
      title: 'Clinical Validation',
      description: 'Completed clinical trials showing 85%+ diagnostic accuracy across common conditions.'
    },
    {
      year: '2022',
      title: 'Official Launch',
      description: 'Launched our platform to the public with over 100,000 users in the first month.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to international markets and reached 1 million users worldwide.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-medisync-50 to-mint-50 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-medisync-100 text-medisync-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
                Revolutionizing Healthcare with Artificial Intelligence
              </h1>
              <p className="text-lg text-gray-700">
                MediSync AI is on a mission to make healthcare more accessible, accurate, and personalized through advanced AI technology.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At MediSync AI, we believe that everyone deserves access to high-quality healthcare. Our mission is to leverage the power of artificial intelligence to democratize medical insights, making expert-level healthcare available to all, regardless of location or economic status.
                </p>
                <p className="text-gray-700 mb-6">
                  Founded by a team of healthcare professionals and AI experts, we've developed a platform that can analyze symptoms, medical history, and other health data to provide accurate insights and recommendations, while connecting users with healthcare professionals for comprehensive care.
                </p>
                <p className="text-gray-700">
                  By combining cutting-edge AI technology with medical expertise, we're building a future where early diagnosis, personalized treatment plans, and continuous health monitoring are accessible to everyone.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-medisync-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mint-100 rounded-full blur-3xl opacity-70"></div>
                
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Medical professionals with technology" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600">
                The principles that guide everything we do at MediSync AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-medisync-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Care & Compassion</h3>
                <p className="text-gray-600 text-sm">
                  We believe healthcare is fundamentally about people. Every feature we build is designed with empathy and compassion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-mint-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We continuously push the boundaries of what's possible with AI in healthcare, striving for breakthroughs that save lives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-medisync-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Trust & Privacy</h3>
                <p className="text-gray-600 text-sm">
                  We maintain the highest standards of data security and privacy, ensuring patient information is always protected.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-mint-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inclusivity</h3>
                <p className="text-gray-600 text-sm">
                  We build solutions that serve everyone, regardless of background, location, or economic status.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-gray-600">
                Passionate experts dedicated to transforming healthcare through technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-medisync-600 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600">
                The evolution of MediSync AI from concept to global healthcare platform
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-12 md:left-1/2 w-0.5 h-full bg-medisync-200 transform -translate-x-1/2"></div>
                
                {/* Timeline events */}
                <div className="space-y-12">
                  {timeline.map((event, index) => (
                    <div 
                      key={index} 
                      className={`relative flex items-start md:items-center flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className="absolute top-0 left-12 md:left-1/2 w-6 h-6 rounded-full bg-medisync-500 transform -translate-x-1/2 z-10"></div>
                      
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                        <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${
                          index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'
                        }`}>
                          <span className="inline-block px-3 py-1 bg-medisync-100 text-medisync-800 rounded-full text-sm font-medium mb-2">
                            {event.year}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="py-16 bg-gradient-to-r from-medisync-600 to-medisync-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">MediSync AI Impact</h2>
              <p className="text-white/80">
                Making a difference in healthcare around the world
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">1M+</div>
                <h3 className="text-lg font-medium mb-2">Active Users</h3>
                <p className="text-white/80 text-sm">
                  Patients using our platform for health insights
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">10M+</div>
                <h3 className="text-lg font-medium mb-2">Diagnoses</h3>
                <p className="text-white/80 text-sm">
                  AI-powered health assessments delivered
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <h3 className="text-lg font-medium mb-2">Healthcare Partners</h3>
                <p className="text-white/80 text-sm">
                  Medical institutions using our platform
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">25+</div>
                <h3 className="text-lg font-medium mb-2">Countries</h3>
                <p className="text-white/80 text-sm">
                  Global reach of our healthcare solutions
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recognition section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
              <p className="text-gray-600">
                Honors that recognize our contributions to healthcare innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-medisync-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Healthcare Innovation Award 2022</h3>
                <p className="text-gray-600 text-sm">
                  Recognized for pioneering AI diagnostics in telemedicine by the American Health Technology Association.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-mint-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Best AI Health Solution 2023</h3>
                <p className="text-gray-600 text-sm">
                  Winner of the Global AI Excellence Awards for our diagnostic algorithm's accuracy and reliability.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-medisync-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Digital Health Impact Award</h3>
                <p className="text-gray-600 text-sm">
                  Honored for making quality healthcare accessible to underserved communities through technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Healthcare Revolution</h2>
              <p className="text-gray-600 mb-8">
                Whether you're a patient seeking care or a healthcare provider looking to expand your capabilities, MediSync AI is here to transform your experience.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/signup" 
                  className="btn-primary"
                >
                  Get Started Today
                </a>
                <a 
                  href="/contact" 
                  className="btn-secondary"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
