import { Autocomplete, SvgIcon, TextField } from '@mui/material';
import { makeIconInfoArray } from 'utils/allIconInfo';

const Input = () => {
  const iconArr = makeIconInfoArray();

  return (
    <div>
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
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label='Choose Your Stacks!' placeholder='Stacks' />
        )}
      />
    </div>
  );
};

export default Input;
