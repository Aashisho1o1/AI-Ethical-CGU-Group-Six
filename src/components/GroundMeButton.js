import React from 'react';
import { useTranslation } from 'react-i18next';

const GroundMeButton = ({ onGroundMeClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className="ground-me-button"
      onClick={onGroundMeClick}
      aria-label={t('common.groundMe')}
    >
      <span role="img" aria-hidden="true">🧘</span> {t('common.groundMe')}
    </button>
  );
};

export default GroundMeButton; 