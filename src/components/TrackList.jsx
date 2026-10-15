import React, { useState } from 'react';
import {
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Clock,
  Search,
  ArrowDownUp
} from 'lucide-react';
import TrackItem from './TrackItem';
import './TrackList.css';

export default function TrackList({
  tracks = [],
  currentTrack,
  onPlayTrack,
  onTogglePlay,
  onToggleLikeTrack,
  isPlaylistLiked = false,
  onToggleLikePlaylist,
}) {
  const [filterQuery, setFilterQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Determine if any track in this playlist is currently playing
  const isAnyTrackPlaying =
    currentTrack?.isPlaying &&
    tracks.some((t) => t.title === currentTrack.title);

  const handleMainPlayClick = () => {
    if (isAnyTrackPlaying) {
      onTogglePlay?.(false);
    } else if (tracks.length > 0) {
      // If current track is already from this playlist, resume it; otherwise play first track
      const existingInList = tracks.find((t) => t.title === currentTrack?.title);
      if (existingInList) {
        onTogglePlay?.(true);
      } else {
        onPlayTrack(tracks[0]);
      }
    }
  };

  const filteredTracks = filterQuery.trim()
    ? tracks.filter(
        (t) =>
          t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.artist.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.album?.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : tracks;

  return (
    <div className="tracklist-container" aria-label="Playlist Tracks">
      {/* 1. Action Bar below Playlist Header */}
      <div className="tracklist-action-bar">
        <div className="action-bar-left">
          {/* Large Spotify Green Play Button */}
          <button
            type="button"
            id="btn-playlist-main-play"
            className="playlist-main-play-btn"
            onClick={handleMainPlayClick}
            title={isAnyTrackPlaying ? "Pause playlist" : "Play playlist"}
            aria-label={isAnyTrackPlaying ? "Pause playlist" : "Play playlist"}
          >
            {isAnyTrackPlaying ? (
              <Pause size={24} fill="#000000" color="#000000" />
            ) : (
              <Play size={24} fill="#000000" color="#000000" className="play-triangle-main-offset" />
            )}
          </button>

          {/* Heart / Save to Library Button */}
          <button
            type="button"
            id="btn-playlist-heart"
            className={`playlist-action-icon-btn ${isPlaylistLiked ? 'liked' : ''}`}
            onClick={onToggleLikePlaylist}
            title={isPlaylistLiked ? "Remove from Library" : "Save to Your Library"}
            aria-label="Save to Your Library"
          >
            <Heart
              size={32}
              fill={isPlaylistLiked ? "var(--spotify-green)" : "none"}
              color={isPlaylistLiked ? "var(--spotify-green)" : "currentColor"}
            />
          </button>

          {/* More Options Button */}
          <button
            type="button"
            id="btn-playlist-more"
            className="playlist-action-icon-btn"
            title="More options for playlist"
            aria-label="More options"
          >
            <MoreHorizontal size={30} />
          </button>
        </div>

        {/* Action Bar Right: In-playlist search & sort */}
        <div className="action-bar-right">
          {showSearch ? (
            <div className="playlist-search-inline">
              <Search size={16} className="inline-search-icon" />
              <input
                type="text"
                placeholder="Find in playlist"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                autoFocus
                className="inline-search-input"
              />
              <button
                type="button"
                className="close-inline-search"
                onClick={() => {
                  setShowSearch(false);
                  setFilterQuery('');
                }}
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="playlist-tool-btn"
              onClick={() => setShowSearch(true)}
              title="Search in playlist"
            >
              <Search size={18} />
            </button>
          )}

          <div className="playlist-sort-dropdown">
            <button type="button" className="playlist-tool-btn sort-btn" title="Sort order">
              <span className="sort-label">Custom order</span>
              <ArrowDownUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sticky Table Header Row */}
      <div className="tracklist-header-row" role="row">
        <div className="th-col th-index">#</div>
        <div className="th-col th-title">TITLE</div>
        <div className="th-col th-album">ALBUM</div>
        <div className="th-col th-date">DATE ADDED</div>
        <div className="th-col th-duration">
          <Clock size={16} title="Duration" aria-label="Duration" />
        </div>
      </div>

      {/* 3. Render Track Items */}
      <div className="tracklist-rows-wrapper" role="rowgroup">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track, idx) => {
            const isActive = currentTrack?.title === track.title;
            const isPlaying = isActive && currentTrack?.isPlaying;

            return (
              <TrackItem
                key={track.id}
                track={track}
                index={idx}
                isActiveTrack={isActive}
                isPlaying={isPlaying}
                onPlayTrack={onPlayTrack}
                onToggleLike={onToggleLikeTrack}
              />
            );
          })
        ) : (
          <div className="tracklist-empty-state">
            <p>No songs found matching "{filterQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
