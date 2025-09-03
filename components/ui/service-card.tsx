'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, image, features }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
            Learn More
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}