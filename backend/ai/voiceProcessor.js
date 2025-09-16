// ai/voiceProcessor.js
import { transcribeAudio, synthesizeSpeech } from '../services/speechService.js';

export const processAudioForTranscription = async (audioBuffer, languageCode = 'en-US') => {
  try {
    const transcription = await transcribeAudio(audioBuffer, languageCode);
    return transcription;
  } catch (error) {
    console.error('Error processing audio for transcription:', error);
    throw error;
  }
};

export const convertTextToSpeech = async (text, languageCode = 'en-US') => {
  try {
    const audioContent = await synthesizeSpeech(text, languageCode);
    return audioContent;
  } catch (error) {
    console.error('Error converting text to speech:', error);
    throw error;
  }
};