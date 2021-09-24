import {createStore , applyMiddleware , combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {coinReducer} from './Reducers/coin.reducer'
import {newsReducer} from './Reducers/news.reducer'
import {detailsReducer} from './Reducers/details.reducer'
import {exchageReducer} from './Reducers/exchange.reducer'
const rootReducer = combineReducers({
    coinReducer,newsReducer,detailsReducer,exchageReducer
})

const store = createStore(rootReducer , {} , composeWithDevTools(applyMiddleware(thunk)))

export default store