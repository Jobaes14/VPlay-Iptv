
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  genre: string[];
  rating: number;
  synopsis: string;
  backdropUrl?: string;
}

export interface Series extends Movie {
  seasons: number;
  episodesPerSeason: number;
}

export interface Channel {
  id: string;
  name: string;
  logoUrl: string;
  currentProgram?: Program;
  category?: string;
}

export interface Program {
  title: string;
  startTime: string;
  endTime: string;
  description?: string;
}

export enum Section {
  Home = 'Home',
  Movies = 'Movies',
  Series = 'Series',
  TV = 'TV',
}
