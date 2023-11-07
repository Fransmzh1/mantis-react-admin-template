import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import authenticate from 'store/reducers/auth';

const ProtectedRoute = () => {
  const access = useSelector((state) => state.access);
  console.log('satu');
  console.log(JSON.stringify(access));
  console.log('dua');
  console.log(access.authenticated ? 'LoggedIn at protected route' : 'Not LoggedIn');
  console.log('tiga');
  return <Outlet />;
};

export default ProtectedRoute;

// ProtectedRoute.propTypes = {
//   isLoggedIn: PropTypes.bool
// };
