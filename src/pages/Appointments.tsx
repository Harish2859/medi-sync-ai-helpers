
import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, ChevronRight, Calendar as CalendarIcon, Plus, Filter, Search } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample appointments data
const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Michael Reynolds',
    specialty: 'Cardiologist',
    date: 'June 15, 2023',
    time: '10:30 AM',
    location: 'MediSync Medical Center',
    address: '123 Health Avenue, Medical District',
    notes: 'Follow-up on blood pressure medication'
  },
  {
    id: 2,
    doctor: 'Dr. Lisa Chen',
    specialty: 'Endocrinologist',
    date: 'July 3, 2023',
    time: '2:15 PM',
    location: 'Specialty Care Clinic',
    address: '456 Wellness Boulevard, North Medical District',
    notes: 'Annual thyroid check-up'
  }
];

const pastAppointments = [
  {
    id: 3,
    doctor: 'Dr. Michael Reynolds',
    specialty: 'Cardiologist',
    date: 'May 10, 2023',
    time: '9:00 AM',
    location: 'MediSync Medical Center',
    address: '123 Health Avenue, Medical District',
    notes: 'Initial consultation for hypertension'
  },
  {
    id: 4,
    doctor: 'Dr. James Wilson',
    specialty: 'General Physician',
    date: 'April 5, 2023',
    time: '11:45 AM',
    location: 'MediSync Medical Center',
    address: '123 Health Avenue, Medical District',
    notes: 'Annual physical examination'
  },
  {
    id: 5,
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Dermatologist',
    date: 'March 22, 2023',
    time: '3:30 PM',
    location: 'Dermatology Specialists',
    address: '789 Health Plaza, West Medical District',
    notes: 'Skin check-up'
  }
];

const Appointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter appointments based on search term
  const filteredUpcoming = upcomingAppointments.filter(appointment => 
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredPast = pastAppointments.filter(appointment => 
    appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Your Appointments</h1>
            <p className="text-gray-600">Manage your medical appointments</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Book New Appointment
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search appointments..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-medisync-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    Date
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="upcoming" className="w-full">
                <div className="px-4 pt-4">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="upcoming" className="p-4">
                  {filteredUpcoming.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No matching upcoming appointments found' : 'No upcoming appointments'}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredUpcoming.map((appointment) => (
                        <div key={appointment.id} className="border border-gray-100 rounded-lg hover:border-medisync-100 transition-colors p-4">
                          <div className="flex justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-medisync-600" />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                                <p className="text-sm text-gray-500">{appointment.specialty}</p>
                                
                                <div className="mt-2 space-y-1">
                                  <div className="flex items-center text-sm text-gray-700">
                                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                    {appointment.date}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-700">
                                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                    {appointment.time}
                                  </div>
                                  <div className="flex items-start text-sm text-gray-700">
                                    <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                                    <div>
                                      <div>{appointment.location}</div>
                                      <div className="text-xs text-gray-500">{appointment.address}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                View Details <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="past" className="p-4">
                  {filteredPast.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      {searchTerm ? 'No matching past appointments found' : 'No past appointments'}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPast.map((appointment) => (
                        <div key={appointment.id} className="border border-gray-100 rounded-lg hover:border-medisync-100 transition-colors p-4">
                          <div className="flex justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-gray-500" />
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                                <p className="text-sm text-gray-500">{appointment.specialty}</p>
                                
                                <div className="mt-2 space-y-1">
                                  <div className="flex items-center text-sm text-gray-700">
                                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                    {appointment.date}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-700">
                                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                    {appointment.time}
                                  </div>
                                  <div className="flex items-start text-sm text-gray-700">
                                    <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                                    <div>
                                      <div>{appointment.location}</div>
                                      <div className="text-xs text-gray-500">{appointment.address}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                View Summary <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Find a Doctor</h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                  <select className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-medisync-500 focus:border-transparent">
                    <option value="">Select specialty</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="endocrinology">Endocrinology</option>
                    <option value="general-medicine">General Medicine</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-medisync-500 focus:border-transparent">
                    <option value="">Select location</option>
                    <option value="main-hospital">MediSync Main Hospital</option>
                    <option value="north-clinic">North Medical Clinic</option>
                    <option value="east-clinic">East Medical Clinic</option>
                    <option value="south-clinic">South Medical Clinic</option>
                    <option value="west-clinic">West Medical Clinic</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-medisync-500 focus:border-transparent"
                  />
                </div>
                
                <Button className="w-full">Find Available Doctors</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Need Help?</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about your appointments or need to reschedule?
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center mr-2">
                      <div className="text-medisync-600">📞</div>
                    </div>
                    Call Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <div className="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center mr-2">
                      <div className="text-mint-600">💬</div>
                    </div>
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
