"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import SkinPopupForm from "./skinpopup";

const videos = [
  // { 
  //   id: 1, 
  //   title: "Hair Transplant Procedure Overview", 
  //   videoUrl: "/one.mp4"
  // },
  // { 
  //   id: 2, 
  //   title: "Patient Testimonial - Success Story", 
  //   videoUrl: "/two.mp4"
  // },
  { 
    id: 3, 
    title: "Clinic Tour & Facilities", 
    videoUrl: "https://ik.imagekit.io/xivdiehvf/public/three.mp4"
  },
  { 
    id: 4, 
    title: "Before & After Transformation", 
    videoUrl: "https://ik.imagekit.io/xivdiehvf/public/four.mp4"
  },
  { 
    id: 5, 
    title: "Doctor Consultation Process", 
    videoUrl: "https://ik.imagekit.io/xivdiehvf/public/five.mp4"
  },
  { 
    id: 6, 
    title: "Advanced Technology Showcase", 
    videoUrl: "https://ik.imagekit.io/xivdiehvf/public/six.mp4"
  },
  { 
    id: 7, 
    title: "Treatment Process Explained", 
    videoUrl: "https://ik.imagekit.io/xivdiehvf/public/seven.mp4"
  },
];

const VideoPlayer = ({ 
  video, 
  primaryColor,
  currentlyPlayingId,
  setCurrentlyPlayingId 
}: { 
  video: any, 
  primaryColor: string,
  currentlyPlayingId: number | null,
  setCurrentlyPlayingId: (id: number | null) => void
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play/pause with single-video-at-a-time logic
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    
    // If another video is playing, pause it first
    if (currentlyPlayingId !== null && currentlyPlayingId !== video.id) {
      setCurrentlyPlayingId(null);
    }
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentlyPlayingId(null);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setCurrentlyPlayingId(video.id);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentlyPlayingId(null);
  };

  // Handle when another video starts playing (pause this one)
  useEffect(() => {
    if (currentlyPlayingId !== null && currentlyPlayingId !== video.id && isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [currentlyPlayingId, video.id, isPlaying]);

  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container - Increased height */}
      <div className="relative overflow-hidden flex-grow min-h-[280px]">
        {/* Video Element - No thumbnail, shows first frame */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          onEnded={handleVideoEnd}
          muted={false}
          controls={isPlaying}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Overlay - Show only when video is not playing */}
        {!isPlaying && (
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isHovered ? 'bg-black/50' : 'bg-black/30'
            }`}
            onClick={handlePlayPause}
          >
            <div 
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundColor: primaryColor }}
            >
              <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" />
            </div>
          </div>
        )}

        {/* Custom Controls Overlay when playing */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
            <div className="flex items-center justify-between">
              <button 
                onClick={handlePlayPause}
                className="text-white hover:text-orange-300 transition-colors flex items-center gap-2 cursor-pointer text-sm"
              >
                <Pause className="w-4 h-4" />
                Pause
              </button>
              
              {/* Audio indicator */}
              <div className="flex items-center gap-2 text-white text-xs">
                <svg 
                  className="w-3 h-3" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span>Audio</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Title */}
      {/* <div className="p-4 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-gray-700">
        <h3 className="text-white font-medium text-center text-sm md:text-base">
          {video.title}
        </h3>
      </div> */}
    </div>
  );
};

const VideosSection = () => {
  const primaryColor = "#ff8501";
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleVideos, setVisibleVideos] = useState(3);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openBookingForm = () => {
    setIsFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsFormOpen(false);
  };

  // Calculate visible videos based on screen size
  useEffect(() => {
    const updateVisibleVideos = () => {
      if (window.innerWidth >= 1280) {
        setVisibleVideos(3); // Large screens: 3 videos
      } else if (window.innerWidth >= 768) {
        setVisibleVideos(2); // Medium screens: 2 videos
      } else {
        setVisibleVideos(1); // Small screens: 1 video
      }
    };

    updateVisibleVideos();
    window.addEventListener('resize', updateVisibleVideos);
    
    return () => window.removeEventListener('resize', updateVisibleVideos);
  }, []);

  // Get current videos to display
  const getCurrentVideos = () => {
    const endIndex = Math.min(currentIndex + visibleVideos, videos.length);
    return videos.slice(currentIndex, endIndex);
  };

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex + visibleVideos < videos.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(videos.length - visibleVideos); // Loop to end
    }
  };

  // Auto-play next video when current one ends
  useEffect(() => {
    if (currentlyPlayingId === null && currentIndex + visibleVideos < videos.length) {
      const timer = setTimeout(() => {
        if (getCurrentVideos().some(v => v.id === currentlyPlayingId)) {
          nextSlide();
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [currentlyPlayingId]);

  // Handle global click to pause all videos
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.group')) {
        setCurrentlyPlayingId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="py-10 md:py-10 max-[470px]:py-6 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto max-[470px]:mb-4 mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              See Our Hair Transformation Videos
            </h2>
            <p className="text-lg text-gray-600">
              Watch 7 exclusive videos showcasing our procedures, patient stories, and clinic facilities
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mb-12 max-[470px]:mb-6">
            {/* Navigation Buttons - Always visible for better UX */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
              aria-label="Previous videos"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
              aria-label="Next videos"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Video Grid - Responsive Carousel */}
            <div 
              ref={carouselRef}
              className="grid gap-6 md:gap-8 px-2"
              style={{
                gridTemplateColumns: `repeat(${visibleVideos}, minmax(0, 1fr))`
              }}
            >
              {getCurrentVideos().map((video) => (
                <VideoPlayer 
                  key={video.id} 
                  video={video}
                  primaryColor={primaryColor}
                  currentlyPlayingId={currentlyPlayingId}
                  setCurrentlyPlayingId={setCurrentlyPlayingId}
                />
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(videos.length / visibleVideos) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visibleVideos)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index * visibleVideos 
                      ? 'bg-orange-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Video Counter */}
            <div className="text-center mt-4 text-gray-600">
              <span className="font-medium text-lg">{currentIndex + 1}-{Math.min(currentIndex + visibleVideos, videos.length)}</span>
              <span className="mx-2">of</span>
              <span className="font-medium text-lg">{videos.length}</span>
              <span className="ml-2">videos</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Ready to Transform Your Hair?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book consultation with our hair experts and discover the best treatment for you
              </p>
            </div>
            
            <Button 
              onClick={openBookingForm}
              style={{ backgroundColor: primaryColor }}
              className="group text-white hover:opacity-90 transition-all duration-300 text-base h-12 md:h-14 px-8 md:px-10 text-lg font-medium shadow-lg hover:shadow-xl cursor-pointer rounded-full"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <SkinPopupForm 
          triggerText="Get Expert Help"
          title="Get Expert Hair Consultation"
          subtitle="Fill the form below and our hair specialists will analyze your concerns and recommend the best solutions"
          onClose={closeBookingForm}
        />
      )}
    </>
  );
};

export default VideosSection;