import { Helmet } from "react-helmet-async";

// Complete privacy policy covering every data flow actually present on this site:
// pilot form (Web3Forms + HubSpot), GTM/GA4 under Consent Mode v2, CookieYes,
// and Chatbase (loaded only after functional consent).
// NOTE: drafted for review — have legal counsel confirm before relying on it.

const sections = [
  { id: "infocollect", n: 1, title: "WHAT INFORMATION DO WE COLLECT?" },
  { id: "infouse", n: 2, title: "HOW DO WE PROCESS YOUR INFORMATION?" },
  { id: "legalbases", n: 3, title: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?" },
  { id: "whoshare", n: 4, title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" },
  { id: "cookies", n: 5, title: "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" },
  { id: "inforetain", n: 6, title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
  { id: "infominors", n: 7, title: "DO WE COLLECT INFORMATION FROM MINORS?" },
  { id: "privacyrights", n: 8, title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
  { id: "DNT", n: 9, title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
  { id: "uslaws", n: 10, title: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" },
  { id: "policyupdates", n: 11, title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
  { id: "contact", n: 12, title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
  { id: "request", n: 13, title: "HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?" },
];

const H2 = ({ id, n, title }: { id: string; n: number; title: string }) => (
  <h2 id={id} className="text-lg font-bold text-oiltac-dark mt-10 mb-3 scroll-mt-24">
    {n}. {title}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-gray-600 leading-relaxed mb-3">{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-base text-gray-600 leading-relaxed">{children}</li>
);

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy - OILTAC</title>
      <meta name="description" content="Privacy Policy for OILTAC fuel additive technology." />
    </Helmet>

    <div className="min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <a href="/" className="text-2xl font-display font-bold mb-6 inline-block">
              <span className="text-oiltac-dark">OIL</span>
              <span className="text-oiltac-copper">TAC</span>
            </a>
          </div>

          <h1 className="text-3xl font-bold text-oiltac-dark mb-2">PRIVACY POLICY</h1>
          <p className="text-sm font-semibold text-[#7f7f7f] mb-8">Last updated July 11, 2026</p>

          <P>
            This Privacy Notice for Chie Tsiang Enterprise (doing business as OILTAC Fuel)
            (&quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;)
            describes how and why we might access, collect, store, use, and/or share
            (&quot;<strong>process</strong>&quot;) your personal information when you use our services
            (&quot;<strong>Services</strong>&quot;), including when you:
          </P>
          <ul className="list-[square] pl-5 mb-3 space-y-1">
            <LI>Visit our website at <a href="/" className="text-oiltac-copper hover:text-oiltac-dark break-words">oiltacfuel.com</a> or any website of ours that links to this Privacy Notice</LI>
            <LI>Request a pilot programme, safety documentation, or other information about OILTAC, a fuel additive for industrial diesel engines, boilers, and heavy fuel oil systems</LI>
            <LI>Engage with us in other related ways, including any sales, marketing, or events</LI>
          </ul>
          <P>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand
            your privacy rights and choices. If you do not agree with our policies and practices, please
            do not use our Services. Questions can be sent to{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-oiltac-copper hover:text-oiltac-dark">info@oiltacfuel.com</a>.
          </P>

          <h2 className="text-lg font-bold text-oiltac-dark mt-10 mb-3">TABLE OF CONTENTS</h2>
          <div className="space-y-1 mb-4">
            {sections.map(s => (
              <div key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-oiltac-copper hover:text-oiltac-dark">{s.n}. {s.title}</a>
              </div>
            ))}
          </div>

          <H2 {...sections[0]} />
          <h3 className="text-base font-semibold text-oiltac-dark mb-2">Personal information you disclose to us</h3>
          <P><em><strong>In Short:</strong> We collect personal information that you provide to us.</em></P>
          <P>
            We collect personal information that you voluntarily provide when you submit our pilot
            request form, contact us by email, use the site chat, or otherwise express interest in our
            products. Depending on the context, this may include:
          </P>
          <ul className="list-[square] pl-5 mb-3 space-y-1">
            <LI>names</LI>
            <LI>company names</LI>
            <LI>email addresses</LI>
            <LI>phone numbers</LI>
            <LI>job titles / roles</LI>
            <LI>region and industry</LI>
            <LI>fleet or equipment details and any notes you choose to provide</LI>
          </ul>
          <P><strong>Sensitive Information.</strong> We do not process sensitive information.</P>
          <h3 className="text-base font-semibold text-oiltac-dark mb-2">Information automatically collected</h3>
          <P>
            <em><strong>In Short:</strong> Some information — such as your IP address and browser and
            device characteristics — is collected automatically when you visit our website, subject to
            your cookie consent choices.</em>
          </P>
          <P>
            With your consent (managed through our cookie banner), we collect usage data through Google
            Tag Manager and Google Analytics: pages visited, approximate location, device and browser
            type, and interactions such as form submissions and calculator use. This information does
            not reveal your specific identity and is used for site analytics and improving our Services.
            If you decline analytics consent, these tags operate in a restricted, cookieless consent
            mode and no analytics identifiers are stored on your device (see Section 5).
          </P>

          <H2 {...sections[1]} />
          <P><em><strong>In Short:</strong> We process your information to respond to your inquiries, administer pilot programmes, improve our Services, and comply with law.</em></P>
          <ul className="list-[square] pl-5 mb-3 space-y-1">
            <LI><strong>To respond to inquiries and pilot requests</strong> — the details you submit are used to contact you and structure a pilot proposal.</LI>
            <LI><strong>To manage our sales relationship</strong> — form submissions are stored in our customer relationship management system so we can track correspondence.</LI>
            <LI><strong>To provide the site chat</strong> — if you enable functional cookies and use the chat widget, your messages are processed to answer your questions.</LI>
            <LI><strong>To analyze and improve the website</strong> — aggregate, consent-based analytics.</LI>
            <LI><strong>To comply with legal obligations</strong> and protect our legal rights.</LI>
          </ul>
          <P>We do not use your personal information for automated decision-making or profiling, and we do not sell it.</P>

          <H2 {...sections[2]} />
          <P><em><strong>In Short:</strong> We process your personal information only when we have a valid legal reason to do so.</em></P>
          <ul className="list-[square] pl-5 mb-3 space-y-1">
            <LI><strong>Consent</strong> — for analytics, advertising, and functional cookies, and for the chat widget. You may withdraw consent at any time via the cookie settings.</LI>
            <LI><strong>Performance of a contract / pre-contractual steps</strong> — when you request a pilot programme or ask us to respond to a commercial inquiry.</LI>
            <LI><strong>Legitimate interests</strong> — maintaining and securing the website and following up on business inquiries, where those interests are not overridden by your rights.</LI>
            <LI><strong>Legal obligations</strong> — where processing is required to comply with applicable law.</LI>
          </ul>

          <H2 {...sections[3]} />
          <P><em><strong>In Short:</strong> We share information only with the service providers that operate this website and our sales process. We do not sell personal information.</em></P>
          <P>We use the following categories of third-party service providers (&quot;processors&quot;), who are bound to process your data only on our instructions:</P>
          <ul className="list-[square] pl-5 mb-3 space-y-1">
            <LI><strong>Web3Forms</strong> — delivers pilot-request form submissions to our inbox.</LI>
            <LI><strong>HubSpot</strong> — customer relationship management; stores form submissions and correspondence history.</LI>
            <LI><strong>Google (Tag Manager / Analytics)</strong> — consent-based site analytics under Google Consent Mode v2.</LI>
            <LI><strong>CookieYes</strong> — cookie consent management.</LI>
            <LI><strong>Chatbase</strong> — site chat widget, loaded only after functional-cookie consent.</LI>
          </ul>
          <P>
            Some of these providers process data in the United States or other jurisdictions outside
            your own. Where required, transfers rely on appropriate safeguards such as Standard
            Contractual Clauses or an adequacy framework. We may also disclose information where
            required by law, or in connection with a business transfer such as a merger or acquisition.
          </P>

          <H2 {...sections[4]} />
          <P><em><strong>In Short:</strong> Yes — with your consent.</em></P>
          <P>
            We use cookies and similar technologies for analytics and functionality. On your first
            visit, a consent banner (CookieYes) lets you accept or decline non-essential cookies by
            category. Analytics, advertising, and functional storage default to <strong>denied</strong>{" "}
            until you grant consent (Google Consent Mode v2). You can change or withdraw your choices at
            any time through the cookie settings icon on the site. Strictly necessary cookies required
            for security and basic operation do not require consent.
          </P>

          <H2 {...sections[5]} />
          <P><em><strong>In Short:</strong> We keep your information only as long as necessary for the purposes set out in this Notice.</em></P>
          <P>
            Pilot-request and inquiry records are retained while we have an active business relationship
            or ongoing correspondence with you, and thereafter only as long as needed for legitimate
            business or legal purposes. Analytics data is retained per Google Analytics settings.
            You may request deletion at any time (see Section 13).
          </P>

          <H2 {...sections[6]} />
          <P><em><strong>In Short:</strong> No.</em></P>
          <P>
            Our Services are directed at commercial fleet and plant operators and are not intended for
            anyone under 18. We do not knowingly collect personal information from minors. If you
            believe a minor has provided us information, contact us and we will delete it.
          </P>

          <H2 {...sections[7]} />
          <P><em><strong>In Short:</strong> Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your personal information.</em></P>
          <P>
            If you are in the European Economic Area, United Kingdom, or Switzerland, you have the right
            to request access to, correction of, or erasure of your personal information; to restrict or
            object to processing; to data portability; and to withdraw consent at any time without
            affecting the lawfulness of prior processing. You also have the right to complain to your
            local supervisory authority. To exercise any right, email{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-oiltac-copper hover:text-oiltac-dark">info@oiltacfuel.com</a> —
            we will respond in accordance with applicable law.
          </P>

          <H2 {...sections[8]} />
          <P>
            Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;)
            feature. No uniform technology standard for recognizing and implementing DNT signals has
            been finalized, and we do not currently respond to DNT browser signals. Our cookie banner
            provides an equivalent, granular way to decline tracking.
          </P>

          <H2 {...sections[9]} />
          <P><em><strong>In Short:</strong> Yes — depending on your state, you may have specific rights regarding your personal information.</em></P>
          <P>
            Residents of California, Colorado, Connecticut, Texas, Virginia, and other states with
            comprehensive privacy laws may have rights to know what personal information we process, to
            access or delete it, to correct inaccuracies, and to opt out of targeted advertising or
            &quot;sales&quot; of personal information. <strong>We do not sell or share personal
            information for cross-context behavioral advertising.</strong> To exercise any right, email{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-oiltac-copper hover:text-oiltac-dark">info@oiltacfuel.com</a>.
            We will not discriminate against you for exercising your rights.
          </P>

          <H2 {...sections[10]} />
          <P><em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></P>
          <P>
            The updated version will be indicated by the &quot;Last updated&quot; date at the top of
            this Notice. If we make material changes, we may notify you by prominently posting a notice
            on the site. We encourage you to review this Notice frequently.
          </P>

          <H2 {...sections[11]} />
          <P>
            If you have questions or comments about this Notice, email us at{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-oiltac-copper hover:text-oiltac-dark">info@oiltacfuel.com</a>{" "}
            (Chie Tsiang Enterprise, d/b/a OILTAC Fuel).
          </P>

          <H2 {...sections[12]} />
          <P>
            Based on the applicable laws of your country or state, you may have the right to request
            access to the personal information we collect from you, details about how we have processed
            it, to correct inaccuracies, or to delete it. To request to review, update, or delete your
            personal information, email{" "}
            <a href="mailto:info@oiltacfuel.com" className="text-oiltac-copper hover:text-oiltac-dark">info@oiltacfuel.com</a>{" "}
            with the subject line &quot;Data request.&quot; We will act on your request in accordance
            with applicable law.
          </P>

          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center text-oiltac-copper hover:text-oiltac-dark transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PrivacyPolicy;
