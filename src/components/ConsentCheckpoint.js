import React from 'react';
import { useTranslation } from 'react-i18next';

const ConsentCheckpoint = ({ onResponse, checkpointNumber }) => {
  const { t } = useTranslation();
  
  // Additional validation message based on checkpoint number
  const getValidationMessage = () => {
    switch(checkpointNumber) {
      case 1:
        return t('validation.notYourFault');
      case 2:
        return t('validation.worthy');
      case 3:
        return t('validation.yourChoice');
      default:
        return '';
    }
  };

  const validationMessage = getValidationMessage();

  return (
    <div className="consent-checkpoint" role="dialog" aria-labelledby="consent-title">
      <div className="consent-icon">
        <span role="img" aria-hidden="true">❓</span>
      </div>
      
      <div className="consent-content">
        <h3 id="consent-title">{t('chat.consentCheck')}</h3>
        
        {validationMessage && (
          <p className="validation-message">{validationMessage}</p>
        )}
        
        <p className="consent-reminder">{t('report.consentReminder')}</p>
      </div>
      
      <div className="consent-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onResponse(false)}
          aria-label={t('common.no')}
        >
          {t('common.no')}
        </button>
        
        <button 
          className="btn btn-primary"
          onClick={() => onResponse(true)}
          aria-label={t('common.yes')}
        >
          {t('common.yes')}
        </button>
      </div>
    </div>
  );
};

export default ConsentCheckpoint; 