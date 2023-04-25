import { Box, Input } from '@mui/material';
import { bounce } from 'constants/animations';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';

const ReadRepository = () => {
  const [address, setAddress] = useState('');

  const temp = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const temp2 = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(address);
    }
  };

  return (
    <Box
      width={'330px'}
      height={'50px'}
      display={'flex'}
      alignItems={'center'}
      bgcolor={'p.6'}
      borderRadius={3}
      pl={2}
      pr={2}
      zIndex={5}
      sx={{
        transform: 'translateY(70px) translateX(280px)',
        animation: `${bounce} 1s`,
        '::before': {
          /* eslint-disable-next-line */
          content: "''",
          position: 'absolute',
          top: '-20px',
          left: '50%',
          marginTop: '-20px',
          borderTop: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '20px solid #e6f0ff',
          borderLeft: '20px solid transparent',
        },
      }}
    >
      <Input
        fullWidth
        placeholder='input repository here'
        onChange={temp}
        onKeyUp={temp2}
        disableUnderline
      />
    </Box>
  );
};

export default ReadRepository;
