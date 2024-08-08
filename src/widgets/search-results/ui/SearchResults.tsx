'use client';

import { ResultCard } from '@features/result-card';
import s from './SearchResults.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { SearchResultsSkeleton } from './SearchResultsSkeleton';
import { formatMediaType } from '@/shared/lib/formatting';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchResultsByNameAndLimit } from '@/shared/store/slices/searchResultsSlice';

export const SearchResults = () => {
  const dispatch = useAppDispatch();
  const { currentSearchTerm, currentLimit } = useAppSelector(
    (state) => state.searchResults
  );

  const { data, loading, currentCategory } = useAppSelector(
    (state) => state.searchResults
  );

  const fetchMoreData = () => {
    dispatch(
      fetchResultsByNameAndLimit({
        term: currentSearchTerm,
        limit: currentLimit + 10,
        firstLoad: false,
      })
    );
  };

  return (
    <div>
      {loading === 'firstLoad' && <SearchResultsSkeleton />}
      {loading === 'failed' && <p>Failed to fetch results, please try again</p>}
      {loading === 'succeeded' && !data.length && <p>Nothing found</p>}
      {data.length !== 0 && Array.isArray(data) && (
        <InfiniteScroll
          next={fetchMoreData}
          hasMore={data.length >= currentLimit}
          loader={<h4>Loading...</h4>}
          dataLength={data.length}
        >
          <div className={s.list}>
            {data.map(
              ({
                trackId,
                artistName,
                trackName,
                trackPrice,
                currency,
                kind,
                artworkUrl100,
                collectionName,
              }) =>
                (currentCategory !== 'All categories' &&
                  currentCategory === formatMediaType(kind)) ||
                currentCategory === '' ||
                currentCategory === 'All categories' ? (
                  <ResultCard
                    key={trackId}
                    id={trackId}
                    author={artistName}
                    name={trackName}
                    type={kind}
                    price={trackPrice}
                    currency={currency}
                    imageSrc={artworkUrl100}
                    collectionName={collectionName}
                  />
                ) : null
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};
