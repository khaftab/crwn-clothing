import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(logger))

export default store