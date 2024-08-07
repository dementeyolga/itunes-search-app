import Link from 'next/link';
import { SearchBar } from '@widgets/search-bar/';
import { SearchResults } from '@widgets/search-results';
import { Suspense } from 'react';
import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={s.page}>
      Home page
      <Link href="/favorites">Favorites</Link>
      <SearchBar />
      <SearchResults />
    </main>
  );
};
