import { DeleteTag } from 'constants/icons';
import type { SimpleIcon } from 'simple-icons';

interface DraggableChipProps {
  stack: SimpleIcon;
  mouseUp: () => void;
  mouseDown: () => void;
  deleteItem: () => void;
}

export const DraggableChip = ({ stack, mouseUp, mouseDown, deleteItem }: DraggableChipProps) => {
  return (
    <div
      style={{
        margin: '0 5px',
        padding: '3px 8px',
        paddingLeft: '14px',
        cursor: 'pointer',
        backgroundColor: '#e6f0ff',
        fontSize: '14px',
        border: '1px solid #99c2ff',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
      }}
      onMouseUp={mouseUp}
      onMouseDown={mouseDown}
    >
      {stack.title}
      <div onClick={deleteItem}>
        <DeleteTag />
      </div>
    </div>
  );
};
