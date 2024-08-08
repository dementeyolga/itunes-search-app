import { Button } from '@shared/ui/button/';
import s from './SearchButton.module.scss';
import SearchIcon from '@images/search-icon.svg';
import clsx from 'clsx';

export const SearchButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={clsx(s.button, className)}
      type="submit"
      img={SearchIcon}
    />
  );
};
