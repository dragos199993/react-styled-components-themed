import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import { IThemeDefaultState } from '../IStore';

export interface IStore {
  themeReducer: IThemeDefaultState;
}

export default combineReducers({
  themeReducer,
});
