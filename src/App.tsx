import { AppProvider } from 'containers';
import { PrivateLayout } from 'layouts';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'reducers/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<PrivateLayout />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
};

export default App;
