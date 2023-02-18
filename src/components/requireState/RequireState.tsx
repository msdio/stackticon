import Cute404 from 'pages/page404';
import { useLocation } from 'react-router-dom';

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
