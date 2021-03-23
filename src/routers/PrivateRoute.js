import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  // console.log(rest);
  // Acá extraigo de rest ->location y de location extraigo ->pathname y ->search
  const {
    location: { pathname, search },
  } = rest;

  //Acá estoy grabando el last path junto con la última query para así obtener la query de lo que se seleccionó una vez iniciado sesión
  localStorage.setItem('lastPath', pathname + search);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
