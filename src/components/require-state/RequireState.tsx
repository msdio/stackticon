import type { ReactNode } from 'react';

import Cute404 from 'pages/page404';
import { useStacks } from 'providers/StacksProvider';

interface RequireStateProps {
  component: ReactNode;
}

const RequireState = ({ component }: RequireStateProps) => {
  const { stacks } = useStacks();

  if (!stacks) {
    return <Cute404 />;
  }

  return component;
};

export default RequireState;
