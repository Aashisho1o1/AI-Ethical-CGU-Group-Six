import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InputToggle from './InputToggle';
import TextInput from './TextInput';
import ImageInput from './ImageInput';
import VoiceInput from './VoiceInput';

// Enum for input types
const INPUT_TYPES = {
  TEXT: 'text',
  IMAGE: 'image',
  VOICE: 'voice',
  LANGUAGE: 'language'
};

const InputArea = ({ onSendMessage }) => {
  const { t } = useTranslation();
  const [activeInput, setActiveInput] = useState(INPUT_TYPES.TEXT);

  const handleInputChange = (inputType) => {
    setActiveInput(inputType);
  };

  const handleTextSubmit = (text) => {
    onSendMessage({
      type: 'text',
      content: text
    });
  };

  const handleImageSelect = (imageId) => {
    onSendMessage({
      type: 'image',
      content: imageId
    });
  };

  const handleVoiceInput = (transcript) => {
    onSendMessage({
      type: 'voice',
      content: transcript
    });
  };

  const handleLanguageSelect = (languageCode) => {
    onSendMessage({
      type: 'language',
      content: languageCode
    });
  };

  // Render the appropriate input component based on the active input type
  const renderInputComponent = () => {
    switch (activeInput) {
      case INPUT_TYPES.TEXT:
        return <TextInput onSend={handleTextSubmit} />;
      case INPUT_TYPES.IMAGE:
        return <ImageInput onSelect={handleImageSelect} />;
      case INPUT_TYPES.VOICE:
        return <VoiceInput onVoiceInput={handleVoiceInput} />;
      case INPUT_TYPES.LANGUAGE:
        return <LanguageInput onSelect={handleLanguageSelect} />;
      default:
        return <TextInput onSend={handleTextSubmit} />;
    }
  };

  return (
    <div className="input-area">
      <InputToggle 
        activeInput={activeInput} 
        onChange={handleInputChange} 
      />
      <div className="input-container">
        {renderInputComponent()}
      </div>
    </div>
  );
};

// Temporary placeholder component for Language Input
const LanguageInput = ({ onSelect }) => {
  const { t } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'zh', name: 'Chinese' }
  ];
  
  return (
    <div className="language-input">
      <div className="language-input-header">
        <h3>{t('languageInput.selectLanguage')}</h3>
      </div>
      <div className="language-options-grid">
        {languages.map(lang => (
          <button
            key={lang.code}
            className="language-option-button"
            onClick={() => onSelect(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InputArea; 