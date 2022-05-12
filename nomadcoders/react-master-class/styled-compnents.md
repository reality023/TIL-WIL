# STYLED COMPONENTS

## styled components
styled component는 리액트에서 기존의 CSS 보다 더 쉽게 스타일을 작성할 수 있게 해줍니다.

## 기본 사용법

### styled components 설치
```SHELL
$ npm install styled-components
```

### 사용법
```JAVASCRIPT
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: #666;
`;

function App() {
  return (
    <Box />
  );
}

export default App;
```
> **실행화면**
<img width="215" alt="스크린샷 2022-05-10 오전 8 25 42" src="https://user-images.githubusercontent.com/87969561/167514384-885f29f9-aaf1-4da6-9136-ac24646bd8fb.png">

<br/>

## 인자 전달해서 사용하기

```JAVASCRIPT
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}

export default App;
```
> **실행화면**
<img width="216" alt="스크린샷 2022-05-10 오전 8 39 03" src="https://user-images.githubusercontent.com/87969561/167515413-0e2be447-0150-4225-8cba-00826a16c6f7.png">

<br/>

## 스타일 상속받아 사용하기

```JAVASCRIPT
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Box 컴포넌트 스타일 상속
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
```
> **실행화면**
<img width="208" alt="스크린샷 2022-05-10 오전 8 43 43" src="https://user-images.githubusercontent.com/87969561/167515793-5dc09bf0-ad65-4cc6-90c9-15dc21589875.png">

<br/>

## 태그명 바꿔 사용하기

아래는 styled-components에서 div 태그로 만들어진 Father 컴포넌트를 as 속성을 사용해 header 태그로 변경해 사용하는 코드이다.

```JAVASCRIPT
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

function App() {
  return (
    <Father as="header">
    </Father>
  );
}

export default App;
```

> **실행화면**
<img width="354" alt="스크린샷 2022-05-10 오후 1 18 59" src="https://user-images.githubusercontent.com/87969561/167541779-98ee83f0-172d-4445-aee8-6c5cba343fae.png">

<br/>

## 태그 기본 속성 적용하기
아래 코드는 컴포넌트 사용시에 required를 넣지 않고 styled-components를 통해 기본 속성으로 required를 적용한 코드이다.
```JAVASCRIPT
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input type="text" />
      <Input type="text" />
      <Input type="text" />
      <Input type="text" />
      <Input type="text" />
    </Father>
  );
}

export default App;
```
**<실행화면>**
> <br/>
> <img width="487" alt="스크린샷 2022-05-10 오후 1 24 34" src="https://user-images.githubusercontent.com/87969561/167542364-ab236184-093f-4847-8aed-2984e245d3f7.png"><br/>
> 

<br/>


## CSS 애니메이션 사용하기

```javascript
import  styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <span>😃</span>
      </Box>
    </Wrapper>
  );
}
```


## SCSS 처럼 사용하기
```javascript
import  styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <span>😃</span>
      </Box>
    </Wrapper>
  );
}
```

## 컴포넌트 선택자
```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;


const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji}:hover { // 컴포넌트 선택자를 사용해 :hover css 사용
    font-size: 96px;
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <Emoji as="p">😃</Emoji>
      </Box>
      <Emoji>😕</Emoji>
    </Wrapper>
  );
}

export default App;
```

## 테마 기능

- /src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}> // 테마 선택
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

- /src/App.js
```javascript
import  styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```