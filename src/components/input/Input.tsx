import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { makeIconInfoArray } from 'utils/getAllIconInfo';

const Input = () => {
  const [selectedIconNames, setSelectedIconNames] = useState<string[]>([]);
  const iconArr = makeIconInfoArray();

  const onStackChange = (e: React.SyntheticEvent) => {
    const { textContent } = e.currentTarget;
    textContent && setSelectedIconNames((prev) => [...prev, textContent]);
  };

  return (
    <div style={{ width: '50%' }}>
      <Autocomplete
        multiple
        id='tags-outlined'
        options={iconArr}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.path}>
              {option.title}
            </li>
          );
        }}
        getOptionLabel={(option) => option.title}
        onChange={onStackChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label='Choose User Stacks!' placeholder='Stacks' />
        )}
      />
    </div>
  );
};

export default Input;
