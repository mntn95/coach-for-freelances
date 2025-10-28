import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  delay?: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-600 mb-6 italic">"{content}"</p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-gray-900">{name}</div>
              <div className="text-sm text-gray-500">
                {role} • {company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
