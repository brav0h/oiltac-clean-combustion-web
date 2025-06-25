
import { useEffect } from 'react';

declare global {
  interface Window {
    Cookiebot?: any;
  }
}

const CookieBot = () => {
  useEffect(() => {
    // Load Cookiebot script
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', 'YOUR_COOKIEBOT_ID'); // User will need to replace this
    script.setAttribute('data-blockingmode', 'auto');
    script.type = 'text/javascript';
    script.async = true;
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.getElementById('Cookiebot');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CookieBot;
