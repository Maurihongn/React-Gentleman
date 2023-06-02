import { configureStore } from '@reduxjs/toolkit';
import { IPeople } from '../models';
import { favoritesSlice, peopleSlice } from './states';

export interface Appstore {
  people: IPeople[];
  favorites: IPeople[];
}

export default configureStore<Appstore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
