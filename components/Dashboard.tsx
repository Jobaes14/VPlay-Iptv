

import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Section, Movie, Series as SeriesType, Channel } from '../types';
import { 
  IconHome, IconFilm, IconClapperboard, IconTV, 
  IconSearch, IconUser, IconSettings,
  MOCK_MOVIES, MOCK_SERIES, MOCK_CHANNELS, MOCK_PROGRAMS,
// BEGIN FIX
  IconPlay, IconMoreInfo
// END FIX
} from '../constants';
import { Carousel } from './ui/Carousel';
import { PageSection } from './ui/PageSection';
import { Button } from './ui/Button';

// --- Sidebar ---
interface SidebarProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: Section.Home, label: 'Home', icon: IconHome, path: '/home' },
    { id: Section.Movies, label: 'Movies', icon: IconFilm, path: '/movies' },
    { id: Section.Series, label: 'Series', icon: IconClapperboard, path: '/series' },
    { id: Section.TV, label: 'TV', icon: IconTV, path: '/tv' },
  ];

  return (
    <div className="w-20 hover:w-64 lg:w-64 bg-gray-900 text-gray-300 flex flex-col transition-all duration-300 ease-in-out group fixed top-0 left-0 h-full z-30">
      <div className="h-20 flex items-center justify-center group-hover:justify-start group-hover:pl-6 shrink-0 border-b border-gray-800">
        <span className="text-2xl font-bold text-red-600">V</span>
        <span className="text-2xl font-bold text-white hidden group-hover:inline">Play</span>
        <span className="text-sm font-semibold text-gray-400 ml-1 hidden group-hover:inline">IPTV</span>
      </div>
      <nav className="flex-grow mt-6 space-y-2 px-3 group-hover:px-4">
        {navItems.map(item => (
          <Link
            to={item.path}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center p-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-150
                        ${currentSection === item.id ? 'bg-red-600 text-white shadow-md' : ''}`}
          >
            <item.icon className={`w-6 h-6 shrink-0 ${currentSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`} />
            <span className="ml-4 text-sm font-medium hidden group-hover:inline">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800 shrink-0">
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer">
           <IconSettings className="w-6 h-6 text-gray-400 group-hover:text-gray-200" />
           <span className="ml-4 text-sm font-medium hidden group-hover:inline">Settings</span>
        </div>
      </div>
    </div>
  );
};

// --- Header ---
interface HeaderProps {
  currentSection: Section;
}
const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  return (
    <header className="h-20 bg-gray-950/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-6 border-b border-gray-800">
      <h1 className="text-2xl font-semibold text-white">{currentSection}</h1>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input 
            type="search" 
            placeholder="Search VPlay IPTV..." 
            className="bg-gray-800 text-gray-200 placeholder-gray-500 rounded-full py-2 px-4 pl-10 focus:ring-2 focus:ring-red-500 focus:border-transparent border border-transparent"
          />
          <IconSearch className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <IconUser className="w-6 h-6 text-gray-300" />
        </button>
      </div>
    </header>
  );
};

// --- Screens ---
const HomeScreen: React.FC = () => {
  const featuredItem = MOCK_MOVIES[0] || MOCK_SERIES[0];
  return (
    <div className="relative min-h-screen">
       {featuredItem && featuredItem.backdropUrl && (
         <div className="absolute inset-0 z-0">
           <img src={featuredItem.backdropUrl} alt="Featured background" className="w-full h-full object-cover opacity-20 blur-sm"/>
           <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950"></div>
         </div>
       )}
      <div className="relative z-10 pt-8 pb-16 px-4 md:px-8">
        {/* Featured Content Banner (optional) - Simple version */}
        {featuredItem && (
          <div className="mb-12 p-6 md:p-8 rounded-lg relative overflow-hidden min-h-[40vh] flex flex-col justify-end items-start"
               style={{ backgroundImage: `url(${featuredItem.backdropUrl || featuredItem.posterUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-0"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{featuredItem.title}</h2>
              <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-3">{featuredItem.synopsis}</p>
              <div className="flex space-x-3">
                <Button variant="primary" size="lg" leftIcon={<IconPlay className="w-5 h-5"/>}>Play</Button>
                <Button variant="secondary" size="lg" leftIcon={<IconMoreInfo className="w-5 h-5"/>}>More Info</Button>
              </div>
            </div>
          </div>
        )}
        
        <Carousel title="Recent Movies" items={MOCK_MOVIES.slice(0,10)} />
        <Carousel title="Recently Updated Series" items={MOCK_SERIES.slice(0,10)} />
        <Carousel title="Popular Movies" items={MOCK_MOVIES.slice(10,20)} />
        <Carousel title="Trending Series" items={MOCK_SERIES.slice(10,18)} />
      </div>
    </div>
  );
};

const MoviesScreen: React.FC = () => (
  <PageSection title="Movies" items={MOCK_MOVIES} itemsPerPage={12} />
);

const SeriesScreen: React.FC = () => (
  <PageSection title="Series" items={MOCK_SERIES} itemsPerPage={12} />
);

const TVChannelsScreen: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = React.useState<Channel | null>(MOCK_CHANNELS[0] || null);
  const [searchChannelTerm, setSearchChannelTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const categories = ['All', ...Array.from(new Set(MOCK_CHANNELS.map(c => c.category).filter(Boolean) as string[]))];

  const filteredChannels = MOCK_CHANNELS.filter(channel => 
    channel.name.toLowerCase().includes(searchChannelTerm.toLowerCase()) &&
    (activeCategory === 'All' || channel.category === activeCategory)
  );


  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)]"> {/* 5rem is approx h-20 header height */}
      {/* Video Player Area */}
      <div className="flex-grow md:w-2/3 bg-black flex flex-col items-center justify-center text-gray-500 p-4 relative">
        {selectedChannel ? (
          <>
            <img src={`https://picsum.photos/seed/${selectedChannel.id}/1280/720`} alt="Video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="relative z-10 text-center bg-black/50 p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-white mb-2">{selectedChannel.name}</h2>
              <p className="text-xl text-gray-300">{selectedChannel.currentProgram?.title || 'No program information'}</p>
              <div className="mt-6 space-x-3">
                <Button variant="primary" size="lg" leftIcon={<IconPlay className="w-6 h-6"/>}>Play</Button>
                <Button variant="secondary" size="lg">Full Screen</Button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-2xl">Select a channel to start watching</p>
        )}
        {selectedChannel && selectedChannel.currentProgram && (
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white z-20">
             <h3 className="text-lg font-semibold">Electronic Program Guide (EPG)</h3>
             <div className="mt-2 border-t border-gray-700 pt-2">
                <p><strong>Now:</strong> {selectedChannel.currentProgram.title} ({selectedChannel.currentProgram.startTime} - {selectedChannel.currentProgram.endTime})</p>
                {/* Find next program */}
                {(() => {
                    const currentIndex = MOCK_PROGRAMS.findIndex(p => p.title === selectedChannel.currentProgram?.title);
                    const nextProgram = MOCK_PROGRAMS[(currentIndex + 1) % MOCK_PROGRAMS.length];
                    return nextProgram ? <p className="text-sm text-gray-400"><strong>Next:</strong> {nextProgram.title} ({nextProgram.startTime} - {nextProgram.endTime})</p> : null;
                })()}
             </div>
           </div>
        )}
      </div>

      {/* Channel List & EPG */}
      <div className="md:w-1/3 bg-gray-900 p-4 flex flex-col overflow-y-hidden">
        <div className="mb-4 shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search channels..."
              value={searchChannelTerm}
              onChange={(e) => setSearchChannelTerm(e.target.value)}
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 px-4 py-2 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent border border-gray-700"
            />
            <IconSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide mt-3 pb-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto space-y-2 pr-1">
          {filteredChannels.length > 0 ? filteredChannels.map(channel => (
            <div
              key={channel.id}
              onClick={() => handleChannelSelect(channel)}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-colors duration-150
                          ${selectedChannel?.id === channel.id ? 'bg-red-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
            >
              <img src={channel.logoUrl} alt={channel.name} className="w-12 h-8 object-contain mr-3 rounded-sm bg-gray-700 p-0.5" />
              <div className="flex-grow">
                <p className="font-semibold text-sm">{channel.name}</p>
                <p className={`text-xs ${selectedChannel?.id === channel.id ? 'text-red-200' : 'text-gray-400'}`}>
                  {channel.currentProgram?.title || 'Live'}
                </p>
              </div>
              {selectedChannel?.id === channel.id && <IconPlay className="w-5 h-5 text-white shrink-0" />}
            </div>
          )) : (
            <p className="text-gray-500 text-center py-8">No channels found.</p>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Dashboard ---
interface DashboardProps {
  onLogout: () => void; // Not used in this version, but good for future
}

export const Dashboard: React.FC<DashboardProps> = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = React.useState<Section>(Section.Home);

  React.useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/movies')) setCurrentSection(Section.Movies);
    else if (path.startsWith('/series')) setCurrentSection(Section.Series);
    else if (path.startsWith('/tv')) setCurrentSection(Section.TV);
    else setCurrentSection(Section.Home);
  }, [location.pathname]);

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar currentSection={currentSection} onNavigate={handleNavigation} />
      <div className="flex-grow ml-20 lg:ml-64 flex flex-col"> {/* Adjust margin-left to match sidebar width */}
        <Header currentSection={currentSection} />
        <main className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/movies" element={<MoviesScreen />} />
            <Route path="/series" element={<SeriesScreen />} />
            <Route path="/tv" element={<TVChannelsScreen />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <footer className="py-4 px-6 text-center text-xs text-gray-500 border-t border-gray-800 bg-gray-900">
            VPlay IPTV &copy; {new Date().getFullYear()}. All Rights Reserved. (Demo Version)
        </footer>
      </div>
    </div>
  );
};