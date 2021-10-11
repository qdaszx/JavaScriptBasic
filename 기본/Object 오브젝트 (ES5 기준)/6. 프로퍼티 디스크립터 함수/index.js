/**
 * getOwnPropertyDescriptor()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 1. 대상 오브젝트 2. 프로퍼티 이름
 * 반환 - 디스크립터
 *
 * - 프로퍼티 디스크립터의 속성 이름, 값 반환
 *    - 다른 오브젝트에서 받은
 *      프로퍼티는 제외 [코드1]
 */
console.log("[코드1] 디스크립터 속성 반환");
let obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
  enumerable: true
});
let desc = Object.getOwnPropertyDescriptor(obj, "book");
for (let key in desc) {
  console.log(key + ":" + desc[key]); // value:책 writable:true enumerable:true configurable:false
};

/**
 * preventExtensions()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - 대상 오브젝트
 *
 * - 오브젝트에 프로퍼티 추가 금지 설정
 * - 프로퍼티 삭제, 변경은 가능
 * - 추가 금지를 설정한 후에는
 *   추가 가능으로 변경 불가 [코드2]
 */
console.log("[코드2] 프로퍼티 추가 금지 설정");
let obj2 = {};
Object.preventExtensions(obj2);
try {
  Object.defineProperty(obj2, "book", {
    value: "책"
  });
} catch (e) {
  console.log("추가 불가"); // 추가 불가
};
/**
 * 1. 추가 금지 상태에서
 *    프로퍼티를 추가하면 에러 발생
 */

/**
 * isExtensible()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - true/false
 *
 * - 오브젝트에 프로퍼티 추가 금지 여부 반환
 *    - true: 추가 기능, false: 추가 불가 [코드3]
 */
console.log("[코드3] ");
let obj3 = {};
Object.defineProperty(obj3, "book", {
  value: "책"
});
console.log(Object.isExtensible(obj3)); // true
Object.preventExtensions(obj3);
console.log(Object.isExtensible(obj3)); // false

/**
 * seal()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - 대상 오브젝트
 *
 * - 오브젝트에 프로퍼티 추가, 삭제 금지 설정
 * - 추가 금지는 오브젝트 단위로 설정하고
 *   삭제 금지는 프로퍼티 단위로 설정 [코드4]
 * - 추가 금지를 하더라도 변경은 가능
 */
console.log("[코드4] 프로퍼티 추가, 삭제 금지 설정");
let obj4 = {};
Object.defineProperty(obj4, "book", {
  value: "책",
  writable: true
});

Object.seal(obj4);
try {
  Object.defineProperty(obj4, "sports", {
    value: "스포츠"
  });
} catch (e) {
  console.log("추가 불가"); // 추가 불가
};

/**
 * isSealed()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - true/false
 *
 * - 오브젝트에 프로퍼티
 *   추가, 삭제 금지 여부 반환
 *    - true: 불가, false: 가능 [코드5]
 */
console.log("[코드5] 추가, 삭제 금지 여부");
let obj5 = {};
Object.defineProperty(obj5, "book", {
  value: "책",
  writable: true
});
console.log(Object.isSealed(obj5)); // false
Object.seal(obj5);
console.log(Object.isSealed(obj5)); // true

/**
 * freeze()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - 대상 오브젝트
 *
 * - 오브젝트에 프로퍼티
 *   추가, 삭제, 변경 금지 설정 [코드6]
 */
console.log("[코드6] 추가, 삭제, 변경 금지 설정");
let obj6 = {};
Object.defineProperty(obj6, "book", {
  value: "책",
  writable: true
});

Object.freeze(obj6);
try {
  Object.defineProperty(obj6, "book", {
    value: "포인트"
  });
} catch (e) {
  console.log("변경 불가"); // 변경 불가
};
console.log(obj6.book);  // 책

/**
 * isFrozen()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - true/false
 *
 * - 오브젝트에 프로퍼티
 *   추가, 삭제, 변경 금지 여부 반환
 *    - true: 불가, false: 가능 [코드7]
 */
console.log("[코드7]");
let obj7 = {};
Object.defineProperty(obj7, "book", {
  value: "책",
  writable: true
});
console.log(Object.isFrozen(obj7)); // false
Object.freeze(obj7);
console.log(Object.isFrozen(obj7)); // true