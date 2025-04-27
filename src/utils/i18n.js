import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
const resources = {
  en: {
    translation: {
      common: {
        safeExit: 'Exit Safely',
        emergency: 'Emergency Help',
        groundMe: 'Ground Me',
        next: 'Next',
        back: 'Back',
        cancel: 'Cancel',
        submit: 'Submit',
        yes: 'Yes',
        no: 'No',
        continue: 'Continue',
        language: 'Language',
        anonymousMode: 'Anonymous Mode',
        highContrast: 'High Contrast',
        largeText: 'Large Text',
      },
      welcome: {
        title: 'Supportive Space',
        subtitle: 'You are in control of this conversation.',
        intro: "I'm here to support you. Everything you share is your choice. You control this conversation.",
        options: {
          report: 'Report an incident',
          support: 'Find emotional support resources',
          talk: 'Talk about your options without reporting',
          exit: 'Exit safely at any time'
        },
        privacyLink: 'View our Privacy Policy',
        startButton: 'Start',
        disclaimer: 'This chatbot provides support and information. If you are in immediate danger, please contact emergency services.'
      },
      chat: {
        placeholder: 'Type your message here...',
        voiceInput: 'Voice input',
        voicePrompt: 'Speak your message... (click microphone to toggle)',
        sending: 'Sending...',
        responseLoading: 'Bot is responding...',
        consentCheck: 'Would you like to continue?',
        emotionalCheck: 'How are you feeling right now? Would you like a resource or a break?',
      },
      report: {
        anonymousOption: 'Report anonymously',
        identifiedOption: 'Report with my name',
        whatHappened: 'Can you describe what happened, if you feel ready?',
        whenHappened: 'When did this happen? You can share as much or as little detail as you feel comfortable with.',
        needHelp: 'What kind of help would you like right now?',
        consentReminder: 'You can stop or change your mind at any point.',
      },
      support: {
        resourceTitle: 'Support Resources',
        crisisLine: '24/7 Crisis Line (anonymous)',
        therapy: 'Therapy support services',
        community: 'Community healing circles',
        advocate: 'Chat with a confidential human advocate',
      },
      options: {
        title: 'Your Options',
        noDecision: "You don't have to decide anything today. We can just talk about what support is available.",
        emotionalFirst: 'Would you like to hear about emotional support first or legal pathways?',
      },
      emergency: {
        title: 'Emergency Resources',
        callNow: 'Call 911 for immediate emergency help',
        nationalHotline: 'National Domestic Violence Hotline: 1-800-799-7233',
        rainn: 'RAINN (Sexual Assault): 1-800-656-4673',
        text: 'Text HOME to 741741 for Crisis Text Line',
      },
      grounding: {
        title: 'Grounding Exercises',
        intro: 'Take a moment to center yourself. Try this exercise:',
        breathing: 'Breathe In (4 counts) → Hold (4 counts) → Breathe Out (6 counts)',
        observation: 'Notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.',
        affirmation: 'You are safe in this moment. You are in control.',
      },
      privacy: {
        title: 'Privacy and Data Use Statement',
        intro: 'Your Privacy Matters.',
        anonymous: 'Anonymous Use: You may choose to use this chatbot anonymously. You are not required to share your name, location, or other identifying details to receive support or information.',
        dataCollection: 'Data Collection: We only collect information that you choose to share during this chat. No location tracking, automatic data scraping, or background monitoring occurs.',
        dataUse: 'How Your Information Is Used: Your responses are used only to provide immediate support and suggest resources. No information will be shared, stored, or sold.',
        mandatoryReporting: 'Mandatory Reporting: If you disclose that you are in immediate danger, and if you choose to share your identity, we may be legally or ethically obligated to alert emergency services or a trusted adult, depending on local laws. Anonymous users remain fully in control unless they choose to identify themselves.',
        dataSecurity: 'Data Security: Any data temporarily stored during this session is encrypted and automatically deleted after your chat ends.',
        userControl: 'Your Control: You may end the chat, clear your responses, or exit safely at any time by clicking the "Exit" button.',
        acknowledgment: 'By continuing, you acknowledge that you have read and understand this Privacy Statement.',
      },
      validation: {
        webelieve: 'We believe you.',
        notYourFault: 'What happened is not your fault.',
        brave: 'It takes courage to reach out.',
        worthy: 'You deserve support and safety.',
        yourChoice: 'Every next step is your choice.',
      }
    }
  },
  es: {
    translation: {
      common: {
        safeExit: 'Salir Seguro',
        emergency: 'Ayuda de Emergencia',
        groundMe: 'Tranquilizarme',
        next: 'Siguiente',
        back: 'Atrás',
        cancel: 'Cancelar',
        submit: 'Enviar',
        yes: 'Sí',
        no: 'No',
        continue: 'Continuar',
        language: 'Idioma',
        anonymousMode: 'Modo Anónimo',
        highContrast: 'Alto Contraste',
        largeText: 'Texto Grande',
      },
      welcome: {
        title: 'Espacio de Apoyo',
        subtitle: 'Tú controlas esta conversación.',
        intro: "Estoy aquí para apoyarte. Todo lo que compartas es tu elección. Tú controlas esta conversación.",
        options: {
          report: 'Reportar un incidente',
          support: 'Encontrar recursos de apoyo emocional',
          talk: 'Hablar sobre tus opciones sin reportar',
          exit: 'Salir de forma segura en cualquier momento'
        },
        privacyLink: 'Ver nuestra Política de Privacidad',
        startButton: 'Comenzar',
        disclaimer: 'Este chatbot proporciona apoyo e información. Si estás en peligro inmediato, por favor contacta a los servicios de emergencia.'
      },
      chat: {
        placeholder: 'Escribe tu mensaje aquí...',
        voiceInput: 'Entrada de voz',
        voicePrompt: 'Habla tu mensaje... (haz clic en el micrófono para alternar)',
        sending: 'Enviando...',
        responseLoading: 'El bot está respondiendo...',
        consentCheck: '¿Te gustaría continuar?',
        emotionalCheck: '¿Cómo te sientes ahora mismo? ¿Te gustaría un recurso o un descanso?',
      },
      report: {
        anonymousOption: 'Report anonymously',
        identifiedOption: 'Report with my name',
        whatHappened: 'Can you describe what happened, if you feel ready?',
        whenHappened: 'When did this happen? You can share as much or as little detail as you feel comfortable with.',
        needHelp: 'What kind of help would you like right now?',
        consentReminder: 'You can stop or change your mind at any point.',
      },
      support: {
        resourceTitle: 'Support Resources',
        crisisLine: '24/7 Crisis Line (anonymous)',
        therapy: 'Therapy support services',
        community: 'Community healing circles',
        advocate: 'Chat with a confidential human advocate',
      },
      options: {
        title: 'Your Options',
        noDecision: "You don't have to decide anything today. We can just talk about what support is available.",
        emotionalFirst: 'Would you like to hear about emotional support first or legal pathways?',
      },
      emergency: {
        title: 'Emergency Resources',
        callNow: 'Call 911 for immediate emergency help',
        nationalHotline: 'National Domestic Violence Hotline: 1-800-799-7233',
        rainn: 'RAINN (Sexual Assault): 1-800-656-4673',
        text: 'Text HOME to 741741 for Crisis Text Line',
      },
      grounding: {
        title: 'Grounding Exercises',
        intro: 'Take a moment to center yourself. Try this exercise:',
        breathing: 'Breathe In (4 counts) → Hold (4 counts) → Breathe Out (6 counts)',
        observation: 'Notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.',
        affirmation: 'You are safe in this moment. You are in control.',
      },
      privacy: {
        title: 'Privacy and Data Use Statement',
        intro: 'Your Privacy Matters.',
        anonymous: 'Anonymous Use: You may choose to use this chatbot anonymously. You are not required to share your name, location, or other identifying details to receive support or information.',
        dataCollection: 'Data Collection: We only collect information that you choose to share during this chat. No location tracking, automatic data scraping, or background monitoring occurs.',
        dataUse: 'How Your Information Is Used: Your responses are used only to provide immediate support and suggest resources. No information will be shared, stored, or sold.',
        mandatoryReporting: 'Mandatory Reporting: If you disclose that you are in immediate danger, and if you choose to share your identity, we may be legally or ethically obligated to alert emergency services or a trusted adult, depending on local laws. Anonymous users remain fully in control unless they choose to identify themselves.',
        dataSecurity: 'Data Security: Any data temporarily stored during this session is encrypted and automatically deleted after your chat ends.',
        userControl: 'Your Control: You may end the chat, clear your responses, or exit safely at any time by clicking the "Exit" button.',
        acknowledgment: 'By continuing, you acknowledge that you have read and understand this Privacy Statement.',
      },
      validation: {
        webelieve: 'We believe you.',
        notYourFault: 'What happened is not your fault.',
        brave: 'It takes courage to reach out.',
        worthy: 'You deserve support and safety.',
        yourChoice: 'Every next step is your choice.',
      }
    }
  },
  // Additional languages can be added here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n; 