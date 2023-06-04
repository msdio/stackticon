import { Chip } from '@mui/material';
import type { SimpleIcon } from 'simple-icons';

interface DraggableChipProps {
  stack: SimpleIcon;
  mouseUp: () => void;
  mouseDown: () => void;
  deleteItem: () => void;
}

export const DraggableChip = ({ stack, mouseUp, mouseDown, deleteItem }: DraggableChipProps) => {
  return (
    <div onMouseDown={mouseDown} onMouseUp={mouseUp}>
      <Chip
        label={stack.title}
        onDelete={deleteItem}
        sx={{
          bgcolor: '#e6f0ff',
          border: '1px solid #99c2ff',
          margin: '0 3px',
        }}
      />
    </div>
  );
};
