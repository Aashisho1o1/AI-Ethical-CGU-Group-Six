import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MessageBubble from './MessageBubble';
import ConsentCheckpoint from './ConsentCheckpoint';
import ChatOptions from './ChatOptions';
import InputToggle from './InputToggle';
import ImageBasedInput from './ImageBasedInput';

const ChatInterface = ({ userPreferences }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Parse the query parameter to determine the chat mode
  const queryParams = new URLSearchParams(location.search);
  const chatMode = queryParams.get('mode') || 'talk';
  
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [consentCheckpoints, setConsentCheckpoints] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const [currentFlow, setCurrentFlow] = useState(chatMode);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputMode, setInputMode] = useState('text'); // New state for input mode
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Initialize chat with appropriate welcome message based on mode
  useEffect(() => {
    let initialMessage = '';
    
    switch(chatMode) {
      case 'report':
        initialMessage = t('report.consentReminder') + " " + t('report.anonymousOption') + " " + t('report.identifiedOption');
        break;
      case 'support':
        initialMessage = t('support.resourceTitle');
        break;
      case 'talk':
        initialMessage = t('options.noDecision');
        break;
      default:
        initialMessage = t('welcome.intro');
    }
    
    // Add initial bot message
    setMessages([{
      id: Date.now(),
      sender: 'bot',
      text: initialMessage,
      timestamp: new Date()
    }]);
    
    // If report mode, show initial options
    if (chatMode === 'report') {
      setShowOptions(true);
    }
  }, [chatMode, t]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update input when speech recognition changes
  useEffect(() => {
    if (transcript && inputMode === 'voice') {
      setInputMessage(transcript);
    }
  }, [transcript, inputMode]);

  // Toggle to voice mode when voice mode is selected
  useEffect(() => {
    if (inputMode === 'voice' && browserSupportsSpeechRecognition && !listening) {
      SpeechRecognition.startListening({ continuous: true });
    } else if (inputMode !== 'voice' && listening) {
      SpeechRecognition.stopListening();
    }
  }, [inputMode, browserSupportsSpeechRecognition, listening]);

  // Handle user sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputMessage('');
    resetTranscript();
    setIsTyping(true);
    setIsProcessing(true);
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      handleBotResponse(newUserMessage.text);
      setIsTyping(false);
      setIsProcessing(false);
      
      // After every few messages, show a consent checkpoint
      if (messages.filter(m => m.sender === 'user').length % 3 === 0) {
        setShowConsent(true);
        setConsentCheckpoints(prev => prev + 1);
      }
    }, 1500);
  };

  // Handle the bot's response based on the user message and current flow
  const handleBotResponse = (userMessage) => {
    let responseText = '';
    
    // Different responses based on the flow
    switch(currentFlow) {
      case 'report':
        if (userMessage.toLowerCase().includes('anonym')) {
          responseText = t('report.whatHappened');
          setCurrentFlow('report_anonymous');
        } else if (userMessage.toLowerCase().includes('name') || userMessage.toLowerCase().includes('identif')) {
          responseText = t('report.whatHappened');
          setCurrentFlow('report_identified');
        } else {
          responseText = t('report.consentReminder');
        }
        break;
        
      case 'report_anonymous':
      case 'report_identified':
        if (messages.filter(m => m.sender === 'user').length === 1) {
          responseText = t('report.whenHappened');
        } else {
          responseText = t('report.needHelp');
          // Add emotional validation
          responseText += ` ${t('validation.webelieve')} ${t('validation.notYourFault')}`;
        }
        break;
        
      case 'support':
        responseText = `${t('support.crisisLine')}\n${t('support.therapy')}\n${t('support.community')}\n${t('support.advocate')}`;
        break;
        
      case 'talk':
        responseText = t('options.emotionalFirst');
        if (userMessage.toLowerCase().includes('emotion')) {
          responseText = t('support.resourceTitle');
          setCurrentFlow('support');
        } else if (userMessage.toLowerCase().includes('legal')) {
          responseText = t('report.consentReminder');
          setCurrentFlow('report');
        }
        break;
        
      default:
        responseText = t('chat.emotionalCheck');
    }
    
    // Add bot response message
    const newBotMessage = {
      id: Date.now(),
      sender: 'bot',
      text: responseText,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newBotMessage]);
  };

  // Toggle voice recognition
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  // Handle the user's response to a consent checkpoint
  const handleConsentResponse = (consented) => {
    setShowConsent(false);
    
    // If the user consents, continue the conversation
    if (consented) {
      const consentMessage = {
        id: Date.now(),
        sender: 'bot',
        text: consentCheckpoints > 2 ? t('validation.brave') : t('chat.consentCheck'),
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, consentMessage]);
    } else {
      // If the user does not consent, navigate back to welcome page
      navigate('/');
    }
  };

  // Handle user selecting an option from the chat options
  const handleOptionSelect = (option) => {
    setShowOptions(false);
    
    // Add user "message" based on option selected
    const optionMessage = {
      id: Date.now(),
      sender: 'user',
      text: option,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, optionMessage]);
    
    // Simulate bot typing
    setIsTyping(true);
    setIsProcessing(true);
    
    // Process the selected option after a short delay
    setTimeout(() => {
      handleBotResponse(option);
      setIsTyping(false);
      setIsProcessing(false);
    }, 1500);
  };

  // Handle user selecting an image-based input
  const handleImageSelect = (meaning) => {
    setInputMessage(meaning);
    // Auto-send the message after a short delay to give user time to see what they selected
    setTimeout(() => {
      handleSendMessage();
    }, 500);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>
          {currentFlow === 'report' 
            ? t('welcome.options.report') 
            : currentFlow === 'support' 
              ? t('welcome.options.support') 
              : t('welcome.options.talk')}
        </h2>
        
        {/* Accessibility indicator */}
        {userPreferences.anonymousMode && (
          <div className="anonymous-indicator" aria-live="polite">
            <span role="img" aria-label="Anonymous Mode Active">🔒</span> {t('common.anonymousMode')}
          </div>
        )}
      </div>
      
      <div className="chat-messages" aria-live="polite">
        {messages.map(message => (
          <MessageBubble 
            key={message.id}
            message={message}
            largeText={userPreferences.largeText}
          />
        ))}
        
        {isTyping && (
          <div className="message bot-message typing-indicator">
            <span>{t('chat.responseLoading')}</span>
            <span className="dots">...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {showConsent && (
        <ConsentCheckpoint 
          onResponse={handleConsentResponse}
          checkpointNumber={consentCheckpoints}
        />
      )}
      
      {showOptions && currentFlow === 'report' && (
        <ChatOptions 
          options={[t('report.anonymousOption'), t('report.identifiedOption')]}
          onSelect={handleOptionSelect}
        />
      )}
      
      {showOptions && currentFlow === 'support' && (
        <ChatOptions 
          options={[
            t('support.crisisLine'), 
            t('support.therapy'), 
            t('support.community'), 
            t('support.advocate')
          ]}
          onSelect={handleOptionSelect}
        />
      )}
      
      {showOptions && currentFlow === 'talk' && (
        <ChatOptions 
          options={[
            t('options.emotionalFirst').split(' or ')[0], 
            t('options.emotionalFirst').split(' or ')[1]
          ]}
          onSelect={handleOptionSelect}
        />
      )}
      
      {/* Input mode toggle */}
      <InputToggle 
        inputMode={inputMode} 
        setInputMode={setInputMode} 
      />
      
      {/* Different input methods based on inputMode */}
      {inputMode === 'text' && (
        <div className="chat-input">
          <input
            type="text"
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isProcessing && handleSendMessage()}
            placeholder={t('chat.placeholder')}
            aria-label={t('chat.placeholder')}
            disabled={isProcessing || showConsent}
          />
          
          <button 
            className="btn btn-primary send-btn"
            onClick={handleSendMessage}
            disabled={inputMessage.trim() === '' || isProcessing || showConsent}
            aria-label={t('common.submit')}
          >
            <span role="img" aria-hidden="true">➤</span>
          </button>
        </div>
      )}
      
      {inputMode === 'voice' && (
        <div className="chat-input voice-input">
          <div className="transcript-display">
            {transcript || t('chat.voicePrompt')}
          </div>
          
          <button 
            className={`voice-input-btn ${listening ? 'listening' : ''}`}
            onClick={toggleListening}
            disabled={isProcessing || showConsent}
            aria-label={listening ? 'Stop voice input' : t('chat.voiceInput')}
          >
            <span role="img" aria-hidden="true">🎤</span>
          </button>
          
          <button 
            className="btn btn-primary send-btn"
            onClick={handleSendMessage}
            disabled={!transcript || isProcessing || showConsent}
            aria-label={t('common.submit')}
          >
            <span role="img" aria-hidden="true">➤</span>
          </button>
        </div>
      )}
      
      {inputMode === 'image' && (
        <ImageBasedInput onImageSelect={handleImageSelect} />
      )}
      
      <div className="privacy-notice">
        <small>
          {userPreferences.anonymousMode 
            ? `🔒 ${t('privacy.anonymous')}`
            : `${t('privacy.mandatoryReporting')}`}
        </small>
      </div>
    </div>
  );
};

export default ChatInterface; 