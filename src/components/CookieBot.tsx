
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
      console.log('CookieBot: Script already exists, removing it first');
      existingScript.remove();
    }
    
    // Load Cookiebot script
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '4374aa58-93f7-4e6a-8be7-928cdb524a9c');
    script.setAttribute('data-blockingmode', 'auto');
    script.setAttribute('data-culture', 'EN');
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      console.log('CookieBot: Script loaded successfully');
      
      // Wait a bit for Cookiebot to initialize, then check and show banner
      setTimeout(() => {
        try {
          if (window.Cookiebot) {
            console.log('CookieBot: Cookiebot object available', {
              hasResponse: window.Cookiebot.hasResponse,
              consent: window.Cookiebot.consent
            });
            
            // Force show banner in incognito or when no response exists
            if (!window.Cookiebot.hasResponse) {
              console.log('CookieBot: No response detected, forcing banner display');
              if (typeof window.Cookiebot.show === 'function') {
                window.Cookiebot.show();
              }
            }
          } else {
            console.log('CookieBot: Cookiebot object still not available after load');
          }
        } catch (error) {
          console.error('CookieBot: Error during initialization check', error);
        }
      }, 500);
    };
    
    script.onerror = (error) => {
      console.error('CookieBot: Failed to load script', error);
      // Try to reload the script once after a delay
      setTimeout(() => {
        console.log('CookieBot: Retrying script load...');
        const retryScript = document.createElement('script');
        retryScript.id = 'Cookiebot-retry';
        retryScript.src = 'https://consent.cookiebot.com/uc.js';
        retryScript.setAttribute('data-cbid', '4374aa58-93f7-4e6a-8be7-928cdb524a9c');
        retryScript.setAttribute('data-blockingmode', 'auto');
        retryScript.type = 'text/javascript';
        retryScript.async = true;
        
        retryScript.onload = () => {
          console.log('CookieBot: Retry script loaded successfully');
        };
        
        retryScript.onerror = () => {
          console.error('CookieBot: Retry also failed');
        };
        
        document.head.appendChild(retryScript);
      }, 2000);
    };
    
    try {
      document.head.appendChild(script);
      console.log('CookieBot: Script added to head');
    } catch (error) {
      console.error('CookieBot: Error appending script to head', error);
    }

    return () => {
      // Cleanup scripts on component unmount
      const scripts = document.querySelectorAll('#Cookiebot, #Cookiebot-retry');
      scripts.forEach(script => script.remove());
      console.log('CookieBot: Scripts cleaned up');
    };
  }, []);

  return null;
};

export default CookieBot;
