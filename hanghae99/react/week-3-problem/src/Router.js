import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from "./redux/firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Main from './pages/Main';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from './NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccount } from "./redux/reducer/account";
import Write from './pages/Write';
import Post from './pages/Post';
import { loadFBAccount } from './redux/firebase/fbAccount';

function Router() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const loginCheck = async (user) => {
    if (user) {
      dispatch(updateAccount(true));
      dispatch(loadFBAccount(user.email));
    } else {
      dispatch(updateAccount(false));
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);
  
  useEffect(() => { // 로그인 체크
    if (account.isLogin !== null) {
    }
  }, [account.isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<Write />} />
        <Route path='/modify/:id' element={<Write  />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
