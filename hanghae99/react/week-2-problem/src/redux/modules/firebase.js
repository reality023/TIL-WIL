import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { readWords, updateWord, deleteWord } from "./word";

import { db } from "../../firebase/firebase";

export const listWord = () => {
  return async function (dispatch) {
    const query = await getDocs(collection(db, "week2"));
    const bucket_list = query.docs.map(doc => ({id: doc.id, ...doc.data()}));

    dispatch(readWords(bucket_list));
  }
}

export const addWord = (data) => {
  return async function (dispatch) {
    const query = await addDoc(collection(db, 'week2'), data);
    // dispatch(createWord({
    //   id: query.id,
    //   ...data
    // }));
  }
}

// create 하면 이미 state에 값 들어가 있음

export const removeWord = (id) => {
  return async function (dispatch, getState) {
    await deleteDoc(doc(db, 'week2', id));
    dispatch(deleteWord(id));
  }
}

export const modifyWord = (id, data) => {
  return async function (dispatch, getState) {
    await updateDoc(doc(db, 'week2', id), data);
    dispatch(updateWord(id));
  }
}

// getState() 알아보기