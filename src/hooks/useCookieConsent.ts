
import { useState, useEffect } from 'react';

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
    const updateConsent = () => {
      if (window.Cookiebot) {
        setConsent({
          necessary: window.Cookiebot.consent.necessary,
          preferences: window.Cookiebot.consent.preferences,
          statistics: window.Cookiebot.consent.statistics,
          marketing: window.Cookiebot.consent.marketing,
        });
        setHasResponse(window.Cookiebot.hasResponse);
      }
    };

    // Update consent when Cookiebot loads
    const handleCookiebotLoad = () => {
      updateConsent();
      
      // Listen for consent changes
      window.Cookiebot?.addEventListener('CookiebotOnAccept', updateConsent);
      window.Cookiebot?.addEventListener('CookiebotOnDecline', updateConsent);
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
    window.Cookiebot?.show();
  };

  return {
    consent,
    hasResponse,
    showCookieSettings,
  };
};
