import s from './ResultCard.module.scss';
import skeletonStyle from './CardSkeleton.module.scss';
import clsx from 'clsx';

export const CardSkeleton = () => {
  return (
    <div className={clsx(s.card, skeletonStyle.card)}>
      <div className={skeletonStyle.glimmer}></div>
      <div className={clsx(s.info, skeletonStyle.info)}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className={clsx(s.imageWrapper, skeletonStyle.imageWrapper)}>
        <div className={s.image} />
      </div>
    </div>
  );
};
