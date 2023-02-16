import { Alert } from '@mui/material';

interface CustomAlertProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  description: string;
}

const CustomAlert = ({ severity, description }: CustomAlertProps) => {
  return <Alert severity={severity}>{description}</Alert>;
};

export default CustomAlert;
