
import React from 'react';
import { Movie, Series, Channel, Program } from './types';

export const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const IconFilm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v11.25m0-11.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5v11.25m0-11.25l2.25 1.313M4.5 5.25l15 0M4.5 18.75l15 0M8.25 2.25l7.5 0M8.25 5.25l0 13.5M15.75 5.25l0 13.5" />
  </svg>
);

export const IconClapperboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75l4.5 3.75m0 0A4.5 4.5 0 0112 6v2.25m0 0l4.5-3.75m-4.5 3.75V21m4.5-11.25V21m0 0H3.75m16.5 0H12m0 0V9.75M3.75 9.75h16.5" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5L7.5 3M3 4.5L7.5 6" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 4.5L21 3M16.5 4.5L21 6" />
  </svg>
);

export const IconTV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m4.5-3.75v3.75M3 17.25V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25zM9 9.75h6M9 13.5h2.25" />
  </svg>
);

export const IconSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const IconUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const IconSettings = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.119-1.248C11.305 2.46 12 2.914 12 3.558V6.44c0 .645-.695 1.098-1.287.858-.558-.24-1.03-.706-1.119-1.248zM12 17.558c0 .645.695 1.098 1.287.858.558-.24 1.03-.706 1.119-1.248.09-.542.56-1.008 1.119-1.248.591-.258 1.287.196 1.287.839v2.882c0 .645-.695 1.098-1.287.858a2.993 2.993 0 01-3.525 0c-.591-.258-1.287.196-1.287.839v2.882c0 .645.695 1.098 1.287.858.558-.24 1.03-.706 1.119-1.248.09-.542.56-1.008 1.119-1.248.591-.258 1.287.196 1.287.839V21m-4.066-17.06a2.993 2.993 0 013.525 0c.591.258 1.287-.196 1.287-.839V.218c0-.645-.695-1.098-1.287-.858a2.993 2.993 0 00-3.525 0C8.305-.64 7.61.196 7.61.839V3.72c0 .645.695 1.098 1.287.858.558-.24 1.03-.706 1.119-1.248zM12 6.442V3.558m0 14V17.56M4.008 12.693c-.542-.09-1.008-.56-1.248-1.119-.24-.558.214-1.254.858-1.254h2.882c.645 0 1.098.695.858 1.287-.24.558-.706 1.03-1.248 1.119-.542.09-1.008.56-1.248 1.119-.24.558.214 1.254.858 1.254h2.882M17.56 12c.645 0 1.098-.695.858-1.287-.24-.558-.706-1.03-1.248-1.119-.542-.09-1.008-.56-1.248-1.119-.24-.558.214-1.254.858-1.254h2.882c.645 0 1.098.695.858 1.287-.24.558-.706 1.03-1.248 1.119-.542.09-1.008.56-1.248 1.119-.24.558.214 1.254.858 1.254H21M3 12h.008m17.984 0h.008M6.442 12H3.558m14 0H17.56" />
  </svg>
);

export const IconPlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.935-1.393 1.674-.93l10.146 6.133c.73.44.73 1.42 0 1.86l-10.146 6.133c-.739.463-1.674.073-1.674-.93V5.653z" />
  </svg>
);

export const IconChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const IconMoreInfo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);


export const MOCK_MOVIES: Movie[] = Array.from({ length: 20 }, (_, i) => ({
  id: `movie-${i + 1}`,
  title: `Movie Title ${i + 1}`,
  posterUrl: `https://picsum.photos/seed/movie${i+1}/400/600`,
  backdropUrl: `https://picsum.photos/seed/moviebackdrop${i+1}/1280/720`,
  year: 2023 - (i % 5),
  genre: ['Action', 'Adventure', 'Sci-Fi'].slice(0, 1 + (i % 3)),
  rating: Math.round((7 + Math.random() * 3) * 10)/10, // e.g. 8.5
  synopsis: `This is a gripping tale of suspense and mystery that will keep you on the edge of your seat. When strange occurrences begin in a quiet town, one detective must uncover the truth before it's too late. Movie index ${i + 1}.`,
}));

export const MOCK_SERIES: Series[] = Array.from({ length: 18 }, (_, i) => ({
  id: `series-${i + 1}`,
  title: `Series Title ${i + 1}`,
  posterUrl: `https://picsum.photos/seed/series${i+1}/400/600`,
  backdropUrl: `https://picsum.photos/seed/seriesbackdrop${i+1}/1280/720`,
  year: 2022 - (i % 4),
  genre: ['Drama', 'Thriller', 'Mystery'].slice(0, 1 + (i % 3)),
  rating: Math.round((7.5 + Math.random() * 2.5)*10)/10,
  synopsis: `Follow the intricate lives of characters in this compelling drama. Each episode reveals new secrets and challenges. Series index ${i + 1}.`,
  seasons: 1 + (i % 3),
  episodesPerSeason: 8 + (i % 5),
}));

export const MOCK_PROGRAMS: Program[] = [
    { title: 'The Morning Show', startTime: '08:00', endTime: '09:00', description: 'Live news and current events.' },
    { title: 'Mid-Morning News', startTime: '09:00', endTime: '10:00', description: 'In-depth analysis and reports.' },
    { title: 'Cooking With Chef John', startTime: '10:00', endTime: '11:00', description: 'Learn new recipes.' },
    { title: 'Action Packed Thriller', startTime: '11:00', endTime: '13:00', description: 'An exciting movie.' },
    { title: 'Grand Prix Finals', startTime: '13:00', endTime: '15:00', description: 'Live sports coverage.' },
];

export const MOCK_CHANNELS: Channel[] = Array.from({ length: 15 }, (_, i) => ({
  id: `channel-${i + 1}`,
  name: `Channel ${i + 1} ${['HD', 'Sports', 'Movies', 'News', 'Kids'][i % 5]}`,
  logoUrl: `https://picsum.photos/seed/channellogo${i+1}/100/50?grayscale&text=Ch${i+1}`,
  currentProgram: MOCK_PROGRAMS[i % MOCK_PROGRAMS.length],
  category: ['General', 'Sports', 'Movies', 'News', 'Kids', 'Documentary'][i % 6]
}));

export const GENRES = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"];
export const YEARS = Array.from({length: 15}, (_, i) => (new Date().getFullYear() - i).toString());
export const RATINGS = Array.from({length: 9}, (_, i) => (9 - i).toString()); // 9 to 1
export const SORT_BY_OPTIONS = ["Popularity", "Release Date", "Rating"];

export const LOGIN_BACKGROUND_IMAGES = Array.from({length: 25}, (_, i) => `https://picsum.photos/seed/loginbg${i}/300/200`);
