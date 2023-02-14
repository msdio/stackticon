import { Autocomplete, TextField } from '@mui/material';
import { Stacks } from 'mock/stacks';

const Input = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={Stacks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Stack' />}
      />
    </div>
  );
};

export default Input;
