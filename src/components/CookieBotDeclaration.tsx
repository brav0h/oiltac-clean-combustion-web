
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

interface CookieBotDeclarationProps {
  show?: boolean;
  onHide?: () => void;
}

const CookieBotDeclaration = ({ show = false, onHide }: CookieBotDeclarationProps) => {
  const declarationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show && window.Cookiebot) {
      window.Cookiebot.show();
    }
  }, [show]);

  useEffect(() => {
    // Listen for Cookiebot events
    const handleCookiebotLoad = () => {
      if (window.Cookiebot) {
        // Set up event listeners for consent changes
        window.Cookiebot.addEventListener('CookiebotOnAccept', () => {
          console.log('Cookies accepted');
          onHide?.();
        });
        
        window.Cookiebot.addEventListener('CookiebotOnDecline', () => {
          console.log('Cookies declined');
          onHide?.();
        });
      }
    };

    // Check if Cookiebot is already loaded
    if (window.Cookiebot) {
      handleCookiebotLoad();
    } else {
      // Wait for Cookiebot to load
      window.addEventListener('CookiebotOnLoad', handleCookiebotLoad);
    }

    return () => {
      window.removeEventListener('CookiebotOnLoad', handleCookiebotLoad);
    };
  }, [onHide]);

  return (
    <div ref={declarationRef} id="CookiebotDeclaration" data-cbid="YOUR_COOKIEBOT_ID" data-type="iab" />
  );
};

export default CookieBotDeclaration;
