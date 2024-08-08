'use client';

import { formatMediaType } from '@/shared/lib/formatting';
import { useAppSelector } from '@/shared/model/hooks';
import s from './FavoriteCards.module.scss';
import { ResultCard } from '@/features/result-card';

export const FavoriteCards = () => {
  const { data: favorites } = useAppSelector((state) => state.favorites);

  return (
    <div className={s.list}>
      {favorites.length === 0 && <p>No favorites yet</p>}
      {favorites.map(
        ({
          id,
          author,
          name,
          price,
          currency,
          type,
          imageSrc,
          collectionName,
        }) => (
          <ResultCard
            key={id}
            id={id}
            author={author}
            name={name}
            type={type}
            price={price}
            currency={currency}
            imageSrc={imageSrc}
            collectionName={collectionName}
          />
        )
      )}
    </div>
  );
};
