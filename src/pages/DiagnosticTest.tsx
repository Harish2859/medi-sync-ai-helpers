import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import BackButton from '../components/BackButton';
import { questions } from '../data/questions';
import { Button } from '@/components/ui/button';

const DiagnosticTest = () => {
  const { condition } = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/diagnose/${condition}/result`);
  };
  
  const filteredQuestions = questions.filter(q => q.condition === condition);

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <BackButton to="/diagnose" />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Diagnostic Test</h1>
          <p className="text-gray-600">Answer the following questions to help diagnose your condition.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Condition: {condition}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {filteredQuestions.map((question) => (
              <div key={question.id}>
                <p className="text-gray-700">{question.text}</p>
                <div className="mt-2 space-y-1">
                  {question.options.map((option) => (
                    <label key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={option.value}
                        className="mr-2 focus:ring-medisync-500 h-4 w-4 text-medisync-600 border-gray-300"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <Button type="submit">
              Submit Answers
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DiagnosticTest;
