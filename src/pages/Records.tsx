
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { File, UploadCloud, FileText, Calendar, Search, Download, Filter } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample medical records data
const medicalRecords = [
  { 
    id: 1, 
    type: 'Lab Report',
    title: 'Complete Blood Count (CBC)',
    date: 'May 15, 2023',
    doctor: 'Dr. Michael Reynolds',
    facility: 'MediSync General Hospital',
    fileType: 'PDF'
  },
  { 
    id: 2, 
    type: 'Imaging',
    title: 'Chest X-Ray',
    date: 'April 3, 2023',
    doctor: 'Dr. Emily Chen',
    facility: 'RadiologyPlus Imaging Center',
    fileType: 'DICOM'
  },
  { 
    id: 3, 
    type: 'Prescription',
    title: 'Medication Prescription',
    date: 'May 10, 2023',
    doctor: 'Dr. Michael Reynolds',
    facility: 'MediSync General Hospital',
    fileType: 'PDF'
  },
  { 
    id: 4, 
    type: 'Clinical Notes',
    title: 'Annual Physical Examination',
    date: 'January 22, 2023',
    doctor: 'Dr. Michael Reynolds',
    facility: 'MediSync General Hospital',
    fileType: 'PDF'
  },
  { 
    id: 5, 
    type: 'Lab Report',
    title: 'Lipid Panel',
    date: 'January 22, 2023',
    doctor: 'Dr. Michael Reynolds',
    facility: 'MediSync General Hospital',
    fileType: 'PDF'
  }
];

const Records = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter records based on search term
  const filteredRecords = medicalRecords.filter(record => 
    record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-600">Access and manage your health documents</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search records..."
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
              
              <Tabs defaultValue="all" className="w-full">
                <div className="px-4 pt-4">
                  <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="lab">Lab Reports</TabsTrigger>
                    <TabsTrigger value="imaging">Imaging</TabsTrigger>
                    <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                    <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Doctor</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredRecords.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                              No records found
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredRecords.map((record) => (
                            <TableRow key={record.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-medisync-600" />
                                  </div>
                                  <span>{record.type}</span>
                                </div>
                              </TableCell>
                              <TableCell>{record.title}</TableCell>
                              <TableCell>{record.date}</TableCell>
                              <TableCell>{record.doctor}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="sm">View</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="lab" className="p-4">
                  <div className="p-8 text-center text-gray-500">
                    Filtered Lab Reports will appear here
                  </div>
                </TabsContent>
                
                <TabsContent value="imaging" className="p-4">
                  <div className="p-8 text-center text-gray-500">
                    Filtered Imaging records will appear here
                  </div>
                </TabsContent>
                
                <TabsContent value="prescriptions" className="p-4">
                  <div className="p-8 text-center text-gray-500">
                    Filtered Prescriptions will appear here
                  </div>
                </TabsContent>
                
                <TabsContent value="notes" className="p-4">
                  <div className="p-8 text-center text-gray-500">
                    Filtered Clinical Notes will appear here
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Upload Records</h3>
              </div>
              <div className="p-4">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <UploadCloud className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <p className="text-sm text-gray-500 mb-4">
                    Drag and drop files here, or click to browse
                  </p>
                  <Button size="sm">Browse Files</Button>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Supported formats: PDF, JPEG, PNG, DICOM
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                      <UploadCloud className="h-4 w-4 text-mint-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Uploaded Lab Report</p>
                      <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-medisync-100 flex items-center justify-center flex-shrink-0">
                      <Download className="h-4 w-4 text-medisync-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Downloaded Prescription</p>
                      <p className="text-xs text-gray-500">Yesterday, 3:45 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-mint-100 flex items-center justify-center flex-shrink-0">
                      <File className="h-4 w-4 text-mint-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Viewed Imaging Report</p>
                      <p className="text-xs text-gray-500">May 12, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Records;
