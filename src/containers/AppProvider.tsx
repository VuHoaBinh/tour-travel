import { QueryClientProvider } from '@tanstack/react-query';
import { AppHooks, AppTheme } from 'containers';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from 'reducers/store';
import { queryClient } from 'services';

type Props = {
  children: JSX.Element;
};

const AppProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <SnackbarProvider
        variant='success'
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        classes={{ containerAnchorOriginTopRight: 'top-[72px]' }}
      >
        <QueryClientProvider client={queryClient}>
          <AppHooks>
            <AppTheme>{children}</AppTheme>
          </AppHooks>
        </QueryClientProvider>
      </SnackbarProvider>
    </Provider>
  );
};

export default AppProvider;
