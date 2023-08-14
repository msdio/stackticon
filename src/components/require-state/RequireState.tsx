import { useLocation } from 'react-router-dom';

import Cute404 from 'pages/page404';

interface RequireStateProps {
  component: JSX.Element;
}

const RequireState = ({ component }: RequireStateProps) => {
  const { state } = useLocation();

  if (!state) {
    return <Cute404 />;
  }

  return component;
};

export default RequireState;
