import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from '.';
import { People } from '../../data/people';
import { addPeople } from '../../redux/states';

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
