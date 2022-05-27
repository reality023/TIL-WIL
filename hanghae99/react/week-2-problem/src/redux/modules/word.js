// bucket.js

// Actions
const LIST = 'word/LIST';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
const DELETE = 'word/DELETE';

const initialState = {
    maxCount: 0,
    list: [],
}

// Action Creators
export function readWords(words) {
    return {type: LIST, words}
}

// export function createWord(word) {
//     return {type: CREATE, word}
// }

export function updateWord(id, word) {
    return {type: UPDATE, id, word}
}

export function deleteWord(id) {
    return {type: DELETE, id}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "word/LIST": {
            return {list: action.words, maxCount: action.words.length};
        }

        // case "word/CREATE": {
        //     console.log(state.list);
        //     const word = {
        //         id: state.maxCount,
        //         ...action.word
        //     }
        //     const list = [...state.list, word];
        //     const maxCount = state.maxCount + 1;
        //     return {list, maxCount};
        // }

        case "word/UPDATE": {
            const list = state.list.map((word) => {
                    if (word.id === action.id) {
                        return {...word, ...action.word}
                    }
                    return word;
                }
            );

            return {list, maxCount: state.maxCount};
        }

        case "word/DELETE": {
            const list = state.list.filter((word) => {
                if (word.id === action.id) {
                    return false;
                }
                return true;
            });

            console.log(list);

            return {list, maxCount: state.maxCount};
        }

        default: return state;
    }
}