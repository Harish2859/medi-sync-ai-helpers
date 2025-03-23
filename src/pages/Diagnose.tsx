import React from 'react';
import { Link } from 'react-router-dom';
import DiagnosticCard from '../components/DiagnosticCard';
import CustomCursor from '../components/CustomCursor';
import BackButton from '../components/BackButton';

const conditions = [
  {
    name: 'Diabetes',
    description: 'Assess your risk for diabetes and receive personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1615493597266-3b2c8166536b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERpYWJlZXRlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    link: '/diagnose/diabetes'
  },
  {
    name: 'Heart Disease',
    description: 'Evaluate your cardiovascular health and understand potential risks.',
    image: 'https://images.unsplash.com/photo-1543330242-857988980397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYXJ0JTIwaGVhbHRofGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    link: '/diagnose/heart-disease'
  },
  {
    name: 'Mental Health',
    description: 'Check your mental well-being and find resources for support.',
    image: 'https://images.unsplash.com/photo-1505503693641-1920a3949410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    link: '/diagnose/mental-health'
  },
  {
    name: 'Allergies',
    description: 'Identify potential allergies and learn how to manage allergic reactions.',
    image: 'https://images.unsplash.com/photo-1627225984430-e94225116650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxsZXJnaWVzfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    link: '/diagnose/allergies'
  },
];

const Diagnose = () => {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <BackButton to="/dashboard" />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Online Diagnosis</h1>
          <p className="text-gray-600">Select a condition to start your online diagnosis</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => (
            <DiagnosticCard
              key={index}
              name={condition.name}
              description={condition.description}
              image={condition.image}
              link={condition.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Diagnose;
