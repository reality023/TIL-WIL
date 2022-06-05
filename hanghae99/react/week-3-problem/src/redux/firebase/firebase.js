//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyAy9YsJuSdZUO7sVCEwgJ2AQHwHCgAN7-g",
  authDomain: "hanghae-week-3.firebaseapp.com",
  projectId: "hanghae-week-3",
  storageBucket: "hanghae-week-3.appspot.com",
  messagingSenderId: "755842239692",
  appId: "1:755842239692:web:726c32079d6713caab8669",
  measurementId: "G-NJPMC0SLVS"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db, auth, storage };