# CSS, SCSS 파일 포함하기

아래 코드는 globalStyle에 reset css 코드를 포함하는 코드이다.

```jsx
import { createGlobalStyle } from 'styled-components';
import Router from './Router';
import common from './styles/common.scss';

function App() {
  const theme = defaultTheme;
  return (
      <>
        <GlobalStyle />
        <Router />
      </>
  );
}

const GlobalStyle = createGlobalStyle`
${common}; // Reset CSS
`;

export default App;
```