
import { useEffect } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

const CookieBot = () => {
  useEffect(() => {
    console.log('CookieBot: Starting script load...');
    
    // Check if script already exists
    const existingScript = document.getElementById('Cookiebot');
    if (existingScript) {
      console.log('CookieBot: Script already exists');
      return;
    }
    
    // Load Cookiebot script
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '4374aa58-93f7-4e6a-8be7-928cdb524a9c');
    script.setAttribute('data-blockingmode', 'auto');
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      console.log('CookieBot: Script loaded successfully');
      
      // Check if Cookiebot is available and show banner if needed
      const checkCookiebot = () => {
        try {
          if (window.Cookiebot) {
            console.log('CookieBot: Cookiebot object available', {
              hasResponse: window.Cookiebot.hasResponse,
              consent: window.Cookiebot.consent
            });
            
            // If user hasn't responded to cookies yet, ensure banner is shown
            if (!window.Cookiebot.hasResponse && typeof window.Cookiebot.show === 'function') {
              console.log('CookieBot: No response yet, showing banner');
              window.Cookiebot.show();
            }
          } else {
            console.log('CookieBot: Cookiebot object not yet available, retrying...');
            setTimeout(checkCookiebot, 100);
          }
        } catch (error) {
          console.error('CookieBot: Error checking Cookiebot status', error);
        }
      };
      
      checkCookiebot();
    };
    
    script.onerror = (error) => {
      console.error('CookieBot: Failed to load script', error);
    };
    
    try {
      document.head.appendChild(script);
    } catch (error) {
      console.error('CookieBot: Error appending script to head', error);
    }

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.getElementById('Cookiebot');
      if (existingScript) {
        existingScript.remove();
        console.log('CookieBot: Script removed');
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CookieBot;
