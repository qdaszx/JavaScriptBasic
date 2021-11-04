# 같은 값, 인덱스 검색

## find()

| 구분     | 데이터(값)                              |
| :------- | :-------------------------------------- |
| 형태     | Array.prototype.find()                  |
| 파라미터 | 콜백 함수                               |
|          | 콜백 함수에서 this로 참조할 오브젝트opt |
| 반환     | 배열 엘리먼트 또는 undefined            |

배열의 엘리먼트를 하나씩 일어가면서 콜백 함수를 호출합니다.

### 콜백 함수에서 true를 반환하면 find()를 종료하면서 현재 처리중인 엘리먼트 값을 반환합니다.

콜백 함수 파라미터 : 엘리먼트, 인덱스, 배열 전체

```js
console.log("[코드1] find()");
const list = ["A", "B", "C"];
const cb = (value, index, all) => value === "B";
const result = list.find(cb);
console.log(result); // B
```

    1. ["A", "B", "C"]를 반복하면서 콜백 함수 호출
    2. 콜백 함수에서 엘리먼트 값이 B이면 true를 반환합니다.
    3. 콜백 함수에서 true를 반환하면 현재 처리중인 엘리먼트 값인 B를 반환하고 find() 실행을 종료합니다.
    4. 조건에 맞으면 find() 실행을 종료하므로 배열 앞에서 true가 되면 효율이 높습니다.

```js
console.log("[코드2] undefined 반환");
const list2 = ["A", "B", "C"];
const cb2 = (value, index, all) => value === 77;
const result2 = list2.find(cb2);
console.log(result2); // undefined
```

    1. 콜백 함수에서 조건에 맞는 값이 없으면 undefined를 반환합니다.

```js
console.log("[코드3] this로 참조할 오브젝트 작성");
const list3 = ["A", "B", "C"];
function cb3(value, index, all) {
  return value === "A" && value === this.check;
}
const result3 = list3.find(cb3, { check: "A" });
console.log(result3); // A
```

    1. 두 번째 파라미터에 콜백 함수에서 this로 참조할 오브젝트를 작성한 형태입니다.
    2. 콜백 함수를 화살표 함수(=>)로 작성하면 콜백 함수에서 this가 window를 참조하므로 두 번째 파라미터의 오브젝트를 참조하지 못합니다.
    3. 일반 함수를 작성해야 합니다.

## findIndex()

| 구분     | 데이터(값)                              |
| :------- | :-------------------------------------- |
| 형태     | Array.prototype.findIndex()             |
| 파라미터 | 콜백 함수                               |
|          | 콜백 함수에서 this로 참조할 오브젝트opt |
| 반환     | 배열 인덱스 또는 -1                     |

find 메소드와 같다. 값이 아닌 인덱스를 반환합니다.

```js
console.log("[코드4] findIndex()");
const list4 = ["A", "B", "C"];
const cb4 = (value, index, all) => value === "B";
console.log(list4.findIndex(cb4)); // 1
```

    1. ["A", "B", "C"]를 반복하면서 콜백 함수 호출
    2. 콜백 함수에서 엘리먼트 값이 B이면 true를 반환합니다.
    3. 콜백 함수에서 true를 반환하면 현재 처리중인 엘리먼트의 인덱스를 반환하고 findIndex()를 종료합니다.

```js
console.log("[코드5] -1 반환");
const list5 = ["A", "B", "C"];
const cb5 = (value, index, all) => value === 77;
const result5 = list5.findIndex(cb5);
console.log(result5); // -1
```

    1. 콜백 함수에서 조건에 맞는 값이 없으면 -1을 반환합니다.
    2. indexOf(searchValue, fromIndex)는 값을 직접 지정할 수 있으며 검색을 시작할 인덱스를 지정할 수 있습니다.
    3. 콜백 함수가 없으므로 다양한 조건으로 체크 불가
    4. 단, 값만으로 인덱스를 찾을 때는 indexOf()가 효율적
    5. includes(searchValue, fromIndex)는 true/false를 반환합니다.

find 메소드는 값을 반환, findIndex는 인덱스를 반환하지만 조건에 맞지 않으면 -1를 반환

indexOf는 콜백 함수가 없다

includes는 존재 여부에 대한 true false를 반환합니다.
