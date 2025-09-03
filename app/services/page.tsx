'use client';

import { motion } from 'framer-motion';
import { Bus, Building, MapPin, Shield, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCard } from '@/components/ui/service-card';
import Link from 'next/link';

const services = [
  {
    icon: Bus,
    title: 'Bus Booking Services',
    description: 'Comfortable and safe bus transportation across Himachal Pradesh and India with modern amenities.',
    image: 'https://images.pexels.com/photos/1519999/pexels-photo-1519999.jpeg',
    features: ['AC & Non-AC Buses', '24/7 Customer Support', 'Online Booking', 'Safe Travel', 'GPS Tracking', 'Insurance Coverage']
  },
  {
    icon: Building,
    title: 'Hotel & Accommodation',
    description: 'Book accommodations ranging from budget stays to luxury resorts across beautiful locations.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    features: ['Verified Hotels', 'Best Price Guarantee', 'Free Cancellation', '24/7 Support', 'Quality Assurance', 'Local Partnerships']
  },
  {
    icon: MapPin,
    title: 'Tour Packages',
    description: 'Curated tour packages to explore the beautiful landscapes and culture of Himachal Pradesh.',
    image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg',
    features: ['Expert Guides', 'All-Inclusive Packages', 'Custom Itineraries', 'Group Discounts', 'Local Experiences', 'Photography Support']
  }
];

const additionalServices = [
  {
    title: 'Airport Transfers',
    description: 'Reliable airport pickup and drop services',
    icon: '✈️'
  },
  {
    title: 'Car Rentals',
    description: 'Self-drive and chauffeur-driven car rentals',
    icon: '🚗'
  },
  {
    title: 'Adventure Activities',
    description: 'Trekking, paragliding, and river rafting',
    icon: '🏔️'
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive travel and medical insurance',
    icon: '🛡️'
  },
  {
    title: 'Group Tours',
    description: 'Special packages for groups and corporate trips',
    icon: '👥'
  },
  {
    title: 'Emergency Support',
    description: '24/7 emergency assistance during your trip',
    icon: '🆘'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg)'
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Comprehensive travel solutions for your perfect Himachal Pradesh experience
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a seamless travel experience in the mountains
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

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra services to enhance your travel experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We go above and beyond to ensure your travel experience exceeds expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety Guaranteed',
                description: 'All our services meet the highest safety standards'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock assistance whenever you need it'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals who know Himachal inside out'
              },
              {
                icon: Star,
                title: 'Top Rated',
                description: 'Consistently rated 5 stars by thousands of customers'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you plan the perfect trip to the mountains
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
                asChild
              >
                <Link href="/bookings">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}