import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../auth/types/types';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    //Agrego el lastPath de localStorage para poder entrar a la ultima ruta desde que hice logout y luego login
    const lastPath = localStorage.getItem('lastPath') || '/';
    // history.push('/');
    // history.replace('/');
    // {
    // name; 'Bernhard',
    // }
    dispatch({
      type: types.login,
      payload: {
        name: 'Bernhard',
      },
    });
    //mando a la ruta de inicio
    //se reemplaza la redirección por lastPath
    history.replace(lastPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
