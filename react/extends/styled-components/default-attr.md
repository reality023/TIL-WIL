# 태그 기본 속성 적용하기
아래 코드는 컴포넌트 사용시에 required를 넣지 않고 styled-components를 통해 기본 속성으로 required를 적용한 코드이다.

```jsx
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
    </Father>
  );
}

export default App;
```
> **<실행화면>**
>
> <img width="487" alt="스크린샷 2022-05-10 오후 1 24 34" src="https://user-images.githubusercontent.com/87969561/167542364-ab236184-093f-4847-8aed-2984e245d3f7.png"><br/>