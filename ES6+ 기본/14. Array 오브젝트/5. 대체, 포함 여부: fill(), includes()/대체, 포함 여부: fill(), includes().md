# 대체, 포함 여부

## fill()

| 구분     | 데이터(값)             |
| :------- | :--------------------- |
| 형태     | Array.prototype.fill() |
| 파라미터 | 설정할 값              |
|          | 시작 인덱스opt         |
|          | 끝 인덱스opt           |
| 반환     | 변경된 Array 오브젝트  |

범위 값을 지정한 값으로 설정합니다.

변경된 Array 오브젝트를 반환합니다.

설정 방법은

### 시작 인덱스부터 끝 인덱스 직전까지 첫 번째 파라미터 값으로 설정합니다.

따라서 값이 대체됩니다.

```js
console.log("[코드1] 시작 인덱스 작성");
const list = ["A", "B", "C"];
list.fill("책", 1);
console.log(list); //  [A, 책, 책]
```

    1. 시작 인덱스를 작성하고 끝 인덱스를 작성하지 않으면
    2. 시작 인덱스부터 끝까지 대체 대상
    3. 첫 번째 파라미터 값인 "책"으로 대체합니다.

```js
console.log("[코드2] 끝 인덱스 작성");
const list2 = ["A", "B", "C", "D"];
list2.fill("책", 1, 3);
console.log(list2); //  [A, 책, 책, D]
```

    1. 끝 인덱스를 작성하면
    2. 시작 인덱스부터 끝(인덱스 - 1)까지가 대체 대상

```js
console.log("[코드3] 시작과 끝 인덱스 미작성");
const list3 = ["A", "B", "C"];
list3.fill("책");
console.log(list3); //  [책, 책, 책]
```

    1. 시작 인덱스와 끝 인덱스를 작성하지 않으면 전체가 대체 대상

### Generic 함수

```js
console.log("[코드4] Generic");
const like = { 0: "A", 1: "B", 2: "C", length: 3 };
console.log(Array.prototype.fill.call(like, "책", 1)); //  {0: 'A', 1: '책', 2: '책', length: 3}
```

    1. Array-like를 사용하여 대체 처리

## includes()

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | Array.prototype.includes()    |
| 파라미터 | 비교하려는 값                 |
|          | 비교 시작 인덱스opt 디폴트: 0 |
| 반환     | true: 있음, false: 없음       |

### 대상 배열에 첫 번째 파라미터 값이 있으면 true, 없으면 false를 반환합니다.

두 번째 파라미터는 선택이며 비교 시작 인덱스를 작성합니다.

```js
console.log("[코드5] 포함 여부 반환");
const list5 = [10, 20, 30];
console.log(list5.includes(10)); // true
console.log(list5.includes(50)); //  false

console.log(list5.includes(10, 1)); //  false
```

    1. 10이 있지만 1번 인덱스부터 비교하므로 false 반환
    2. 두 번째 파라미터에 음수를 작성하는 등의 값을 작성할 때의 처리는 MDN을 참조하세요

### 제너릭 함수

```js
console.log("[코드6] 제너릭");
const like6 = { 0: 10, 1: 20, 2: 30, length: 3 };
console.log(Array.prototype.includes.call(like6, 20)); //  true
```
