import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useContext, useEffect } from 'react';
import { check } from './http/userAPI';
import { context } from './context';
import Header from './components/Header.jsx';

export default function App() {
  const user = useContext(context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check()
      user._isAuth = true
      user.setIsAuth = true
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}
