import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";

import { auth } from "../redux/firebase/firebase";
import { updateAccount } from "../redux/reducer/account";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.account).isLogin;
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(updateAccount(false, ""));
      navigate("/login");
    });
  };
  const login = () => {
    navigate("/login");
  }

  return (
    <Container>
      <h1><Link to="/">MAGAZINE</Link></h1>
      <ul>
        {isLogin ? 
          <li><button onClick={logout}>LOGOUT</button></li> :
          <li><button onClick={login}>LOGIN</button></li>
        }
      </ul>
    </Container>
  ); 
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 6px #ccc;
  display: flex;
  justify-content: space-between;

  h1 {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 50px;
    font-size: 36px;
  }

  li {
    float: left;
    height: 100%;

    a {
      font-size: 16px;
      height: 100%;
      padding: 0 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      font-size: 16px;
      height: 100%;
      padding: 0 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: background-color .3s;
      &:hover {
        background-color: #ddd;
      }
    }
  }
`;

export default Header;