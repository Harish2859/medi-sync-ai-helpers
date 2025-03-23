
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Microscope, Brain, BeakerIcon, Heart, Activity, 
  Search, ArrowRight, ListFilter, ChevronRight, Info,
  Bug, FileText, Thermometer, Hospital
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import DiagnosticCard from '../components/DiagnosticCard';

const Diagnose = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Categories for diagnostic tests
  const categories = [
    { id: 'all', name: 'All Tests' },
    { id: 'infectious', name: 'Infectious Diseases' },
    { id: 'cardiovascular', name: 'Cardiovascular' },
    { id: 'respiratory', name: 'Respiratory' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'neurological', name: 'Neurological' }
  ];
  
  // Medical conditions data
  const medicalConditions = [
    {
      id: 'infectious',
      title: 'Infectious Diseases',
      description: 'Tests for conditions caused by bacterial, viral, fungal, and parasitic pathogens.',
      icon: <Bug className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose/infectious',
      category: 'infectious',
      conditions: ['Tuberculosis', 'Pneumonia', 'Influenza', 'COVID-19', 'HIV/AIDS']
    },
    {
      id: 'non-communicable',
      title: 'Non-Communicable Diseases',
      description: 'Tests for chronic conditions like diabetes, hypertension, and obesity.',
      icon: <Activity className="w-6 h-6 text-mint-600" />,
      to: '/diagnose/non-communicable',
      category: 'cardiovascular',
      conditions: ['Heart Disease', 'Hypertension', 'Diabetes', 'Obesity']
    },
    {
      id: 'autoimmune',
      title: 'Autoimmune & Inflammatory',
      description: 'Tests for diseases where the immune system attacks the body\'s own tissues.',
      icon: <BeakerIcon className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose/autoimmune',
      category: 'immunology',
      conditions: ['Rheumatoid Arthritis', 'Lupus', 'Multiple Sclerosis', 'Psoriasis']
    },
    {
      id: 'cancer',
      title: 'Cancer Screening',
      description: 'Early detection tests for various types of cancer.',
      icon: <Microscope className="w-6 h-6 text-mint-600" />,
      to: '/diagnose/cancer',
      category: 'oncology',
      conditions: ['Breast Cancer', 'Lung Cancer', 'Colorectal Cancer', 'Skin Cancer']
    },
    {
      id: 'genetic',
      title: 'Genetic & Rare Diseases',
      description: 'Tests for hereditary and rare medical conditions.',
      icon: <Dna className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose/genetic',
      category: 'genetic',
      conditions: ['Sickle Cell Anemia', 'Cystic Fibrosis', 'Huntington\'s Disease']
    },
    {
      id: 'endocrine',
      title: 'Endocrine & Hormonal',
      description: 'Tests for disorders affecting the endocrine system and hormones.',
      icon: <Activity className="w-6 h-6 text-mint-600" />,
      to: '/diagnose/endocrine',
      category: 'endocrinology',
      conditions: ['Hypothyroidism', 'Hyperthyroidism', 'Addison\'s Disease']
    },
    {
      id: 'gastrointestinal',
      title: 'Gastrointestinal & Liver',
      description: 'Tests for digestive tract and liver disorders.',
      icon: <Stomach className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose/gastrointestinal',
      category: 'digestive',
      conditions: ['GERD', 'IBS', 'Crohn\'s Disease', 'Hepatitis', 'Cirrhosis']
    },
    {
      id: 'kidney',
      title: 'Kidney & Urinary Tract',
      description: 'Tests for conditions affecting the kidneys and urinary system.',
      icon: <Kidney className="w-6 h-6 text-mint-600" />,
      to: '/diagnose/kidney',
      category: 'nephrology',
      conditions: ['Chronic Kidney Disease', 'Kidney Stones', 'UTIs']
    },
    {
      id: 'musculoskeletal',
      title: 'Musculoskeletal Disorders',
      description: 'Tests for conditions affecting bones, muscles, and joints.',
      icon: <Bone className="w-6 h-6 text-medisync-600" />,
      to: '/diagnose/musculoskeletal',
      category: 'orthopedic',
      conditions: ['Osteoarthritis', 'Osteoporosis', 'Gout']
    },
    {
      id: 'skin',
      title: 'Skin & Dermatological',
      description: 'Tests for skin conditions and dermatological disorders.',
      icon: <SquareUser className="w-6 h-6 text-mint-600" />,
      to: '/diagnose/skin',
      category: 'dermatology',
      conditions: ['Eczema', 'Psoriasis', 'Acne', 'Vitiligo']
    }
  ];
  
  // Filter conditions based on search and category
  const filteredConditions = medicalConditions.filter(condition => {
    const matchesSearch = searchQuery === '' || 
                          condition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          condition.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          condition.conditions.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeFilter === 'all' || condition.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-medisync-50 to-mint-50 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
                AI-Powered Disease Diagnosis
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Get accurate insights based on your symptoms and medical history, powered by advanced artificial intelligence.
              </p>
              
              <div className="bg-white rounded-full shadow-md flex items-center p-2 max-w-xl mx-auto">
                <Search className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search for a condition or symptoms..." 
                  className="flex-grow px-3 py-2 text-gray-700 focus:outline-none"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <button className="bg-medisync-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-medisync-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category filters */}
        <section className="bg-white border-b border-gray-100 sticky top-16 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-none py-2">
              <ListFilter className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
              
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
                    activeFilter === category.id 
                      ? 'bg-medisync-100 text-medisync-800 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Medical conditions grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Medical Conditions</h2>
              
              <div className="flex items-center text-sm text-gray-500">
                <Info className="w-4 h-4 mr-1" />
                <span>All tests use anonymized data for privacy</span>
              </div>
            </div>
            
            {filteredConditions.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No conditions found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredConditions.map((condition) => (
                  <DiagnosticCard
                    key={condition.id}
                    title={condition.title}
                    description={condition.description}
                    icon={condition.icon}
                    to={condition.to}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* How it works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our AI Diagnosis Works</h2>
              <p className="text-gray-600">
                Our advanced artificial intelligence analyzes your symptoms and medical history to provide accurate insights and recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-medisync-600 flex items-center justify-center text-white font-medium">
                  1
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                    <InputSquare className="w-6 h-6 text-medisync-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Input Your Symptoms</h3>
                  <p className="text-gray-600 text-sm">
                    Describe your symptoms in detail or use our guided symptom selector for accurate data collection.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-medisync-600 flex items-center justify-center text-white font-medium">
                  2
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-mint-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Our advanced AI processes your symptoms using a vast medical knowledge base and machine learning algorithms.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-medisync-600 flex items-center justify-center text-white font-medium">
                  3
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-medisync-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Review Results</h3>
                  <p className="text-gray-600 text-sm">
                    Get a comprehensive analysis of possible conditions, with confidence scores and detailed explanations.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-medisync-600 flex items-center justify-center text-white font-medium">
                  4
                </div>
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6 text-mint-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Professional Consultation</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with healthcare providers for further evaluation and treatment recommendations if needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Note: Our AI provides insights, not definitive medical diagnoses. Always consult healthcare professionals for medical advice.
              </p>
              <Link to="/diagnose/symptom-checker" className="btn-primary inline-flex items-center">
                Try Our Symptom Checker
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                    <span className="font-medium text-gray-900">How accurate is the AI diagnosis?</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Our AI system has been trained on millions of medical records and achieves an accuracy rate of over 85% for common conditions. However, it should be used as a tool to support, not replace, professional medical advice.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                    <span className="font-medium text-gray-900">Is my medical data secure and private?</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Yes, we take data privacy extremely seriously. All data is encrypted, anonymized, and stored securely. We comply with HIPAA and other healthcare privacy regulations, and your information is never sold to third parties.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                    <span className="font-medium text-gray-900">Can I use this service in a medical emergency?</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      No, this service is not designed for emergencies. If you're experiencing a medical emergency, please call emergency services immediately or go to your nearest emergency room.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button className="flex items-center justify-between w-full px-6 py-4 text-left">
                    <span className="font-medium text-gray-900">How often is the AI model updated?</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      Our AI models are continuously learning and improving. We release major updates quarterly, incorporating the latest medical research and refining diagnostic accuracy based on feedback from healthcare professionals.
                    </p>
                  </div>
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

function Bone(props: any) {
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
      <path d="M17 10c.7-.7.7-1.7 0-2.4L14.8 5.3c-.7-.7-1.7-.7-2.4 0l-1.3 1.3c-.7.7-.7 1.7 0 2.4l1.3 1.3c.7.7.7 1.7 0 2.4l-1.3 1.3c-.7.7-.7 1.7 0 2.4l2.1 2.1c.7.7 1.7.7 2.4 0l1.3-1.3c.7-.7.7-1.7 0-2.4l-1.3-1.3z" />
      <path d="M9.5 15.5 4.7 20.3c-.7.7-1.7.7-2.4 0-.7-.7-.7-1.7 0-2.4L7.1 13" />
      <path d="M14.5 9.5 19 5c.7-.7 1.7-.7 2.4 0 .7.7.7 1.7 0 2.4L17 12" />
    </svg>
  );
}

function Dna(props: any) {
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
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m17 6-2.5-2.5" />
      <path d="m14 8-1-1" />
      <path d="m7 18 2.5 2.5" />
      <path d="m3.5 14.5.5.5" />
      <path d="m20 9 .5.5" />
      <path d="m6.5 12.5 1 1" />
      <path d="m16.5 10.5 1 1" />
      <path d="m10 16 1.5 1.5" />
    </svg>
  );
}

function FileText(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function InputSquare(props: any) {
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
      <path d="M4 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4Z" />
      <path d="M12 17v.01" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M16 8v2" />
      <path d="M8 8v2" />
    </svg>
  );
}

function Kidney(props: any) {
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
      <path d="M12 8.45c-2.75.7-8 2.24-8 8.55 0 2 1.34 4 3 4 1.66 0 3-1 6-1s4.34 1 6 1c1.66 0 3-2 3-4 0-6.3-5.25-7.85-8-8.55z" />
      <path d="M9.5 12.5C10.5 11.5 14 9 14 9s-.75 3-.75 4.5c0 1.5 1.5 2 1.5 2" />
      <path d="M8.5 10.5c-.52.78-1.5 3-1.5 4.5s1.5 2 1.5 2" />
    </svg>
  );
}

function SquareUser(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 18v-.5a5 5 0 0 1 10 0v.5" />
    </svg>
  );
}

function Stethoscope(props: any) {
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
      <path d="M4.5 12.5 4.5 17C4.5 18.6569 5.84315 20 7.5 20C9.15685 20 10.5 18.6569 10.5 17C10.5 15.3431 9.15685 14 7.5 14C5.84315 14 4.5 15.3431 4.5 17" />
      <path d="M19.5 17C19.5 18.6569 18.1569 20 16.5 20C14.8431 20 13.5 18.6569 13.5 17C13.5 15.3431 14.8431 14 16.5 14C18.1569 14 19.5 15.3431 19.5 17Z" />
      <path d="M13.6312 13.0307C13.5806 12.4975 13.4124 11.9829 13.1462 11.5183C12.5123 10.4863 11.4276 10 10 10C8.57238 10 7.48775 10.4863 6.85385 11.5183C6.58774 11.983 6.41981 12.4979 6.36912 13.0312C6.30394 13.7078 6.26087 14.3071 6.21781 14.9017C6.12353 16.2229 6.02924 17.5548 5.5 18.5" />
      <path d="M18.5 18.5C17.9708 17.5548 17.8765 16.2229 17.7822 14.9017C17.7391 14.3071 17.6961 13.7078 17.6309 13.0312" />
      <path d="M7 10V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V10" />
    </svg>
  );
}

function Stomach(props: any) {
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
      <path d="M20 9c-3.157-2.34-5.79-3-10-3s-8 1-9 3c-1 2 2 3 3 3 2.823 0 3.833-1 8-1 3 0 5.73 1.343 7 3" />
      <path d="M15 6c0 0 2 1 2 3" />
      <path d="M20.267 13.647C19.146 15.553 18.5 17 18.5 17c-.322.736-.831 1.402-1.5 1.5C16 19 15 19 15 19c-2 0-4.534-.357-6-3-.5-.9-1-1.5-1.5-.5-.594 1.188-.5 3-.5 3 0 1 6.965 1 12-1 2-1 2.5 1.5 2.5 1.5s1 -1 1-4c-.5-1-1.103 0-2.233-1.353" />
    </svg>
  );
}

export default Diagnose;
