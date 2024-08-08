import { ChangeEvent, FC } from 'react';
import favoritesIcon from '@images/favorite-icon.svg';
import favoritesCheckedIcon from '@images/favorite-icon-checked.svg';
import Image from 'next/image';
import s from './FavoritesCheckbox.module.scss';

interface FavoritesCheckboxProps {
  isChecked: boolean;
  toggleChecked: () => void;
}

export const FavoritesCheckbox: FC<FavoritesCheckboxProps> = ({
  isChecked,
  toggleChecked,
}) => {
  return (
    <label className={s.container}>
      <input
        type="checkbox"
        name="Favorite"
        checked={isChecked}
        onChange={toggleChecked}
      />
      <div className={s.checkmark}>
        <Image
          className={s.image}
          alt="add to favorites"
          width={24}
          height={24}
          src={isChecked ? favoritesCheckedIcon : favoritesIcon}
        ></Image>
      </div>
    </label>
  );
};
