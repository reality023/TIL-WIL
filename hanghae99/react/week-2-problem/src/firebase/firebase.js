//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyCn4RWqZPq8jK98KEqpyRgXvmUX9tuQ-3w",
    authDomain: "sparta-database-e1df6.firebaseapp.com",
    projectId: "sparta-database-e1df6",
    storageBucket: "sparta-database-e1df6.appspot.com",
    messagingSenderId: "41957578374",
    appId: "1:41957578374:web:46c06cd86fdf70a4a26307",
    measurementId: "G-S1TJXSRZJQ"
};

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };