import React from 'react';

const ChatOptions = ({ options, onSelect }) => {
  const getIconForOption = (option) => {
    if (option.toLowerCase().includes('anonymous') || option.toLowerCase().includes('anónim')) {
      return '🔒';
    } else if (option.toLowerCase().includes('report') || option.toLowerCase().includes('report')) {
      return '📝';
    } else if (option.toLowerCase().includes('crisis') || option.toLowerCase().includes('crisis')) {
      return '🆘';
    } else if (option.toLowerCase().includes('therapy') || option.toLowerCase().includes('terapia')) {
      return '🧠';
    } else if (option.toLowerCase().includes('community') || option.toLowerCase().includes('comunidad')) {
      return '👥';
    } else if (option.toLowerCase().includes('advocate') || option.toLowerCase().includes('defensor')) {
      return '🗣️';
    } else if (option.toLowerCase().includes('emotional') || option.toLowerCase().includes('emocional')) {
      return '❤️';
    } else if (option.toLowerCase().includes('legal') || option.toLowerCase().includes('legal')) {
      return '⚖️';
    }
    
    return '✓';
  };

  return (
    <div className="chat-options" role="group" aria-label="Chat options">
      {options.map((option, index) => (
        <button
          key={index}
          className="option-btn"
          onClick={() => onSelect(option)}
          aria-label={option}
        >
          <span className="option-icon" role="img" aria-hidden="true">
            {getIconForOption(option)}
          </span>
          <span className="option-text">{option}</span>
        </button>
      ))}
    </div>
  );
};

export default ChatOptions; 