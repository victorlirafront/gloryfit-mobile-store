import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import swapiReducer from './swapiSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      swapi: swapiReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
