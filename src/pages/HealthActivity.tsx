
import React from 'react';
import { Activity, Heart, ArrowUp, ArrowDown, TrendingUp, BarChart, Calendar, Clock, Target, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomCursor from '../components/CustomCursor';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from 'recharts';

// Sample health data
const weeklyBloodPressureData = [
  { day: 'Mon', systolic: 125, diastolic: 82 },
  { day: 'Tue', systolic: 128, diastolic: 85 },
  { day: 'Wed', systolic: 130, diastolic: 86 },
  { day: 'Thu', systolic: 127, diastolic: 84 },
  { day: 'Fri', systolic: 125, diastolic: 83 },
  { day: 'Sat', systolic: 122, diastolic: 80 },
  { day: 'Sun', systolic: 124, diastolic: 81 },
];

const monthlyBloodPressureData = [
  { date: 'Week 1', systolic: 126, diastolic: 83 },
  { date: 'Week 2', systolic: 129, diastolic: 85 },
  { date: 'Week 3', systolic: 125, diastolic: 82 },
  { date: 'Week 4', systolic: 123, diastolic: 81 },
];

const heartRateData = [
  { time: '6 AM', rate: 65 },
  { time: '9 AM', rate: 72 },
  { time: '12 PM', rate: 78 },
  { time: '3 PM', rate: 76 },
  { time: '6 PM', rate: 80 },
  { time: '9 PM', rate: 73 },
  { time: '12 AM', rate: 68 },
];

const recentActivities = [
  { 
    id: 1, 
    type: 'Walking', 
    duration: '45 minutes', 
    date: 'Today, 10:30 AM',
    distance: '3.2 km',
    calories: 180,
    steps: 4500
  },
  { 
    id: 2, 
    type: 'Cycling', 
    duration: '30 minutes', 
    date: 'Yesterday, 6:15 PM',
    distance: '8.5 km',
    calories: 240,
    steps: 0
  },
  { 
    id: 3, 
    type: 'Swimming', 
    duration: '40 minutes', 
    date: 'May 12, 2023',
    distance: '1.2 km',
    calories: 320,
    steps: 0
  },
  { 
    id: 4, 
    type: 'Running', 
    duration: '25 minutes', 
    date: 'May 10, 2023',
    distance: '3.8 km',
    calories: 290,
    steps: 4200
  }
];

const healthGoals = [
  { id: 1, name: 'Daily Steps', target: '10,000 steps', current: '7,500 steps', percent: 75 },
  { id: 2, name: 'Weekly Exercise', target: '150 minutes', current: '110 minutes', percent: 73 },
  { id: 3, name: 'Water Intake', target: '2 liters daily', current: '1.5 liters', percent: 65 },
  { id: 4, name: 'Sleep', target: '8 hours daily', current: '7 hours', percent: 87 }
];

const HealthActivity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CustomCursor />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Health Activity</h1>
            <p className="text-gray-600">Track your health metrics and activities</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Log Activity
          </Button>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center">
                <Heart className="w-6 h-6 text-medisync-600" />
              </div>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <ArrowDown className="w-4 h-4 mr-1" />
                5%
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Blood Pressure</h3>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">125/82</span>
              <span className="ml-2 text-xs text-gray-500">mmHg</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Last measured today, 8:30 AM</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center">
                <Activity className="w-6 h-6 text-mint-600" />
              </div>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                3%
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Heart Rate</h3>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">78</span>
              <span className="ml-2 text-xs text-gray-500">bpm</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Resting | Average today</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-medisync-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-medisync-600" />
              </div>
              <div className="flex items-center text-green-500 text-sm font-medium">
                <ArrowUp className="w-4 h-4 mr-1" />
                12%
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Activity</h3>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">7,500</span>
              <span className="ml-2 text-xs text-gray-500">steps</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">75% of your daily goal</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-mint-600" />
              </div>
              <div className="flex items-center text-amber-500 text-sm font-medium">
                <ArrowDown className="w-4 h-4 mr-1" />
                8%
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500">Sleep</h3>
            <div className="flex items-baseline mt-1">
              <span className="text-2xl font-semibold text-gray-900">7.0</span>
              <span className="ml-2 text-xs text-gray-500">hours</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Last night | 87% efficiency</p>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Blood Pressure</h3>
            </div>
            <div className="p-4">
              <Tabs defaultValue="week" className="w-full">
                <TabsList className="mb-4 grid grid-cols-3 w-48">
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                
                <TabsContent value="week" className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyBloodPressureData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[70, 140]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#0f766e" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#0ea5e9" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="month" className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyBloodPressureData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[70, 140]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="systolic" 
                        stroke="#0f766e" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="diastolic" 
                        stroke="#0ea5e9" 
                        strokeWidth={2} 
                        dot={{ r: 4 }} 
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="year" className="h-72">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Yearly data visualization coming soon
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Heart Rate</h3>
            </div>
            <div className="p-4">
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="mb-4 grid grid-cols-3 w-48">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                
                <TabsContent value="today" className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={heartRateData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[60, 100]} />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="rate" 
                        stroke="#0f766e" 
                        fill="#0f766e" 
                        fillOpacity={0.3} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="week" className="h-72">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Weekly heart rate data visualization coming soon
                  </div>
                </TabsContent>
                
                <TabsContent value="month" className="h-72">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Monthly heart rate data visualization coming soon
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Activity History & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Recent Activities</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border border-gray-100 rounded-lg p-4 hover:border-medisync-100 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-medisync-100 flex items-center justify-center">
                          <Activity className="h-5 w-5 text-medisync-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{activity.type}</h4>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                          
                          <div className="mt-3 grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-xs text-gray-500">Duration</div>
                              <div className="font-medium">{activity.duration}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Distance</div>
                              <div className="font-medium">{activity.distance}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Calories</div>
                              <div className="font-medium">{activity.calories}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="outline">View All Activities</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Health Goals</h3>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-6">
                {healthGoals.map((goal) => (
                  <div key={goal.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{goal.name}</h4>
                        <div className="text-xs text-gray-500">
                          {goal.current} of {goal.target}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium">{goal.percent}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-medisync-500 h-2 rounded-full" 
                        style={{ width: `${goal.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Manage Goals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthActivity;
