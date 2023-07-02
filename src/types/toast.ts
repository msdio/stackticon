export interface ToastProps {
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  open: boolean;
  close: () => void;
  duration?: number;
}
