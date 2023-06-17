import { Card, Navigator } from '@/components';
import { getCharacters } from './services';
import { Routes } from '@/models';

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathNames={[Routes.LOCATIONS, Routes.HOME]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}
export default Characters;
