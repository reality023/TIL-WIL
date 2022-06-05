import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  getDoc,
  where,
} from "firebase/firestore";

import { db } from "../../redux/firebase/firebase";
import { deletePost, readPost, updatePost } from "../reducer/post";

export const getFBPost = (id) => {
  return async function (dispatch) {
    const data = await getDocs(query(collection(db, "post"), where("id", "==", Number(id))));
    const post = data.docs.map(doc => {
      return { docId: doc.id, ...doc.data() }
    });

    dispatch(readPost(post));
  }
}

export const getFBPostList = () => {
  return async function (dispatch) {
    const data = await getDocs(query(collection(db, "post"), orderBy("id", "desc")));
    const postList = data.docs.map(doc => {
      return { docId: doc.id, ...doc.data() }
    });

    dispatch(readPost(postList));
  }
}

export const addFBPost = (data) => {
  return async function (dispatch) {
    console.log(data);
    const date = new Date();
    const dayString = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, "0")}-${(date.getDate()).toString().padStart(2, "0")}`;
    const nowData = {
      id: Date.now(),
      subject: data.subject,
      description: data.description,
      image: data.image,
      type: data.type,
      authorId: data.authorId,
      authorName: data.authorName,
      date: `${dayString}`,
    }

    await addDoc(collection(db, 'post'), nowData);
  }
}

export const removeFBPost = (id) => {
  return async function (dispatch) {
    await deleteDoc(doc(db, 'post', id));
    dispatch(deletePost(id));
  }
}

export const modifyFBPost = (id, data) => {
  return async function (dispatch) {
    const nowData = {
      subject: data.subject,
      description: data.description,
      image: data.image,
      type: data.type,
    }
    await updateDoc(doc(db, 'post', id), nowData);
    dispatch(updatePost(id, nowData));
  }
}