# 콜백 함수, 삭제, 지우기

## forEach()

| 구분     | 데이터(값)               |
| :------- | :----------------------- |
| 형태     | Map.prototype.forEach()  |
| 파라미터 | callback 함수            |
|          | this로 참조할 object opt |
| 반환     | undefined                |

Map 인스턴스를 반복하면서 callback 함수를 호출합니다.

map(), filter() 메소드 등의 callback 함수가 동반되는 메소드는 사용할 수 없습니다.

Map 오브젝트는 오직 forEach 메소드만 지원합니다

callback 함수에 넘겨주는 파라미터는 value, key, Map 인스턴스 입니다.

### key, value 순서가 아니라 value, key 순서입니다.

Map 인스턴스는 그 자체로 넘어가서 메소드까지 있습니다.

```js
console.log("[코드1] forEach()");
const obj = new Map([
  ["one", 100],
  ["two", 200],
]);
const callback = (value, key, map) => {
  console.log(`${key}, ${value}`);
};
obj.forEach(callback); // one, 100 two, 200
```

### 콜백 함수에서 this 사용

```js
console.log("[코드2] 콜백 함수에서 this 사용");
const obj2 = new Map([
  ["one", 100],
  ["two", 200],
]);
function callback2(value, key, map) {
  console.log(`${key}, ${value}, ${this.check}`);
}
obj2.forEach(callback2, { check: 50 }); // one, 100, 50 two, 200, 50
```

    1. 콜백 함수를 일반 함수로 작성했습니다.
    2. 콜백 함수를 화살표 함수로 작성하면 this로 window 오브젝트를 참조합니다.
    3. 콜백 함수에서 this가 forEach()의 두 번째 파라미터에 작성한 오브젝트를 참조합나다.

## delete()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Map.prototype.delete()       |
| 파라미터 | key 값                       |
| 반환     | 삭제 성공: true, 실패: false |

Map 인스턴스에서 파라미터 값과 같은 entry를 삭제합니다.

### 같은 key가 있으면 true를 반환하고 없으면 false를 반환합니다.

```js
console.log("[코드3] delete()");
const obj3 = new Map([
  ["one", 100],
  [{}, "오브젝트"],
]);
console.log(obj3.delete("one")); // true
console.log(obj3.delete({})); // false

const sports3 = {};
obj3.set(sports3, "스포츠");
console.log(obj3.delete(sports3)); // true
```

## clear()

| 구분     | 데이터(값)            |
| :------- | :-------------------- |
| 형태     | Map.prototype.clear() |
| 파라미터 | 파라미터 없음         |
| 반환     | 없음                  |

Map 인스턴스의 모든 entry를 지웁니다.

Map 인스턴스 자체를 삭제하는 것은 아닙니다.

따라서 [key, value]를 추가할 수 있습니다.

```js
console.log("[코드4] clear()");
const obj4 = new Map([
  ["one", 100],
  ["two", 200],
]);
console.log(obj4.size); // 2

obj4.clear();
console.log(obj4.size); // 0
obj4.set("add", "추가");
console.log(obj4.size); // 1
```

size 프로퍼티는 Map entry 수를 반환하고 개발자 코드로 수정할 수 없습니다.

### 정리

Map 오브젝트는 다양한 메소드를 지원하고 이터레이션도 할 수 있습니다.

그리고 for-of 문으로 전개할 수 있습니다.

Map 오브젝트가 빌트인 Object 보다 더 확장성이 있다, 유연성이 있다고 생각합니다.
