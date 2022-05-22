# 컴포넌트 선택자
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