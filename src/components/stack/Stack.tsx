import { SvgIcon } from '@mui/material';
import React from 'react';
import { getSimpleIconInfo } from 'utils/simpleIconInfo';

interface StackProps {
  stackName: string;
}

const Stack = ({ stackName }: StackProps) => {
  const { title, path, hex } = getSimpleIconInfo(stackName);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          borderRadius: '15%',
          margin: '5px',
          backgroundColor: 'white',
          alignItems: 'center',
          padding: '10px',
          width: '70px',
          height: '70px',
        }}
      >
        <SvgIcon style={{ width: '50px', height: '50px' }} fill='white'>
          <path d={path} fill={`#${hex}`} />
        </SvgIcon>
      </div>
      <p style={{ margin: '0', textAlign: 'center' }}>{title}</p>
    </div>
  );
};

export default Stack;
