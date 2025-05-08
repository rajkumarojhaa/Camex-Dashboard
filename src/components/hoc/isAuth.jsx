import { Navigate } from 'react-router-dom';

const isAuth = (WrappedComponent, redirectTo = '/login') => {
  return (props) => {
    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to={redirectTo} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default isAuth;
