import { Data } from '@/types/swapi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type SwapiState = {
  data: Data | null;
  loading: boolean;
  error: string | null;
};

const initialState: SwapiState = {
  data: null,
  loading: false,
  error: null,
};

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    fetchDataSuccess(state, action: PayloadAction<Data>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.swapi,
      };
    });
  },
});

export const { fetchDataSuccess } = swapiSlice.actions;

export default swapiSlice.reducer;
