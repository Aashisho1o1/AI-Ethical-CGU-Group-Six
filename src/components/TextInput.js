import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';

const TextInput = ({ onSend }) => {
  const { t } = useTranslation();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    // Submit on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="text-input" onSubmit={handleSubmit}>
      <div className="text-input-container">
        <textarea
          className="text-input-field"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('textInput.placeholder')}
          aria-label={t('textInput.inputLabel')}
          rows={3}
        />
        <button 
          type="submit" 
          className="text-input-submit"
          disabled={!text.trim()}
          aria-label={t('textInput.send')}
        >
          <FaPaperPlane />
        </button>
      </div>
      <div className="text-input-hints">
        <span className="keyboard-hint">
          {t('textInput.submitHint', { key: 'Ctrl+Enter' })}
        </span>
      </div>
    </form>
  );
};

export default TextInput; 