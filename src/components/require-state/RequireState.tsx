import Cute404 from 'pages/page404';
import { useStacks } from 'providers/StacksProvider';

interface RequireStateProps {
  component: JSX.Element;
}

const RequireState = ({ component }: RequireStateProps) => {
  const { stacks } = useStacks();

  if (!stacks) {
    return <Cute404 />;
  }

  return component;
};

export default RequireState;
