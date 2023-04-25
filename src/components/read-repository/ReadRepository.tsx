import { Box, Input } from '@mui/material';
import { getPackageJSONObject } from 'apis/packages';
import { bounce } from 'constants/animations';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';
import { getPackageJSONFromRepository } from 'utils/resultUrl';

const ReadRepository = () => {
  const [address, setAddress] = useState('');

  const temp = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const temp2 = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const packageJSONPath = getPackageJSONFromRepository(address);
      const res = await getPackageJSONObject(packageJSONPath);

      console.log('res', res);
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
        onClick={(e) => e.stopPropagation()}
        onChange={temp}
        onKeyUp={temp2}
        disableUnderline
      />
    </Box>
  );
};

export default ReadRepository;
