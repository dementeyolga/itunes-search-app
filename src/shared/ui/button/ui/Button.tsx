import { FC } from 'react';
import Image from 'next/image';
import s from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  primary?: true;
  img?: string;
  children?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  img,
  children,
  type,
  primary,
  className,
  onClick,
}) => {
  return (
    <button
      type={type || 'button'}
      className={clsx(s.button, primary && s.primary, className)}
      onClick={onClick}
    >
      {img && <Image className={s.img} src={img} alt={children || ''} />}
      {children}
    </button>
  );
};
