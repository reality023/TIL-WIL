import { collection, getDocs, query, where } from "firebase/firestore";
import { loadAccount } from "../reducer/account";
import { db } from "./firebase";

export const loadFBAccount = (email) => {
  return async function (dispatch) {
    const q = query(collection(db, "user"), where("email", "==", email));
    const result = await getDocs(q);

    const account = {};
    result.forEach((doc) => {
      account.id = doc.id;
      account.data = doc.data();
    });

    dispatch(loadAccount(account));
  }
}
