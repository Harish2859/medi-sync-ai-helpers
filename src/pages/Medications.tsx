
import React, { useState } from 'react';
import { Pill, Clock, AlertCircle, CheckCircle2, Bell, Calendar, Search, Plus, Filter } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Sample medications data
const currentMedications = [
  {
    id: 1,
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    purpose: 'Blood pressure',
    startDate: 'March 15, 2023',
    nextRefill: 'June 15, 2023',
    status: 'Active',
    instructions: 'Take in the morning with food',
    prescribedBy: 'Dr. Michael Reynolds'
  },
  {
    id: 2,
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    purpose: 'Blood sugar',
    startDate: 'February 10, 2023',
    nextRefill: 'June 10, 2023',
    status: 'Active',
    instructions: 'Take with breakfast and dinner',
    prescribedBy: 'Dr. Lisa Chen'
  },
  {
    id: 3,
    name: 'Vitamin D',
    dosage: '2000 IU',
    frequency: 'Once daily',
    purpose: 'Supplement',
    startDate: 'January 5, 2023',
    nextRefill: 'July 5, 2023',
    status: 'Active',
    instructions: 'Take with a meal',
    prescribedBy: 'Dr. Michael Reynolds'
  }
];

const pastMedications = [
  {
    id: 4,
    name: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    purpose: 'Bacterial infection',
    startDate: 'November 10, 2022',
    endDate: 'November 20, 2022',
    status: 'Completed',
    instructions: 'Take until complete, even if feeling better',
    prescribedBy: 'Dr. James Wilson'
  },
  {
    id: 5,
    name: 'Prednisone',
    dosage: '20mg',
    frequency: 'Once daily',
    purpose: 'Inflammation',
    startDate: 'September 5, 2022',
    endDate: 'September 15, 2022',
    status: 'Completed',
    instructions: 'Tapering dose as directed',
    prescribedBy: 'Dr. Emily Chen'
  }
];

// Sample medication schedule
const medicationSchedule = [
  {
    time: 'Morning (8:00 AM)',
    medications: [
      { name: 'Lisinopril', dosage: '10mg', taken: false },
      { name: 'Vitamin D', dosage: '2000 IU', taken: true }
    ]
  },
  {
    time: 'Afternoon (2:00 PM)',
    medications: []
  },
  {
    time: 'Evening (8:00 PM)',
    medications: [
      { name: 'Metformin', dosage: '500mg', taken: false }
    ]
  }
];

const Medications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter medications based on search term
  const filteredCurrent = currentMedications.filter(medication => 
    medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medication.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredPast = pastMedications.filter(medication => 
    medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medication.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medications</h1>
            <p className="text-gray-600">Manage your prescriptions and schedule</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Medication
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search medications..."
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
                    <Calendar className="h-4 w-4" />
                    Date
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="current" className="w-full">
                <div className="px-4 pt-4">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="current">Current</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="current" className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Frequency</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>Next Refill</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCurrent.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                              No current medications found
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredCurrent.map((medication) => (
                            <TableRow key={medication.id} className="hover:bg-gray-50">
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center">
                                    <Pill className="h-4 w-4 text-medisync-600" />
                                  </div>
                                  <span className="font-medium">{medication.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{medication.dosage}</TableCell>
                              <TableCell>{medication.frequency}</TableCell>
                              <TableCell>{medication.purpose}</TableCell>
                              <TableCell>{medication.nextRefill}</TableCell>
                              <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  {medication.status}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="past" className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Frequency</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>End Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPast.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                              No past medications found
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredPast.map((medication) => (
                            <TableRow key={medication.id} className="hover:bg-gray-50">
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Pill className="h-4 w-4 text-gray-600" />
                                  </div>
                                  <span className="font-medium">{medication.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{medication.dosage}</TableCell>
                              <TableCell>{medication.frequency}</TableCell>
                              <TableCell>{medication.purpose}</TableCell>
                              <TableCell>{medication.endDate}</TableCell>
                              <TableCell>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  {medication.status}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Today's Schedule</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {medicationSchedule.map((schedule, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <h4 className="font-medium text-gray-900">{schedule.time}</h4>
                        </div>
                        {schedule.medications.length > 0 && schedule.medications.some(med => !med.taken) ? (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Due
                          </span>
                        ) : schedule.medications.length > 0 ? (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Taken
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            None
                          </span>
                        )}
                      </div>
                      
                      {schedule.medications.length === 0 ? (
                        <p className="text-sm text-gray-500">No medications scheduled</p>
                      ) : (
                        <div className="space-y-2">
                          {schedule.medications.map((medication, medIndex) => (
                            <div key={medIndex} className="flex items-center justify-between bg-gray-50 rounded-md p-2">
                              <div>
                                <div className="font-medium text-sm">{medication.name}</div>
                                <div className="text-xs text-gray-500">{medication.dosage}</div>
                              </div>
                              <div>
                                {medication.taken ? (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <CheckCircle2 className="w-3 h-3 mr-1" />
                                    Taken
                                  </span>
                                ) : (
                                  <Button size="sm" variant="outline">
                                    Mark as taken
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Medication Reminders</h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reminder notifications</span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="toggle-reminder" defaultChecked className="sr-only" />
                      <label htmlFor="toggle-reminder" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out translate-x-4"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email reminders</span>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input type="checkbox" id="toggle-email" className="sr-only" />
                      <label htmlFor="toggle-email" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-3">
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Manage Reminders
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Medication Alerts</h3>
              </div>
              <div className="p-4">
                <div className="rounded-lg bg-amber-50 border border-amber-100 p-3 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800">Refill Needed</h4>
                    <p className="text-sm text-amber-700">Lisinopril refill due in 5 days</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full" size="sm">
                    Request Refill
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

export default Medications;
