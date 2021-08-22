import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyyButton';
import { useContext } from 'react';
import { AuthContext } from '../context/index';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', true);
  }
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
