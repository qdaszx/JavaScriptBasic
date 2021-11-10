# Symbol.toStringTag 프로퍼티

## toStringTag

toStringTag는 Object.prototype.toString() 메소드의 확장입니다.

### toString() 메소드로 인스턴스 타입을 구하면 [object Object] 형태로 반환합니다.

```js
console.log("[코드1] 인스턴스 타입");
const Book = function () {};
const obj = new Book();
console.log(obj.toString()); // [object Object]

console.log({}.toString()); // [object Object]
```

**문제는 인스턴스 타입을 명확하게 구분할 수 없습니다.**

그런데 Symbol.toStringTag로 구분해서 사용할 수 있습니다.

[object Object]에서 대문자 Object에 표시될 문자열을 작성하는 것 입니다.

예를 들어 "ABC"로 지정하면 [object "ABC"]로 반환합니다.

Symbol.toStringTag를 사용해서 오버라이딩 시켜서 사용하면 두번째 Object를 구분할 수 있다는 것 입니다.

이것은 prototype에 연결하여 작성합니다.

## prototype에 연결하여 작성

```js
console.log("prototype에 연결하여 작성");
const Sports = function () {};
const obj2 = new Sports();
console.log(obj2.toString()); // [object Object]

Sports.prototype[Symbol.toStringTag] = "농구";

console.log(obj2.toString()); // [object 농구]
```

    1. 첫 번째의 obj.toString()을 실행하면 인스턴스 타입을 반환하며 [object Object]가 반환됩니다.
      function으로 만들었는데 Object가 반환됩니다.
    2. Sports.prototype[Symbol.toStringTag] = "농구";
      prototype에 Symbol.toStringTag를 연결하고 [object Object]에서 두 번째의 Object에 표시될 문자를 "농구"로 작성했습니다.
      표시될 문자를 임의로 작성할 수 있습니다.
      function 마다 지정할 수 있으므로 자세하게 구분하여 작성할 수 있습니다.
    3. 두 번째의 obj.toString()을 호출하면 [object 농구]를 출력합니다.
      즉, Symbol.toStringTag에 작성한 문자가 출력됩니다.

## 정리

Symbol.toStringTag로 @toStringTag를 오버라이드 해서 코드에서 필요로 하는 형태로 인스턴스 타입을 구분할 수 있습니다.
