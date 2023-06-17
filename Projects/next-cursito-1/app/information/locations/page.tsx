import { Card, Navigator } from '@/components';
import { getLocations } from './services';
import { Routes } from '@/models';

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.HOME]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}
export default Locations;
