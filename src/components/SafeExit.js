import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SafeExit = () => {
  const { t } = useTranslation();

  // Redirect to a safe site after a brief message
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://weather.com';
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="safe-exit-container">
      <div className="safe-exit-content">
        <h2>Exiting Safely...</h2>
        <p>You will be redirected to a weather website in a few seconds.</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default SafeExit; 