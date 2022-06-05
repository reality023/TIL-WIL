import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from "../redux/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadFBAccount } from '../redux/firebase/fbAccount';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();

    if (active) {
      try {
        const user = await signInWithEmailAndPassword(auth, loginEmail.current.value, loginPassword.current.value);
        dispatch(loadFBAccount(user.user.email));
        navigate("/");
      } catch (e) {
        alert("로그인 실패");
      }
    } else {
      alert("이메일과 비밀번호를 입력해 주세요");
    }

  }

  const chkLength = () => {
    if (loginEmail.current.value.length > 0 && loginPassword.current.value.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <Container>
      <Box>
        <Header>
          <h1><Link to="/">MAGAZINE</Link></h1>
        </Header>
        <Content>
          <h2>로그인</h2>
          <Form onSubmit={signIn} active={active}>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input id="email" type="text" placeholder="이메일을 입력해 주세요" ref={loginEmail} autoComplete="username" onChange={chkLength} required/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
              <input id="password" type="password" placeholder="비밀번호를 입력해 주세요" ref={loginPassword} autoComplete="current-password" onChange={chkLength} required/>
            </div>
            <button>SIGN IN</button>
          </Form>
          <Option>
            <Subject>Or Sign Up Using</Subject>
            <Button>
              <Link to="/register">SIGN UP</Link>
            </Button>
          </Option>
        </Content>
      </Box>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  background-color: #3188B9;
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;

  h1 {
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    font-size: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: '${props => props.theme.fontFamily.mplus}';
  }
`;

const Content = styled.div`
  background-color: #FDFDFD;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 64px;
    font-weight: bold;
  }
`;

const Form = styled.form`
  width: 400px;
  margin-top: 50px;

  div {

    label {
      display: none;
    }

    input {
      display: block;
      width: 100%;
      margin-top: 15px;
      font-size: 16px;
      padding: 20px;
      border: none;
      box-shadow: 0 0 6px #bbb;
      border-radius: 5px;
      transition: box-shadow .3s;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 6px #666;
    }
  }

  div + div {
    margin-top: 30px;
  }

  button {
    width: 100%;
    height: 120px;
    background-color: #999999;
    color: #FFFFFF;
    border: none;
    margin-top: 30px;
    font-size: 24px;
    box-shadow: 0 0 6px #bbb;
    border-radius: 5px;
    cursor: pointer;
    transition: background .3s, color .3s;
  }

  ${props => props.active && css`
    button {
      background-color: #444444;
      color: #FFFFFF;
    }

    button:hover {
      background-color: #DDD;
      color: #444;
    }
  `}

`;

const Option = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subject = styled.div`
  font-size: 12px;
  color: #444444;
`;

const Button = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #444444;
  transition: color .3s;

  &:hover {
    color: #DDDDDD;
  }
`;

export default Login;