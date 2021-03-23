import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  //si no escribe nada devuelve un arreglo vacío
  if (name === '') {
    return [];
  }

  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
