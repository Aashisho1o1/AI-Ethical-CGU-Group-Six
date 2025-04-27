import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaKeyboard, FaImage, FaMicrophone, FaLanguage } from 'react-icons/fa';

const InputToggle = ({ activeInput, onChange }) => {
  const { t } = useTranslation();
  
  const inputOptions = [
    { id: 'text', icon: <FaKeyboard />, label: t('inputToggle.text') },
    { id: 'image', icon: <FaImage />, label: t('inputToggle.image') },
    { id: 'voice', icon: <FaMicrophone />, label: t('inputToggle.voice') },
    { id: 'language', icon: <FaLanguage />, label: t('inputToggle.language') }
  ];

  return (
    <div className="input-toggle" role="radiogroup" aria-label={t('inputToggle.selectInputMethod')}>
      {inputOptions.map(option => (
        <button
          key={option.id}
          className={`input-toggle-button ${activeInput === option.id ? 'active' : ''}`}
          onClick={() => onChange(option.id)}
          aria-pressed={activeInput === option.id}
          aria-label={option.label}
          type="button"
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};

export default InputToggle; 