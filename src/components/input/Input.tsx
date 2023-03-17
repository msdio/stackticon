import styled from '@emotion/styled';
import { Autocomplete, createFilterOptions, TextField, useMediaQuery } from '@mui/material';
import type { SimpleIcon } from 'simple-icons';

import { makeIconInfoArray } from '../../utils/allIconInfo';

const DropdownSvg = styled.div<{ hex: string }>`
  width: 24px;
  height: 24px;
  margin-right: 10px;

  svg {
    width: 24px;
    height: 24px;
  }

  path {
    fill: ${(props) => props.hex};
  }
`;

interface InputProps {
  handler: (p: string[]) => void;
}

const Input = ({ handler }: InputProps) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
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
    <div style={{ width: isMobile ? '66%' : '50%', zIndex: '50' }}>
      <Autocomplete
        multiple
        id='tags-outlined'
        options={iconArr}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.path}>
              <DropdownSvg
                dangerouslySetInnerHTML={{ __html: option.svg }}
                hex={'#' + option.hex}
              ></DropdownSvg>
              {option.title}
            </li>
          );
        }}
        getOptionLabel={(option) => option.title}
        onChange={(e, value) => onStackChange(e, value)}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder='Choose Your Stacks!' />}
        filterOptions={createFilterOptions({
          limit: 100,
        })}
      />
    </div>
  );
};

export default Input;
