import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';


// const configureStore = () => {
//     const logger = createLogger();
//     const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
//     const store = createStoreWithMiddleware(reducers);
//     return store;
// }

const store = createStore(reducers)

export default store;
