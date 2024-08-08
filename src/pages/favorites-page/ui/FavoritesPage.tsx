import { FavoriteCards } from '@/widgets/favorite-cards';
import Link from 'next/link';

export const FavoritesPage = () => {
  return (
    <main className="page">
      Favorites page
      <Link href="/">home</Link>
      <FavoriteCards />
    </main>
  );
};
