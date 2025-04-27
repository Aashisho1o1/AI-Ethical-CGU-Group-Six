import React from 'react';
import { useTranslation } from 'react-i18next';

const InputMethodToggle = ({ activeMethod, onChange }) => {
  const { t } = useTranslation();
  
  const inputMethods = [
    { id: 'keyboard', icon: '⌨️', label: t('inputToggle.keyboard') },
    { id: 'voice', icon: '🎤', label: t('inputToggle.voice') },
    { id: 'image', icon: '🖼️', label: t('inputToggle.image') }
  ];
  
  return (
    <div className="input-method-toggle">
      <span className="input-method-label">{t('inputToggle.selectInputMethod')}</span>
      <div className="toggle-buttons">
        {inputMethods.map(method => (
          <button
            key={method.id}
            className={`toggle-button ${activeMethod === method.id ? 'active' : ''}`}
            onClick={() => onChange(method.id)}
            aria-label={method.label}
            aria-pressed={activeMethod === method.id}
          >
            <span className="method-icon">{method.icon}</span>
            <span className="method-label">{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InputMethodToggle; 