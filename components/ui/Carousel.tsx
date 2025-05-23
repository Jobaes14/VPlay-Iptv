
import React, { useRef } from 'react';
import { Movie, Series } from '../../types';
import { PosterCard } from './PosterCard';
import { IconChevronLeft, IconChevronRight } from '../../constants';

interface CarouselProps {
  title: string;
  items: (Movie | Series)[];
  onPlayItem?: (item: Movie | Series) => void;
  onMoreInfoItem?: (item: Movie | Series) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ title, items, onPlayItem, onMoreInfoItem }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 relative group">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4 px-4 md:px-0">{title}</h2>
      <div className="relative">
        <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
            aria-label="Scroll left"
        >
            <IconChevronLeft className="w-6 h-6" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide px-4 md:px-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60" style={{ scrollSnapAlign: 'start' }}>
              <PosterCard item={item} onPlay={onPlayItem} onMoreInfo={onMoreInfoItem} />
            </div>
          ))}
        </div>
        <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"
            aria-label="Scroll right"
        >
            <IconChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
