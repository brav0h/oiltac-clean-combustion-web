
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
    script.setAttribute('data-cbid', '4374aa58-93f7-4e6a-8be7-928cdb524a9c');
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
