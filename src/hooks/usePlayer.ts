import { useEffect, useState } from 'react';

export const usePlayer = (songRef: any) => {
  const [videoControl, setVideoControl] = useState({
    playing: false,
    songPercentage: 0,
    songProgress: 0,
    songSeeking: 0,
  });

  useEffect(() => {
    videoControl.playing ? songRef.current.play() : songRef.current.pause();
  }, [songRef, videoControl.playing]);

  function toggleVideoPlay() {
    setVideoControl({
      ...videoControl,
      playing: !videoControl.playing,
    });
  }

  function updateSongProgress() {
    const progressPercentage =
      (songRef.current.currentTime / songRef.current.duration) * 100;

    const progressTime = Math.floor(songRef.current.currentTime);

    setVideoControl({
      ...videoControl,
      songProgress: progressTime,
      songPercentage: progressPercentage,
    });

    console.log(videoControl.songPercentage);
  }

  function handleSeeking(e) {
    const seeking = (songRef.current.currentTime =
      (e.target.value / 100) * songRef.current.duration);

    setVideoControl({
      ...videoControl,
      songSeeking: seeking,
    });
  }

  return {
    videoControl,
    toggleVideoPlay,
    updateSongProgress,
    handleSeeking,
  };
};
