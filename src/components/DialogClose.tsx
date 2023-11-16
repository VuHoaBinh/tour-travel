import { Close } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';

const DialogClose = (props: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
      }}
      {...props}
    >
      <Close />
    </IconButton>
  );
};

export default DialogClose;
