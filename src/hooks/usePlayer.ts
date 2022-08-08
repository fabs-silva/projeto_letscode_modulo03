import { useEffect, useState } from 'react';

export const usePlayer = (songRef: any) => {
  const [videoControl, setVideoControl] = useState({
    playing: false,
    previewLength: 0,
    isMuted: false,
  });
  const [songProgress, setSongProgress] = useState<number>(0);

  useEffect(() => {
    getSongLength();
    console.log(videoControl.previewLength);
  }, [songRef]);

  useEffect(() => {
    if (songRef === undefined) {
      return;
    }
    videoControl.playing ? songRef.current.play() : songRef.current.pause();
  }, [songRef, videoControl.playing]);

  useEffect(() => {
    if (songRef === undefined) {
      return;
    }
    videoControl.isMuted
      ? (songRef.current.muted = true)
      : (songRef.current.muted = false);
  }, [songRef, videoControl.isMuted]);

  function toggleVideoPlay() {
    setVideoControl({
      ...videoControl,
      playing: !videoControl.playing,
    });
  }

  function toggleIsMuted() {
    setVideoControl({
      ...videoControl,
      isMuted: !videoControl.isMuted,
    });
  }

  function updateSongProgress() {
    if (songRef === undefined) {
      return;
    }
    const progressTime = Math.floor(songRef.current.currentTime);

    setSongProgress(progressTime);
  }

  function handleVolume(e) {
    if (songRef === undefined) {
      return;
    }
    return (songRef.current.volume = e.target.value / 100);
  }

  function getSongLength() {
    if (songRef === undefined) {
      return;
    }

    setVideoControl({
      ...videoControl,
      previewLength: songRef.current.duration,
    });
  }

  return {
    videoControl,
    toggleVideoPlay,
    toggleIsMuted,
    updateSongProgress,
    handleVolume,
    songProgress,
  };
};
