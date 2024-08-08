'use client';

import Link from 'next/link';
import clsx from 'clsx';
import s from './Header.module.scss';
import { Button } from '@/shared/ui/button';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={clsx(s.header, 'wrapper')}>
      <Link href="/" className={s.logo}>
        iTunes Search
      </Link>
      <Button className={s.button}>
        {pathname === '/' ? (
          <Link href="/favorites">Favorites</Link>
        ) : (
          <Link href="/">Main page</Link>
        )}
      </Button>
    </header>
  );
};
