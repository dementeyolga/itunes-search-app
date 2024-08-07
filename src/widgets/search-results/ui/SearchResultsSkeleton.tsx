import { ResultCard } from '@/features/result-card';
import s from './SearchResults.module.scss';
import { CardSkeleton } from '@/features/result-card/ui/CardSkeleton';

export const SearchResultsSkeleton = () => {
  return (
    <div className={s.list}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
