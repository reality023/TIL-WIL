import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsLeftRightToLine, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from "../redux/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

const Register = () => {
  const navigate = useNavigate();
  const loginEmail = useRef(null);
  const loginPassword = useRef(null);
  const loginPasswordChk = useRef(null);
  const loginNickName = useRef(null);

  // google god
  const isEmail = (asValue) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  const isPassword = (asValue) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/; //  6 ~ 10자 영문, 숫자 조합
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  const signUp = async (e) => {
    e.preventDefault();

    if (!isEmail(loginEmail.current.value)) { // 이메일 형식 체크
      alert("유효한 이메일 형식이 아닙니다");
      return;
    }

    if (!isPassword(loginPassword.current.value)) {
      alert("유효한 비밀번호 형식이 아닙니다. 6 ~ 10자리의 영문, 숫자 조합으로 생성해주세요.");
      return;
    }

    if (loginPassword.current.value !== loginPasswordChk.current.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    await createUserWithEmailAndPassword(auth, loginEmail.current.value, loginPassword.current.value);
    await addDoc(collection(db, "user"), {
      email: loginEmail.current.value,
      name: loginNickName.current.value,
      date: Date.now(),
    });

    alert("회원가입 완료");

    navigate("/login");
  }

  return (
    <Container>
      <Box>
        <Header>
          <h1><Link to="/">MAGAZINE</Link></h1>
        </Header>
        <Content>
          <Nav>
            <Link to="/login">
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
              <span>LOGIN</span>
            </Link>
          </Nav>
          <h2>회원가입</h2>
          <Form onSubmit={signUp}>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input id="email" type="text" placeholder="이메일을 입력해 주세요" ref={loginEmail} autoComplete="username" required/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
              <input id="password" type="password" placeholder="비밀번호를 입력해 주세요" ref={loginPassword} autoComplete="new-password"required/>
            </div>
            <div>
              <label htmlFor="passwordChk">PASSWORD</label>
              <input id="passwordChk" type="password" placeholder="비밀번호를 다시 입력해 주세요" ref={loginPasswordChk} autoComplete="new-password"required/>
            </div>
            <div>
              <label htmlFor="nickname">NickName</label>
              <input id="nickname" type="text" placeholder="닉네임을 입력해 주세요" ref={loginNickName} required/>
            </div>
            <button>SIGN UP</button>
          </Form>
        </Content>
      </Box>
    </Container>
  );
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
  background-color: #ab4179;
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

const Nav = styled.nav`
  position: absolute;
  top: 20px;
  a {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color .3s;

    span {
      margin-top: 10px;
    }
  }

  a:hover {
    color: #DDDDDD;
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
    background-color: #444444;
    color: #FFFFFF;
    border: none;
    margin-top: 30px;
    font-size: 24px;
    box-shadow: 0 0 6px #bbb;
    border-radius: 5px;
    cursor: pointer;
    transition: background .3s, color .3s;
  }

  button:hover {
    background-color: #DDD;
    color: #444;
  }
`;

export default Register;