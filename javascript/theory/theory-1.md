# 변수

## 변수 호이스팅
변수의 선언시 런타임 이전에 undefined 값을 가지고 미리 메모리에 할당되는 현상.
호이스팅은 변수가 아닌 함수, 클래스에도 적용된다.

## 리터럴
사람이 이해할 수 있는 문자 또는 약속된 기호를 이용해 생성하는 표기법.
```js
var x = ""; // 문자열 리터럴
var y = 0; // 숫자 리터럴
var bool = true; // 불리언 리터럴
```

## 토큰
문법적으로 더이상 나눌 수 없는 코드의 기본요소

var a = 1;

이걸 토큰으로 나누면 var, a, =, 1 로 나눌 수 있다.

## 데이터 타입
자바스크립트는 7개의 데이터 타입을 제공한다

- 숫자 : number
- 문자열 : string
- 불리언 : boolean
- undefined
- null
- 심벌 : symbol
- 객체
  
## 템플릿 리터럴 (template literal)
ES6부터 탬플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었다.
템플릿 리터럴은 멀티라인 문자열(multi-line string), 표현식 삽입(expression interpolation), 태그드 템플릿(tagged template)등 편리한 문자열 처리를 제공한다.

```js
var x = "hello"
var y = `${x} world`; // 표현식 삽입 'hello world'

// 템플릿 리터럴 사용시
var z = `<div>
    <span>Hello</span>
</div>`;

// 따옴표 이용시
var k = "<div>" +
            "<span>Hello</span>" +
        "</div>";
```


## 동적 타이핑
C나 JAVA 같은 정적 타입 (Static/Strong type) 어느 변수를 선언할 때 변수에 할당할 수 있는 값의 종류, 즉 데이터 타입을 사전에 선언해야 한다.
하지만 자바스크립트는 정적 타입 언어와 다르게 변수를 선언할 때 타입을 선언하지 않는다.
자바 스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론[type interface])된다.

그리고 재할당에 의해 변수의 타입은 언제나 동적으로 변할 수 있다.
이러한 특징을 동적 타이핑(dynamic typing)이라 하며, 자바스크립트를 정적 타입 언어와 구별하기 위해 **동적 타입(dynamic/weak type) 언어**라고 한다.


## 동적 타입 언어
동적 타입 언어는 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있다.
이로 인해 데이터 타입에 무감각해질 정도로 편리한데, 이 편리함에는 여러 단점들이 존재하고 있다.

변수의 타입이 고정되어 있지 않고 동적으로 변하는 동적 타입 언어의 변수는 값을 확인하기 전에는 타입을 확실할 수 없다. 거기다 자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동으로 변환되기도 한다.
그래서 동적 타입 언어는 유연성(flexibility)은 높지만 신뢰성(reliability)은 떨어진다.

그래서 변수를 사용할 때 주의사항을 잘 생각해야 한다.

- 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다. 변수 값은 재할당에 의해 언제든지 변경될 수 있다. 이로 인해 동적 타입 언어인 자바스크립트는 타입을 잘못 예측해 오류가 발생할 가능성이 크다. 변수의 개수가 많으면 많을수록 오류가 발생할 확률도 높아진다. 따라서 변수의 무분별한 남발은 금물이며, 필요한 만큼 최소한으로 유지하도록 주의해야 한다.
- 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다. 변수의 유효 범위가 넓으면 넓을수록 변수로 인해 오류가 발생할 확률이 높아진다. 변수의 유효 범위에 대해서는 13장 "스코프"에서 자세히 살펴보자
- 변수보다는 상수를 사용해 값의 변경을 억제한다. 상수를 사용하는 방법에 대해서는 15.3절 "const 키워드"에서 살펴보자.
- 변수 이름은 변수의 목적이나 의미를 파악할 수 있도록 네이밍한다. 변수 이름뿐 아니라 모든 식별자(변수, 함수, 클래스 이름 등)는 존재 이유를 파악할 수 있는 적절한 이름으로 지어야 한다. 특히 식별자의 유효 범위가 넓을수록 명확한 이름을 명명하도록 노력하자. 개발자의 의도를 나타내는 명확한 네이밍은 코드를 이해하기 쉽게 만들고, 이는 협업과 생산성 향상에 도움을 준다. 다시 말하지만 변수 이름은 첫 아이 이름을 짓듯이 심사숙고해서 지어야 한다.


## 연산자

- == : 값이 같음
- === : 값과 타입이 같음
- != : 값이 다름
- !== : 값과 타입이 다름

> Object.is()
>
> ES6에서 도입된 Object.is 메서드는 더욱 정확한 비교를 해준다.

- 비교 연산자는 패스!


## 지수 연산자
ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환한다.

지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다.
**지수 연산자 사용시 주의해야 할점은, 음수를 밑으로 사용시 괄호로 묶어야 한다**

```js
var x = 2 ** 2; // 2^2 -> 4
var y = (-2) ** 2; // 2^2 -> 4
```


## 명시적 타입 변환
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


## 단축 평가
논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환되는 성질을 
**단축평가**(Short-circuit evaluation)라고 한다.

```js
var done = true;
var message = '';
if (done) message = '완료'; // 이와 같은 코드를 단축 평가를 사용할 수 있다.

message = done && '완료';
console.log(message);
```

```js
var done = false;
var message = '';

if (!done) message = '미완료' // 이와 같은 코드도 단축 평가를 사용할 수 있다.

message = done || '미완료';
console.log(message);
```

- if ... else 문은 삼항 조건 연산자로 대체할 수 있다.


## null이나 undefined 런타임 에러 막기
객체는 키(key)와 값으로 구성된 프로퍼티의 집합이다.
만약 객체를 가르키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우
객체의 프로퍼티를 참조하면 타입 에러(TypeError)가 발생한다.

이때, 단축 평가를 사용하면 에러를 발생시키지 않는다.

```js
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null

var elem = null;
var value = elem && elem.value; // null
```


## 메서드
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해서 메서드(Method)라고 부른다.
```js
var circle = {
    radius: 5, // <- 프로퍼티
    getDiameter: function () {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());
```


## 프로퍼티 접근
프로퍼티에 접근하는 방법은 두가지가 있다.
- 마침표 프로퍼티 접근 연산자(.)을 사용하는 마침표 표기법
- 대괄호 프로퍼티 접근 연산자([])를 사용하는 대괄호 표기법

```js
var person = {
    name: 'Lee'
};

console.log(person.name); // 마침표 표기법에 의한 프로퍼티 접근
console.log(person['name']); // 대괄호 표기법에 의한 프로퍼티 접근
```
