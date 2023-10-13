import { NavLink } from 'react-router-dom';

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
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/About">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/Detail">
        Detail
      </NavLink>
    </>
  );
};

export default Navbar;
