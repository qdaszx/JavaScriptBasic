# 블록 스코프 유형

## function 블록

function name(){}도 블록 스코프입니다.

function 안과 밖에 같은 이름의 let 변수 선언이 가능합니다.

이것은 스코프가 다르기 때문입니다.

```js
console.log("[코드1] function 블록");
let sports = "축구";
function show() {
  let sports = "농구";
  console.log("안: ", sports);
}
show(); // 안: 농구
console.log("밖: ", sports); // 밖: 축구

console.log("[코드2] 함수 밖 변수 사용(클로저)");
let sports2 = "축구";
function show2() {
  console.log(sports2);
}
show2(); // 축구
```

function 밖의 let 변수를 function 안에서 사용할 수 있습니다(클로저).

## try-catch

try-catch도 블록 스코프입니다.

이때 블록의 기준은 try입니다.

안과 밖에 같은 이름의 let 변수를 선언 가능합니다.

```js
console.log("[코드3] try-catch");
let sports3 = "축구";
try {
  let sports3 = "농구";
  console.log("안: ", sports3); // 안: 농구
} catch (e) {}
console.log("밖: ", sports3); // 밖: 축구
```

그런데 catch에서 블록을 쓴다고 착각할 수 있습니다.

```js
console.log("[코드4] try 밖의 변수 사용");
let sports4 = "축구";
try {
  let sports4 = "농구";
  console.log("안: ", sports4); // 안: 농구
  abc = error;
} catch (e) {
  console.log("catch: ", sports4); // catch: 축구
}
console.log("밖: ", sports4); // 밖: 축구
```

예상과 달리 try 블록 밖에 있는 변수를 사용합니다.

즉, catch 문은 try 블록 안에 있는 것을 사용하지 않습니다.

## switch-case

switch도 블록 스코프입니다.

이때 case, default는 블록 스코프가 아닙니다.

```js
console.log("[코드5] switch-case");
let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
  // let sports;
  default:
    console.log(sports);
}
```
