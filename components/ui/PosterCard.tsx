
import React, { useState } from 'react';
import { Movie, Series } from '../../types';
import { Button } from './Button';
import { IconPlay, IconMoreInfo } from '../../constants';

interface PosterCardProps {
  item: Movie | Series;
  onPlay?: (item: Movie | Series) => void;
  onMoreInfo?: (item: Movie | Series) => void;
}

export const PosterCard: React.FC<PosterCardProps> = ({ item, onPlay, onMoreInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.posterUrl} alt={item.title} className="w-full h-full object-cover" />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-3 space-y-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-sm font-semibold truncate">{item.title}</h3>
          <p className="text-gray-300 text-xs line-clamp-2">{item.synopsis}</p>
          <div className="flex space-x-2">
            {onPlay && (
              <Button variant="primary" size="sm" onClick={() => onPlay(item)} className="flex-1" leftIcon={<IconPlay className="w-4 h-4"/>}>
                Play
              </Button>
            )}
            {onMoreInfo && (
               <Button variant="secondary" size="sm" onClick={() => onMoreInfo(item)} className="flex-1" leftIcon={<IconMoreInfo className="w-4 h-4"/>}>
                Info
              </Button>
            )}
          </div>
        </div>
      )}
      {!isHovered && (
         <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-xs font-semibold truncate">{item.title}</h3>
         </div>
      )}
    </div>
  );
};
