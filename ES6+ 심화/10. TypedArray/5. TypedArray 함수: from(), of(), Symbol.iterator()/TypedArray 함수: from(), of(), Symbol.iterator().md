# TypedArray 함수

## from()

| 구분     | 개요                                         |
| :------- | :------------------------------------------- |
| 파라미터 | source, Array-like 또는 이터러블             |
|          | callback, 콜백 함수                          |
|          | thisArg, callback에서 this로 참조할 오브젝트 |
| 반환     | 생성한 9개 타입의 인스턴스                   |

TypedArray 인스턴스를 생성하여 반환합니다.

new 연산자를 사용하지 않습니다.

TypedArray.from() 형태입니다.

### 파라미터

- 첫 번째에 Array, Array-like를 작성한 형태

```js
const obj = Int8Array.from([12, 34, 500]);
console.log(obj); // {0: 12, 1: 34, 2: -12}
const like = Int8Array.from({
  0: 56,
  1: 78,
  length: 2,
});
console.log(like); // {0: 56, 1: 78}
```

    1. const obj = Int8Array.from([12, 34, 500]);
    파라미터에 배열로 [12, 34, 500]을 작성하였으며
    Int8Array 인스턴스를 생성합니다.
    엘리먼트 값으로 12와 34가 설정됩니다.
    Int8 타입이므로 500은 비정상적인 값이 설정됩니다.

    2. const like = Int8Array.from({...});
    파라미터에 Array-like를 작성하였으며
    Int8Array 인스턴스를 생성합니다.
    엘리먼트 값으로 56과 78이 설정됩니다.

- 첫 번째에 Number, 문자열을 작성한 형태

```js
console.log(Int8Array.from("12")); // {0: 1, 1: 2}
console.log(Int8Array.from(12)); // {}
console.log(new Int8Array("12")); // {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0}
console.log(new Int8Array(12)); // {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0}
```

    1. Int8Array.from("12");
    파라미터에 문자열로 "12"를 작성했습니다.
    문자열 "12"를 1과 2로 분할하여
    엘리먼트 값으로 설정합니다.

    2. Int8Array.from(12);
    파라미터에 Number 타입으로 12를 작성했습니다.
    엘리먼트 값으로 설정하지 않습니다.

    3. new Int8Array("12");
    new 연산자로 인스턴스를 생성하면서
    문자열로 "12"를 작성했습니다.
    12개의 엘리먼트를 생성합니다.

    4. new Int8Array(12);
    문자열로 "12"를 작성한 것과 같습니다.

- 두 번째에 콜백 함수 작성한 형태

```js
const that = { 1: 10, 2: 20 };
const add = (value) => {
  return that[value];
};
const obj = Int8Array.from([1, 2], add, that);
console.log(obj); // {0: 10, 1: 20}
```

    1. Int8Array.from([1, 2], add, that)
    배열의 엘리먼트를 하나씩 읽으면서
    콜백 함수를 호출합니다.

    2. const add = (value) => {...}
    반복하는 엘리먼트 값이
    value 파라미터에 설정됩니다.

    3. return that[value]
    that은 from()의 세 번째 파라미터입니다.
    1, 2를 프로퍼티 키로 하여 값을 구합니다.

    4. 콜백 함수에서 return하지 않으면
    {인덱스: 0} 형태의 초깃값이 설정될 뿐
    구한 값 10, 20이 설정되지 않습니다.

## of()

| 구분     | 개요                       |
| :------- | :------------------------- |
| 파라미터 | item0[, item1[, item2]]    |
| 반환     | 생성한 9개 타입의 인스턴스 |

인스턴스에 설정할 값을 파라미터에 콤마로 구분하여 작성합니다.

new 연산자를 사용하지 않습니다.

TypedArray.of() 형태

### 파라미터에 작성한 순서로 인덱스를 증가시키면서 값을 설정합니다.

```js
const obj = Int8Array.of(10, 20, 30);
console.log(obj); // {0: 10, 1: 20, 2: 30}
```

    1. const obj = Int8Array.of(10, 20, 30);
    3개의 엘리먼트를 가진
    Int8Array 인스턴스를 생성하고
    파라미터에 작성한 순서로
    앞에서부터 값을 설정합니다.

    2. 콤마로 구분하여 다수를 작성할 수 있으며
    값을 하나만 작성할 수도 있습니다.

### 파라미터에 숫자 이외의 값을 작성합니다.

```js
const obj = Int8Array.of("3", null, "A");
console.log(obj); // {0: 3, 1: 0, 2: 0}
```

    1. 파라미터에 값 타입이 String이지만
    값이 숫자이면 숫자로 변환하여 설정합니다.

    2. 파라미터 값 타입이 Number가 아니면
    설정하지 않고 디폴트 값인 0을 설정합니다.

## Symbol.iterator()

TypedArray 인스턴스의 Symbol.iterator()를 호출하면

이터레이터 오브젝트 생성하여 반환합니다.

```js
const type8 = new Int8Array([10, 20]);
const obj = type8[Symbol.iterator]();
console.log(obj.next()); // {value: 10, done: false}
console.log(obj.next()); // {value: 20, done: false}
console.log(obj.next()); // {value: undefined, done: true}
```

    1. const obj = type8[Symbol.iterator]();
    Int8Array 인스턴스의 Symbol.iterator()를 호출하면
    이터레이터 오브젝트를 생성하여 반환합니다.

    2. obj.next();
    이터레이터 오브젝트의 next()를 호출하면 10이 반환됩니다.

    3. obj.next();
    20이 반환됩니다.

    4. console.log(obj.next());
    오브젝트의 next()를 호출하면 처리할 것이 없으므로 마지막처럼 출력됩니다.

TypedArray 인스턴스를 for-of문으로 전개가 가능합니다.

```js
const obj = new Int8Array([10, 20]);
for (const value of obj) {
  console.log(value); // 10, 20
}
```
