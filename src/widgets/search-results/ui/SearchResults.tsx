'use client';

import { ResultCard } from '@features/result-card';
import s from './SearchResults.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { SearchResultsSkeleton } from './SearchResultsSkeleton';

export const SearchResults = () => {
  const results = useAppSelector((state) => state.searchResults);

  return (
    <div className={s.list}>
      {results.loading === 'pending' && <SearchResultsSkeleton />}
      {results.loading === 'failed' && (
        <p>Failed to fetch results, please try again</p>
      )}
      {results.loading === 'succeeded' && !results.data?.length && (
        <p>Nothing found</p>
      )}
      {results.loading === 'succeeded' &&
        Array.isArray(results.data) &&
        results.data.map(
          ({
            trackId,
            artistName,
            trackName,
            trackPrice,
            currency,
            kind,
            artworkUrl100,
          }) => (
            <ResultCard
              key={trackId}
              author={artistName}
              name={trackName}
              type={kind}
              price={trackPrice}
              currency={currency}
              imageSrc={artworkUrl100}
            />
          )
        )}
    </div>
  );
};
