import { ReactNode } from 'react';

export interface IButtonSkeletonProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}
