
import { useEffect } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GoogleTagManager = () => {
  const { consent, hasResponse } = useCookieConsent();

  useEffect(() => {
    console.log('GoogleTagManager: Component mounted', { hasResponse, consent });

    // Only proceed if user has responded to cookies and given marketing/statistics consent
    if (!hasResponse || (!consent.marketing && !consent.statistics)) {
      console.log('GoogleTagManager: No consent for marketing/statistics - not loading GTM');
      return;
    }

    console.log('GoogleTagManager: Loading GTM scripts...');

    // Initialize dataLayer if it doesn't exist
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Add GTM initialization to dataLayer
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    // Load GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-MKH32BVW';
    script.onload = () => {
      console.log('GoogleTagManager: GTM script loaded successfully');
    };
    script.onerror = () => {
      console.error('GoogleTagManager: Failed to load GTM script');
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
      console.log('GoogleTagManager: GTM script added to head');
    } else {
      console.log('GoogleTagManager: GTM script already exists');
    }

    return () => {
      // Cleanup when consent is revoked
      const gtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
      if (gtmScript) {
        gtmScript.remove();
        console.log('GoogleTagManager: GTM script removed');
      }
    };
  }, [hasResponse, consent.marketing, consent.statistics]);

  // Only render noscript iframe if user has consented
  if (!hasResponse || (!consent.marketing && !consent.statistics)) {
    return null;
  }

  return (
    <noscript>
      <iframe 
        src="https://www.googletagmanager.com/ns.html?id=GTM-MKH32BVW"
        height="0" 
        width="0" 
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
};

export default GoogleTagManager;
