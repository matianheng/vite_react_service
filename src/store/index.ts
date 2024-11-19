import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 使用 LocalStorage 存储
import { Provider } from 'react-redux';

// 初始状态
const initialState = {
  count: 0,
  user: null
};

// 定义 Reducer
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// 配置持久化
const persistConfig = {
  key: 'root',
  storage,
};

// 使用 persistReducer 封装 rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建 Redux store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// 提供 Redux store
export { store, persistor };
