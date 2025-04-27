import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EmergencyResources = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCallResource = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <h2>{t('emergency.title')}</h2>
      </div>
      
      <div className="emergency-content">
        <div className="emergency-resource">
          <h3>911</h3>
          <p>{t('emergency.callNow')}</p>
          <button 
            className="btn btn-danger resource-btn"
            onClick={() => handleCallResource('911')}
            aria-label="Call 911"
          >
            <span role="img" aria-hidden="true">📞</span> Call 911
          </button>
        </div>
        
        <div className="emergency-resource">
          <h3>National Domestic Violence Hotline</h3>
          <p>{t('emergency.nationalHotline')}</p>
          <button 
            className="btn btn-primary resource-btn"
            onClick={() => handleCallResource('18007997233')}
            aria-label="Call National Domestic Violence Hotline"
          >
            <span role="img" aria-hidden="true">📞</span> Call Hotline
          </button>
        </div>
        
        <div className="emergency-resource">
          <h3>RAINN</h3>
          <p>{t('emergency.rainn')}</p>
          <button 
            className="btn btn-primary resource-btn"
            onClick={() => handleCallResource('18006564673')}
            aria-label="Call RAINN"
          >
            <span role="img" aria-hidden="true">📞</span> Call RAINN
          </button>
        </div>
        
        <div className="emergency-resource">
          <h3>Crisis Text Line</h3>
          <p>{t('emergency.text')}</p>
          <p>Text HOME to 741741</p>
        </div>
        
        <div className="safety-reminder">
          <h3>Safety Reminder</h3>
          <p>
            If you are concerned that someone might monitor your device or browsing history, 
            consider using a public computer, friend's device, or using private browsing mode.
          </p>
          <p>
            To quickly exit this page at any time, press the "Exit Safely" button.
          </p>
        </div>
      </div>
      
      <div className="emergency-actions">
        <button 
          className="btn btn-primary"
          onClick={() => navigate(-1)}
          aria-label={t('common.back')}
        >
          {t('common.back')}
        </button>
      </div>
    </div>
  );
};

export default EmergencyResources; 