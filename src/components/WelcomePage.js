import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PrivacyNotice from './PrivacyNotice';

const WelcomePage = ({ userPreferences, updatePreferences }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [privacyAcknowledged, setPrivacyAcknowledged] = useState(false);

  const handlePrivacyAcknowledge = () => {
    setPrivacyAcknowledged(true);
    setShowPrivacy(false);
  };

  const handleOptionSelect = (path) => {
    if (privacyAcknowledged) {
      navigate(path);
    } else {
      setShowPrivacy(true);
    }
  };

  const handleAccessibilityToggle = (setting) => {
    const newPrefs = { ...userPreferences };
    newPrefs[setting] = !newPrefs[setting];
    updatePreferences(newPrefs);
  };

  const Logo = () => (
    <div className="app-logo">
      <div className="logo-icon">
        <span className="logo-symbol">☂️</span>
      </div>
      <div className="logo-text">
        <span className="logo-name">{t('welcome.title')}</span>
      </div>
    </div>
  );

  return (
    <div className="welcome-container">
      {showPrivacy && !privacyAcknowledged ? (
        <PrivacyNotice 
          onAcknowledge={handlePrivacyAcknowledge}
          onClose={() => setShowPrivacy(false)}
        />
      ) : (
        <>
          <Logo />
          
          <div className="welcome-header">
            <h1>{t('welcome.title')}</h1>
            <p className="subtitle">{t('welcome.subtitle')}</p>
          </div>

          <div className="welcome-message">
            <p>{t('welcome.intro')}</p>
          </div>

          <div className="accessibility-options">
            <div className="accessibility-toggle">
              <input 
                type="checkbox" 
                id="anonymousMode"
                checked={userPreferences.anonymousMode}
                onChange={() => handleAccessibilityToggle('anonymousMode')}
                aria-label={t('common.anonymousMode')}
              />
              <label htmlFor="anonymousMode">{t('common.anonymousMode')}</label>
            </div>
            
            <div className="accessibility-toggle">
              <input 
                type="checkbox" 
                id="highContrast"
                checked={userPreferences.highContrast}
                onChange={() => handleAccessibilityToggle('highContrast')}
                aria-label={t('common.highContrast')}
              />
              <label htmlFor="highContrast">{t('common.highContrast')}</label>
            </div>
            
            <div className="accessibility-toggle">
              <input 
                type="checkbox" 
                id="largeText"
                checked={userPreferences.largeText}
                onChange={() => handleAccessibilityToggle('largeText')}
                aria-label={t('common.largeText')}
              />
              <label htmlFor="largeText">{t('common.largeText')}</label>
            </div>
          </div>

          <div className="chat-options welcome-options">
            <button 
              className="option-btn" 
              onClick={() => handleOptionSelect('/chat?mode=report')}
              aria-label={t('welcome.options.report')}
            >
              <span className="option-icon" role="img" aria-hidden="true">📝</span>
              <span className="option-text">{t('welcome.options.report')}</span>
            </button>
            
            <button 
              className="option-btn" 
              onClick={() => handleOptionSelect('/chat?mode=support')}
              aria-label={t('welcome.options.support')}
            >
              <span className="option-icon" role="img" aria-hidden="true">❤️</span>
              <span className="option-text">{t('welcome.options.support')}</span>
            </button>
            
            <button 
              className="option-btn" 
              onClick={() => handleOptionSelect('/chat?mode=talk')}
              aria-label={t('welcome.options.talk')}
            >
              <span className="option-icon" role="img" aria-hidden="true">💬</span>
              <span className="option-text">{t('welcome.options.talk')}</span>
            </button>
          </div>

          <div className="disclaimer">
            <p>{t('welcome.disclaimer')}</p>
          </div>

          <div className="privacy-link">
            <Link to="/privacy">{t('welcome.privacyLink')}</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomePage; 