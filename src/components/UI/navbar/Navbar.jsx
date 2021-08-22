import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyyButton from '../button/MyyButton';
import { useContext } from 'react';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.clear();
  }

  return (
    <div className="navbar">
      <MyyButton onClick={logout}>Выйти</MyyButton>
      <div className="navbar_links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
