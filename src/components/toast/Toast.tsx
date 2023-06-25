import { Alert, Snackbar } from '@mui/material';
import type { ToastProps } from 'types/toast';

const Toast = ({ type, message, open, close, duration = 1500 }: ToastProps) => {
  return (
    <Snackbar
      open={open}
      onClose={close}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
