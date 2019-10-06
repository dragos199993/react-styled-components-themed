import { createStore, compose } from 'redux';

import reducers from './reducers';

export default createStore(
  reducers,
  compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);
