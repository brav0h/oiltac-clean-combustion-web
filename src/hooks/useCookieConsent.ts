
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

export interface CookieConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: false,
    preferences: false,
    statistics: false,
    marketing: false,
  });
  const [hasResponse, setHasResponse] = useState(false);

  useEffect(() => {
    console.log('useCookieConsent: Hook initialized');

    const updateConsent = () => {
      if (window.Cookiebot) {
        const newConsent = {
          necessary: window.Cookiebot.consent.necessary,
          preferences: window.Cookiebot.consent.preferences,
          statistics: window.Cookiebot.consent.statistics,
          marketing: window.Cookiebot.consent.marketing,
        };
        
        console.log('useCookieConsent: Updating consent', newConsent);
        setConsent(newConsent);
        setHasResponse(window.Cookiebot.hasResponse);
      }
    };

    // Update consent when Cookiebot loads
    const handleCookiebotLoad = () => {
      console.log('useCookieConsent: Cookiebot loaded');
      updateConsent();
      
      // Listen for consent changes
      if (window.Cookiebot) {
        window.Cookiebot.addEventListener('CookiebotOnAccept', () => {
          console.log('useCookieConsent: Cookies accepted');
          updateConsent();
        });
        
        window.Cookiebot.addEventListener('CookiebotOnDecline', () => {
          console.log('useCookieConsent: Cookies declined');
          updateConsent();
        });
      }
    };

    if (window.Cookiebot) {
      handleCookiebotLoad();
    } else {
      window.addEventListener('CookiebotOnLoad', handleCookiebotLoad);
    }

    return () => {
      window.removeEventListener('CookiebotOnLoad', handleCookiebotLoad);
    };
  }, []);

  const showCookieSettings = () => {
    if (window.Cookiebot) {
      window.Cookiebot.show();
    }
  };

  return {
    consent,
    hasResponse,
    showCookieSettings,
  };
};
