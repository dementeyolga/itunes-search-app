import { FC } from 'react';
import { formatMediaType } from '@shared/lib/formatting';
import s from './ResultCard.module.scss';
import Image from 'next/image';

interface ResultCardProps {
  author: string;
  name: string;
  type: string;
  price: number | string;
  currency: string;
  imageSrc: string;
}

export const ResultCard: FC<ResultCardProps> = ({
  author,
  name,
  type,
  price,
  currency,
  imageSrc,
}) => {
  return (
    <div className={s.card}>
      <div className={s.info}>
        <p className={s.title}>{name}</p>
        <p className={s.description}>
          {formatMediaType(type)} by {author}
        </p>
        <p>
          Price: {price} {currency}
        </p>
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
