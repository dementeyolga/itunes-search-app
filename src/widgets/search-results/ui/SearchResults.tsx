'use client';

import { ResultCard } from '@features/result-card';
import s from './SearchResults.module.scss';
import { useAppSelector } from '@/shared/model/hooks';
import { SearchResultsSkeleton } from './SearchResultsSkeleton';
import { formatMediaType } from '@/shared/lib/formatting';

export const SearchResults = () => {
  const { data, loading, currentCategory } = useAppSelector(
    (state) => state.searchResults
  );

  return (
    <div className={s.list}>
      {loading === 'pending' && <SearchResultsSkeleton />}
      {loading === 'failed' && <p>Failed to fetch results, please try again</p>}
      {loading === 'succeeded' && !data?.length && <p>Nothing found</p>}
      {loading === 'succeeded' &&
        Array.isArray(data) &&
        data.map(
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
  );
};
