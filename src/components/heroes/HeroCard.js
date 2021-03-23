import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div
      className="card animate__animated animate__fadeIn"
      style={{ maxWidth: 250 }}
    >
      <img
        className="card-img-top"
        src={`./assets/heroes/${id}.jpg`}
        alt={superhero}
      />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {alter_ego !== characters && (
          <p className="card-text">
            <b>Characters: </b>
            {characters}
          </p>
        )}
        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>
        <Link className="btn btn-primary" to={`./hero/${id}`}>
          More...
        </Link>
      </div>
    </div>
  );
};
