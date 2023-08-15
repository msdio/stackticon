import { useState } from 'react';

import { DraggableChip } from './DraggableChip';

import type { SimpleIcon } from 'simple-icons';

interface DragContainerProps {
  array: SimpleIcon[];
  updateArray: (s: SimpleIcon[]) => void;
}

export const DragContainer = ({ array, updateArray }: DragContainerProps) => {
  const [selected, setSelected] = useState<SimpleIcon>();

  const reorderArray = (index: number) => {
    const filteredArray = array.filter((el) => el !== selected);

    const prev = filteredArray.slice(0, index);
    const next = filteredArray.slice(index, filteredArray.length);

    if (prev && next && selected) {
      updateArray([...prev, selected, ...next]);
    }
  };

  const deleteItem = (index: number) => {
    const deleted = array.filter((el, idx) => idx !== index);
    updateArray([...deleted]);
  };

  const mouseUp = (index: number) => {
    reorderArray(index);
  };

  const mouseDown = (index: number) => {
    setSelected(array[index]);
  };

  return (
    <>
      {array.map((stack, index) => (
        <DraggableChip
          key={stack.path}
          stack={stack}
          mouseUp={() => mouseUp(index)}
          mouseDown={() => mouseDown(index)}
          deleteItem={() => deleteItem(index)}
        />
      ))}
    </>
  );
};
