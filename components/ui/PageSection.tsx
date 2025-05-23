
import React, { useState } from 'react';
import { Movie, Series } from '../../types';
import { PosterCard } from './PosterCard';
import { GENRES, YEARS, RATINGS, SORT_BY_OPTIONS, IconSearch, IconChevronDown } from '../../constants';
import { Button } from './Button';

interface FilterDropdownProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2 rounded-md flex items-center justify-between w-full md:w-auto min-w-[120px]"
      >
        {selected || label}
        <IconChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full md:w-auto bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (totalPages === 0) return null;

  return (
    <nav className="flex justify-center items-center space-x-2 my-8">
      <Button variant="secondary" size="sm" onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
        Previous
      </Button>
      {startPage > 1 && (
        <>
          <Button variant="ghost" size="sm" onClick={() => onPageChange(1)}>1</Button>
          {startPage > 2 && <span className="text-gray-400">...</span>}
        </>
      )}
      {pageNumbers.map(number => (
        <Button
          key={number}
          variant={number === currentPage ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onPageChange(number)}
        >
          {number}
        </Button>
      ))}
      {endPage < totalPages && (
         <>
          {endPage < totalPages -1 && <span className="text-gray-400">...</span>}
          <Button variant="ghost" size="sm" onClick={() => onPageChange(totalPages)}>{totalPages}</Button>
        </>
      )}
      <Button variant="secondary" size="sm" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
        Next
      </Button>
    </nav>
  );
};


interface PageSectionProps<T extends Movie | Series> {
  title: string;
  items: T[];
  onPlayItem?: (item: T) => void;
  onMoreInfoItem?: (item: T) => void;
  itemsPerPage?: number;
}

export function PageSection<T extends Movie | Series,>({
  title,
  items,
  onPlayItem,
  onMoreInfoItem,
  itemsPerPage = 12,
}: PageSectionProps<T>): React.ReactNode {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState(SORT_BY_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = items
    .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => selectedGenre ? item.genre.includes(selectedGenre) : true)
    .filter(item => selectedYear ? item.year.toString() === selectedYear : true)
    .filter(item => selectedRating ? item.rating >= parseInt(selectedRating) : true);
  // Mock sorting
  // Add actual sort logic if needed:
  // .sort((a,b) => { ... });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="py-8 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <div className="relative lg:col-span-2">
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent border border-gray-700"
          />
          <IconSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
        <FilterDropdown label="Genre" options={["All Genres", ...GENRES]} selected={selectedGenre || "Genre"} onSelect={(val) => {setSelectedGenre(val === "All Genres" ? "" : val); setCurrentPage(1);}} />
        <FilterDropdown label="Year" options={["All Years", ...YEARS]} selected={selectedYear || "Year"} onSelect={(val) => {setSelectedYear(val === "All Years" ? "" : val); setCurrentPage(1);}} />
        {/* <FilterDropdown label="Rating" options={["Any Rating", ...RATINGS]} selected={selectedRating || "Rating"} onSelect={(val) => {setSelectedRating(val === "Any Rating" ? "" : val); setCurrentPage(1);}} /> */}
        <FilterDropdown label="Sort By" options={SORT_BY_OPTIONS} selected={selectedSortBy} onSelect={(val) => {setSelectedSortBy(val); setCurrentPage(1);}} />
      </div>

      {paginatedItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {paginatedItems.map(item => (
            <PosterCard 
              key={item.id} 
              item={item} 
              onPlay={onPlayItem ? () => onPlayItem(item) : undefined}
              onMoreInfo={onMoreInfoItem ? () => onMoreInfoItem(item) : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16">
          <p className="text-2xl">No {title.toLowerCase()} found.</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
