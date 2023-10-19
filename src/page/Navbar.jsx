import NavlinkActive from '../Routers/NavlinkActive';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    // css trực tiếp
    return {
      fontweight: isActive ? 'bold' : 'normal',
      TextDecoderation: isActive ? 'none' : 'underline',
      padding: isActive ? '10px 20px' : 'none',
      color: isActive ? 'red' : '',
    };
  };
  // const Auth = useAuth();
  return (
    <>
      <NavlinkActive style={navLinkStyle} to="/">
        Home
      </NavlinkActive>
      <NavlinkActive style={navLinkStyle} to="/About">
        About
      </NavlinkActive>
      <NavlinkActive style={navLinkStyle} to="/Detail">
        Detail
      </NavlinkActive>
      <NavlinkActive style={navLinkStyle} to="/UseRef">
        UseRef
      </NavlinkActive>
    </>
  );
};

export default Navbar;
