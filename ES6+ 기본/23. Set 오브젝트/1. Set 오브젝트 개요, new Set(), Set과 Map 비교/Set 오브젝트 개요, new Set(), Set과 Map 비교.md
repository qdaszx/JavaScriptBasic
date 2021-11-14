# Set 오브젝트

Set 오브젝트는 value(값)의 컬렉션입니다.

[value1,,,valueN] 형태로 작성하고 Set은 대괄호가 하나입니다.

```js
console.log("[코드1] Set 오브젝트");
const obj = new Set([1, 2, "ABC"]);
console.log(`size: ${obj.size}`); // size: 3

for (let value of obj) {
  console.log(value); // 1  2  ABC
}
```

## new Set()

| 구분     | 데이터(값)          |
| :------- | :------------------ |
| 형태     | new Set()           |
| 파라미터 | 값opt               |
| 반환     | 생성한 Set 인스턴스 |

Set 인스턴스를 생성하여 반환합니다.

파라미터에 값을 작성합니다.

값은 프리미티브 타입, 또는 오브젝트 타입을 사용할 수 있습니다.

```js
console.log("[코드2] Set 인스턴스 생성");
const obj2 = new Set([1, 2, 1, [], {}]);
console.log(`size: ${obj2.size}`); // size: 4
for (let value of obj2) {
  console.log(value); //  1 2 []  {}
}
```

    1. 같은 값이 있으면, 첫 번째의 1을 유지하며 세 번째의 1을 설정하지 않습니다.
    2. Same-Value-Zero 비교 알고리즘으로 비교
    3. obj.size
      세 번째의 1이 설정되지 않으므로 값은 4

size 프로퍼티는 Set 인스턴스의 엘리먼트 수를 반환합니다.

## Set 오브젝트 구조

```js
{
  ("use strict");
  debugger;

  const set = Set;
  /*
  1. Set 오브젝트에 Symbol (Symbol.species)가 있습니다.
    따라서, constructor를 오버라이드할 수 있습니다.

  2. prototype을 펼치면 Symbol.iterator가 있습니다.
  */
  debugger;

  const obj = new Set(["one", "two"]);

  /*
  1. 오른쪽의 obj를 펼치면 [[Entries]]가 있습니다.

  2. [[Entries]]를 펼치면 0: "one" 형태입니다.

  3. 인덱스를 부여하여 key로 사용하고
    "one", "two"를 value로 설정합니다.

  4. 인덱스를 부여하는 구조는 Map과 같습니다.

  5. 인덱스를 부여하여 저장하므로 작성한 순서로 읽혀집니다.
  */
  debugger;
}
```

## Set과 Map 비교

저장 형태

Map 오브젝트는 key와 value를 작성하고 key를 인스턴스의 key로 저장하여 [key, value] 형태로 저장합니다.

Set 오브젝트는 value만 작성하고 value를 key로 사용하여 [value]로 저장합니다.

key로 사용한다는 것은 값이 중복되지 않는다 라는 것 입니다.

값을 구하는 형태

Map 오브젝트는 get 메소드의 key를 작성한 형태 get(key) 로 value를 구할 수 있습니다.

Set 오브젝트는 get() 메소드가 없습니다.

즉, 값 하나를 구할 수 없습니다.

Set 오브젝트에서 key는 value가 중복되지 않는 그런 개념입니다.

Set 오브젝트는 반복으로 값을 구하거나 이터레이터를 사용해야합니다.

이 부분이 Set과 Map 오브젝트의 차이입니다.
