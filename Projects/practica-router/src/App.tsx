import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import './App.css';
import { PrivateRoutes, PublicRoutes } from './models';
import { AuthGuard } from './guards';
import { RoutesWithNotFound } from './utilities';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Logout } from './components/Logout';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<>Loading...</>}>
          <Provider store={store}>
            <BrowserRouter>
              <Logout />
              <RoutesWithNotFound>
                <Route
                  path='/'
                  element={<Navigate to={PrivateRoutes.PRIVATE} />}
                />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard />}>
                  <Route
                    path={`${PrivateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </div>
    </>
  );
}

export default App;