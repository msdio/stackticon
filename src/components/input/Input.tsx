import { Autocomplete, createFilterOptions, SvgIcon, TextField } from '@mui/material';
import type { SimpleIcon } from 'simple-icons';

import { makeIconInfoArray } from '../../utils/allIconInfo';

interface InputProps {
  handler: (p: string[]) => void;
}

const Input = ({ handler }: InputProps) => {
  const iconArr = makeIconInfoArray();

  const onStackChange = (e: React.SyntheticEvent, value: SimpleIcon[]) => {
    handler(
      value.map(
        (el: SimpleIcon) =>
          el.slug.substring(0, 1).toUpperCase() + el.slug.substring(1, el.slug.length),
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
              <SvgIcon
                sx={{
                  marginRight: '5px',
                }}
              >
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
        filterOptions={createFilterOptions({
          limit: 100,
        })}
      />
    </div>
  );
};

export default Input;
