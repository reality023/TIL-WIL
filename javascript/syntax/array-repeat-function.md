# 배열 반복 함수 정리

## forEach()

forEach문은 배열이 가진 내용을 하나씩 뱉어내면서 반복을 하는 함수이다.
```js
const array = ["nice", "to", "meet", "you"];
array.forEach((v) => {
    console.log(v);
});
```
> **실행 화면**
> ![스크린샷 2022-05-13 오후 10 14 53](https://user-images.githubusercontent.com/87969561/168291731-798a5987-23a6-4461-aea6-e3efb7a8b83d.png)

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


## map()

forEach문과 마찬가지로 배열이 가진 내용을 하나씩 뱉어내면서 반복을 하는 함수인데, 각 배열의 값을 return 한 값으로 변경해서 새 배열을 리턴해준다.
```js
const array = ["nice", "to", "meet", "you"];
console.log(array.map((v) => {
    return "i";
}));
```
> **실행 화면**
> ![스크린샷 2022-05-13 오후 10 26 06](https://user-images.githubusercontent.com/87969561/168293705-3fceaf63-454d-429c-ba21-5c706224635b.png)

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## filter()
forEach문과 마찬가지로 배열이 가진 내용을 하나씩 뱉어내면서 반복을 하는 함수인데, 리턴 값이 true냐 false냐에 따라 값이 배열에서 제외된 새 배열을 리턴해준다.

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## reduce()
값을 가공한 result 값을 리턴해준다.

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce