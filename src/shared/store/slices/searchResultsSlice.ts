import { fetchByNameAndLimit } from '@/shared/api/fetchResults';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchResultsByNameAndLimit = createAsyncThunk(
  'searchResults/fetchByNameAndLimit',
  async (
    { term, limit }: { term: string; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const results = await fetchByNameAndLimit(term, limit);
      console.log(results);

      return results as SearchResult[];
    } catch {
      return rejectWithValue('Failed to fetch results, please try again');
    }
  }
);

interface ResultsState {
  data: SearchResult[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  currentCategory: string;
  error: null | string;
}

const initialState: ResultsState = {
  data: [],
  loading: 'idle',
  currentCategory: 'All categories',
  error: null,
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResultsByNameAndLimit.pending, (state) => {
        state.data = [];
        state.loading = 'pending';
        state.error = null;
        state.currentCategory = 'All categories';
      })
      .addCase(fetchResultsByNameAndLimit.rejected, (state, action) => {
        state.data = [];
        state.loading = 'failed';
        state.error = 'Failed to fetch results, please try again';
        state.currentCategory = 'All categories';
      })
      .addCase(fetchResultsByNameAndLimit.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
        state.error = null;
        state.currentCategory = 'All categories';
      });
  },
});

export const { setCurrentCategory } = searchResultsSlice.actions;
export const searchResultsReducer = searchResultsSlice.reducer;
