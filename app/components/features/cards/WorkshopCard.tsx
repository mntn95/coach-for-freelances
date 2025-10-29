import { Calendar, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import type { WorkshopCardProps } from "@/types";

export function WorkshopCard({
  title,
  description,
  date,
  duration,
  participants,
  level,
  price,
  onBook,
  delay = 0,
}: WorkshopCardProps) {
  const levelColors = {
    Débutant: "bg-green-100 text-green-700",
    Intermédiaire: "bg-yellow-100 text-yellow-700",
    Avancé: "bg-red-100 text-red-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card className="h-full hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge
              className={
                levelColors[level as keyof typeof levelColors] ||
                "bg-gray-100 text-gray-700"
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
          <Button
            onClick={onBook}
            variant="outline"
            className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            S&apos;inscrire
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
