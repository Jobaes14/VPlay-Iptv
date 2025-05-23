import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input'; // New Input component
import { LOGIN_BACKGROUND_IMAGES, IconChevronLeft } from '../constants';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

type LoginMode = 'initial' | 'm3u' | 'xtream';

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [loginMode, setLoginMode] = useState<LoginMode>('initial');
  const [formError, setFormError] = useState<string | null>(null);

  // M3U States
  const [m3uPlaylistName, setM3uPlaylistName] = useState('');
  const [m3uUrl, setM3uUrl] = useState('');

  // Xtream Codes States
  const [xtreamPlaylistName, setXtreamPlaylistName] = useState('');
  const [xtreamUsername, setXtreamUsername] = useState('');
  const [xtreamPassword, setXtreamPassword] = useState('');
  const [xtreamUrl, setXtreamUrl] = useState('');

  const handleBackToInitial = () => {
    setLoginMode('initial');
    setFormError(null);
    // Clear M3U fields
    setM3uPlaylistName('');
    setM3uUrl('');
    // Clear Xtream fields
    setXtreamPlaylistName('');
    setXtreamUsername('');
    setXtreamPassword('');
    setXtreamUrl('');
  };

  const handleM3UConnect = () => {
    if (!m3uPlaylistName.trim() || !m3uUrl.trim()) {
      setFormError('All M3U fields are required.');
      return;
    }
    setFormError(null);
    // In a real app, you'd validate/process the M3U URL here
    alert(`Connecting with M3U:\nPlaylist: ${m3uPlaylistName}\nURL: ${m3uUrl}`);
    onLoginSuccess();
  };

  const handleXtreamConnect = () => {
    if (!xtreamPlaylistName.trim() || !xtreamUsername.trim() || !xtreamPassword.trim() || !xtreamUrl.trim()) {
      setFormError('All Xtream Codes fields are required.');
      return;
    }
    setFormError(null);
    // In a real app, you'd validate/process the Xtream Codes here
    alert(`Connecting with Xtream Codes:\nPlaylist: ${xtreamPlaylistName}\nUser: ${xtreamUsername}\nURL: ${xtreamUrl}`);
    onLoginSuccess();
  };
  
  const renderInitialView = () => (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Connect to Your Entertainment</h1>
      <p className="text-gray-400 mb-12 text-lg">Choose your preferred connection method to get started.</p>
      <div className="space-y-6 w-full max-w-xs">
        <Button
          onClick={() => setLoginMode('m3u')}
          variant="primary"
          size="lg"
          className="w-full !py-4 text-lg border-2 border-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 active:shadow-inner active:scale-95 transition-all duration-150"
          aria-label="Connect with M3U Playlist"
        >
          M3U Playlist
        </Button>
        <Button
          onClick={() => setLoginMode('xtream')}
          variant="primary"
          size="lg"
          className="w-full !py-4 text-lg border-2 border-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 active:shadow-inner active:scale-95 transition-all duration-150"
          aria-label="Connect with Xtream Codes"
        >
          Xtream Codes
        </Button>
      </div>
    </>
  );

  const renderM3UForm = () => (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">M3U Playlist Setup</h2>
      <div className="space-y-5 w-full max-w-sm">
        <Input
          label="Playlist Name"
          id="m3uPlaylistName"
          value={m3uPlaylistName}
          onChange={(e) => setM3uPlaylistName(e.target.value)}
          placeholder="e.g., My IPTV"
          required
        />
        <Input
          label="M3U URL"
          id="m3uUrl"
          value={m3uUrl}
          onChange={(e) => setM3uUrl(e.target.value)}
          placeholder="http://example.com/playlist.m3u"
          type="url"
          required
        />
        {formError && <p className="text-red-400 text-sm text-center">{formError}</p>}
        <Button
          onClick={handleM3UConnect}
          variant="primary"
          size="lg"
          className="w-full !py-3 text-base"
          aria-label="Connect M3U Playlist"
        >
          Connect
        </Button>
        <Button
          onClick={handleBackToInitial}
          variant="secondary"
          size="md"
          className="w-full !py-2.5 text-base"
          leftIcon={<IconChevronLeft className="w-5 h-5" />}
          aria-label="Back to connection type selection"
        >
          Back
        </Button>
      </div>
    </>
  );

  const renderXtreamForm = () => (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">Xtream Codes Setup</h2>
      <div className="space-y-5 w-full max-w-sm">
        <Input
          label="Playlist Name"
          id="xtreamPlaylistName"
          value={xtreamPlaylistName}
          onChange={(e) => setXtreamPlaylistName(e.target.value)}
          placeholder="e.g., My Xtream Provider"
          required
        />
        <Input
          label="Username"
          id="xtreamUsername"
          value={xtreamUsername}
          onChange={(e) => setXtreamUsername(e.target.value)}
          placeholder="Your Username"
          required
        />
        <Input
          label="Password"
          id="xtreamPassword"
          value={xtreamPassword}
          onChange={(e) => setXtreamPassword(e.target.value)}
          placeholder="Your Password"
          type="password"
          required
        />
        <Input
          label="URL (including http/https and port)"
          id="xtreamUrl"
          value={xtreamUrl}
          onChange={(e) => setXtreamUrl(e.target.value)}
          placeholder="http://xtream.example.com:8080"
          type="url"
          required
        />
        {formError && <p className="text-red-400 text-sm text-center">{formError}</p>}
        <Button
          onClick={handleXtreamConnect}
          variant="primary"
          size="lg"
          className="w-full !py-3 text-base"
          aria-label="Connect Xtream Codes"
        >
          Connect
        </Button>
        <Button
          onClick={handleBackToInitial}
          variant="secondary"
          size="md"
          className="w-full !py-2.5 text-base"
          leftIcon={<IconChevronLeft className="w-5 h-5" />}
          aria-label="Back to connection type selection"
        >
          Back
        </Button>
      </div>
    </>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-4 overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1 opacity-30 blur-sm" aria-hidden="true">
          {LOGIN_BACKGROUND_IMAGES.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="" // Decorative images, alt text handled by main content
              className="w-full h-auto aspect-square object-cover"
              loading="lazy"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div> {/* Dark overlay for readability */}
      </div>

      {/* Login Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
        <div className="mb-8">
           <span className="text-5xl font-bold text-red-600">V</span>
           <span className="text-5xl font-bold text-white">Play</span>
           <span className="block text-2xl font-semibold text-gray-300 tracking-wider">IPTV</span>
        </div>

        {loginMode === 'initial' && renderInitialView()}
        {loginMode === 'm3u' && renderM3UForm()}
        {loginMode === 'xtream' && renderXtreamForm()}
        
         <p className="mt-12 text-xs text-gray-500">
            VPlay IPTV &copy; {new Date().getFullYear()}. For demonstration purposes.
        </p>
      </div>
    </div>
  );
};