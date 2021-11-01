# 오브젝트 복사

## assign()

| 구분     | 데이터(값)                           |
| :------- | :----------------------------------- |
| 형태     | Object.assign()                      |
| 파라미터 | 열거 가능 오브젝트                   |
|          | 열거 가능 오브젝트opt 다수 작성 가능 |
| 반환     | 첫 번째 파라미터 오브젝트            |

두 번째 파라미터의 오브젝트 프로퍼티를 첫 번째 파라미터의 오브젝트에 복사하고 첫 번째를 반환합니다.

이것은 자신이 만든 프로퍼티만 복사할 수 있습니다.

즉, 상속받은 프로퍼티는 복사할 수 없습니다.

```js
console.log("[코드1] assign()");
const sports = {
  event: "축구",
  player: 11,
};
let dup = {};

Object.assign(dup, sports);
console.log(dup); // {event: '축구', player: 11}
```

## 첫 번째 파라미터 작성

**첫 번째 파라미터는 반드시 작성해야 합니다.**

```js
console.log("[코드2] 첫 번째 파라미터는 필수");
try {
  const obj = Object.assign(null, {});
} catch (e) {
  console.log("null 작성 불가"); // null 작성 불가
}
```

    1. 첫 번째 파라미터를 작성하지 않거나 null, undefined를 작성하면 TypeError

### Number, String, Symbol, Boolean 값을 작성한 형태

```js
console.log("[코드3] Number 값 작성");
const obj3 = Object.assign(100);
console.log(obj3.valueOf()); // 100
```

    1. 첫 번째 파라미터에 Number를 작성하고 두 번째 파라미터를 작성하지 않았습니다.
    2. Number 인스턴스를 생성하여 파라미터 값 100을 [[PrimitiveValue]]에 설정합니다.
    3. 생성한 인스턴스를 반환합니다.
    4. Boolean, String, Symbol도 같은 방법으로 처리합니다.

## 두 번째 파라미터 작성

### 열거 가능한 오브젝트 작성

```js
console.log("[코드4] 열거 가능 오브젝트 설정");
let obj4 = {};
Object.assign(obj4, { ten: 10 });
console.log(obj4); // {ten: 10}

const one = Object.create(
  {},
  {
    book: { value: 100, enumerable: false },
    sports: { value: 200, enumerable: true },
  }
);
Object.assign(obj4, one);
console.log(obj4); // {ten: 10, sports: 200}
```

### 오브젝트 다수 작성한 형태

```js
console.log("[코드5] 오브젝트 다수 작성");
const book5 = { title: "책" };
const sports5 = { item: "축구" };
const obj5 = Object.assign({}, book5, sports5);
console.log(obj5); // {title: '책', item: '축구'}
```

    1. 두 번째 파라미터 이후에 콤마로 구분하여 오브젝트를 작성할 수 있습니다.

### 값을 작성한 형태

```js
console.log("[코드6] 값을 작성");
let obj6 = { ten: 10 };
Object.assign(obj6, undefined, null, 200);
console.log(obj6); // {ten: 10}

const one6 = { un: undefined, nu: null };
Object.assign(obj6, one6);
console.log(obj6); // {ten: 10, un: undefined, nu: null}
```

    1. 값으로 작성한 undefined, null, 200이 복사되지 않습니다.
    2. 열거 가능한 오브젝트가 아니기 때문입니다.

### 값과 오브젝트를 작성한 형태

```js
console.log("[코드7] 값과 오브젝트 형태");
const obj7 = Object.assign(100, { book: 200 });
console.log(obj7.valueOf()); // 100
console.log(obj7.book); // 200
```

    1. 100이므로 Number 인스턴스를 생성합니다.
    2. 두 번째 파라미터가 Object이므로 생성한 Number 인스턴스에 복사합니다.
    3. Number 인스턴스에 Object를 복사하는 것은 데이터 타입이 맞지 않습니다.
    4. Object이므로 복사가 된다는 것을 설명하기 위한 것입니다.

### 값이 설정된 인스턴스 형태

```js
console.log("값이 설정된 인스턴스 형태");
{
  ("use strict");
  debugger;

  const obj = Object.assign(100, { book: 200 });
  /**
   * 1. 오른쪽의 obj를 펼치면
   *    book: 200이 있으며 Object에서 사용하는 프로퍼티 형태입니다.
   *
   * 2. __proto__에 Number 오브젝트의 메소드가 있습니다.
   *
   * 3. [[PrimitiveValue]]: 100
   *    프리미티브 값을 나타내며,
   *    첫 번째 파라미터에 작성한 100입니다.
   */
  debugger;
}
```
