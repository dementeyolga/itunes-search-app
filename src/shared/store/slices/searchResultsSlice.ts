import { fetchByNameAndLimit } from '@/shared/api/fetchResults';
import { SearchResult } from '@/shared/model/interfaces';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchResultsByNameAndLimit = createAsyncThunk(
  'searchResults/fetchByNameAndLimit',
  async (
    {
      term,
      limit,
      firstLoad,
    }: { term: string; limit: number; firstLoad: boolean },
    { rejectWithValue }
  ) => {
    try {
      let results = (await fetchByNameAndLimit(term, limit)) as SearchResult[];

      if (!Array.isArray(results)) {
        results = [];
      }

      console.log(results);

      return { results, term, limit, firstLoad };
    } catch {
      return rejectWithValue('Failed to fetch results, please try again');
    }
  }
);

interface ResultsState {
  data: SearchResult[];
  loading: 'idle' | 'pending' | 'firstLoad' | 'succeeded' | 'failed';
  currentSearchTerm: string;
  currentLimit: number;
  currentCategory: string;
  error: null | string;
}

const initialState: ResultsState = {
  data: [],
  loading: 'idle',
  currentCategory: 'All categories',
  currentSearchTerm: '',
  currentLimit: 0,
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
      .addCase(fetchResultsByNameAndLimit.pending, (state, { meta }) => {
        if (meta.arg.firstLoad) {
          state.data = [];
          state.loading = 'firstLoad';
        } else {
          state.loading = 'pending';
        }

        state.currentSearchTerm = '';
        state.currentLimit = 0;
        state.error = null;
        state.currentCategory = 'All categories';
      })
      .addCase(fetchResultsByNameAndLimit.rejected, (state) => {
        if (!(state.data.length && state.loading !== 'firstLoad')) {
          state.data = [];
          state.currentSearchTerm = '';
          state.currentLimit = 0;
        }

        state.loading = 'failed';
        state.error = 'Failed to fetch results, please try again';
        state.currentCategory = 'All categories';
      })
      .addCase(fetchResultsByNameAndLimit.fulfilled, (state, action) => {
        state.data = action.payload.results;
        state.currentSearchTerm = action.payload.term;
        state.currentLimit = action.payload.limit;
        state.loading = 'succeeded';
        state.error = null;
        state.currentCategory = 'All categories';
      });
  },
});

export const { setCurrentCategory } = searchResultsSlice.actions;
export const searchResultsReducer = searchResultsSlice.reducer;
