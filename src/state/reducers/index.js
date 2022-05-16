// we need to combine all the reducers here.

import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
    account: accountReducer
})

export default reducers;