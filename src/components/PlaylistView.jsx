import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Clock,
} from 'lucide-react';
import {
  playlistTracks,
  circularArtists,
  popularAlbums,
} from '../data/mockData';
import { albumArt } from '../data/artAssets';
import { usePlayer } from '../context/usePlayer';
import './PlaylistView.css';

export default function PlaylistView({
  playlistTitle = "Today's Top Hits",
  searchQuery = '',
  onNavigateBack,
  onNavigateForward,
  canGoBack = true,
  canGoForward = false,
}) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const [tracksLikedMap, setTracksLikedMap] = useState({
    'pl-track-2': true,
    'pl-track-5': true,
  });
  const [isHeaderLiked, setIsHeaderLiked] = useState(true);

  const handleToggleTrackLike = (trackId, e) => {
    e.stopPropagation();
    setTracksLikedMap((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  // Filter tracks in real-time based on searchQuery from RightSidebar
  const filteredTracks = playlistTracks.filter((track) => {
    if (!searchQuery || !searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      track.title.toLowerCase().includes(q) ||
      track.artist.toLowerCase().includes(q) ||
      (track.album && track.album.toLowerCase().includes(q))
    );
  });

  const isPlaylistTrackPlaying =
    isPlaying &&
    filteredTracks.some((t) => t.title === currentTrack?.title);

  const handleMainPlay = () => {
    if (isPlaylistTrackPlaying) {
      togglePlay();
    } else if (filteredTracks.length > 0) {
      // If current track is already in the list, resume it; else play first track
      const existing = filteredTracks.find((t) => t.title === currentTrack?.title);
      if (existing) {
        playTrack(existing);
      } else {
        playTrack(filteredTracks[0]);
      }
    }
  };

  return (
    <div className="playlist-view-wrapper" aria-label="Spotify Playlist View">
      {/* 1. Top Bar */}
      <header className="playlist-top-bar">
        <div className="top-bar-left">
          <div className="history-pill-nav">
            <button
              type="button"
              id="btn-playlist-back"
              className={`history-circle-btn ${!canGoBack ? 'disabled' : ''}`}
              title="Go back"
              aria-label="Go back"
              disabled={!canGoBack}
              onClick={onNavigateBack}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              id="btn-playlist-forward"
              className={`history-circle-btn ${!canGoForward ? 'disabled' : ''}`}
              title="Go forward"
              aria-label="Go forward"
              disabled={!canGoForward}
              onClick={onNavigateForward}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="top-bar-right">
          <button
            type="button"
            id="btn-playlist-upgrade"
            className="upgrade-pill-btn"
            title="Upgrade account"
          >
            UPGRADE
          </button>

          <div
            className="user-avatar-badge"
            id="user-badge-r-playlist"
            title="User Profile (Rishi)"
            aria-label="User Profile R"
          >
            <span className="user-badge-letter">R</span>
          </div>
        </div>
      </header>

      {/* 2. Playlist Header Banner */}
      <div className="playlist-banner-hero">
        <div className="playlist-banner-cover">
          <img
            src={albumArt.top50Global}
            alt={playlistTitle}
            className="playlist-banner-cover-img"
          />
        </div>

        <div className="playlist-banner-details">
          <span className="playlist-banner-type">PUBLIC PLAYLIST</span>
          <h1 className="playlist-banner-title">{playlistTitle}</h1>
          <p className="playlist-banner-desc">
            The hottest tracks from global charts and trending artists right now.
          </p>

          <div className="playlist-banner-meta">
            <span className="playlist-meta-author">Spotify</span>
            <span className="meta-dot">•</span>
            <span className="playlist-meta-likes">33,142,509 likes</span>
            <span className="meta-dot">•</span>
            <span className="playlist-meta-count">
              {filteredTracks.length} songs, ~18 min
            </span>
          </div>
        </div>
      </div>

      {/* 3. Action Row */}
      <div className="playlist-action-bar">
        <button
          type="button"
          id="btn-playlist-play-large"
          className="playlist-big-play-btn"
          onClick={handleMainPlay}
          title={isPlaylistTrackPlaying ? 'Pause playlist' : 'Play playlist'}
          aria-label="Play playlist"
        >
          {isPlaylistTrackPlaying ? (
            <Pause size={24} fill="#000000" color="#000000" />
          ) : (
            <Play size={24} fill="#000000" color="#000000" className="play-triangle-offset" />
          )}
        </button>

        <button
          type="button"
          className={`playlist-heart-action-btn ${isHeaderLiked ? 'is-liked' : ''}`}
          onClick={() => setIsHeaderLiked(!isHeaderLiked)}
          title="Save to Your Library"
          aria-label="Save to Your Library"
        >
          <Heart
            size={30}
            fill={isHeaderLiked ? '#1ed760' : 'none'}
            color={isHeaderLiked ? '#1ed760' : '#b3b3b3'}
          />
        </button>

        <button
          type="button"
          className="playlist-more-action-btn"
          title="More options"
          aria-label="More options"
        >
          <MoreHorizontal size={26} color="#b3b3b3" />
        </button>
      </div>

      {/* 4. Two-Column Split (Left: Numbered Track List | Right: Circular Artist Grid) */}
      <div className="playlist-split-columns-section">
        {/* Left Column: Numbered Track List */}
        <div className="playlist-left-tracks-col">
          <div className="track-table-header">
            <span className="th-num">#</span>
            <span className="th-title">TITLE</span>
            <span className="th-duration">
              <Clock size={16} />
            </span>
          </div>

          <div className="track-table-body">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((track) => {
                const isCurrentTrack = currentTrack?.title === track.title;
                const isPlayingThis = isCurrentTrack && isPlaying;
                const isLiked = tracksLikedMap[track.id] ?? track.isLiked;

                return (
                  <div
                    key={track.id}
                    id={`track-row-${track.index}`}
                    className={`playlist-track-row ${isCurrentTrack ? 'active-track' : ''}`}
                    onClick={() => {
                      playTrack({
                        id: track.id,
                        title: track.title,
                        artist: track.artist,
                        thumbnail: track.thumbnail,
                        coverUrl: track.coverUrl,
                        audioUrl: track.audioUrl,
                        duration: track.durationSeconds,
                        isLiked,
                      });
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Track Number / Playing Equalizer / Play Icon */}
                    <div className="track-cell-num">
                      {isPlayingThis ? (
                        <div className="track-equalizer-anim" title="Playing">
                          <span className="teq-bar teq-1" />
                          <span className="teq-bar teq-2" />
                          <span className="teq-bar teq-3" />
                          <span className="teq-bar teq-4" />
                        </div>
                      ) : (
                        <span className={`track-index-digit ${isCurrentTrack ? 'active-index-green' : ''}`}>
                          {track.index}
                        </span>
                      )}

                      <button
                        type="button"
                        className="track-inline-play-btn"
                        title={isPlayingThis ? `Pause ${track.title}` : `Play ${track.title}`}
                        aria-label={`Play ${track.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isCurrentTrack) {
                            togglePlay();
                          } else {
                            playTrack({
                              id: track.id,
                              title: track.title,
                              artist: track.artist,
                              thumbnail: track.thumbnail,
                              coverUrl: track.coverUrl,
                              audioUrl: track.audioUrl,
                              duration: track.durationSeconds,
                              isLiked,
                            });
                          }
                        }}
                      >
                        {isPlayingThis ? (
                          <Pause size={14} fill="#ffffff" />
                        ) : (
                          <Play size={14} fill="#ffffff" className="play-triangle-offset" />
                        )}
                      </button>
                    </div>

                    {/* Thumbnail, Title, Artist */}
                    <div className="track-cell-title-art">
                      <img
                        src={track.thumbnail}
                        alt={track.title}
                        className="track-cell-thumb-img"
                      />
                      <div className="track-cell-names">
                        <span className={`track-title-text ${isCurrentTrack ? 'is-green' : ''}`}>
                          {track.title}
                        </span>
                        <span className="track-artist-text">{track.artist}</span>
                      </div>
                    </div>

                    {/* Like Button & Duration */}
                    <div className="track-cell-meta-end">
                      <button
                        type="button"
                        className={`track-heart-btn ${isLiked ? 'liked' : ''}`}
                        onClick={(e) => handleToggleTrackLike(track.id, e)}
                        title={isLiked ? 'Remove from Liked' : 'Save to Liked'}
                        aria-label="Like track"
                      >
                        <Heart
                          size={16}
                          fill={isLiked ? '#1ed760' : 'none'}
                          color={isLiked ? '#1ed760' : '#b3b3b3'}
                        />
                      </button>

                      <span className="track-duration-timestamp">{track.duration}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="track-table-empty">
                <p>No tracks found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Circular Artist Grid */}
        <div className="playlist-right-artists-col">
          <div className="artists-section-header">
            <h2 className="artists-section-title">Popular Artists</h2>
          </div>

          <div className="circular-artists-grid">
            {circularArtists.map((artist) => {
              const isArtistCurrent = currentTrack?.artist === artist.name;

              return (
                <div
                  key={artist.id}
                  id={artist.id}
                  className={`artist-circular-card ${isArtistCurrent ? 'active-artist-card' : ''}`}
                  onClick={() =>
                    playTrack({
                      id: artist.id,
                      title: `Top Track by ${artist.name}`,
                      artist: artist.name,
                      thumbnail: artist.portrait,
                      coverUrl: artist.portrait,
                      audioUrl: artist.audioUrl,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  title={`Play ${artist.name}`}
                >
                  <div className="artist-portrait-circle">
                    <img
                      src={artist.portrait}
                      alt={artist.name}
                      className="artist-portrait-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="artist-meta-info">
                    <span className={`artist-display-name ${isArtistCurrent ? 'is-green' : ''}`}>
                      {artist.name}
                    </span>
                    <span className="artist-genre-tag">{artist.genre}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Bottom Section: "Popular albums" Shelf matching the screenshots */}
      <section className="playlist-popular-albums-section" aria-labelledby="playlist-popular-albums-title">
        <div className="shelf-header-row">
          <div>
            <h2 id="playlist-popular-albums-title" className="shelf-heading-title">
              Popular albums
            </h2>
            <span className="shelf-subheading">Trending records worldwide</span>
          </div>
          <button type="button" className="shelf-show-all-link">
            SHOW ALL
          </button>
        </div>

        <div className="shelf-albums-grid">
          {popularAlbums.map((album) => {
            const isPlayingThis =
              currentTrack?.title === album.title && isPlaying;
            const isCurrentAlbum = currentTrack?.title === album.title;

            return (
              <div
                key={album.id}
                id={`pl-${album.id}`}
                className={`album-card ${isCurrentAlbum ? 'active-album-card' : ''}`}
                onClick={() => {
                  playTrack({
                    id: album.id,
                    title: album.title,
                    artist: album.subtitle,
                    thumbnail: album.image,
                    coverUrl: album.image,
                    audioUrl: album.audioUrl,
                    duration: album.duration,
                  });
                }}
                role="button"
                tabIndex={0}
              >
                <div className="album-card-cover-container">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="album-card-cover-img"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    className={`album-card-play-btn ${isPlayingThis ? 'is-playing' : ''}`}
                    title={isPlayingThis ? `Pause ${album.title}` : `Play ${album.title}`}
                    aria-label={`Play ${album.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCurrentAlbum) {
                        togglePlay();
                      } else {
                        playTrack({
                          id: album.id,
                          title: album.title,
                          artist: album.subtitle,
                          thumbnail: album.image,
                          coverUrl: album.image,
                          audioUrl: album.audioUrl,
                          duration: album.duration,
                        });
                      }
                    }}
                  >
                    {isPlayingThis ? (
                      <Pause size={22} fill="#000000" />
                    ) : (
                      <Play size={22} fill="#000000" className="play-icon-offset" />
                    )}
                  </button>
                </div>

                <div className="album-card-meta">
                  <h3 className={`album-card-title ${isCurrentAlbum ? 'is-green' : ''}`}>
                    {album.title}
                  </h3>
                  <p className="album-card-subtitle">{album.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="playlist-bottom-spacer" />
    </div>
  );
}
