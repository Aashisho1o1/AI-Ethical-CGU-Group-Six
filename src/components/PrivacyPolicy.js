import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h2>{t('privacy.title')}</h2>
      </div>
      
      <div className="privacy-content">
        <h3>{t('privacy.intro')}</h3>
        <p>This chatbot is designed to prioritize your safety, emotional well-being, and confidentiality.</p>
        
        <div className="privacy-section">
          <h4>Anonymous Use</h4>
          <p>{t('privacy.anonymous')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>Data Collection</h4>
          <p>{t('privacy.dataCollection')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>How Your Information Is Used</h4>
          <p>{t('privacy.dataUse')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>Mandatory Reporting</h4>
          <p>{t('privacy.mandatoryReporting')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>Data Security</h4>
          <p>{t('privacy.dataSecurity')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>Your Control</h4>
          <p>{t('privacy.userControl')}</p>
        </div>
        
        <div className="privacy-section">
          <h4>User Rights and Protections</h4>
          <p>
            If an ethical principle is violated during your interaction with this chatbot, 
            you retain the right to file a complaint, request a review of any information 
            associated with your session, and seek corrective action, including deletion of 
            any relevant data.
          </p>
          <p>
            For any concerns, contact us at support@survivorchatbot.org (example email).
          </p>
        </div>
        
        <div className="privacy-section">
          <h4>Closing Affirmation</h4>
          <p>
            Our chatbot is grounded in the belief that survivors deserve tools that respect 
            their agency, safeguard their emotional well-being, and honor their lived experiences. 
            We commit to trauma-informed, culturally responsive, and ethically sound design at every stage.
          </p>
          <p>
            Privacy, consent, and user autonomy are foundational: survivors control what they share, 
            how they engage, and when they choose to exit. No user data is stored beyond the session, 
            and conversations are not used for AI training or model development.
          </p>
        </div>
      </div>
      
      <div className="privacy-actions">
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

export default PrivacyPolicy; 