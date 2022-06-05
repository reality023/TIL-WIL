# Ducks 구조로 Redux 구현하기

## 소스코드

<br/>

< redux/modules/bucket.js >
```jsx
// 액션 타입을 정해줍니다.
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const REMOVE = 'bucket/REMOVE';


// 초기 상태값을 만들어줍니다.
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// 액션 생성 함수예요.
// 액션을 만들어줄 함수죠!
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const updateBucket = (id) {
    return {type: UPDATE, id}
};

export const removeBucket = (id) {
    return {type: REMOVE, id}
};

// 리듀서예요.
// 실질적으로 store에 들어가 있는 데이터를 변경하는 곳이죠!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      return state;
    }
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/UPDATE": {
        const bucket = state.list.map((v) => {
            if (action.id === v.id) {
                return {...v, completed: true};
            } else {
                return v;
            }
        });
        return {list: bucket, is_loaded: true};
    }
    case "bucket/REMOVE": {
        const bucket = state.list.filter((v) => v.id !== action.id);
        return {list : bucket, is_loaded: true};
    }
    default:
      return state;
  }
}
```

<br/>

< redux/configureStore.js >
```jsx
//configStore.js
import { createStore, combineReducers } from "redux";
import bucket from "./modules/bucket";

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ bucket });

// 스토어를 만듭니다.
const store = createStore(rootReducer);

export default store;
```

<br/>

< index.js >
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// 우리의 버킷리스트에 리덕스를 주입해줄 프로바이더를 불러옵니다!
import { Provider } from "react-redux";
// 연결할 스토어도 가지고 와요.
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```