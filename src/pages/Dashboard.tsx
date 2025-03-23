
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Activity, File, Calendar, Bell, Settings, Menu, X, User, LogOut, ChevronRight, Pill, Users, Clock, CheckCircle2 } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Mock data for dashboard
  const patientData = {
    name: 'Sarah Johnson',
    age: 32,
    gender: 'Female',
    healthId: 'MED-23456-789',
    email: 'sarah.johnson@example.com',
    phone: '(123) 456-7890',
    address: '123 Health St, Medical City, MC 12345',
    doctor: 'Dr. Michael Reynolds',
    nextAppointment: 'June 15, 2023 - 10:30 AM',
    riskFactors: ['Mild hypertension', 'Family history of diabetes'],
    vitalSigns: {
      bloodPressure: '125/82',
      heartRate: 78,
      temperature: '98.6°F',
      respiratoryRate: 16,
      oxygenSaturation: '98%'
    },
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', purpose: 'Blood pressure' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Blood sugar' },
      { name: 'Vitamin D', dosage: '2000 IU', frequency: 'Once daily', purpose: 'Supplement' }
    ],
    upcomingAppointments: [
      { doctor: 'Dr. Michael Reynolds', specialty: 'Cardiologist', date: 'June 15, 2023', time: '10:30 AM' },
      { doctor: 'Dr. Lisa Chen', specialty: 'Endocrinologist', date: 'July 3, 2023', time: '2:15 PM' }
    ],
    recentDiagnoses: [
      { condition: 'Mild Hypertension', date: 'May 10, 2023', confidence: 92 },
      { condition: 'Vitamin D Deficiency', date: 'May 10, 2023', confidence: 88 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <CustomCursor />
      
      {/* Sidebar */}
      <aside 
        className={`bg-white border-r border-gray-200 w-64 fixed inset-y-0 left-0 z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold tracking-tight text-medisync-700">
                  MediSync<span className="text-mint-500">AI</span>
                </span>
              </Link>
              <button 
                onClick={toggleSidebar}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-6 flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center text-medisync-600 font-medium">
                  {patientData.name.charAt(0)}
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-medium text-gray-900 truncate">{patientData.name}</h3>
                <p className="text-xs text-gray-500">Patient</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <Link 
              to="/dashboard" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-medisync-50 text-medisync-700"
            >
              <Heart className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link 
              to="/diagnose" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Brain className="mr-3 h-5 w-5" />
              AI Diagnosis
            </Link>
            <Link 
              to="/records" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <File className="mr-3 h-5 w-5" />
              Medical Records
            </Link>
            <Link 
              to="/appointments" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Appointments
            </Link>
            <Link 
              to="/medications" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Pill className="mr-3 h-5 w-5" />
              Medications
            </Link>
            <Link 
              to="/activity" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Activity className="mr-3 h-5 w-5" />
              Health Activity
            </Link>
          </nav>
          
          <div className="px-2 py-4 border-t border-gray-200">
            <div className="space-y-1">
              <Link 
                to="/profile" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
              <Link 
                to="/settings" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </Link>
              <Link 
                to="/logout" 
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top navbar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={toggleSidebar}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">Patient Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-1 text-gray-400 hover:text-gray-500 relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>
                <Link to="/profile" className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                  <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center text-medisync-600 font-medium mr-2">
                    {patientData.name.charAt(0)}
                  </div>
                  <span className="hidden md:inline-block">{patientData.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto animate-fade-in">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hello, {patientData.name.split(' ')[0]}</h2>
            <p className="text-gray-600">Here's an overview of your health information</p>
          </div>
          
          {/* Quick actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link 
              to="/diagnose" 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-3">
                <Brain className="w-6 h-6 text-medisync-600" />
              </div>
              <h3 className="font-medium text-gray-900">AI Diagnosis</h3>
              <p className="text-xs text-gray-500 mt-1">Check your symptoms</p>
            </Link>
            
            <Link 
              to="/appointments/new" 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-mint-600" />
              </div>
              <h3 className="font-medium text-gray-900">Book Doctor</h3>
              <p className="text-xs text-gray-500 mt-1">Schedule appointment</p>
            </Link>
            
            <Link 
              to="/medications" 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center mb-3">
                <Pill className="w-6 h-6 text-medisync-600" />
              </div>
              <h3 className="font-medium text-gray-900">Medications</h3>
              <p className="text-xs text-gray-500 mt-1">View & manage</p>
            </Link>
            
            <Link 
              to="/records/upload" 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center mb-3">
                <File className="w-6 h-6 text-mint-600" />
              </div>
              <h3 className="font-medium text-gray-900">Upload Records</h3>
              <p className="text-xs text-gray-500 mt-1">Add medical documents</p>
            </Link>
          </div>
          
          {/* Health summary & appointments */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Health summary */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Health Summary</h3>
                <p className="text-sm text-gray-500 mt-1">AI-powered health insights based on your data</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-medisync-50 border border-medisync-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Blood Pressure</h4>
                      <Activity className="w-4 h-4 text-medisync-600" />
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-gray-900">{patientData.vitalSigns.bloodPressure}</span>
                      <span className="ml-2 text-xs text-medisync-700">mmHg</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Slightly elevated</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-mint-50 border border-mint-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Heart Rate</h4>
                      <Heart className="w-4 h-4 text-mint-600" />
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-gray-900">{patientData.vitalSigns.heartRate}</span>
                      <span className="ml-2 text-xs text-mint-700">bpm</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Normal range</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-medisync-50 border border-medisync-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Oxygen</h4>
                      <Activity className="w-4 h-4 text-medisync-600" />
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-gray-900">{patientData.vitalSigns.oxygenSaturation}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Excellent</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">AI Health Assessment</h4>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Based on your recent vitals and medical history, our AI analysis suggests you have good overall health with mild hypertension. Consider increasing physical activity and reducing sodium intake. Your Vitamin D levels are improving with supplementation.
                    </p>
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <Brain className="w-4 h-4 mr-1 text-medisync-500" />
                      <span>AI-generated insight based on your medical data</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-700">Recent Diagnoses</h4>
                    <Link to="/diagnoses" className="text-xs text-medisync-600 font-medium hover:text-medisync-700">
                      View all
                    </Link>
                  </div>
                  
                  <div className="space-y-3">
                    {patientData.recentDiagnoses.map((diagnosis, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg border border-gray-100 hover:border-medisync-100 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-gray-900">{diagnosis.condition}</h5>
                            <p className="text-xs text-gray-500">Diagnosed on {diagnosis.date}</p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-medisync-50 text-medisync-700">
                              {diagnosis.confidence}% match
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Appointments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Appointments</h3>
                  <p className="text-sm text-gray-500 mt-1">Upcoming doctor visits</p>
                </div>
                <Link 
                  to="/appointments/new"
                  className="text-xs font-medium text-medisync-600 hover:text-medisync-700"
                >
                  + New
                </Link>
              </div>
              
              <div className="divide-y divide-gray-100">
                {patientData.upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-mint-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{appointment.doctor}</p>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        <div className="mt-2 flex items-center text-xs text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{appointment.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/appointments/${index}`}
                        className="text-medisync-600 hover:text-medisync-700"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
                
                <Link 
                  to="/appointments"
                  className="block p-4 text-center text-sm text-medisync-600 hover:text-medisync-700 hover:bg-gray-50 transition-colors"
                >
                  View all appointments
                </Link>
              </div>
            </div>
          </div>
          
          {/* Medications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Current Medications</h3>
                <p className="text-sm text-gray-500 mt-1">Track your prescribed medications</p>
              </div>
              <Link 
                to="/medications"
                className="text-xs font-medium text-medisync-600 hover:text-medisync-700"
              >
                View all
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Medication
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dosage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purpose
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patientData.medications.map((medication, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{medication.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {medication.dosage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {medication.frequency}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {medication.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Health tips */}
          <div className="bg-gradient-to-r from-medisync-600 to-medisync-700 text-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-xl">AI Health Tips</h3>
                  <p className="mt-1 text-white/80">Personalized recommendations for your health</p>
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <Brain className="w-6 h-6" />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Increase physical activity</p>
                    <p className="text-sm text-white/80">Aim for 30 minutes of moderate exercise 5 days a week to help lower blood pressure.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 text-white">🥗</div>
                  </div>
                  <div>
                    <p className="font-medium">Adjust your diet</p>
                    <p className="text-sm text-white/80">Reduce sodium intake and increase consumption of fruits, vegetables, and whole grains.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 text-white">🧘</div>
                  </div>
                  <div>
                    <p className="font-medium">Manage stress</p>
                    <p className="text-sm text-white/80">Practice mindfulness or meditation for 10 minutes daily to help reduce stress levels.</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm font-medium transition-colors">
                Get more personalized recommendations
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
