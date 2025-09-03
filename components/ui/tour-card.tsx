'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
}

export function TourCard({ id, title, description, image, duration, price, rating, reviews }: TourCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">
              {price}
            </Badge>
          </div>
          
          {/* Rating */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">{rating}</span>
            <span className="text-xs text-gray-600">({reviews})</span>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>8-15 people</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white group"
              asChild
            >
              <Link href={`/tours/${id}`}>
                View Details
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/bookings">Book Now</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}