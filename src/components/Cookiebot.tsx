
import { Helmet } from 'react-helmet-async';

const Cookiebot = () => {
  return (
    <Helmet>
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="4374aa58-93f7-4e6a-8be7-928cdb524a9c"
        data-blockingmode="auto"
        type="text/javascript"
      />
    </Helmet>
  );
};

export default Cookiebot;
