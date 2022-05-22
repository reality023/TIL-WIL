# Style 상속

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
> 
> <img width="208" alt="스크린샷 2022-05-10 오전 8 43 43" src="https://user-images.githubusercontent.com/87969561/167515793-5dc09bf0-ad65-4cc6-90c9-15dc21589875.png">