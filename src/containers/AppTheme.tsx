import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { CssBaseline, LinearProgress, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { GridEmpty } from 'components/common';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from 'reducers/themeSlice';

const createAppTheme = (mode?: PaletteMode) =>
  createTheme({
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'medium',
          variant: 'contained',
          color: 'primary',
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: { minHeight: 48, minWidth: 48, fontSize: 18 },
          sizeMedium: { minHeight: 40, minWidth: 40, fontSize: 16 },
          sizeSmall: { minHeight: 32, minWidth: 32, fontSize: 14 },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiPagination: {
        defaultProps: {
          variant: 'outlined',
          shape: 'rounded',
          size: 'large',
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'medium',
        },
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: 'sm',
          fullWidth: true,
        },
      },
      MuiDataGrid: {
        defaultProps: {
          autoHeight: true,
          disableColumnMenu: true,
          hideFooter: true,
          rowSelection: false,
          getRowHeight: () => 'auto',
          slots: {
            noRowsOverlay: GridEmpty,
            loadingOverlay: LinearProgress,
            columnSortedAscendingIcon: ArrowDropUp,
            columnSortedDescendingIcon: ArrowDropDown,
          },
          showCellVerticalBorder: true,
          showColumnVerticalBorder: true,
        },
      },
    },
    typography: {
      fontFamily: 'Nunito Sans',
      button: { fontWeight: 700, textTransform: 'none' },
    },
    palette: {
      primary: {
        main: '#673ab7',
      },
      secondary: {
        main: '#2979ff',
      },
      mode,
    },
    shape: {
      borderRadius: 8,
    },
  });

type Props = {
  children: JSX.Element;
};

const AppTheme = ({ children }: Props) => {
  const { mode } = useSelector(themeSelector);

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  return (
    <ThemeProvider theme={responsiveFontSizes(createAppTheme(mode))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
