/*
Object 오브젝트

구분 ::: 데이터(값)
형태 ::: Object.is()
파라미터 ::: 1. 비교 대상 값 2. 비교 대상 값
반환 ::: 타입까지 같으면 true, 아니면 false

- 두 개의 파라미터 값과 값 타입을 비교
    - 같으면 true, 아니면 false 반환 [코드1]

- 오브젝트 비교 목적이 아님
    - [ ]와 [ ] 비교, { }와 { } 비교는 false
*/
console.log("[코드1] is()");
const result = Object.is(10, "10");
console.log(result);  // false

const one = {}, two = {};
console.log(Object.is(one, two)); // false

/*
is()

- JS 값 비교 방법
    - 값과 타입까지 모두 비교: ===
    - 타입은 비교하지 않고 값만 비교: == [코드2]

- Object.is()와 === 비교 차이
    - NaN 비교 [코드3]
    - +0과 -0 비교 [코드4]

- 활용한 형태 [코드5]
*/
console.log("[코드2] JS 값 비교 방법");
console.log((undefined == null)); // true
console.log((undefined === null));  // false
console.log(Object.is(undefined, null));  // false
/**
 * 1. Object.is()는 타입까지 비교합니다.
 * 2. ===에서 =를 수를 세는 것보다 Object.is()가 가독성이 좋을 수 있습니다.
 * 3. 타이핑 실수(==)를 피할 수 있지만 ===에 익숙한 개발자도 있습니다.
 */

console.log("[코드3] NaN 비교");
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === 0 / 0); // false
console.log(Object.is(NaN, 0 / 0)); // true

console.log("[코드4] +0과 -0 비교");
console.log((0 === -0));  // true
console.log(Object.is(0, -0));  // false

console.log("[코드5] 활용 형태");
function check(data) {
  if (Object.is(typeof data, "object")) {
    console.log(data);
  } else {
    console.log("object 타입이 아님");
  };
};
check({ value: 10 }); // {value: 10}
check(200); // objcet 타입이 아님
/**
 * 1. Object.is(typeof data, "object")
 * 2. typeof data 결과로 비교합니다.
 */