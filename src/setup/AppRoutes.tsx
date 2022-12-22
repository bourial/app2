import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import AlreadyLoggedIn from './AlreadyLoggedIn';
import jsCookie from 'js-cookie';
import RequireAuth from './RequireAuth';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route
        path='login'
        element={jsCookie.get('token') ? <AlreadyLoggedIn /> : <Login />}
      />
      <Route
        path='register'
        element={jsCookie.get('token') ? <AlreadyLoggedIn /> : <Register />}
      />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
