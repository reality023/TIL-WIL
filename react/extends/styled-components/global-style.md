# 전체에 적용되는 스타일 사용하기

Reset CSS와 같이 모든 컴포넌트에 적용해야 할 스타일이 있을 경우 craeteGlobalStyle을 사용한다.

```jsx
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
      <>
        <GlobalStyle />
        <Router />
      </>
  );
}

const GlobalStyle = createGlobalStyle`
body, button, input {
  font-family: ${props => props.theme.fontFamily.default}, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default App;
```

