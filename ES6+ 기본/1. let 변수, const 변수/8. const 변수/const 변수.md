# const 변수

**값을 바꿀 수 없는 변수를 선언하는 것**이 가장 큰 특징입니다.

    구문: name1 [= value1][, name2 [= value2]]
    name1에 변수 이름 작성하고 식별자로 사용합니다.
    value1, value2에 초깃값 작성, 반드시 값을 작성 해야 합니다. 변수 선언만 할 수 없습니다.
    표현식 작성이 가능하며 평가 결과를 값으로 사용합니다.

```js
console.log("[코드1] const 변수");
const sports = "축구";
try {
  sports = "농구";
} catch (e) {
  console.log("const 할당 불가"); // const 할당 불가
}
```

try 블록도 별도의 스코프이지만 const, let을 작성하지 않았으므로 sports 변수에 값을 할당하게 됩니다. sports가 const 변수이고 값을 바꿀 수 없으니까 에러가 발생합니다.

> ### JS에서 상수는 대문자를 사용하는 것이 관례입니다.

```js
console.log("[코드2] 상수는 대문자 사용");
const bonus = 100;
const POINT = 200;
```

const가 상수이지만 값을 바꿀 수 없는 것은 아닙니다.

이것이 오브젝트이거나 배열일 때는 값을 바꿀 수 있습니다.

> ### var 변수, let 변수, const 변수를 놓고 어떤 것을 사용할 지 고민한다면, 우선, var이 아닌 let을 사용하고, let이 아닌 const 사용을 먼저 검토하십시오. const > let > var

### const 변수는 전체를 바꿀 수 없지만 Object의 프로퍼티 값을 바꿀 수 있습니다.

```js
console.log("[코드3] Object의 프로퍼티 값");
const book = { title: "책" };
try {
  book = { title: "음악 책" };
} catch (e) {
  console.log("const 전체 할당 불가"); // const 전체 할당 불가
}
book.title = "미술 책";
console.log(book.title); // 미술 책
```

전체를 바꾸지는 못하지만 프로퍼티 값은 바꿀 수 있습니다.

배열도 마찬가지 입니다.

```js
console.log("[코드4] 배열의 엘리먼트 값");
const book2 = ["책"];
try {
  book2 = ["음악 책"];
} catch (e) {
  console.log("const 전체 할당 불가"); // const 전체 할당 불가
}
book2[0] = "미술 책";
console.log(book[0]); // 미술 책
```

배열 전체를 book에 할당하면 에러가 나지만, book에 0번 인덱스에 문자열을 할당하면 할당이 됩니다.
