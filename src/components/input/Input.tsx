import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import {
  Autocomplete,
  createFilterOptions,
  ListItem,
  TextField,
  useMediaQuery,
} from '@mui/material';

import { DragContainer } from 'components/drag-container/DragContainer';
import { useStacks } from 'providers/StacksProvider';

import { getIconDetail, makeIconInfoArray } from '../../utils/allIconInfo';

import type { SimpleIcon } from 'simple-icons';

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

const Input = () => {
  const [inputStacks, setInputStacks] = useState<SimpleIcon[]>([]);
  const { stacks, update } = useStacks();
  const isMobile = useMediaQuery('(max-width: 900px)');
  const iconArr = makeIconInfoArray();

  useEffect(() => {
    const ret: SimpleIcon[] = [];
    stacks.forEach((stk) => {
      ret.push(getIconDetail(stk));
    });

    setInputStacks(ret);
  }, [stacks]);

  const onStackChange = (value: SimpleIcon[]) => {
    update(
      value.map(
        (el: SimpleIcon) =>
          el.slug.substring(0, 1).toUpperCase() + el.slug.substring(1, el.slug.length),
      ),
    );
  };

  const changeStackOrder = (stacks: SimpleIcon[]) => {
    setInputStacks(stacks);
    onStackChange(stacks);
  };

  return (
    <div style={{ width: isMobile ? '66%' : '50%', zIndex: '50' }}>
      <Autocomplete
        multiple
        id='tags-outlined'
        options={iconArr}
        renderOption={(props, option) => (
          <ListItem {...props} key={option.path}>
            <DropdownSvg
              dangerouslySetInnerHTML={{ __html: option.svg }}
              hex={'#' + option.hex}
            ></DropdownSvg>
            {option.title}
          </ListItem>
        )}
        getOptionLabel={(option) => option.title}
        value={inputStacks}
        isOptionEqualToValue={(option, value) => {
          return option.slug === value.slug;
        }}
        onChange={(e, value) => onStackChange(value)}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} placeholder='Choose Your Stacks!' />}
        renderTags={(stacks) => <DragContainer array={stacks} updateArray={changeStackOrder} />}
        filterOptions={createFilterOptions({
          limit: 100,
        })}
      />
    </div>
  );
};

export default Input;
