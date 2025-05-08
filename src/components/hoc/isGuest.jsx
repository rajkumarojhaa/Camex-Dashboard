import { Navigate } from 'react-router-dom';

const isGuest = (WrappedComponent, redirectTo = '/home') => {
  return (props) => {
    const token = localStorage.getItem('token');

    if (token) {
      return <Navigate to={redirectTo} replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default isGuest;
