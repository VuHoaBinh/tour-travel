import { Backdrop, Box, BoxProps, CircularProgress } from '@mui/material';

type SpinnerType = BoxProps & {
  loading?: boolean;
  icon?: JSX.Element;
};

const Spinner = ({ loading, icon, children, ...props }: SpinnerType) => {
  return (
    <Box sx={{ height: '100%' }} {...props}>
      {children}
      <Backdrop
        open={loading ?? false}
        sx={{
          position: 'absolute',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: 'rgba(18, 18, 18, 0.05)',
          backgroundColor: 'transparent',
        }}
      >
        {icon ?? <CircularProgress />}
      </Backdrop>
    </Box>
  );
};

export default Spinner;
