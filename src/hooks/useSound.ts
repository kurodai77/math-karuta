import { useCallback } from 'react';
import { Howl } from 'howler';

const sounds = {
  bgmTitle: new Howl({
    src: ['MusMus-BGM-062.mp3']
,
    loop: true,
    volume: 0.3
  }),
  bgmBattle: new Howl({
    src: ['MusMus-BGM-182.mp3']
,
    loop: true,
    volume: 0.1
  }),
  correct: new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3'],
    volume: 0.2
  }),
  wrong: new Howl({
    src: ['https://audio-previews.elements.envatousercontent.com/files/210354847/preview.mp3'],
    volume: 0.2
  }),
  win: new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3'],
    volume: 0.7
  }),
  lose: new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-sad-game-over-trombone-471.mp3'],
    volume: 0.7
  }),
  special: new Howl({
    src: ['https://assets.mixkit.co/sfx/preview/mixkit-magic-sweep-game-trophy-257.mp3'],
    volume: 0.6
  })
};

export function useSound() {
  const play = useCallback((sound: keyof typeof sounds) => {
    sounds[sound].play();
  }, []);

  const stop = useCallback((sound: keyof typeof sounds) => {
    sounds[sound].stop();
  }, []);

  const stopAll = useCallback(() => {
    Object.values(sounds).forEach(sound => sound.stop());
  }, []);


  return}
  document.getElementById("playBGM")?.addEventListener("click",function() {
    sounds.bgmTitle.play();
  });