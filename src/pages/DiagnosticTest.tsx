
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Send, PlusCircle, MinusCircle, Mic, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

// Mock medical conditions database
const medicalConditionsData = {
  'infectious': {
    title: 'Infectious Diseases',
    description: 'Tests for conditions caused by bacterial, viral, fungal, and parasitic pathogens.',
    symptoms: ['Fever', 'Fatigue', 'Cough', 'Sore throat', 'Rash', 'Muscle aches', 'Headache'],
    questions: [
      'How long have you been experiencing symptoms?',
      'Have you traveled internationally in the last month?',
      'Have you been in contact with someone who was sick?',
      'Do you have a fever above 100.4°F (38°C)?',
      'Are you experiencing any difficulty breathing?'
    ]
  },
  'non-communicable': {
    title: 'Non-Communicable Diseases',
    description: 'Tests for chronic conditions like diabetes, hypertension, and obesity.',
    symptoms: ['Fatigue', 'Frequent urination', 'Increased thirst', 'Unexplained weight loss', 'Blurred vision', 'Chest pain', 'Shortness of breath'],
    questions: [
      'Do you have a family history of heart disease or diabetes?',
      'What is your average blood pressure?',
      'Do you smoke or use tobacco products?',
      'How would you describe your diet and exercise habits?',
      'Have you experienced unexplained weight changes?'
    ]
  },
  'autoimmune': {
    title: 'Autoimmune & Inflammatory',
    description: 'Tests for diseases where the immune system attacks the body\'s own tissues.',
    symptoms: ['Joint pain', 'Fatigue', 'Skin rashes', 'Low-grade fever', 'Muscle pain', 'Hair loss', 'Numbness and tingling'],
    questions: [
      'Do you have a family history of autoimmune diseases?',
      'Are your symptoms worse at specific times of day?',
      'Have you noticed any skin rashes or lesions?',
      'How severe is your joint pain on a scale of 1-10?',
      'Do your symptoms flare up and then subside?'
    ]
  },
  'cancer': {
    title: 'Cancer Screening',
    description: 'Early detection tests for various types of cancer.',
    symptoms: ['Unexplained weight loss', 'Fatigue', 'Pain', 'Skin changes', 'Persistent cough', 'Change in bowel habits', 'Unusual bleeding'],
    questions: [
      'Do you have a family history of cancer?',
      'Have you noticed any unexplained lumps or growths?',
      'Have you experienced unexplained weight loss?',
      'Are you experiencing persistent pain in any area?',
      'Have you noticed any changes in your skin, moles, or birthmarks?'
    ]
  },
  'genetic': {
    title: 'Genetic & Rare Diseases',
    description: 'Tests for hereditary and rare medical conditions.',
    symptoms: ['Developmental delays', 'Unusual physical features', 'Recurrent infections', 'Muscle weakness', 'Growth delays', 'Learning disabilities'],
    questions: [
      'Do you have any known genetic conditions in your family?',
      'Have you or your family members been diagnosed with any rare diseases?',
      'Were there any complications during your birth or development?',
      'Have you been tested for any genetic conditions previously?',
      'Are any of your symptoms present in other family members?'
    ]
  },
  'endocrine': {
    title: 'Endocrine & Hormonal',
    description: 'Tests for disorders affecting the endocrine system and hormones.',
    symptoms: ['Fatigue', 'Weight changes', 'Mood swings', 'Hair loss or growth', 'Temperature sensitivity', 'Increased thirst', 'Irregular heartbeat'],
    questions: [
      'Have you experienced unusual weight gain or loss?',
      'Do you have increased sensitivity to heat or cold?',
      'Have you noticed changes in your skin, hair, or nails?',
      'Have you experienced changes in your mood or energy levels?',
      'For women: Have you experienced irregular menstrual cycles?'
    ]
  },
  'gastrointestinal': {
    title: 'Gastrointestinal & Liver',
    description: 'Tests for digestive tract and liver disorders.',
    symptoms: ['Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Bloating', 'Heartburn', 'Jaundice'],
    questions: [
      'How would you describe your bowel movements?',
      'Have you noticed any blood in your stool?',
      'Do you experience pain or discomfort after eating?',
      'Have you been diagnosed with any digestive disorders in the past?',
      'Do you consume alcohol regularly?'
    ]
  },
  'kidney': {
    title: 'Kidney & Urinary Tract',
    description: 'Tests for conditions affecting the kidneys and urinary system.',
    symptoms: ['Frequent urination', 'Pain during urination', 'Blood in urine', 'Foamy urine', 'Swelling in hands or feet', 'Back pain'],
    questions: [
      'How many times do you urinate per day?',
      'Have you noticed any changes in the color of your urine?',
      'Do you experience pain or burning during urination?',
      'Have you been diagnosed with high blood pressure or diabetes?',
      'Do you have a family history of kidney disease?'
    ]
  },
  'musculoskeletal': {
    title: 'Musculoskeletal Disorders',
    description: 'Tests for conditions affecting bones, muscles, and joints.',
    symptoms: ['Joint pain', 'Muscle weakness', 'Stiffness', 'Swelling', 'Limited range of motion', 'Back pain', 'Muscle cramps'],
    questions: [
      'Where do you experience the most pain or discomfort?',
      'Does activity improve or worsen your symptoms?',
      'Have you had any injuries to your bones, joints, or muscles?',
      'Do your symptoms interfere with daily activities?',
      'Does rest improve your symptoms?'
    ]
  },
  'skin': {
    title: 'Skin & Dermatological',
    description: 'Tests for skin conditions and dermatological disorders.',
    symptoms: ['Rash', 'Itching', 'Redness', 'Bumps', 'Blisters', 'Dry skin', 'Changes in skin color', 'Mole changes'],
    questions: [
      'When did you first notice your skin symptoms?',
      'Do your symptoms itch, burn, or hurt?',
      'Have you used any new products on your skin recently?',
      'Do your symptoms worsen with sun exposure?',
      'Have you tried any treatments for your skin condition?'
    ]
  }
};

const DiagnosticTest = () => {
  const { condition } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [isRecording, setIsRecording] = useState(false);
  
  const conditionData = condition && medicalConditionsData[condition as keyof typeof medicalConditionsData];
  
  const form = useForm({
    defaultValues: {
      additionalInfo: '',
    },
  });

  if (!conditionData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Condition Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the diagnostic test you're looking for.</p>
            <Button onClick={() => navigate('/diagnose')}>Return to Diagnose</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom) 
        : [...prev, symptom]
    );
  };

  const handleAnswerChange = (question: string, answer: string) => {
    setAnswers(prev => ({...prev, [question]: answer}));
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    toast({
      title: isRecording ? "Voice recording stopped" : "Voice recording started",
      description: isRecording 
        ? "Your voice input has been processed." 
        : "Speak clearly to describe your symptoms.",
      duration: 3000,
    });
    // In a real app, you would integrate with the Web Speech API or a similar service
    setTimeout(() => {
      if (!isRecording) {
        setIsRecording(false);
        toast({
          title: "Voice recording complete",
          description: "Your voice input has been processed.",
          duration: 3000,
        });
      }
    }, 5000);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit the diagnostic test
      const testData = {
        condition,
        symptoms: selectedSymptoms,
        questions: answers,
        additionalInfo: form.getValues().additionalInfo,
      };
      
      // In a real app, you would send this data to your backend
      console.log("Diagnostic test data:", testData);
      
      // Navigate to the results page
      navigate(`/diagnose/${condition}/result`, { 
        state: { 
          testData,
          conditionTitle: conditionData.title
        } 
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/diagnose');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          <button 
            onClick={handleBack} 
            className="flex items-center text-medisync-600 mb-6 hover:underline"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span>Back</span>
          </button>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{conditionData.title} Test</h1>
            <p className="text-gray-600 mb-6">{conditionData.description}</p>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Select Your Symptoms</h2>
                  <p className="text-gray-600 mb-6">
                    Please select all symptoms you've been experiencing:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {conditionData.symptoms.map((symptom, index) => (
                      <div 
                        key={index}
                        className={`
                          flex items-center p-3 rounded-lg border cursor-pointer transition-colors
                          ${selectedSymptoms.includes(symptom) 
                            ? 'bg-medisync-50 border-medisync-200' 
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}
                        `}
                        onClick={() => handleSymptomToggle(symptom)}
                      >
                        {selectedSymptoms.includes(symptom) ? (
                          <MinusCircle className="w-5 h-5 text-medisync-600 mr-2 flex-shrink-0" />
                        ) : (
                          <PlusCircle className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                        )}
                        <span className="text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <button
                      onClick={handleVoiceInput}
                      className={`
                        flex items-center px-4 py-2 rounded-lg border transition-colors
                        ${isRecording 
                          ? 'bg-red-50 border-red-200 text-red-600' 
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'}
                      `}
                    >
                      <Mic className={`w-5 h-5 mr-2 ${isRecording ? 'text-red-600 animate-pulse' : 'text-gray-500'}`} />
                      <span>{isRecording ? 'Stop Recording' : 'Describe Symptoms (Voice)'}</span>
                    </button>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Additional Questions</h2>
                  <p className="text-gray-600 mb-6">
                    Please answer the following questions to help us understand your condition better:
                  </p>
                  
                  <div className="space-y-6">
                    {conditionData.questions.map((question, index) => (
                      <div key={index} className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{question}</label>
                        <Input 
                          type="text" 
                          placeholder="Your answer"
                          value={answers[question] || ''}
                          onChange={(e) => handleAnswerChange(question, e.target.value)}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                  <p className="text-gray-600 mb-6">
                    Is there anything else you'd like to share about your condition?
                  </p>
                  
                  <Form {...form}>
                    <form className="space-y-4">
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <textarea 
                                {...field}
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] resize-y"
                                placeholder="Enter any additional details about your symptoms, medical history, or concerns..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleBack}
              >
                {currentStep === 1 ? 'Cancel' : 'Back'}
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={currentStep === 1 && selectedSymptoms.length === 0}
                className="bg-medisync-600 hover:bg-medisync-700"
              >
                {currentStep === totalSteps ? (
                  <div className="flex items-center">
                    <span>Submit</span>
                    <Send className="ml-2 w-4 h-4" />
                  </div>
                ) : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiagnosticTest;
