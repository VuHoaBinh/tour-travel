import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme, themeSelector } from 'reducers/themeSlice';

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(themeSelector);

  return (
    <Tooltip title='Switch Mode'>
      <IconButton
        onClick={() => {
          dispatch(switchTheme({ mode: isDark ? 'light' : 'dark' }));
        }}
      >
        {isDark ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default SwitchTheme;
