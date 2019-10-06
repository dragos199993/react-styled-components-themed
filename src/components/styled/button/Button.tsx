import React from 'react';
import { IButtonSkeletonProps } from '../../../interfaces/styled/button/IButton';

export const ButtonSkeleton = (props: IButtonSkeletonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
