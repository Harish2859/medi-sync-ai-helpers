
import React from 'react';
import CustomCursor from '../components/CustomCursor';
import BackButton from '../components/BackButton';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <BackButton to="/dashboard" />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Schedule and manage your medical appointments</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-center text-gray-500 py-8">Your appointments will appear here</p>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
