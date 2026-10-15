import React, { useState } from 'react';
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Heart,
  Volume2,
  Volume1,
  VolumeX,
  ListMusic,
  Laptop2,
  Maximize2,
} from 'lucide-react';
import { usePlayer } from '../context/usePlayer';
import './PlayerBar.css';

export default function PlayerBar() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    seek,
    setVolumeLevel,
    nextTrack,
    prevTrack,
    toggleLike,
  } = usePlayer();

  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0 = off, 1 = repeat all, 2 = repeat one
  const [prevVolume, setPrevVolume] = useState(0.7);
  const [isHoveringTimeline, setIsHoveringTimeline] = useState(false);
  const [isHoveringVolume, setIsHoveringVolume] = useState(false);

  const formatTime = (seconds) => {
    const s = Math.floor(seconds || 0);
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimelineClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = Math.floor(pct * (duration || 192));
    seek(newTime);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolumeLevel(0);
    } else {
      setVolumeLevel(prevVolume || 0.7);
    }
  };

  const progressPercent =
    duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 52.6;

  const trackTitle = currentTrack?.title || 'Young Blood';
  const trackArtist = currentTrack?.artist || 'Vuce';
  const trackThumb = currentTrack?.coverUrl || currentTrack?.thumbnail;
  const isLiked = currentTrack?.isLiked || false;

  return (
    <footer className="spotify-player-bar" aria-label="Playback Controls">
      {/* 1. Left: Currently Playing Track Info */}
      <div className="player-col-left">
        <div className="player-track-art-box">
          {trackThumb ? (
            <img
              src={trackThumb}
              alt={trackTitle}
              className="player-track-art-img"
            />
          ) : (
            <div className="player-track-art-fallback" />
          )}
        </div>

        <div className="player-track-meta">
          <span className="player-track-title" title={trackTitle}>
            {trackTitle}
          </span>
          <span className="player-track-artist" title={trackArtist}>
            {trackArtist}
          </span>
        </div>

        <button
          type="button"
          id="btn-player-bar-like"
          className={`player-like-btn ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
          title={isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}
          aria-label="Like track"
        >
          <Heart
            size={18}
            fill={isLiked ? '#1ed760' : 'none'}
            color={isLiked ? '#1ed760' : '#b3b3b3'}
          />
        </button>
      </div>

      {/* 2. Center: Playback Controls & Timeline Seekbar */}
      <div className="player-col-center">
        <div className="player-controls-row">
          {/* Shuffle */}
          <button
            type="button"
            id="btn-player-shuffle"
            className={`player-control-icon-btn ${isShuffle ? 'active-green' : ''}`}
            onClick={() => setIsShuffle(!isShuffle)}
            title="Enable shuffle"
            aria-label="Shuffle"
          >
            <Shuffle size={16} />
            {isShuffle && <span className="green-dot-indicator" />}
          </button>

          {/* Previous */}
          <button
            type="button"
            id="btn-player-prev"
            className="player-control-icon-btn"
            onClick={prevTrack}
            title="Previous"
            aria-label="Previous"
          >
            <SkipBack size={18} fill="currentColor" />
          </button>

          {/* White Circular Play/Pause Button */}
          <button
            type="button"
            id="btn-player-play-pause-main"
            className="player-play-pause-white-circle"
            onClick={togglePlay}
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={18} fill="#000000" color="#000000" />
            ) : (
              <Play size={18} fill="#000000" color="#000000" className="play-triangle-center" />
            )}
          </button>

          {/* Next */}
          <button
            type="button"
            id="btn-player-next"
            className="player-control-icon-btn"
            onClick={nextTrack}
            title="Next"
            aria-label="Next"
          >
            <SkipForward size={18} fill="currentColor" />
          </button>

          {/* Repeat */}
          <button
            type="button"
            id="btn-player-repeat"
            className={`player-control-icon-btn ${repeatMode > 0 ? 'active-green' : ''}`}
            onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
            title={repeatMode === 2 ? 'Repeat track' : repeatMode === 1 ? 'Repeat all' : 'Enable repeat'}
            aria-label="Repeat"
          >
            <Repeat size={16} />
            {repeatMode > 0 && <span className="green-dot-indicator" />}
          </button>
        </div>

        {/* Timeline Seekbar with Green Active Fill */}
        <div className="player-timeline-row">
          <span className="player-time-label">{formatTime(currentTime)}</span>

          <div
            className="player-progress-track"
            onClick={handleTimelineClick}
            onMouseEnter={() => setIsHoveringTimeline(true)}
            onMouseLeave={() => setIsHoveringTimeline(false)}
            role="progressbar"
            aria-valuenow={currentTime}
            aria-valuemin={0}
            aria-valuemax={duration}
            tabIndex={0}
          >
            <div
              className={`player-progress-fill ${isHoveringTimeline ? 'hovering' : ''}`}
              style={{ width: `${progressPercent}%` }}
            >
              <div className="player-progress-thumb" />
            </div>
          </div>

          <span className="player-time-label">{formatTime(duration)}</span>
        </div>
      </div>

      {/* 3. Right: Volume Controls & Extra Utilities */}
      <div className="player-col-right">
        <button
          type="button"
          className="player-utility-btn"
          title="Queue"
          aria-label="Queue"
        >
          <ListMusic size={18} />
        </button>

        <button
          type="button"
          className="player-utility-btn"
          title="Connect to a device"
          aria-label="Connect to a device"
        >
          <Laptop2 size={18} />
        </button>

        {/* Volume Slider */}
        <div
          className="player-volume-control"
          onMouseEnter={() => setIsHoveringVolume(true)}
          onMouseLeave={() => setIsHoveringVolume(false)}
        >
          <button
            type="button"
            className="player-utility-btn volume-mute-btn"
            onClick={toggleMute}
            title={volume === 0 ? 'Unmute' : 'Mute'}
            aria-label="Mute / Unmute"
          >
            {volume === 0 ? (
              <VolumeX size={18} />
            ) : volume < 0.5 ? (
              <Volume1 size={18} />
            ) : (
              <Volume2 size={18} />
            )}
          </button>

          <div className="player-volume-slider-box">
            <input
              type="range"
              min="0"
              max="100"
              value={Math.round(volume * 100)}
              onChange={(e) => setVolumeLevel(parseInt(e.target.value, 10) / 100)}
              className="player-volume-range"
              aria-label="Volume slider"
            />
            <div
              className={`player-volume-fill ${isHoveringVolume ? 'hovering' : ''}`}
              style={{ width: `${Math.round(volume * 100)}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          className="player-utility-btn"
          title="Full screen"
          aria-label="Full screen"
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </footer>
  );
}
