/**
 * Testimonials page data types
 * Contains testimonial-related interfaces using shared types
 */

import { StatItem, TestimonialBase } from "../common/shared";

export type Testimonial = TestimonialBase;

export interface SuccessStory {
  name: string;
  role: string;
  before: string;
  after: string;
  duration: string;
  story: string;
}

export interface VideoTestimonial {
  id: number;
  title: string;
  thumbnail: string;
}

export interface TestimonialsPageData {
  hero: {
    title: string;
    subtitle: string;
  };
  stats: StatItem[];
  testimonials: {
    title: string;
    subtitle: string;
  };
  successStories: {
    title: string;
    subtitle: string;
    stories: SuccessStory[];
  };
  videoTestimonials: {
    title: string;
    subtitle: string;
    videos: VideoTestimonial[];
    placeholder: string;
  };
}
