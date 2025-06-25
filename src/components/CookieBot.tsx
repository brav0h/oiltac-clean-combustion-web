
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
          
          // Force show banner in incognito or when no response exists
          if (!window.Cookiebot.hasResponse) {
            console.log('CookieBot: No response detected, forcing banner display');
            if (typeof window.Cookiebot.show === 'function') {
              window.Cookiebot.show();
            }
          }
        } else {
          console.log('CookieBot: Cookiebot object not yet available, will retry');
          // Retry after a short delay
          setTimeout(initializeCookiebot, 100);
        }
      } catch (error) {
        console.error('CookieBot: Error during initialization', error);
      }
    };

    // Check immediately if Cookiebot is already loaded
    if (window.Cookiebot) {
      initializeCookiebot();
    } else {
      // Wait for Cookiebot to load from the HTML script
      const checkInterval = setInterval(() => {
        if (window.Cookiebot) {
          clearInterval(checkInterval);
          initializeCookiebot();
        }
      }, 100);

      // Fallback: if Cookiebot doesn't load from HTML after 10 seconds, load dynamically
      const fallbackTimeout = setTimeout(() => {
        if (!window.Cookiebot) {
          console.log('CookieBot: HTML script failed to load, falling back to dynamic loading');
          clearInterval(checkInterval);
          
          const script = document.createElement('script');
          script.id = 'Cookiebot-fallback';
          script.src = 'https://consent.cookiebot.com/uc.js';
          script.setAttribute('data-cbid', '4374aa58-93f7-4e6a-8be7-928cdb524a9c');
          script.setAttribute('data-blockingmode', 'auto');
          script.setAttribute('data-culture', 'EN');
          script.type = 'text/javascript';
          script.async = true;
          
          script.onload = () => {
            console.log('CookieBot: Fallback script loaded successfully');
            initializeCookiebot();
          };
          
          script.onerror = () => {
            console.error('CookieBot: Fallback script also failed to load');
          };
          
          document.head.appendChild(script);
        }
      }, 10000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(fallbackTimeout);
        // Clean up fallback script if it exists
        const fallbackScript = document.getElementById('Cookiebot-fallback');
        if (fallbackScript) {
          fallbackScript.remove();
        }
      };
    }
  }, []);

  return null;
};

export default CookieBot;
