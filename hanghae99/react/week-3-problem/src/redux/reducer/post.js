// bucket.js

// Actions
const LIST = 'post/LIST';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

const initialState = {
    list: [],
}

// Action Creators
export function readPost(post) {
    return {type: LIST, post}
}

export function updatePost(id, post) {
    return {type: UPDATE, id, post}
}

export function deletePost(post) {
    return {type: DELETE, post}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LIST: {
            return {list: action.post};
        }

        case UPDATE: {
            const list = state.list.map(
                (post) => {
                    if (post.id === action.id) {
                        return {...post, ...action.post}
                    }
                    return post;
                }
            );

            return { list };
        }

        case DELETE: {
            const list = state.list.filter((post) => {
                if (post.id === action.id) {
                    return false;
                }
                return true;
            });

            return { list };
        }

        default: return state;
    }
}