import { createSlice, current } from '@reduxjs/toolkit';
import { IPeople, LocalStorageTypes } from '../../models';
import { getLocalStorage, setLocalStorage } from '../../utilities';

const initialState: IPeople[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: localStorage.getItem(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: IPeople) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
