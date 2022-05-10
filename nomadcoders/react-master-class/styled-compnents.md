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
<img width="215" alt="스크린샷 2022-05-10 오전 8 25 42" src="https://user-images.githubusercontent.com/87969561/167514384-885f29f9-aaf1-4da6-9136-ac24646bd8fb.png">


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
<img width="216" alt="스크린샷 2022-05-10 오전 8 39 03" src="https://user-images.githubusercontent.com/87969561/167515413-0e2be447-0150-4225-8cba-00826a16c6f7.png">


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
<img width="208" alt="스크린샷 2022-05-10 오전 8 43 43" src="https://user-images.githubusercontent.com/87969561/167515793-5dc09bf0-ad65-4cc6-90c9-15dc21589875.png">