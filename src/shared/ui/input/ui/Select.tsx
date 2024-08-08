import { ChangeEvent, FC, MutableRefObject } from 'react';
import inputStyle from './Input.module.scss';
import s from './Select.module.scss';
import clsx from 'clsx';

interface SelectProps {
  name: string;
  options: string[];
  reference?: MutableRefObject<HTMLSelectElement | null>;
  onChange?: ({ currentTarget }: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectProps> = ({
  name,
  options,
  reference,
  onChange,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{name}</div>
      <select
        className={clsx(inputStyle.input, s.select)}
        name={name}
        ref={reference}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
