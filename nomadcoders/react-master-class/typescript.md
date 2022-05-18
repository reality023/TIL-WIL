# 타입스크립트
- 타입 스크립트는 기본적으로 Javascript와 동일한 문법을 사용하지만, 다른 점은 '컴파일'이 있다는 점과 이 '컴파일'시에 '타입'을 검사한다는 점이다. 이러한 타입 검사는 개발자들의 실수를 줄여주므로 개발에 아주 효과적이고, 실무에서는 타입 스크립트를 절대 배제할 수 없다고 한다.

## 타입 스크립트 리액트 앱
참고 링크 : https://create-react-app.dev/docs/adding-typescript

- 새로 생성하기
```shell
$ npx create-react-app my-app --template typescript
```

- 기존 리액트 앱에 타입 스크립트 설치
```shell
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

> **중요** 타입스크립트는 기본적으로 .tsx 확장자를 사용하므로 .js 파일을 .tsx로 수정해준다

<br/>

## styled-components 타입스크립트버전
- javascript 모듈은 기본적으로 타입스크립트가 이해하지 못하는데, typedefinition을 통해 타입 스크립트가 이해할 수 있게 해줄 수 있다.
- 물론 우리는 이미 만들어진 definition을 사용하면 된다.

참고 링크 : https://github.com/DefinitelyTyped/DefinitelyTyped

```shell
$ npm i --save-dev @types/styled-components
```

## interface

- 컴포넌트에 들어갈 속성을 정의할 수 있다.

<br/>

**/src/App.tsx**
```js
import  styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

<br/>

**/src/Circle.tsx**
```js
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}: CircleProps) {
    return (
        <Container bgColor={bgColor}></Container>
    )
}

export default Circle;
```

## Optional Props


## State


## Forms


## Themes

