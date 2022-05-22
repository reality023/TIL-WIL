# 기본적인 사용법

```const 컴포넌트명 = styled.태그명`스타일`;```

```jsx
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
> 
> <img width="215" alt="스크린샷 2022-05-10 오전 8 25 42" src="https://user-images.githubusercontent.com/87969561/167514384-885f29f9-aaf1-4da6-9136-ac24646bd8fb.png">