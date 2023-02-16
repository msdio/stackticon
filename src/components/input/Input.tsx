import { Autocomplete, SvgIcon, TextField } from '@mui/material';
import { useState } from 'react';

import { makeIconInfoArray } from '../../utils/allIconInfo';

interface InputProps {
  handler: (p: string[]) => void;
}

const Input = ({ handler }: InputProps) => {
  const [selectedIconNames, setSelectedIconNames] = useState<string[]>([]);
  const iconArr = makeIconInfoArray();

  const onStackChange = (e: React.SyntheticEvent, value: any) => {
    const { textContent } = e.currentTarget;
    textContent && setSelectedIconNames((prev) => [...prev, textContent]);
    handler(
      value.map(
        (el: any) => el.slug.substring(0, 1).toUpperCase() + el.slug.substring(1, el.slug.length),
      ),
    );
  };

  return (
    <div style={{ width: '50%', zIndex: '50' }}>
      <Autocomplete
        multiple
        id='tags-outlined'
        options={iconArr}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.path}>
              <SvgIcon>
                <path d={option.path} />
              </SvgIcon>
              {option.title}
            </li>
          );
        }}
        getOptionLabel={(option) => option.title}
        onChange={(e, value) => onStackChange(e, value)}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label='Choose Your Stacks!' placeholder='Stacks' />
        )}
      />
    </div>
  );
};

export default Input;
