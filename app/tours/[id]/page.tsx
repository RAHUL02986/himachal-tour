'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Star, MapPin, Calendar, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tourDetails = {
  'dharamshala-mcleodganj': {
    title: 'Dharamshala & McLeod Ganj Spiritual Journey',
    description: 'Immerse yourself in the spiritual atmosphere of Dharamshala and McLeod Ganj, home to the Dalai Lama and a vibrant Tibetan community.',
    images: [
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg'
    ],
    duration: '3 Days 2 Nights',
    price: '₹8,999',
    originalPrice: '₹11,999',
    rating: 4.8,
    reviews: 156,
    groupSize: '8-15 people',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dharamshala',
        activities: ['Check-in to hotel', 'Visit local markets', 'Evening at leisure', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'McLeod Ganj Exploration',
        activities: ['Visit Dalai Lama Temple', 'Explore Tibetan Museum', 'Bhagsu Waterfall trek', 'Shopping at McLeod Ganj']
      },
      {
        day: 3,
        title: 'Departure',
        activities: ['Morning meditation session', 'Check-out and departure', 'Visit Dharamshala Cricket Stadium']
      }
    ],
    included: [
      'Accommodation for 2 nights',
      'All meals (breakfast, lunch, dinner)',
      'Local transportation',
      'Professional guide',
      'All entry fees',
      'Travel insurance'
    ],
    excluded: [
      'Personal expenses',
      'Tips and gratuities',
      'Travel to/from Dharamshala',
      'Optional activities'
    ]
  }
};
export function generateStaticParams() {
  return Object.keys(tourDetails).map((id) => ({
    id,
  }));
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tourDetails[params.id as keyof typeof tourDetails];

  if (!tour) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/tours">
            <Button>Back to Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <motion.img
          src={tour.images[0]}
          alt={tour.title}
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
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">{tour.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating} ({tour.reviews} reviews)</span>
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
                {tour.itinerary.map((day, index) => (
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
                    {tour.included.map((item, index) => (
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
                    {tour.excluded.map((item, index) => (
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
                      <div className="text-3xl font-bold">{tour.price}</div>
                      <div className="text-blue-100 line-through text-lg">{tour.originalPrice}</div>
                    </div>
                    <Badge className="bg-green-500 text-white">25% OFF</Badge>
                  </div>
                  <div className="text-blue-100">per person</div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Group Size</span>
                      <span className="font-semibold">{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tour.rating}</span>
                        <span className="text-gray-500 text-sm">({tour.reviews})</span>
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