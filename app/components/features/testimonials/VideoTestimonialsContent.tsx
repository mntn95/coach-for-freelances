import { testimonialsPageData } from '@/data/testimonials';
import { ScrollReveal, Image } from '../../ui';

const VideoTestimonialsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonialsPageData.videoTestimonials.videos.map((video, index) => (
      <ScrollReveal key={`video-${video.id}-${index}`} delay={index * 0.1}>
        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden group cursor-pointer">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            context="card"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="text-white text-sm">{video.title}</div>
          </div>
        </div>
      </ScrollReveal>
    ))}
  </div>
);

export default VideoTestimonialsContent;
