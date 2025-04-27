import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMicrophone, FaStop } from 'react-icons/fa';

const VoiceInput = ({ onVoiceInput }) => {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize speech recognition if supported by the browser
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      
      recognitionInstance.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        setTranscript(finalTranscript || interimTranscript);
      };
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };
      
      setRecognition(recognitionInstance);
    }
    
    // Cleanup
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleRecording = () => {
    if (!recognition) {
      alert(t('voiceInput.notSupported'));
      return;
    }
    
    if (isRecording) {
      recognition.stop();
      if (transcript) {
        onVoiceInput(transcript);
      }
    } else {
      setTranscript('');
      recognition.start();
    }
    
    setIsRecording(!isRecording);
  };

  const handleSubmit = () => {
    if (transcript) {
      onVoiceInput(transcript);
      setTranscript('');
      if (isRecording) {
        recognition.stop();
        setIsRecording(false);
      }
    }
  };

  return (
    <div className="voice-input">
      <div className="voice-input-header">
        <h3>{t('voiceInput.speak')}</h3>
      </div>
      
      <div className="voice-input-controls">
        <button 
          className={`voice-record-button ${isRecording ? 'recording' : ''}`}
          onClick={toggleRecording}
          aria-label={isRecording ? t('voiceInput.stopRecording') : t('voiceInput.startRecording')}
        >
          {isRecording ? <FaStop /> : <FaMicrophone />}
          <span>{isRecording ? t('voiceInput.stopRecording') : t('voiceInput.startRecording')}</span>
        </button>
        
        {transcript && (
          <>
            <div className="voice-transcript">
              <p>{transcript}</p>
            </div>
            <button 
              className="voice-submit-button"
              onClick={handleSubmit}
              aria-label={t('voiceInput.send')}
            >
              {t('voiceInput.send')}
            </button>
          </>
        )}
        
        {!recognition && (
          <p className="voice-not-supported">
            {t('voiceInput.browserNotSupported')}
          </p>
        )}
      </div>
    </div>
  );
};

export default VoiceInput; 