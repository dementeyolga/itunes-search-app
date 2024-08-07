import { ResultCard } from '@/src/features/result-card';
import s from './SearchResults.module.scss';
import { fetchResultsByNameAndLimit } from '../api/fetchResults';

export const SearchResults = async () => {
  const results = await fetchResultsByNameAndLimit('jack johnson', 5);

  return (
    <div className={s.list}>
      {results &&
        results.length &&
        results.map(
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
