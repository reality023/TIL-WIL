# props 전달해서 사용하기

```jsx
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
> 
> <img width="216" alt="스크린샷 2022-05-10 오전 8 39 03" src="https://user-images.githubusercontent.com/87969561/167515413-0e2be447-0150-4225-8cba-00826a16c6f7.png">