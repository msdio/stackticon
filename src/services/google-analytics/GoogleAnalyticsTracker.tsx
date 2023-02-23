import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const GoogleAnalyticsTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID as string);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [initialized, location]);
};

export default GoogleAnalyticsTracker;
