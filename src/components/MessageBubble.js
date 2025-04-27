import React from 'react';

const MessageBubble = ({ message, largeText }) => {
  // Function to handle newlines in messages
  const formatText = (text) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div 
      className={`message ${message.sender}-message ${largeText ? 'large-text' : ''}`}
      aria-label={`Message from ${message.sender}: ${message.text}`}
    >
      {message.sender === 'bot' && (
        <div className="message-avatar">
          <span role="img" aria-hidden="true">🤖</span>
        </div>
      )}
      <div className="message-content">
        {formatText(message.text)}
      </div>
      <div className="message-timestamp">
        <small>{message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
      </div>
    </div>
  );
};

export default MessageBubble; 