let audioContext;
let oscillator;
let gainNode;

export const initAudioContext = () => {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
};

export const playTone = (frequency, volume) => {
  if (!audioContext) initAudioContext();

  if (oscillator) {
    oscillator.stop();
  }

  oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  
  gainNode.gain.setValueAtTime(volume / 100, audioContext.currentTime);

  oscillator.connect(gainNode);
  oscillator.start();
};

export const stopTone = () => {
  if (oscillator) {
    oscillator.stop();
    oscillator = null;
  }
};
