import { SvgIcon } from '@mui/material';
import React from 'react';
import { getSimpleIconInfo } from 'utils/simpleIconInfo';

interface StackProps {
  stackName: string;
}

const Stack = ({ stackName }: StackProps) => {
  const { title, path } = getSimpleIconInfo(stackName);
  return (
    <div>
      <SvgIcon>
        <path d={path} />
      </SvgIcon>

      <p>{title}</p>
    </div>
  );
};

export default Stack;
