import { createStore, applyMiddleware } from 'redux';
import reduers from './reducers/index';
import thunk from 'redux-thunk';

// {} is the initial state.
export const store = createStore(
    reduers,
    {},
    applyMiddleware(thunk)
);
