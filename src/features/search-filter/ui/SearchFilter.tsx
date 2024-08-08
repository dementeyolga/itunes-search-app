'use client';

import { formatMediaType } from '@/shared/lib/formatting';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { setCurrentCategory } from '@/shared/store/slices/searchResultsSlice';
import { Select } from '@/shared/ui/input';
import { ChangeEvent } from 'react';

export const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.searchResults);

  const types = Array.from(
    new Set(results.data.map((result) => formatMediaType(result.kind)))
  );

  types.unshift('All categories');

  const onChange = ({ currentTarget }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrentCategory(currentTarget.value));
  };

  if (results.data?.length && results.loading === 'succeeded') {
    return <Select name="Category" options={types} onChange={onChange} />;
  }

  return null;
};
