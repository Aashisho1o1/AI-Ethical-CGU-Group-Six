import React from 'react';
import { useTranslation } from 'react-i18next';

const SimpleImageInput = ({ onSubmit }) => {
  const { t } = useTranslation();

  // Simple predefined options with emoji flags and common phrases
  const imageOptions = [
    { id: 'help', emoji: '🆘', text: t('imageInput.help') },
    { id: 'yes', emoji: '✅', text: t('imageInput.yes') },
    { id: 'no', emoji: '❌', text: t('imageInput.no') },
    { id: 'thanks', emoji: '🙏', text: t('imageInput.thanks') },
    { id: 'confused', emoji: '❓', text: t('imageInput.confused') },
    { id: 'repeat', emoji: '🔄', text: t('imageInput.repeat') },
    { id: 'greeting', emoji: '👋', text: t('imageInput.greeting') },
    { id: 'goodbye', emoji: '👋', text: t('imageInput.goodbye') }
  ];

  const handleOptionClick = (text) => {
    onSubmit(text);
  };

  return (
    <div className="simple-image-input">
      <div className="image-options-container">
        {imageOptions.map(option => (
          <button
            key={option.id}
            className="image-option"
            onClick={() => handleOptionClick(option.text)}
            aria-label={option.text}
          >
            <span className="image-emoji" role="img" aria-hidden="true">
              {option.emoji}
            </span>
            <span className="image-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimpleImageInput; 