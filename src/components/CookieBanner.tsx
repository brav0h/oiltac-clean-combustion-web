
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie_consent';

interface ConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ essential: true, analytics: true, marketing: false });
  const rejectAll = () => saveConsent({ essential: true, analytics: false, marketing: false });
  const savePreferences = () => saveConsent(consent);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-oiltac-dark border-t border-white/10 shadow-lg">
      <div className="container-custom py-4">
        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-white/80 text-sm flex-1">
            We use cookies to improve your experience. See our{' '}
            <a href="/privacy-policy" className="text-white underline hover:text-white/80">
              Privacy Policy
            </a>.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={acceptAll}
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={rejectAll}
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-md border border-white/20 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowPreferences(prev => !prev)}
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-md border border-white/20 transition-colors"
            >
              Manage Preferences
            </button>
          </div>
        </div>

        {/* Expanded preferences panel */}
        {showPreferences && (
          <div className="mt-4 pt-4 border-t border-white/10 space-y-5">
            {/* Essential */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-white text-sm font-semibold">Essential Cookies</p>
                <p className="text-white/60 text-xs mt-1">Required for the site to function.</p>
              </div>
              <div className="flex-shrink-0 w-10 h-6 bg-oiltac-cta rounded-full relative opacity-60 cursor-not-allowed">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-white text-sm font-semibold">Analytics Cookies</p>
                <p className="text-white/60 text-xs mt-1">Helps us understand how visitors use the site (Google Analytics, Microsoft Clarity).</p>
              </div>
              <button
                onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
                className={`flex-shrink-0 w-10 h-6 rounded-full relative transition-colors ${consent.analytics ? 'bg-oiltac-cta' : 'bg-white/20'}`}
                aria-pressed={consent.analytics}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${consent.analytics ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-white text-sm font-semibold">Marketing Cookies</p>
                <p className="text-white/60 text-xs mt-1">Used for advertising and retargeting. We currently have no active marketing trackers.</p>
              </div>
              <button
                onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                className={`flex-shrink-0 w-10 h-6 rounded-full relative transition-colors ${consent.marketing ? 'bg-oiltac-cta' : 'bg-white/20'}`}
                aria-pressed={consent.marketing}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${consent.marketing ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <button
              onClick={savePreferences}
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
