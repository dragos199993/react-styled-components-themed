import { ReactNode } from 'react';

export interface IButtonSkeletonProps {
  onClick: (e?: any) => void;
  className?: string;
  children: ReactNode;
}
