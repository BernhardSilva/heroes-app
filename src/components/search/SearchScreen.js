import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  //extraigo search de location (react component in the browser extension)
  const { search } = useLocation();

  //declaro a una variable el search parseado con el hook queryString
  const parseQueryString = queryString.parse(search);

  /*extraigo q de queryString y el = '' es para que en el caso que la query
  venga vacía undefined, le asigno un string vacío*/
  const { q = '' } = parseQueryString;
  // console.log(q);

  //este es mi custom hook para que funcione un form
  //le asigno a searchText (valor de form) la query parseada
  const [formValues, handleInputChange] = useForm({ searchText: q });

  const { searchText } = formValues;
  //filtro heroes

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              autoComplete="off"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* Si no ingresan nada por Search, osea si q esta vacío, muestra esa alerta*/}
          {q === '' && <div className="alert alert-info">Search a hero</div>}
          {/* Si no ingresan nada por Search y si en el filtro no hace match, muestra esta otra alerta*/}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-warning">
              There's no a hero with {q} name.
            </div>
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
