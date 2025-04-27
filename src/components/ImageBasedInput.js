import React from 'react';

const ImageBasedInput = ({ onImageSelect }) => {
  // Define image options with meanings
  const imageOptions = [
    { emoji: "😊", meaning: "I'm feeling okay" },
    { emoji: "😔", meaning: "I'm feeling sad" },
    { emoji: "😰", meaning: "I'm scared or anxious" },
    { emoji: "😠", meaning: "I'm angry" },
    { emoji: "❓", meaning: "I have a question" },
    { emoji: "👍", meaning: "Yes/I agree" },
    { emoji: "👎", meaning: "No/I disagree" },
    { emoji: "🆘", meaning: "I need immediate help" },
    { emoji: "🏳️", meaning: "I need a break" },
    { emoji: "🗣️", meaning: "I want to talk to someone" },
    { emoji: "📞", meaning: "I want phone numbers for help" },
    { emoji: "📝", meaning: "I want to report something" }
  ];

  return (
    <div className="image-input-container">
      <div className="image-input-title">Select an option to communicate:</div>
      <div className="image-options">
        {imageOptions.map((option, index) => (
          <button
            key={index}
            className="image-option"
            onClick={() => onImageSelect(option.meaning)}
            aria-label={option.meaning}
            title={option.meaning}
          >
            <span role="img" aria-hidden="true" className="image-emoji">
              {option.emoji}
            </span>
            <span className="image-meaning">{option.meaning}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageBasedInput; 