import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import PlayerBar from './components/PlayerBar';
import { PlayerProvider } from './context/PlayerContext';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'playlist'
  const [activeNav, setActiveNav] = useState('home');
  const [activePlaylistId, setActivePlaylistId] = useState('pl-your-library');
  const [history, setHistory] = useState(['home']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation Handlers
  const handleGoHome = () => {
    setCurrentView('home');
    setActiveNav('home');
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push('home');
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleGoSearch = () => {
    setActiveNav('search');
    const searchInput = document.getElementById('right-sidebar-search-input');
    if (searchInput) {
      searchInput.focus();
    }
  };

  const handleSelectPlaylist = (playlistId = 'pl-your-library') => {
    setActivePlaylistId(playlistId);
    setCurrentView('playlist');
    setActiveNav('');

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(`playlist:${playlistId}`);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleNavigateBack = () => {
    if (historyIndex > 0) {
      const targetIdx = historyIndex - 1;
      const target = history[targetIdx];
      setHistoryIndex(targetIdx);
      if (target === 'home') {
        setCurrentView('home');
        setActiveNav('home');
      } else {
        const pId = target.split(':')[1] || 'pl-your-library';
        setActivePlaylistId(pId);
        setCurrentView('playlist');
        setActiveNav('');
      }
    } else if (currentView === 'playlist') {
      setCurrentView('home');
      setActiveNav('home');
    }
  };

  const handleNavigateForward = () => {
    if (historyIndex < history.length - 1) {
      const targetIdx = historyIndex + 1;
      const target = history[targetIdx];
      setHistoryIndex(targetIdx);
      if (target === 'home') {
        setCurrentView('home');
        setActiveNav('home');
      } else {
        const pId = target.split(':')[1] || 'pl-your-library';
        setActivePlaylistId(pId);
        setCurrentView('playlist');
        setActiveNav('');
      }
    }
  };

  // When user types in search input, switch to playlist view to show real-time track filtering
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 0 && currentView !== 'playlist') {
      setCurrentView('playlist');
    }
  };

  return (
    <PlayerProvider>
      <div className="spotify-app-shell">
        {/* 3-Column Desktop Layout */}
        <div className="spotify-app-body">
          {/* Left Column: ~240px Sidebar */}
          <Sidebar
            currentView={currentView}
            activeNav={activeNav}
            onGoHome={handleGoHome}
            onGoSearch={handleGoSearch}
            onSelectPlaylist={handleSelectPlaylist}
            activePlaylistId={activePlaylistId}
          />

          {/* Middle Column: Scrollable Dynamic MainContent */}
          <MainContent
            currentView={currentView}
            searchQuery={searchQuery}
            onSelectPlaylist={handleSelectPlaylist}
            onNavigateBack={handleNavigateBack}
            onNavigateForward={handleNavigateForward}
            canGoBack={historyIndex > 0 || currentView === 'playlist'}
            canGoForward={historyIndex < history.length - 1}
          />

          {/* Right Column: ~260px RightSidebar with real-time search binding */}
          <RightSidebar
            searchQuery={searchQuery}
            setSearchQuery={handleSearchChange}
          />
        </div>

        {/* Pinned Bottom: Persistent PlayerBar with HTML5 audio playback */}
        <PlayerBar />
      </div>
    </PlayerProvider>
  );
}
