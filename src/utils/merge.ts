import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const clsxm = (...classes: ClassValue[]): any => {
  return twMerge(clsx(...classes));
};

export default clsxm;
