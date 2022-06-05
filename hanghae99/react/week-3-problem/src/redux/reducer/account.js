const LOAD = 'account/LOAD'
const UPDATE = 'account/UPDATE';

const initialState = {}

export function loadAccount(account) {
  return {type: LOAD, account}
}

export function updateAccount(isLogin) {
  return {type: UPDATE, isLogin}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        isLogin: state.isLogin,
        docId: action.account.id,
        email: action.account.data.email,
        name: action.account.data.name,
        id: action.account.data.id,
      }
    }

    case UPDATE: {
      const newState = {...state, isLogin: action.isLogin};
      return newState;
    }

    default: return state;
  }
}