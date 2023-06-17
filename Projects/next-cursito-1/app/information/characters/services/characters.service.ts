import { Character } from '../models';

export const getCharacters = (): Promise<Character[]> => {
  const url = 'https://rickandmortyapi.com/api/character';
  //   const urlWithId = `${url}/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));
};
