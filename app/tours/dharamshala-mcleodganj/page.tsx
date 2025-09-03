'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Star, MapPin, Calendar, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tourDetails = {
  title: 'Dharamshala & McLeodganj Escape',
  description: 'Discover the serene beauty of the Dhauladhar ranges with Tibetan culture, monasteries, waterfalls, and adventure activities in Dharamshala & McLeodganj.',
  images: [
    'https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg',
    'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg',
    'https://images.pexels.com/photos/460681/pexels-photo-460681.jpeg'
  ],
  duration: '4 Days 3 Nights',
  price: '₹12,499',
  originalPrice: '₹15,999',
  rating: 4.8,
  reviews: 198,
  groupSize: '6-12 people',
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Dharamshala',
      activities: [
        'Arrival and hotel check-in',
        'Evening walk at Dharamshala Cricket Stadium',
        'Explore local Tibetan market',
        'Overnight stay in Dharamshala'
      ]
    },
    {
      day: 2,
      title: 'Dharamshala Sightseeing',
      activities: [
        'Visit Dalai Lama Temple Complex',
        'Bhagsu Waterfall and Bhagsunath Temple',
        'St. John in the Wilderness Church',
        'Evening free for leisure'
      ]
    },
    {
      day: 3,
      title: 'Excursion to McLeodganj & Naddi',
      activities: [
        'Drive to McLeodganj',
        'Explore Namgyal Monastery and Tibetan Museum',
        'Visit Dal Lake and Naddi View Point',
        'Evening at Mall Road, McLeodganj'
      ]
    },
    {
      day: 4,
      title: 'Departure',
      activities: [
        'Morning visit to War Memorial',
        'Check-out from hotel',
        'Drop at departure point',
        'End of trip with memories'
      ]
    }
  ],
  included: [
    'Accommodation for 3 nights in Dharamshala',
    'All meals (breakfast, lunch, dinner)',
    'Transportation in AC vehicle',
    'Professional tour guide',
    'All entry fees and permits',
    'Local sightseeing tours',
    'Travel insurance'
  ],
  excluded: [
    'Personal expenses and shopping',
    'Tips and gratuities',
    'Travel to/from starting point',
    'Adventure activities not mentioned',
    'Camera charges at monuments'
  ]
};

export default function DharamshalaMcleodganj() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <motion.img
          src={tourDetails.images[0]}
          alt={tourDetails.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Link href="/tours" className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 mb-4">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Tours</span>
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tourDetails.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">{tourDetails.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{tourDetails.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{tourDetails.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>{tourDetails.rating} ({tourDetails.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tourDetails.itinerary.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader className="bg-blue-50">
                        <CardTitle className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {day.day}
                          </div>
                          <span>{day.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-2">
                          {day.activities.map((activity, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tourDetails.included.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tourDetails.excluded.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-red-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-0.5 bg-red-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-bold">{tourDetails.price}</div>
                      <div className="text-blue-100 line-through text-lg">{tourDetails.originalPrice}</div>
                    </div>
                    <Badge className="bg-green-500 text-white">22% OFF</Badge>
                  </div>
                  <div className="text-blue-100">per person</div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{tourDetails.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Group Size</span>
                      <span className="font-semibold">{tourDetails.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tourDetails.rating}</span>
                        <span className="text-gray-500 text-sm">({tourDetails.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg" asChild>
                      <Link href="/bookings">Book This Tour</Link>
                    </Button>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                      <Phone className="h-4 w-4 mr-2" />
                      Call for Custom Package
                    </Button>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-2">Need help? Call us at</p>
                    <p className="text-lg font-semibold text-blue-600">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
