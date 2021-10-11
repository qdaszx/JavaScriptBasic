/**
 * 프로퍼티 디스크립터
 * 타입 - 속성 이름 - 속성 값 - 디폴트 값 - 개요
 * 데이터 - value - JS 지원 데이터 타입 - undefined - 프로퍼티 값으로 사용
 * 데이터 - writable - true, false - false - false: value 값 변경 불가
 * 악세스 - get - Function Object, undefined - undefined - 프로퍼티 함수
 * 악세스 - set - Function Object, undefined - undefined - 프로퍼티 함수
 * 공용 enumerable - true, false - false - false: for-in으로 열거 불가
 * 공용 - configurable - true, false - false - false: 프로퍼티 삭제 불가
 *
 * - 프로퍼티 디스크립터(Descriptor)
 *    - 프로퍼티의 속성 이름과 속성 값을 정의
 * - 디스크립터 타입 분류
 *    - 데이터 프로퍼티 디스크립터
 *    - 악세스 프로퍼티 디스크립터
 *    - 공용 프로퍼티 디스크립터
 *    - 디스크립터 타입에 속한 속성만 같이 사용할 수 있음
 */

/**
 * 디스크립터 타입 인식 기준
 * 타입 - 속성 이름
 * 데이터 - 1. value 2. writable
 * 악세스 - 1. get 2. set
 * 공용 - 1. enumerable 2. configurable
 *
 * - 먼저 value 또는 writable 작성 체크
 * - 작성되어 있으면
 *    - 데이터 프로퍼티 디스크립터 타입으로 인식
 *    - 작성되어 있지 않으면
 *      - 악세스 프로퍼티 디스크립터 타입으로 인식
 *    - 데이터와 악세스 프로퍼티 디스크립터를
 *      함께 작성할 수 없으므로 구분 가능
 */

/**
 * value 속성
 * - 프로퍼티 값을
 *    - {value: "JS북"} 형태로 작성
 *    - for~in에서 "JS북"이 프로퍼티 값이 됨 [코드1]
 * - value 속성을
 *   get/set 속성과 같이 작성 불가 [코드2]
 */
console.log("[코드1] value 속성");
let obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  enumerable: true
});
for (let name in obj) {
  console.log(name);  // book
  console.log(obj[name]); // JS북
}

console.log("[코드2] value, get/set 작성 불가");
let obj2 = {};
Object.defineProperty(obj2, "book", {
  value: "JS",
  // get: function () { }
})


/**
 * writable 속성
 * - 프로퍼티 값 변경 가능, 불가
 * - writable: true
 *    - 프로퍼티 변경 가능 [코드3]
 * - writable: false
 *    - 디폴트 값: false
 *    - 프로퍼티 변경 불가
 *      에러가 발생하지 않지만,
 *      값이 변경되지 않음 [코드4]
 */
console.log("[코드3] writable: true, 변경 가능");
let obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "JS책",
  // 변경 가능
  writable: true
});
obj3.book = "변경 가능";
console.log(obj3.book); // 변경 가능

console.log("[코드4] writable: false, 변경 불가");
let obj4 = {};
Object.defineProperty(obj4, "book", {
  value: "JS책",
  // 변경 불가
  writable: false
});

obj4.book = "변경 불가";
console.log(obj4.book); // JS책

/**
 * enumerable 속성
 * - for~in으로 열거 가능 여부
 * - enumerable: true
 *    - 프로퍼티 열거 가능 [코드5]
 * - enumerable: false
 *    - 디폴트 값: false
 *    - 프로퍼티 열거 불가 [코드6]
 */
console.log("[코드5] for~in으로 열거 가능");
let obj5 = {};
Object.defineProperty(obj5, "book", {
  value: "JS북",
  // 열거 가능
  enumerable: true
});
for (let name in obj5) {
  console.log(name, ":" + obj5[name]); // book :JS북
}

console.log("[코드6] enumerable: false, 열거 불가");
let obj6 = {};
Object.defineProperty(obj6, "book", {
  value: "JS북",
  // 열거 불가
  enumerable: false
});
for (let name in obj6) {
  console.log(name, ":" + obj6[name]);  //
}

/**
 * configurable 속성
 * - 프로퍼티 삭제 기능, 불가
 * - configurable: true
 *    - 프로퍼티 삭제 가능
 *    - value 이외 속성 변경 가능 [코드7]
 * - configurable: false
 *    - 디폴트 값: false
 *    - 프로퍼티 삭제 불가
 *    - value 이외 속성 변경 불가 [코드8]
 */
console.log("[코드7] configurable: true, 삭제 가능");
let obj7 = {};
Object.defineProperty(obj7, "book", {
  value: "JS북",
  // 삭제 가능
  configurable: true
});
delete obj7.book;
console.log(obj7.book); // undefined

console.log("[코드8]");
let obj8 = {};
Object.defineProperty(obj8, "book", {
  value: "JS북",
  // 삭제 불가
  configurable: false
});
delete obj8.book;
console.log(obj8.book); // JS북