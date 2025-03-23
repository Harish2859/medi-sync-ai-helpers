import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import BackButton from '../components/BackButton';

const DiagnosticResult = () => {
  const { condition } = useParams();
  const [result, setResult] = useState(`Based on the diagnostic test for ${condition}, the results indicate a moderate risk. Further evaluation is recommended.`);

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <BackButton />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Diagnostic Result</h1>
          <p className="text-gray-600">Review the results of your diagnostic test</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Condition: {condition}</h2>
          <p className="text-gray-700 mb-6">{result}</p>
          
          <Link to="/records" className="text-medisync-600 hover:text-medisync-700">
            View your medical records for more details
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DiagnosticResult;
