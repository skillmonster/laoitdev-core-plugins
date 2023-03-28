import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { unstable_batchedUpdates } from 'react-dom';
import rootSagas from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    batch: unstable_batchedUpdates,
  });
const store = configureStore({
  reducer: { router: routerReducer, ...rootReducer },
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.DEV) {
      return getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
      })
        .prepend(sagaMiddleware, routerMiddleware)
        .concat(
          createLogger({
            collapsed: true,
            colors: {
              action: () => '#00bcd4',
              error: () => '#ff0000',
              nextState: () => '#4caf50',
              prevState: () => '#4caf50',
              title: () => '#00bcd4',
            },
          })
        );
    }
    return getDefaultMiddleware({ thunk: false }).prepend(
      sagaMiddleware,
      routerMiddleware
    );
  },
  devTools: false,
});

sagaMiddleware.run(rootSagas);

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
