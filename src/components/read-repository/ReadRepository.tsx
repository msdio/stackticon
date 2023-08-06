import { Box, Input } from '@mui/material';
import { getPackageJSONObject } from 'apis/packages';
import { bounce } from 'constants/animations';
import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';
import { filterExisitingStacks } from 'utils/array';
import { getDependencies, removeSubModules } from 'utils/packageJson';
import { getPackageJSONFromRepository } from 'utils/resultUrl';
import { capitalize, makeIntoSlug } from 'utils/string';

interface ReadRepositoryProps {
  stackHandler: (p: string[]) => void;
  inputPopupHandler: (b: boolean) => void;
}

const ReadRepository = ({ stackHandler, inputPopupHandler }: ReadRepositoryProps) => {
  const [address, setAddress] = useState('');

  const updateAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const getStacks = async (path: string) => {
    try {
      const data = await getPackageJSONObject(path);

      const stackSlugs = removeSubModules(getDependencies(data)).map(makeIntoSlug);
      const existingStacks = filterExisitingStacks(stackSlugs).map(capitalize);

      stackHandler(existingStacks);
    } catch (error) {
      alert(error);
    } finally {
      inputPopupHandler(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const packageJSONPath = getPackageJSONFromRepository(address);

      getStacks(packageJSONPath);
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
        autoFocus
        fullWidth
        placeholder='input repository here'
        onClick={(e) => e.stopPropagation()}
        onChange={updateAddress}
        onKeyDown={handleKeyPress}
        disableUnderline
      />
    </Box>
  );
};

export default ReadRepository;
