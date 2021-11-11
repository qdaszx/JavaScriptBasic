/*
Symbol.iterator

@@iterator가 있는 빌트인 오브젝트
  - String, Array, Map, Set, TypedArray

- 빌트인 Object에는 @@iterator가 없지만 개발자 코드로 작성할 수 있음

- 이 절에서 String, Array, Object를 다루고
  - Map, Set은 관련된 곳에서 다룸
  - TypedArray는 ES6+ 심화 과정에서 다룸
*/

/*
Array.prototype[@@iterator]

- Array 오브젝트의 [Symbol.iterator]()를 호출하면
  - 이터레이터 오브젝트 반환 [코드1]
  - next()로 배열 엘리멘트 값을 하나씩 구할 수 있습니다.
*/
console.log("[코드1] Array[@@iterator]");
const list = [10, 20];
const obj = list[Symbol.iterator]();
console.log(obj.next());  // {value: 10, done: false}
console.log(obj.next());  // {value: 20, done: false}
console.log(obj.next());  // {value: undefined, done: ture}

/*
String.prototype[@@iterator]

- String 오브젝트의 [Symbol.iterator]()를 호출하면
  - 이터레이터 오브젝트 반환 [코드2]
  - next()로 문자열에서 문자를 하나씩 구할 수 있다.
*/
console.log("[코드2] String[@@iterator]");
const list2 = "1A";
const obj2 = list2[Symbol.iterator]()
console.log(obj2.next()); // {value: '1', done: false}
console.log(obj2.next()); // {value: 'A', done: false}
console.log(obj2.next()); // {value: undefined, done: true}

/*
Object 이터레이션

- 빌트인 Object에는 Symbol.iterator가 없음
  - Symbol.iterator가 반복을 처리하므로
  - Object에 Symbol.iterator를 작성하면 반복할 수 있음 [코드3]

- 엔진이 for-of 문을 시작하면
  - 먼저 obj에서 [Symbol.iterator] 검색
    이를 위해 obj에 [Symbol.iterator] 작성

- for(const result of obj) 를 처음 실행할 때
  - obj의 [Symbol.iterator]()가 호출되며 return{} 문을 수행
  - obj.maxCount = 2; 로 반복 횟수 정의
*/
console.log("[코드3] Object 이터레이션");
const obj3 = {
  [Symbol.iterator]() {
    return {
      count: 0,
      maxCount: this.maxCount,
      next() {
        if (this.count < this.maxCount) {
          return { value: this.count++, done: false };
        };
        return { value: undefined, done: true };
      }
    };
  }
};
obj3.maxCount = 2;
for (const result of obj3) {
  console.log(result);  // 0 1
};