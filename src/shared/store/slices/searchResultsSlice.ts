import { fetchByNameAndLimit } from '@/shared/api/fetchResults';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchResultsByNameAndLimit = createAsyncThunk(
  'searchResults/fetchByNameAndLimit',
  async (
    { term, limit }: { term: string; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetchByNameAndLimit(term, limit);
      return response as SearchResult[];
    } catch {
      return rejectWithValue('Failed to fetch results, please try again');
    }
  }
);

interface ResultsState {
  data: SearchResult[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: null | string;
}

const initialState: ResultsState = {
  data: [],
  loading: 'idle',
  error: null,
};

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResultsByNameAndLimit.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchResultsByNameAndLimit.rejected, (state, action) => {
        state.data = [];
        state.loading = 'failed';
        state.error = 'Failed to fetch results, please try again';
      })
      .addCase(fetchResultsByNameAndLimit.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      });
  },
});

export default searchResultsSlice.reducer;
