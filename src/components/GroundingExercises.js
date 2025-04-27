import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GroundingExercises = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [breathCount, setBreathCount] = useState(0);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [breathingActive, setBreathingActive] = useState(false);

  // Start/stop breathing exercise
  const toggleBreathingExercise = () => {
    setBreathingActive(!breathingActive);
    if (!breathingActive) {
      setBreathCount(0);
      setBreathingPhase('inhale');
    }
  };

  // Breathing exercise timer
  useEffect(() => {
    let timer;
    if (breathingActive) {
      timer = setInterval(() => {
        if (breathingPhase === 'inhale' && breathCount >= 4) {
          setBreathingPhase('hold');
          setBreathCount(0);
        } else if (breathingPhase === 'hold' && breathCount >= 4) {
          setBreathingPhase('exhale');
          setBreathCount(0);
        } else if (breathingPhase === 'exhale' && breathCount >= 6) {
          setBreathingPhase('inhale');
          setBreathCount(0);
        } else {
          setBreathCount(prevCount => prevCount + 1);
        }
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [breathingActive, breathingPhase, breathCount]);

  return (
    <div className="grounding-container">
      <div className="grounding-header">
        <h2>{t('grounding.title')}</h2>
      </div>
      
      <div className="grounding-content">
        <p>{t('grounding.intro')}</p>
        
        <div className="breathing-exercise">
          <h3>{t('grounding.breathing')}</h3>
          
          <div className="breathing-visual">
            <div 
              className={`breathing-circle ${breathingPhase} ${breathingActive ? 'active' : ''}`}
              aria-live="polite"
              aria-label={breathingActive ? `${breathingPhase}, count ${breathCount}` : 'Breathing exercise inactive'}
            />
          </div>
          
          <button 
            className="btn btn-primary"
            onClick={toggleBreathingExercise}
            aria-label={breathingActive ? 'Stop breathing exercise' : 'Start breathing exercise'}
          >
            {breathingActive ? 'Stop' : 'Start'} Breathing Exercise
          </button>
        </div>
        
        <div className="observation-exercise">
          <h3>5-4-3-2-1 Exercise</h3>
          <p>{t('grounding.observation')}</p>
        </div>
        
        <div className="affirmation">
          <h3>Affirmation</h3>
          <blockquote>{t('grounding.affirmation')}</blockquote>
        </div>
      </div>
      
      <div className="grounding-actions">
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

export default GroundingExercises; 