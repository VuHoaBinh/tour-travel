import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { profileSelector } from 'reducers/profileSlice';
import { privateRoute } from 'routes';

const PrivateLayout = () => {
  const navigator = useNavigate();
  const { isLoggedIn } = useSelector(profileSelector);

  return (
    <main>
      <AppHeader />
      <Box>
        <Routes>
          {Object.values(privateRoute).map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path='*' element={<Navigate to={privateRoute.home.path} />} />
        </Routes>
      </Box>
      <AppFooter />
    </main>
  );
};

export default PrivateLayout;
