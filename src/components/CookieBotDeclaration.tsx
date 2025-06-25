
import { useEffect } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

const CookieBotDeclaration = () => {
  useEffect(() => {
    console.log('CookieBotDeclaration: Component mounted');
    
    // Listen for Cookiebot events
    const handleCookiebotLoad = () => {
      console.log('CookieBotDeclaration: Cookiebot loaded event received');
      
      if (window.Cookiebot) {
        // Set up event listeners for consent changes
        window.Cookiebot.addEventListener('CookiebotOnAccept', () => {
          console.log('CookieBotDeclaration: Cookies accepted');
        });
        
        window.Cookiebot.addEventListener('CookiebotOnDecline', () => {
          console.log('CookieBotDeclaration: Cookies declined');
        });
        
        window.Cookiebot.addEventListener('CookiebotOnDialogInit', () => {
          console.log('CookieBotDeclaration: Dialog initialized');
        });
        
        window.Cookiebot.addEventListener('CookiebotOnDialogDisplay', () => {
          console.log('CookieBotDeclaration: Dialog displayed');
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
  }, []);

  return (
    <div id="CookiebotDeclaration" data-cbid="4374aa58-93f7-4e6a-8be7-928cdb524a9c" data-type="iab" />
  );
};

export default CookieBotDeclaration;
