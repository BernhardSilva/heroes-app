import React, { useMemo } from 'react';
import { getHeroById } from '../../selectors/getHeroById';
import { Redirect, useParams } from 'react-router';

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  //se dispara el memo cuando el heroeId cambia
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  //si no es heroe válido por path, redirecciono al usuario
  if (!hero) {
    return <Redirect to="/" />;
  }

  //con history.goBack regreso a la pagina anterior
  const handleReturn = () => {
    history.length <= 2 ? history.push('/') : history.goBack();
  };

  const {
    //desestructurando propiedades de objeto hero
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  // console.log(hero);

  return (
    <>
      <h1>Hero Screen</h1>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`../assets/heroes/${id}.jpg`}
            alt={superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8">
          <h3>{superhero}</h3>
          <ul className="list group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b> {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance: </b> {first_appearance}
            </li>
            <li className="list-group-item">
              <h5>Characters: </h5> {characters}
            </li>
            <li className="list-group-item">
              <button className="btn btn-primary" onClick={handleReturn}>
                Return
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
