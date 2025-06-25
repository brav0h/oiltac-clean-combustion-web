
import { useEffect } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

const CookieBot = () => {
  useEffect(() => {
    console.log('CookieBot: Component mounted, checking for Cookiebot script');
    
    const initializeCookiebot = () => {
      try {
        if (window.Cookiebot) {
          console.log('CookieBot: Cookiebot object available', {
            hasResponse: window.Cookiebot.hasResponse,
            consent: window.Cookiebot.consent
          });
          
          // Check if banner should be shown
          if (!window.Cookiebot.hasResponse) {
            console.log('CookieBot: No previous consent found, banner should appear');
          } else {
            console.log('CookieBot: Previous consent found', window.Cookiebot.consent);
          }
        } else {
          console.log('CookieBot: Cookiebot object not yet available');
        }
      } catch (error) {
        console.error('CookieBot: Error during initialization', error);
      }
    };

    // Wait a moment for Cookiebot to fully initialize
    const timer = setTimeout(() => {
      initializeCookiebot();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default CookieBot;
