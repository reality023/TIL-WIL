# 태그명 바꿔 사용하기

아래는 styled-components에서 div 태그로 만들어진 Father 컴포넌트를 as 속성을 사용해 header 태그로 변경해 사용하는 코드이다.

```jsx
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
> 
> <img width="354" alt="스크린샷 2022-05-10 오후 1 18 59" src="https://user-images.githubusercontent.com/87969561/167541779-98ee83f0-172d-4445-aee8-6c5cba343fae.png">