import React from 'react';
import { useTranslation } from 'react-i18next';

const EmergencyButton = ({ onEmergencyClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className="emergency-button"
      onClick={onEmergencyClick}
      aria-label={t('common.emergency')}
    >
      <span role="img" aria-hidden="true">🚨</span> {t('common.emergency')}
    </button>
  );
};

export default EmergencyButton; 