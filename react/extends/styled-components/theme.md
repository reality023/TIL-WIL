# 테마 기능
- 아래는 ThemeProvider 컴포넌트에서 theme 속성을 변경하면 배경색과 텍스트 색이 변하는 코드이다.

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