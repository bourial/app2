import { useLocation, Navigate, Outlet } from 'react-router-dom';
import jsCookie from 'js-cookie';

const RequireAuth = () => {
  const location = useLocation();

  return jsCookie.get('token') ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
