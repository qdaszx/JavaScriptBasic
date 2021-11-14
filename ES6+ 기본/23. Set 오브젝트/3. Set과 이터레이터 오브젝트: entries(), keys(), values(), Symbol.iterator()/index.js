/*
Set과 이터레이터 오브젝트

entries()

| 구분     | 데이터(값)                      |
| :------- | :------------------------------ |
| 형태     | Set.prototype.entries()         |
| 파라미터 | 파라미터 없음                   |
| 반환     | 생성한 이터레이터 오브젝트 생성 |

Set 인스턴스로 이터레이터 오브젝트 생성, 반환
  - Set 인스턴스에 설정된 순서로 반환
  - next()로 [value, value] 반환 [코드1]
*/
console.log("[코드1] entries()");
const obj = new Set([
  "one", () => { }
]);
const iterObj = obj.entries();
console.log(iterObj.next());  // {value: [one, one], done: false}
console.log(iterObj.next()); // {value: [() => {}, () => {}], done: false}
console.log(iterObj.next());  // {value: undefined, done: true}
/**
 * 1. value만 작성했는데 [value, value]가 반환되는 것은 Map 오브젝트와 같은 모듈을 사용하므로 형태를 맞추기 위한 것으로 [key, value]에서 value를 key로 반환합니다.
 */


/*
keys()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | Set.prototype.keys()       |
| 파라미터 | 파라미터 없음              |
| 반환     | 생성한 이터레이터 오브젝트 |

value가 key가 되므로
  - keys()는 의미가 없음
  - Map 오브젝트와 맞추기 위한 것

Set 인스턴스의 value를 key로 사용하여 이터레이터 오브젝트 생성, 반환
  - Set 인스턴스에 설정된 순서로 반환

next()로 value(key) 반환 [코드2]
*/

console.log("[코드2] keys()");
const obj2 = new Set([
  'one', () => { }
]);
const iterObj2 = obj2.keys();
console.log(iterObj2.next()); // {value: 'one', done: false}
console.log(iterObj2.next()); // {done: false, value: ƒ}
console.log(iterObj2.next()); // {value: undefined, done: true}

/*
values()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | Set.prototype.values()     |
| 파라미터 | 파라미터 없음              |
| 반환     | 생성한 이터레이터 오브젝트 |

Set 인스턴스의 value로 이터레이터 오브젝트 생성, 반환
  - Set 인스턴스에 설정된 순서로 반환

next()로 value 반환 [코드3]
*/
console.log("[코드3] values");
const obj3 = new Set([
  "one", () => { }
]);
const iterObj3 = obj3.values();
console.log(iterObj3.next()); // {value: 'one', done: false}
console.log(iterObj3.next()); // {done: false, value: ƒ}
console.log(iterObj3.next()); // {value: undefined, done: true}

/*
Symbol.iterator()

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | Set.prototype[Symbol.iterator |
| 파라미터 | 파라미터 없음                 |
| 반환     | {done: true/false, value: 값} |

Set 인스턴스로 이터레이터 오브젝트 생성, 반환
  - Set.prototype.values()와 같음
  - next()로 value 반환 [코드4]
*/
console.log("[코드4] Symbol.iterator");
const obj4 = new Set([
  "one", () => { }
]);
const iter = obj4[Symbol.iterator]();
console.log(iter.next()); // {value: 'one', done: false}
console.log(iter.next()); // {done: false, value: ƒ}
console.log(iter.next()); // {value: undefined, done: true}