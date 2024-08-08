'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { formatMediaType } from '@shared/lib/formatting';
import { FavoritesCheckbox } from '@/features/add-to-favorites';
import s from './ResultCard.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import {
  addToFavorites,
  removeFromFavorites,
} from '@/shared/store/slices/favoritesSlice';

export interface ResultCardProps {
  id: number;
  author: string;
  name: string;
  type: string;
  price: number | string;
  currency: string;
  imageSrc: string;
  collectionName: string;
}

export const ResultCard: FC<ResultCardProps> = ({
  id,
  author,
  name,
  type,
  price,
  currency,
  imageSrc,
  collectionName,
}) => {
  const dispatch = useAppDispatch();
  const { data: favorites } = useAppSelector((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState<boolean>(
    Boolean(favorites.find((card) => card.id === id))
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id,
          author,
          name,
          type,
          price,
          currency,
          imageSrc,
          collectionName,
        })
      );
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.card}>
      <FavoritesCheckbox
        isChecked={isFavorite}
        toggleChecked={toggleFavorite}
      />
      <div className={s.info}>
        <p className={s.title}>{name}</p>
        <p className={s.description}>
          {formatMediaType(type)} by {author}
        </p>
        <p className={s.description}>From collection: {collectionName}</p>
        {!!price && !!currency && (
          <p className={s.price}>
            Price: {price} {currency}
          </p>
        )}
      </div>
      <div className={s.imageWrapper}>
        <Image
          className={s.image}
          src={imageSrc}
          alt={name}
          fill={true}
          sizes="120px"
        />
      </div>
    </div>
  );
};
