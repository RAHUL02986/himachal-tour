'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bus, Building, MapPin, Calendar, Users, Phone, Mail, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('bus');

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg)'
        }}
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Book Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Reserve your bus tickets, accommodations, and tour packages
          </motion.p>
        </div>
      </section>

      {/* Booking Forms */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="bus" className="flex items-center space-x-2">
                  <Bus className="h-4 w-4" />
                  <span>Bus Booking</span>
                </TabsTrigger>
                <TabsTrigger value="hotel" className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Hotel Booking</span>
                </TabsTrigger>
                <TabsTrigger value="tour" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tour Package</span>
                </TabsTrigger>
              </TabsList>

              {/* Bus Booking Form */}
              <TabsContent value="bus">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-2xl">
                        <Bus className="h-6 w-6 text-blue-600" />
                        <span>Bus Ticket Booking</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="from">From</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select departure city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="delhi">Delhi</SelectItem>
                              <SelectItem value="chandigarh">Chandigarh</SelectItem>
                              <SelectItem value="shimla">Shimla</SelectItem>
                              <SelectItem value="dharamshala">Dharamshala</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="to">To</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dharamshala">Dharamshala</SelectItem>
                              <SelectItem value="manali">Manali</SelectItem>
                              <SelectItem value="shimla">Shimla</SelectItem>
                              <SelectItem value="kasol">Kasol</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="departure">Departure Date</Label>
                          <Input type="date" id="departure" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="passengers">Passengers</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Number of passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4+ Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                        Search Buses
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Hotel Booking Form */}
              <TabsContent value="hotel">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-2xl">
                        <Building className="h-6 w-6 text-green-600" />
                        <span>Hotel Reservation</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dharamshala">Dharamshala</SelectItem>
                            <SelectItem value="mcleodganj">McLeod Ganj</SelectItem>
                            <SelectItem value="manali">Manali</SelectItem>
                            <SelectItem value="shimla">Shimla</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="checkin">Check-in Date</Label>
                          <Input type="date" id="checkin" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="checkout">Check-out Date</Label>
                          <Input type="date" id="checkout" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="rooms">Rooms</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Number of rooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Room</SelectItem>
                              <SelectItem value="2">2 Rooms</SelectItem>
                              <SelectItem value="3">3 Rooms</SelectItem>
                              <SelectItem value="4">4+ Rooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="guests">Guests</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Number of guests" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Guest</SelectItem>
                              <SelectItem value="2">2 Guests</SelectItem>
                              <SelectItem value="3">3 Guests</SelectItem>
                              <SelectItem value="4">4+ Guests</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                        Search Hotels
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* Tour Package Form */}
              <TabsContent value="tour">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-2xl">
                        <MapPin className="h-6 w-6 text-orange-600" />
                        <span>Tour Package Booking</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input type="email" id="email" placeholder="Enter your email" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input type="tel" id="phone" placeholder="+91 98765 43210" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="travelers">Number of Travelers</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select travelers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Person</SelectItem>
                              <SelectItem value="2">2 People</SelectItem>
                              <SelectItem value="3-5">3-5 People</SelectItem>
                              <SelectItem value="6+">6+ People</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="package">Preferred Package</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a tour package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dharamshala">Dharamshala & McLeod Ganj</SelectItem>
                            <SelectItem value="shimla-manali">Shimla Manali Adventure</SelectItem>
                            <SelectItem value="spiti">Spiti Valley Expedition</SelectItem>
                            <SelectItem value="kasol">Kasol Tosh Valley Trek</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="requirements">Special Requirements</Label>
                        <Textarea 
                          id="requirements" 
                          placeholder="Any special requests or requirements..."
                          rows={4}
                        />
                      </div>

                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                        Submit Booking Request
                      </Button>

                      <div className="text-center text-sm text-gray-500">
                        By submitting this form, you agree to our terms and conditions
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Booking?</h2>
            <p className="text-xl text-gray-600">Our travel experts are here to assist you 24/7</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 98765 43210',
                description: 'Speak with our travel experts'
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'bookings@himachaltours.com',
                description: 'Get detailed information via email'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '123 Mall Road, Dharamshala',
                description: 'Visit our office for personalized planning'
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <contact.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                    <p className="text-lg font-medium text-blue-600 mb-2">{contact.content}</p>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}