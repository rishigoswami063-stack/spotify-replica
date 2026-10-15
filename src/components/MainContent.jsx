import React from 'react';
import HomeView from './HomeView';
import PlaylistView from './PlaylistView';
import './MainContent.css';

export default function MainContent({
  currentView = 'home',
  searchQuery = '',
  onSelectPlaylist,
  onNavigateBack,
  onNavigateForward,
  canGoBack = false,
  canGoForward = false,
}) {
  return (
    <main
      className="spotify-main-content"
      id="spotify-main-content-scroll"
      tabIndex={0}
      aria-label="Spotify Main Content"
    >
      {currentView === 'playlist' ? (
        <PlaylistView
          searchQuery={searchQuery}
          onNavigateBack={onNavigateBack}
          onNavigateForward={onNavigateForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
        />
      ) : (
        <HomeView
          onSelectPlaylist={onSelectPlaylist}
          onNavigateBack={onNavigateBack}
          onNavigateForward={onNavigateForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
        />
      )}
    </main>
  );
}
