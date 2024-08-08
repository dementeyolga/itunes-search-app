import Link from 'next/link';
import { SearchBar } from '@widgets/search-bar/';
import { SearchResults } from '@widgets/search-results';
import s from './MainPage.module.scss';
import { SearchFilter } from '@/features/search-filter';

export const MainPage = () => {
  return (
    <main className={s.page}>
      Home page
      <Link href="/favorites">Favorites</Link>
      <SearchBar />
      <SearchFilter />
      <SearchResults />
    </main>
  );
};
