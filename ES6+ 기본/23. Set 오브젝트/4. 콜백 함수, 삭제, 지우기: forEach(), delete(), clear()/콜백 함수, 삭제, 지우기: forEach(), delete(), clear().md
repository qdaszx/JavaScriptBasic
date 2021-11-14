# 콜백 함수, 삭제, 지우기

## forEach()

| 구분     | 데이터(값)               |
| :------- | :----------------------- |
| 형태     | Set.prototype.forEach()  |
| 파라미터 | callback 함수            |
|          | this로 참조할 object opt |
| 반환     | undefined                |

Set 인스턴스를 반복하면서 callback 함수를 호출합니다.

map(), filter() 등의 callback 함수가 동반되는 메소드는 사용할 수 업습니다.

### callback 함수에 넘겨주는 파라미터는 value, key(value), Set 인스턴스가 넘어갑니다.

```js
console.log("[코드1] forEach()");
const obj = new Set(["one", () => {}]);
function callback(value, key, set) {
  console.log(value); // one () => {}
}
obj.forEach(callback);
```

### 콜백 함수에에 this를 사용합니다.

```js
console.log("[코드2] 일반 함수로 콜백 함수 작성");
const obj2 = new Set(["one", "two"]);
function callback2(value, key, set) {
  console.log(`${value}, ${this.check}`); // one, ABC two, ABC
}
obj2.forEach(callback2, { check: "ABC" });
```

    1. 콜백 함수에서 this가 forEach()의 두 번째 파라미터에 작성한 오브젝트를 참조하게 하려면 일반 함수로 작성해야 합니다.

## delete()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Set.prototype.delete()       |
| 파라미터 | key 값                       |
| 반환     | 삭제 성공: true, 실패: false |

Set 인스턴스에서 파라미터 값과 같은 엘리먼트를 삭제합니다.

같은 value가 있어 삭제에 성공하면 true 실패하면 false를 반환합니다.

```js
console.log("[코드3] delete()");
const obj3 = new Set(["one", "two"]);
console.log(obj3.delete("one")); // true
console.log(obj3.delete("one")); // false
```

## clear()

| 구분     | 데이터(값)            |
| :------- | :-------------------- |
| 형태     | Set.prototype.clear() |
| 파라미터 | 파라미터 없음         |
| 반환     | 없음                  |

Set 인스턴스의 모든 엘리먼트를 지웁니다.

Set 인스턴스를 삭제하는 것은 아닙니다.

따라서 value를 추가할 수 있습니다.

```js
console.log("[코드4] clear()");
const obj4 = new Set(["one", "two"]);
console.log(obj4.size); // 2

obj4.clear();
console.log(obj4.size); // 0
obj4.add("one");
console.log(obj4.size); // 1
```
