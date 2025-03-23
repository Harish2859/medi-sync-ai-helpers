import React from 'react';
import CustomCursor from '../components/CustomCursor';
import BackButton from '../components/BackButton';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <BackButton to="/" />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">About MediSync AI</h1>
          <p className="text-gray-600">Learn more about our mission and team</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At MediSync AI, our mission is to revolutionize healthcare by providing personalized,
            AI-driven insights that empower individuals to take control of their health. We believe
            that everyone deserves access to the best possible information and support to make
            informed decisions about their well-being.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4">
            We are a team of passionate healthcare professionals, data scientists, and technology
            enthusiasts dedicated to making a positive impact on the world. Our diverse backgrounds
            and expertise allow us to approach complex challenges with creativity and innovation.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Technology</h2>
          <p className="text-gray-700">
            MediSync AI leverages the latest advancements in artificial intelligence and machine
            learning to analyze vast amounts of health data and provide personalized insights. Our
            cutting-edge algorithms are designed to identify patterns, predict potential health risks,
            and recommend proactive interventions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
