'use client';

import { TextInput } from '@/shared/ui/input';
import { SearchButton } from '@entities/search-button/ui/SearchButton';
import s from './SearchBar.module.scss';
import { FC, FormEvent } from 'react';
import { useAppDispatch } from '@/shared/model/hooks';
import { fetchResultsByNameAndLimit } from '@/shared/store/slices/searchResultsSlice';

export const SearchBar = ({}) => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    dispatch(
      fetchResultsByNameAndLimit({
        term: typeof data.term === 'string' ? data.term : '',
        limit: 10,
      })
    );
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <TextInput
        name="term"
        placeholder="Search for music, films, etc."
        className={s.input}
      />
      <SearchButton className={s.button} />
    </form>
  );
};
