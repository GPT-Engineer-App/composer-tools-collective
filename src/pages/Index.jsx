import { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Waveform, Volume2, Mic, StopCircle } from "lucide-react"
import { playTone, stopTone } from '../lib/audioContext';

const Index = () => {
  const [frequency, setFrequency] = useState(440);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      playTone(frequency, volume);
    }
    return () => stopTone();
  }, [frequency, volume, isPlaying]);

  const handleFrequencyChange = (value) => {
    setFrequency(value[0]);
  };

  const handleVolumeChange = (value) => {
    setVolume(value[0]);
  };

  const toggleTone = () => {
    if (isPlaying) {
      stopTone();
    } else {
      playTone(frequency, volume);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">CDP Realtime Audio Tools</h1>
      
      <div className="w-full max-w-md space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Waveform className="mr-2" /> Tone Generator
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency: {frequency} Hz
              </label>
              <Slider
                value={[frequency]}
                onValueChange={handleFrequencyChange}
                max={2000}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Volume: {volume}%
              </label>
              <Slider
                value={[volume]}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
              />
            </div>
            <Button className="w-full" onClick={toggleTone}>
              {isPlaying ? (
                <>
                  <StopCircle className="mr-2 h-4 w-4" /> Stop Tone
                </>
              ) : (
                <>
                  <Volume2 className="mr-2 h-4 w-4" /> Play Tone
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Mic className="mr-2" /> Audio Recorder
          </h2>
          <Button className="w-full">Start Recording</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
