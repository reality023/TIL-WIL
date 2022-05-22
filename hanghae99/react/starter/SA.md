# <span style="color: #FFAA88;">React 입문주차 S.A.</span>

## JavaScript의 자료형과 JavaScript만의 특성은 무엇일까?
### 동적(dynamic/weak type) 타입 언어
- 어느 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당이 가능.

정적 타입언어에는 대표적으로 C, JAVA가 있으며, 동적 타입언어에는 JavaScript와 Python이 있다.
이 정적, 동적이라는 것은 유동적으로 타입을 변화시킬 수 있다는 뜻인데 예를 들어 JavaScript와 Java를 비교해보도록 하겠다.

> JavaScript
```js
let a = 0; // 숫자
let b = "hello"; // 문자
a = "문자로 교체"; // 문자
```

> Java
```c++
int a = 0; // 숫자
char b = 'A'; // 문자
String c = "문자"; // 문자열
a = "문자로 교체"; // Error
```
이 두개의 변수 선언 코드만 비교해도 다른 점을 볼 수 있을 것이다.
자바는 모든 변수 선언에 각 값의 타입을 지정해줘야 하고, 자바스크립트는 그냥 사용자 마음대로 값을 할당할 수 있다.


<br/>

### 데이터 타입
자바스크립트는 7개의 데이터 타입을 제공한다

- 숫자 : number
- 문자열 : string
- 불리언 : boolean
- undefined
- null
- 심벌 : symbol
- 객체

<br/>

### JavaScript의 형변환
- 문자열로 바꾸기
```js
String(1); // -> "1"
(1).toString(); // -> "1"
1 + ''; // -> "1"
```

- 숫자 타입으로 바꾸기
```js
Number('1') // -> 1
parseInt('1') // -> 1
+'1' // -> 1
'-1'*1 // -1
true * 1 // -> 1
```

- 불리언 타입으로 바꾸기
```js
Boolean(1); // -> true
!!'x'; // -> true
!!'false'; // -> true
!!0; // -> false
!!1; // -> true
```
위의 많은 예시에서 볼 수 있듯이, JavaScript는 정말 다양한 상황에서 여러 방법으로 형변환이 가능하다.


<br/>

### == 과 === 의 차이
- 값이 같은지(==), 데이터 타입까지 같은지(===)
  
  
<br/>

### 느슨한 타입의 동적 언어의 문제점은 무엇과 보완할 방법
잘못된 값을 넣었을 때 런타임 이전에 문제를 찾기 어렵다
- 보완할 방법 : 가능한 한 변수에 여러 타입의 값을 번갈아 쓰지 않는 등의 규칙을 만들어 변수를 작성한다
- 더 좋은 방법 : 타입 스크립트를 쓴다



<br/>

### undefined와 null의 차이
- undefined는 변수를 선언하면 자동으로 할당된다.
- null은 사용자가 직접 할당해야 함.
  
<br/>

## JavaScript 객체와 불변성이란?

### 기본형 데이터와 참조형 데이터
기본형 데이터는 값을 그대로 할당하고, 참조형 데이터는 값이 저장된 주소값을 할당한다.

<br/>

### JavaScript 형변환
- 묵시적 형변환
  - 자동변환
  - ```1 + ''; // "1"```

- 명시적 형변환
  - 수동변환
  - ```String(1); // "1"```

- 불변 객체를 만드는 방법
  - const
  - Object.freeze()
  - const + Object.freeze()


<br/>

### 얕은 복사와 깊은 복사
- 얕은 복사 : 데이터만 복사하는거
- 깊은 복사 : 주소값을 복사하는거 (배열, 객체 등)

<br/>

## 호이스팅과 TDZ는 무엇일까?

### 스코프
- 어떤 변수 혹은 함수를 참조 할 수 있는 범위
- 전역 스코프, 지역 스코프로 나뉜다.
  - 전역 스코프 : 코드의 어느 곳에서든 참조할 수 있는 범위
  - 지역 스코프 : 코드 블럭 혹은 함수 내에서의 범위

<br/>

### 호이스팅
- 인터프리터가 런타임 이전에 미리 코드를 스캔한 뒤, 변수들을 미리 메모리에 할당해 놓는 것

<br/>

### TDZ (Temporal Dead Zone)
- 변수, 함수 등을 선언하면 호이스팅에 의해 메모리에 미리 할당이 되는데 선언문 이전에 변수, 함수를 사용할 수 있는 걸 막기 위한 영역이다.
- const, let, class 등이 TDZ의 영향을 받으며, var, function, import 등이 TDZ의 영향을 받지 않는다.

<br/>

### 실행 컨텍스트와 콜 스택
- 실행 컨텍스트 : 코드를 실행하기 위해 필요한 환경 / 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
- 콜스택 : 자바스크립트가 함수 호출을 기록하기 위해 사용하는 우물 형태의 데이터 구조

<br/>

### 스코프 체인
- 해당 코드의 유효 범위 안에 있는 변수를 정의하는 객체의 체인

<br/>

## 실습과제
- 콘솔에 찍힐 b 값을 예상해보고, 어디에서 선언된 “b”가 몇번째 라인에서 호출한 console.log에 찍혔는지, 왜 그런지 설명해보세요.
- 주석을 풀어보고 오류가 난다면 왜 오류가 나는 지 설명하고 오류를 수정해보세요.
```js
let b = 1; // 전역 변수 b에 1 할당

function hi () {
    const a = 1; // hi함수의 지역변수 a에 1 할당
    let b = 100; // hi함수의 지역변수 b에 100 할당

    b++; // 지역변수 b에  b+= 1;
    console.log(a,b); // 지역변수 a, b 출력 => 1, 101
}

// let a = 0; // 이 코드를 추가해주면 아래 a변수의 오류가 없어짐
// console.log(a); // 전역변수 a는 없으므로 실행시 오류
console.log(b); // 전역 변수 b 출력 -> 1
hi(); // hi 함수 실행 
console.log(b); // 전역 변수 b 출력 -> 1
```



> ## 참고 자료
> 책 : <span style="color: #ff7777">모던 자바스크립트 Deep Dive</span>
> 
> [동적 언어와 정적 언어](https://sangwoo0727.github.io/javascript/JavaScript-1_1_DynamicStaticLang/)
>
> [동적 타이핑](https://velog.io/@93jm/JS-%EB%8F%99%EC%A0%81%ED%83%80%EC%9D%B4%ED%95%91Dynamic-typing)
> 
> [타입과 자료구조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
> 
> [자바스크립트의 형변환](https://medium.com/gdana/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%98%95%EB%B3%80%ED%99%98%EC%9D%80-%EB%91%90%EA%B0%80%EC%A7%80%EB%8B%A4-b46875be4a88)
> 
> [동치 연산자 차이](https://hyunseob.github.io/2015/07/30/diffrence-between-equality-and-identity-in-javascript/)
> 
> [null과 undefined](https://helloworldjavascript.net/pages/160-null-undefined.html)
> 
> [기본형과 참조형의 종류 및 차이점](https://velog.io/@jayjungzzzz/%EA%B8%B0%EB%B3%B8%ED%98%95%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%98%95%EC%9D%98-%EC%A2%85%EB%A5%98-%EB%B0%8F-%EC%B0%A8%EC%9D%B4%EC%A0%90)
> 
> [스코프와 변수선언](https://hanamon.kr/javascript-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%EB%B3%80%EC%88%98%EC%84%A0%EC%96%B8%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%B0%A8%EC%9D%B4%EC%A0%90/)
> 
> [얕은 복사와 깊은 복사](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)
> 
> [호이스팅](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)
> 
> [TDZ](https://ui.toast.com/weekly-pick/ko_20191014)
> 
> [실행 컨텍스트와 콜 스택](https://velog.io/@wonseok2877/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%94%EC%A7%84-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80-%EC%BD%9C-%EC%8A%A4%ED%83%9D#callstack)
> 
> [스코프, 스코프 체인, 클로저](https://developer-alle.tistory.com/369)
