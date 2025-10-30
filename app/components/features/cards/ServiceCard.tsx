'use client';

import { ServiceCardProps } from '@/types/components/features/cards';
import Link from 'next/link';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollReveal,
} from '../../ui';

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  price,
  features,
  delay = 0,
  isAnimatedOnLoad,
}: ServiceCardProps) => (
  <ScrollReveal animatesInView={!isAnimatedOnLoad} delay={delay}>
    <Card className="h-full border-2 hover:border-purple-300 transition-all hover:shadow-xl">
      <CardHeader>
        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
          <Icon className="text-purple-600" size={28} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="pt-4">
          <span className="text-purple-600">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/booking" className="block">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Réserver
          </Button>
        </Link>
      </CardContent>
    </Card>
  </ScrollReveal>
);

export { ServiceCard };
