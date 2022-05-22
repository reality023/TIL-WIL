# SCSS 활용하기

```javascript
import  styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <span>😃</span>
      </Box>
    </Wrapper>
  );
}
```