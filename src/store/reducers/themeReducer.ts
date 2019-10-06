import { AnyAction } from 'redux';
import { SET_THEME } from '../actions/actionTypes';
import { IThemeDefaultState } from '../IStore';

const storedTheme = localStorage.getItem('theme');
let parsedTheme: IThemeDefaultState = {
  theme: {
    name: 'light',
    colors: {
      primary: '#C43F4B',
      secondary: '#fff',
    },
    font: 'Roboto'
  },
};
if (storedTheme) {
  parsedTheme = {
    theme: JSON.parse(storedTheme),
  };
}

export const themeDefaultState: IThemeDefaultState = parsedTheme;

export default (state: IThemeDefaultState = themeDefaultState, action: AnyAction) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem('theme', JSON.stringify(action.payload));
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
