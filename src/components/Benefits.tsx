
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

import { useEffect, useRef } from 'react';
import { CircleCheck } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start mb-6">
      <CircleCheck className="text-white mr-4 flex-shrink-0 mt-1" size={24} />
      <p className="text-lg text-white/90">{text}</p>
    </div>
  );
};

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'section_benefits_viewed', {
                event_category: 'engagement',
                event_label: 'Benefits Section Viewed'
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Improves combustion — more complete burn, less unburned carbon leaving as soot",
    "Injectors stay cleaner longer — reduced fouling in long-term operation",
    "Exhaust visibly reduced — particulates and smoke decreased in controlled tests",
    "Lube oil lasts longer — less carbon contamination extends maintenance intervals",
    "Compatible with diesel and heavy fuel oil (HFO / bunker fuel)"
  ];

  const doesNot = [
    "Does not change ASTM D975 fuel specification compliance",
    "Does not require pre-treatment or a separate dosing system",
    "Does not affect DEF/SCR systems in tested configurations",
    "Does not replace maintenance — it reduces the rate at which maintenance becomes necessary",
  ];

  return (
    <section ref={sectionRef} id="benefits" className="section-padding bg-zinc-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title text-white">What OILTAC Does — and Doesn't Do</h2>
            <p className="text-lg mb-8 text-white/80">
              OILTAC contains enzyme-derived compounds that activate during combustion — not before. They don't alter your fuel's chemical specification, viscosity, or ignition properties. What they do is catalyze a more complete burn, which means less unburned carbon leaving the combustion chamber as soot.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>

            <div className="mb-6">
              <ul className="space-y-2">
                {doesNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-white/50 mt-4">
                For Tier 4 SCR-equipped vessels, contact us to discuss your specific setup before trialing.
              </p>
            </div>

            <div className="rounded-lg border border-white/20 px-5 py-4 bg-white/5">
              <p className="text-white/80 italic text-sm">
                "We don't add anything to your fuel. We unlock more from the combustion that's already happening."
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="p-6 rounded-lg">
              <div>
                <img
                  src="/lovable-uploads/32fe4240-aacc-4eba-bad1-e796fbeb53f4.png"
                  alt="OILTAC ADOIL fuel additive container"
                  className="rounded-lg shadow-lg object-contain h-auto max-h-[400px] w-full"
                />
                <p className="text-center font-semibold text-white mt-4">
                  Enzyme-derived compounds that activate during combustion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
