import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyNotice = ({ onAcknowledge, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="privacy-notice-overlay">
      <div className="privacy-notice-container" role="dialog" aria-labelledby="privacy-title">
        <div className="privacy-notice-header">
          <h2 id="privacy-title">Privacy & Data Use</h2>
        </div>
        
        <div className="privacy-notice-content">
          <div className="privacy-points">
            <div className="privacy-point">
              <span className="privacy-icon">🔒</span>
              <span>Anonymous use, no name/location needed</span>
            </div>
            <div className="privacy-point">
              <span className="privacy-icon">🔐</span>
              <span>Your data will never be shared, stored, or sold by us</span>
            </div>
          </div>
          
          <div className="emergency-info">
            <p><strong>Emergency:</strong> Call 911, Domestic Violence (DV) Hotline (1-800-799-7233), or RAINN (Rape, Abuse & Incest National Network) (1-800-656-4673)</p>
            <p><strong>Under 18?</strong> Laws may require notifying trusted adults if you're at risk</p>
          </div>
        </div>
        
        <div className="privacy-notice-actions">
          <button 
            className="btn btn-secondary" 
            onClick={onClose}
            aria-label="Cancel"
          >
            Cancel
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={onAcknowledge}
            aria-label="Continue"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice; 