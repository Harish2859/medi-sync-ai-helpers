
import React, { useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Download, Mail, MessageCircle, 
  ThumbsUp, ThumbsDown, Heart, Hospital, ExternalLink,
  Info, Check, AlertTriangle, Sparkles, SendHorizonal, Mic
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

// Mock disease prediction results
const mockPredictions = {
  'infectious': {
    predictedDisease: 'Influenza (Flu)',
    confidenceScore: 87,
    description: 'Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. It's commonly called the flu.',
    riskLevel: 'Moderate',
    recommendation: 'Rest, hydration, and over-the-counter fever reducers can help manage symptoms. Contact your healthcare provider if symptoms worsen.',
    icon: '🦠',
    relatedDiseases: ['Common Cold', 'COVID-19', 'Bronchitis'],
    doctorSpecialty: 'Infectious Disease Specialist',
    resources: [
      { title: 'CDC: Influenza Information', url: 'https://www.cdc.gov/flu/' },
      { title: 'Mayo Clinic: Influenza (Flu)', url: 'https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719' }
    ]
  },
  'non-communicable': {
    predictedDisease: 'Type 2 Diabetes',
    confidenceScore: 92,
    description: 'Type 2 diabetes is a chronic condition that affects the way your body metabolizes sugar (glucose), which is an important source of fuel for your body.',
    riskLevel: 'High',
    recommendation: 'Consult with an endocrinologist for proper diagnosis and treatment plan. Lifestyle changes including diet and exercise are crucial.',
    icon: '🩸',
    relatedDiseases: ['Hypertension', 'Obesity', 'Metabolic Syndrome'],
    doctorSpecialty: 'Endocrinologist',
    resources: [
      { title: 'American Diabetes Association', url: 'https://www.diabetes.org/' },
      { title: 'Mayo Clinic: Type 2 Diabetes', url: 'https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193' }
    ]
  },
  'autoimmune': {
    predictedDisease: 'Rheumatoid Arthritis',
    confidenceScore: 78,
    description: 'Rheumatoid arthritis is a chronic inflammatory disorder that can affect more than just your joints. In some people, the condition can damage a wide variety of body systems.',
    riskLevel: 'Moderate',
    recommendation: 'Early intervention is important. Schedule an appointment with a rheumatologist for proper evaluation and treatment options.',
    icon: '🦴',
    relatedDiseases: ['Lupus', 'Psoriatic Arthritis', 'Ankylosing Spondylitis'],
    doctorSpecialty: 'Rheumatologist',
    resources: [
      { title: 'Arthritis Foundation', url: 'https://www.arthritis.org/' },
      { title: 'Mayo Clinic: Rheumatoid Arthritis', url: 'https://www.mayoclinic.org/diseases-conditions/rheumatoid-arthritis/symptoms-causes/syc-20353648' }
    ]
  },
  'cancer': {
    predictedDisease: 'Potential Early-Stage Skin Cancer',
    confidenceScore: 65,
    description: 'Skin cancer develops primarily on areas of sun-exposed skin, including the scalp, face, lips, ears, neck, chest, arms and hands, and legs.',
    riskLevel: 'Requires Attention',
    recommendation: 'This is a preliminary assessment only. Please consult with a dermatologist immediately for proper evaluation and diagnosis.',
    icon: '🔬',
    relatedDiseases: ['Melanoma', 'Basal Cell Carcinoma', 'Squamous Cell Carcinoma'],
    doctorSpecialty: 'Dermatologist',
    resources: [
      { title: 'Skin Cancer Foundation', url: 'https://www.skincancer.org/' },
      { title: 'American Cancer Society: Skin Cancer', url: 'https://www.cancer.org/cancer/skin-cancer.html' }
    ]
  },
  'genetic': {
    predictedDisease: 'Potential Genetic Disorder',
    confidenceScore: 58,
    description: 'Based on your symptoms, there may be indicators of a genetic condition. However, genetic disorders require specialized testing for proper diagnosis.',
    riskLevel: 'Uncertain',
    recommendation: 'Consult with a medical geneticist or genetic counselor for proper evaluation and potential genetic testing.',
    icon: '🧬',
    relatedDiseases: ['Cystic Fibrosis', 'Huntington\'s Disease', 'Sickle Cell Anemia'],
    doctorSpecialty: 'Medical Geneticist',
    resources: [
      { title: 'National Human Genome Research Institute', url: 'https://www.genome.gov/' },
      { title: 'Genetic and Rare Diseases Information Center', url: 'https://rarediseases.info.nih.gov/' }
    ]
  },
  'endocrine': {
    predictedDisease: 'Hypothyroidism',
    confidenceScore: 82,
    description: 'Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn't produce enough of certain crucial hormones.',
    riskLevel: 'Moderate',
    recommendation: 'Consult with an endocrinologist for proper testing and potential hormone replacement therapy.',
    icon: '⚖️',
    relatedDiseases: ['Hashimoto\'s Thyroiditis', 'Graves\' Disease', 'Thyroid Nodules'],
    doctorSpecialty: 'Endocrinologist',
    resources: [
      { title: 'American Thyroid Association', url: 'https://www.thyroid.org/' },
      { title: 'Mayo Clinic: Hypothyroidism', url: 'https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284' }
    ]
  },
  'gastrointestinal': {
    predictedDisease: 'Irritable Bowel Syndrome (IBS)',
    confidenceScore: 76,
    description: 'IBS is a common disorder that affects the large intestine. Signs and symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both.',
    riskLevel: 'Mild to Moderate',
    recommendation: 'Consult with a gastroenterologist for proper diagnosis and treatment plan. Dietary changes and stress management may help manage symptoms.',
    icon: '🦠',
    relatedDiseases: ['Crohn\'s Disease', 'Ulcerative Colitis', 'GERD'],
    doctorSpecialty: 'Gastroenterologist',
    resources: [
      { title: 'International Foundation for Gastrointestinal Disorders', url: 'https://www.iffgd.org/' },
      { title: 'Mayo Clinic: Irritable Bowel Syndrome', url: 'https://www.mayoclinic.org/diseases-conditions/irritable-bowel-syndrome/symptoms-causes/syc-20360016' }
    ]
  },
  'kidney': {
    predictedDisease: 'Urinary Tract Infection (UTI)',
    confidenceScore: 89,
    description: 'A urinary tract infection is an infection in any part of your urinary system — your kidneys, ureters, bladder and urethra.',
    riskLevel: 'Moderate',
    recommendation: 'Consult with a healthcare provider for proper diagnosis and antibiotic treatment if necessary. Increase fluid intake to help flush bacteria.',
    icon: '🦠',
    relatedDiseases: ['Kidney Stones', 'Interstitial Cystitis', 'Pyelonephritis'],
    doctorSpecialty: 'Urologist',
    resources: [
      { title: 'National Kidney Foundation', url: 'https://www.kidney.org/' },
      { title: 'Mayo Clinic: Urinary Tract Infection', url: 'https://www.mayoclinic.org/diseases-conditions/urinary-tract-infection/symptoms-causes/syc-20353447' }
    ]
  },
  'musculoskeletal': {
    predictedDisease: 'Osteoarthritis',
    confidenceScore: 84,
    description: 'Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time.',
    riskLevel: 'Moderate',
    recommendation: 'Consult with a rheumatologist or orthopedic specialist for proper evaluation and treatment options, which may include physical therapy and pain management.',
    icon: '🦴',
    relatedDiseases: ['Rheumatoid Arthritis', 'Fibromyalgia', 'Gout'],
    doctorSpecialty: 'Orthopedic Specialist',
    resources: [
      { title: 'Arthritis Foundation', url: 'https://www.arthritis.org/' },
      { title: 'Mayo Clinic: Osteoarthritis', url: 'https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925' }
    ]
  },
  'skin': {
    predictedDisease: 'Eczema (Atopic Dermatitis)',
    confidenceScore: 81,
    description: 'Eczema (atopic dermatitis) is a condition that makes your skin red and itchy. It\'s common in children but can occur at any age.',
    riskLevel: 'Mild to Moderate',
    recommendation: 'Consult with a dermatologist for proper diagnosis and treatment plan. Moisturizing regularly and avoiding known triggers can help manage symptoms.',
    icon: '🔬',
    relatedDiseases: ['Contact Dermatitis', 'Psoriasis', 'Seborrheic Dermatitis'],
    doctorSpecialty: 'Dermatologist',
    resources: [
      { title: 'National Eczema Association', url: 'https://nationaleczema.org/' },
      { title: 'Mayo Clinic: Atopic Dermatitis (Eczema)', url: 'https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273' }
    ]
  }
};

const DiagnosticResult = () => {
  const { condition } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'ai', text: string}[]>([]);
  const [feedbackGiven, setFeedbackGiven] = useState<'positive' | 'negative' | null>(null);
  const [isVoiceInputActive, setIsVoiceInputActive] = useState(false);
  
  const testData = location.state?.testData;
  const conditionTitle = location.state?.conditionTitle;
  
  if (!testData || !condition || !mockPredictions[condition as keyof typeof mockPredictions]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Results Not Available</h2>
            <p className="text-gray-600 mb-6">We couldn't load your diagnostic results. Please try again.</p>
            <Button onClick={() => navigate('/diagnose')}>Return to Diagnose</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const result = mockPredictions[condition as keyof typeof mockPredictions];
  
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, {type: 'user', text: chatInput}]);
    
    // Mock AI response
    setTimeout(() => {
      let response = "";
      if (chatInput.toLowerCase().includes("treatment")) {
        response = `For ${result.predictedDisease}, common treatments include: ${result.recommendation}`;
      } else if (chatInput.toLowerCase().includes("appointment") || chatInput.toLowerCase().includes("doctor")) {
        response = `I recommend consulting with a ${result.doctorSpecialty}. Would you like me to help you find one in your area?`;
      } else if (chatInput.toLowerCase().includes("symptom")) {
        response = `Common symptoms of ${result.predictedDisease} include: fatigue, pain, and specific symptoms related to the affected system. It's important to consult with a healthcare professional for a complete evaluation.`;
      } else {
        response = `Thank you for your question about ${result.predictedDisease}. I recommend reviewing the resources provided or consulting with a healthcare professional for specific advice.`;
      }
      
      setChatMessages(prev => [...prev, {type: 'ai', text: response}]);
    }, 1000);
    
    setChatInput('');
  };
  
  const handleVoiceInput = () => {
    setIsVoiceInputActive(!isVoiceInputActive);
    toast({
      title: isVoiceInputActive ? "Voice input stopped" : "Voice input started",
      description: isVoiceInputActive ? "Processing your question..." : "Speak clearly to ask your question",
      duration: 3000,
    });
    
    // Mock voice recognition (in a real app, you would use the Web Speech API)
    if (!isVoiceInputActive) {
      setTimeout(() => {
        const mockQuestion = "What are common treatments for this condition?";
        setChatInput(mockQuestion);
        setIsVoiceInputActive(false);
        toast({
          title: "Voice input processed",
          description: `Recognized: "${mockQuestion}"`,
          duration: 3000,
        });
      }, 3000);
    }
  };
  
  const handleDownloadPDF = () => {
    toast({
      title: "Report Downloaded",
      description: "Your diagnostic report has been downloaded as a PDF.",
      duration: 3000,
    });
    // In a real app, you would generate a PDF and trigger download
  };
  
  const handleEmailResults = () => {
    toast({
      title: "Report Sent",
      description: "Your diagnostic report has been emailed to your registered email address.",
      duration: 3000,
    });
    // In a real app, you would send an email with the report
  };
  
  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedbackGiven(type);
    toast({
      title: "Thank you for your feedback",
      description: type === 'positive' 
        ? "We're glad you found this helpful!" 
        : "We'll use your feedback to improve our system.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-medisync-600 mb-6 hover:underline"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span>Back to Test</span>
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-medisync-50 to-mint-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                    Your Diagnostic Results
                  </h1>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center" 
                      onClick={handleDownloadPDF}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      <span className="hidden md:inline">Download</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center" 
                      onClick={handleEmailResults}
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      <span className="hidden md:inline">Email</span>
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Based on your reported symptoms and answers
                </p>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-medisync-100 flex items-center justify-center text-4xl">
                    {result.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{result.predictedDisease}</h2>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-medisync-100 text-medisync-800">
                            {result.riskLevel} Risk
                          </span>
                          <span className="text-sm text-gray-500">Predicted for {conditionTitle}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium text-gray-700">Confidence Level</span>
                              <span className="text-xs font-medium text-gray-700">{result.confidenceScore}%</span>
                            </div>
                            <Progress value={result.confidenceScore} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-semibold text-gray-900 mb-2">About This Condition</h3>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Recommendation</h3>
                    <div className="flex items-start">
                      <div className="mt-0.5 mr-2 flex-shrink-0">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-gray-700">{result.recommendation}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Related Conditions</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.relatedDiseases.map((disease, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                        >
                          {disease}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Medical Resources</h3>
                    <div className="space-y-2">
                      {result.resources.map((resource, index) => (
                        <a 
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <Info className="w-5 h-5 text-medisync-600 mr-3 flex-shrink-0" />
                          <span className="flex-grow text-gray-700">{resource.title}</span>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-md font-semibold text-gray-900 mb-2">Doctor Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                        <div className="flex">
                          <div className="mr-3 flex-shrink-0">
                            <Hospital className="w-6 h-6 text-medisync-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Specialist Consultation</h4>
                            <p className="text-sm text-gray-600">Consider consulting with a {result.doctorSpecialty}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                        <div className="flex">
                          <div className="mr-3 flex-shrink-0">
                            <Heart className="w-6 h-6 text-mint-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Find a Doctor</h4>
                            <Link 
                              to="#" 
                              className="text-sm text-medisync-600 hover:underline"
                            >
                              Find specialists in your area
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-semibold text-gray-900">Was this result helpful?</h3>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleFeedback('positive')}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-lg border ${
                          feedbackGiven === 'positive' 
                            ? 'bg-green-50 border-green-200 text-green-700' 
                            : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}
                        disabled={feedbackGiven !== null}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">Yes</span>
                      </button>
                      
                      <button 
                        onClick={() => handleFeedback('negative')}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-lg border ${
                          feedbackGiven === 'negative' 
                            ? 'bg-red-50 border-red-200 text-red-700' 
                            : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}
                        disabled={feedbackGiven !== null}
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span className="text-sm">No</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Chatbot for follow-up questions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-medisync-50 to-mint-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-medisync-600 mr-2" />
                  <h2 className="text-lg font-semibold">Ask follow-up questions about your result</h2>
                </div>
              </div>
              
              <div className="p-4 h-72 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <MessageCircle className="w-10 h-10 mb-3 text-gray-300" />
                    <p className="mb-2">Ask our AI any questions about your diagnosis</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md mx-auto mt-2">
                      <button 
                        onClick={() => setChatInput("What are common treatments for this condition?")}
                        className="text-sm text-left px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        What are common treatments for this?
                      </button>
                      <button 
                        onClick={() => setChatInput("Should I see a doctor for this condition?")}
                        className="text-sm text-left px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        Should I see a doctor for this?
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatMessages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.type === 'user' 
                              ? 'bg-medisync-100 text-gray-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <form onSubmit={handleChatSubmit} className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-full ${
                      isVoiceInputActive 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Mic className={`w-5 h-5 ${isVoiceInputActive ? 'animate-pulse' : ''}`} />
                  </button>
                  
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about your diagnosis..."
                    className="flex-grow"
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={!chatInput.trim()}
                    size="icon"
                  >
                    <SendHorizonal className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiagnosticResult;
