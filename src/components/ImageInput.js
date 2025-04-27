import React from 'react';
import { useTranslation } from 'react-i18next';

const ImageInput = ({ onSelect }) => {
  const { t } = useTranslation();
  
  // Simple response options with emoji flags and their meanings
  const responseOptions = [
    { id: 'yes', emoji: '👍', label: t('imageInput.yes') },
    { id: 'no', emoji: '👎', label: t('imageInput.no') },
    { id: 'help', emoji: '❓', label: t('imageInput.help') },
    { id: 'happy', emoji: '😊', label: t('imageInput.happy') },
    { id: 'sad', emoji: '😔', label: t('imageInput.sad') },
    { id: 'confused', emoji: '😕', label: t('imageInput.confused') }
  ];

  return (
    <div className="image-input">
      <div className="image-input-header">
        <h3>{t('imageInput.selectResponse')}</h3>
      </div>
      <div className="image-response-grid" role="menu">
        {responseOptions.map(option => (
          <button
            key={option.id}
            className="image-response-button"
            onClick={() => onSelect(option.id)}
            aria-label={option.label}
            role="menuitem"
          >
            <span className="image-response-emoji" aria-hidden="true">{option.emoji}</span>
            <span className="image-response-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageInput; 