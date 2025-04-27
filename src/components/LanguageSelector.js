import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    // Add more languages as needed
  ];

  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    onLanguageChange(langCode);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="visually-hidden">
        {t('common.language')}
      </label>
      <select 
        id="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        className="language-dropdown"
        aria-label={t('common.language')}
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector; 