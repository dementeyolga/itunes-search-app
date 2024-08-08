import { FavoriteCards } from '@/widgets/favorite-cards';

const FavoritesPage = () => {
  return (
    <main className="wrapper">
      <div className="page">
        <h2>Favorites</h2>
        <FavoriteCards />
      </div>
    </main>
  );
};

export default FavoritesPage;
