import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  selected: null,
  locations: 'Jacksonville, Fl',
  coordinates: [],
  places: [],
};

export const getLocation = createAsyncThunk(
  'search/getLocation',
  async (locations) => {
    const geoRes = await fetch(
      `https://geocode.maps.co/search?q=${locations}`,
    );
    const [{ lat, lon }] = await geoRes.json();

    const yelpRes = await fetch(
      `https://bwreact-yelp-backend.herokuapp.com/api/search?term=Hotels&lat=${lat}&lon=${lon}&limit=50`,
    );
    const searchResults = await yelpRes.json();
    return searchResults;
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLocations(state, { payload }) {
      state.locations = payload;
    },
    setSelected(state, { payload }) {
      state.selected = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLocation.pending, (state) => {
        state.loading = true;
        state.places = [];
        state.coordinates = [];
      })
      .addCase(
        getLocation.fulfilled,
        (state, { payload: { lat, lon, businesses } }) => {
          state.loading = false;
          state.error = false;
          state.coordinates = [lat, lon];
          state.places = businesses;
        },
      )
      .addCase(getLocation.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setLocations, setSelected } = searchSlice.actions;

export default searchSlice.reducer;
