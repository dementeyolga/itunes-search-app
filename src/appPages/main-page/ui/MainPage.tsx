import { SearchBar } from '@widgets/search-bar/';
import { SearchResults } from '@widgets/search-results';
import { SearchFilter } from '@/features/search-filter';

const MainPage = () => {
  return (
    <main className="wrapper">
      <div className="page">
        <h2>iTunes Search App</h2>
        <SearchBar />
        <SearchFilter />
        <SearchResults />
      </div>
    </main>
  );
};

export default MainPage;
