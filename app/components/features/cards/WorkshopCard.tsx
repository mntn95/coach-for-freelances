'use client';

import type { WorkshopCardProps } from '@/types';
import { Calendar, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollReveal,
} from '../../ui';

const WorkshopCard = ({
  isAnimatedOnLoad,
  title,
  description,
  date,
  duration,
  participants,
  level,
  price,
  delay = 0,
}: WorkshopCardProps) => {
  const levelColors = {
    Débutant: 'bg-green-100 text-green-700',
    Intermédiaire: 'bg-yellow-100 text-yellow-700',
    Avancé: 'bg-red-100 text-red-700',
  };

  return (
    <ScrollReveal animatesInView={!isAnimatedOnLoad} delay={delay}>
      <Card className="h-full hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge
              className={
                levelColors[level as keyof typeof levelColors] || 'bg-gray-100 text-gray-700'
              }
            >
              {level}
            </Badge>
            <span className="text-purple-600">{price}</span>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-2 text-purple-600" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-2 text-purple-600" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users size={16} className="mr-2 text-purple-600" />
              <span>{participants}</span>
            </div>
          </div>
          <Link href="/booking" className="block">
            <Button
              variant="outline"
              className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-600"
            >
              S&apos;inscrire
            </Button>
          </Link>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export { WorkshopCard };
