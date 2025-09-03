'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Bus, Building, MapPin, Star, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCard } from '@/components/ui/service-card';
import { TourCard } from '@/components/ui/tour-card';

const services = [
  {
    icon: Bus,
    title: 'Bus Booking',
    description: 'Comfortable and safe bus transportation across Himachal Pradesh and India.',
    image: 'https://images.pexels.com/photos/1519999/pexels-photo-1519999.jpeg',
    features: ['AC & Non-AC Buses', '24/7 Customer Support', 'Online Booking', 'Safe Travel']
  },
  {
    icon: Building,
    title: 'Hotel Booking',
    description: 'Book accommodations ranging from budget stays to luxury resorts.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    features: ['Verified Hotels', 'Best Price Guarantee', 'Free Cancellation', '24/7 Support']
  },
  {
    icon: MapPin,
    title: 'Tour Packages',
    description: 'Curated tour packages to explore the beautiful landscapes of Himachal.',
    image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg',
    features: ['Expert Guides', 'All-Inclusive Packages', 'Custom Itineraries', 'Group Discounts']
  }
];

const featuredTours = [
  {
    id: 'dharamshala-mcleodganj',
    title: 'Dharamshala & McLeod Ganj Spiritual Journey',
    description: 'Explore the spiritual heart of Himachal Pradesh',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    duration: '3 Days 2 Nights',
    price: '₹8,999',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'shimla-manali',
    title: 'Shimla Manali Adventure',
    description: 'Classic hill station experience with adventure activities',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    duration: '5 Days 4 Nights',
    price: '₹15,999',
    rating: 4.9,
    reviews: 243
  },
  {
    id: 'spiti-valley',
    title: 'Spiti Valley Expedition',
    description: 'High altitude desert adventure in the Trans-Himalayas',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    duration: '7 Days 6 Nights',
    price: '₹25,999',
    rating: 4.7,
    reviews: 89
  }
];

const stats = [
  { icon: Users, number: '10,000+', label: 'Happy Customers' },
  { icon: MapPin, number: '50+', label: 'Destinations' },
  { icon: Shield, number: '100%', label: 'Safe Travel' },
  { icon: Clock, number: '24/7', label: 'Support' }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg)'
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Discover the Magic of{' '}
            <span className="text-blue-400">Himachal Pradesh</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            From the spiritual vibes of Dharamshala to the adventure trails of Manali,
            experience the Himalayas like never before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
              asChild
            >
              <Link href="/tours">
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/bookings">Book Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive travel solutions for your journey to the mountains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked destinations that showcase the best of Himachal Pradesh
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TourCard {...tour} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 group"
              asChild
            >
              <Link href="/tours">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Himachal Tours?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are your trusted partner for exploring the magnificent beauty of Himachal Pradesh. 
                With years of experience and local expertise, we ensure your journey is memorable and hassle-free.
              </p>
              
              <div className="space-y-4">
                {[
                  'Local expertise and insider knowledge',
                  'Best price guarantee on all bookings',
                  'Safe and reliable transportation',
                  '24/7 customer support during your trip'
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 group"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg"
                  alt="Dharamshala landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating testimonial card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs"
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  "Amazing experience! The team made our Dharamshala trip unforgettable."
                </p>
                <p className="text-gray-500 text-xs">- Priya Sharma, Delhi</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter for exclusive deals and travel tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}