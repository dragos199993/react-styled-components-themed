import { SET_THEME } from '../actionTypes';
import { ITheme } from '../../../interfaces/ITheme';

export interface IAction<T> {
  type: string;
  payload?: T;
}

export const setTheme:(theme: ITheme) => IAction<ITheme> = (theme) => {
  return {
    type: SET_THEME,
    payload: theme
  }
};
