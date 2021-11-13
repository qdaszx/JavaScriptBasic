# WeakMap 오브젝트 메소드

## get()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | WeakMap.prototype.get() |
| 파라미터 | key, 오브젝트           |
| 반환     | 엘리먼트 value          |

WeakMap 인스턴스에서 key 값이 같은 value를 반환합니다.

존재하지 않으면 undefined를 반환합니다.

```js
console.log("[코드1] get()");
const fn = () => {};
const obj = new WeakMap([[fn, "함수"]]);
console.log(obj.get(fn)); // 함수
```

## set()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | WeakMap.prototype.set()      |
| 파라미터 | key, 오브젝트                |
|          | value, 임의의 값             |
| 반환     | key, value가 설정된 인스턴스 |

WeakMap 인스턴스에 key, value를 설정합니다.

첫 번째 파라미터에 key로 사용할 오브젝트를 작성합니다

string과 같은 프리미티브 값을 사용할 수 없습니다.

두 번째 파라미터에 value, 임의의 값을 작성할 수 있습니다.

```js
console.log("[코드2] set()");
const fn2 = function () {};
const obj2 = new WeakMap([[fn2, "함수"]]);
console.log(obj2.get(fn2)); // 함수

obj2.set(fn2, "함수 변경");
console.log(obj2.get(fn2)); // 함수 변경
```

    1. obj.set(fn, "함수 변경");
    2. fn의 메모리 주소가 key로 등록되어 있으며 같은 메모리 주소로 값을 설정하므로
    3. [fn, "함수"]에서 "함수"가 "함수 변경" 으로 변경됩니다.

두 번째 파라미터는 값입니다.

첫 번째 파라미터의 오브젝트에 대한 값이다?

조금은 혼돈될 수 있다.

WeakMap, Map이 entry를 사용하고 있습니다.

그러므로 구조를 맞추기 위한 것으로 볼 수 있습니다.

한편 오브젝트 구분 등의 용도로도 사용할 수 있고, 오브젝트에 따라 연동되는 함수를 등록해서 함수를 호출하는 그런 것에 쓰일 수 있습니다.

## has()

| 구분     | 데이터(값)                  |
| :------- | :-------------------------- |
| 형태     | WeakMap.prototype.has()     |
| 파라미터 | key, 오브젝트               |
| 반환     | 존재하면 true, 아니면 false |

WeakMap 인스턴스에서 key의 존재 여부를 반환합니다.

존재하면 true, 존재하지 않으면 false

```js
console.log("[코드3] has()");
const obj3 = {};
const weakObj = new WeakMap([[obj3, "오브젝트"]]);
console.log(weakObj.has(obj3)); // true
```

## delete()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | WeakMap.prototype.delete() |
| 파라미터 | key, 오브젝트              |
| 반환     | 삭제 성공 true, 실패 false |

WeakMap 인스턴스에서 key와 일치하는 entry를 삭제합니다.

삭제를 성공하면 true를 반환하고

실패하면 false를 반환합니다.

```js
console.log("[코드4] delete()");
const fn4 = function () {};
const obj4 = new WeakMap([[fn4, "함수"]]);
console.log(obj4.delete(fn4)); // true
console.log(obj4.has(fn4)); // false
```

### 정리

WeakMap 오브젝트에는 4가지의 메소드 밖에 없습니다.

또한, 각 메소드의 공통된 기능은 key를 사용한다는 것 입니다.

전체를 열거하거나 반복하면서 처리하는 것은 없습니다.

오직, key만 가지고 처리합니다.

그 key가 object입니다.

이것은 Weak에 대한 개념이 강하기 때문입니다.
