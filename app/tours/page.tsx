'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TourCard } from '@/components/ui/tour-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

const allTours = [
  {
    id: 'dharamshala-mcleodganj',
    title: 'Dharamshala & McLeod Ganj Spiritual Journey',
    description: 'Explore the spiritual heart of Himachal Pradesh with visits to monasteries, temples, and the Dalai Lama temple',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    duration: '3 Days 2 Nights',
    price: '₹8,999',
    rating: 4.8,
    reviews: 156,
    category: 'Spiritual'
  },
  {
    id: 'shimla-manali',
    title: 'Shimla Manali Adventure',
    description: 'Classic hill station experience with adventure activities like paragliding and river rafting',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    duration: '5 Days 4 Nights',
    price: '₹15,999',
    rating: 4.9,
    reviews: 243,
    category: 'Adventure'
  },
  {
    id: 'spiti-valley',
    title: 'Spiti Valley Expedition',
    description: 'High altitude desert adventure in the Trans-Himalayas with ancient monasteries',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    duration: '7 Days 6 Nights',
    price: '₹25,999',
    rating: 4.7,
    reviews: 89,
    category: 'Expedition'
  },
  {
    id: 'kasol-tosh',
    title: 'Kasol Tosh Valley Trek',
    description: 'Experience the mini Israel of India with beautiful valleys and local culture',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    duration: '4 Days 3 Nights',
    price: '₹12,499',
    rating: 4.6,
    reviews: 134,
    category: 'Trekking'
  },
  {
    id: 'dalhousie-khajjiar',
    title: 'Dalhousie Khajjiar Delight',
    description: 'Visit the mini Switzerland of India with lush green meadows and colonial charm',
    image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg',
    duration: '3 Days 2 Nights',
    price: '₹9,999',
    rating: 4.5,
    reviews: 98,
    category: 'Nature'
  },
  {
    id: 'kullu-valley',
    title: 'Kullu Valley Cultural Tour',
    description: 'Immerse yourself in local culture with valley views and traditional experiences',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    duration: '4 Days 3 Nights',
    price: '₹11,999',
    rating: 4.7,
    reviews: 167,
    category: 'Cultural'
  }
];

const categories = ['All', 'Spiritual', 'Adventure', 'Expedition', 'Trekking', 'Nature', 'Cultural'];

export default function ToursPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg)'
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Tour Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Discover handcrafted experiences across the beautiful landscapes of Himachal Pradesh
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  variant={index === 0 ? 'default' : 'outline'}
                  className={index === 0 ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TourCard {...tour} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let us create a custom tour package just for you
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Create Custom Package</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}