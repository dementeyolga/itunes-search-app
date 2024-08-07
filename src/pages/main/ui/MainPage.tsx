import Link from 'next/link';
import { SearchResults } from '@/src/widgets/search-results';
import { Suspense } from 'react';
import s from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={s.page}>
      Home page
      <Link href="/favorites">Favorites</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <SearchResults />
      </Suspense>
    </main>
  );
};
