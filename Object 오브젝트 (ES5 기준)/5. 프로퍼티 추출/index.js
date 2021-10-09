/**
 * getPrototypeOf()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 인스턴스
 * 반환 - 프로퍼티
 *
 * - 파라미터의 prototype에
 *   연결된 프로퍼티 반환 [코드1]
 * - 참고
 *    - setPrototypeOf()가
 *      ES5 스펙에 없고 ES6에 있음
 */
console.log("[코드1] prototype에 연결된 프로퍼티");
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function () { };
Book.prototype.setPoint = function () { };
let obj = new Book(100);

let result = Object.getPrototypeOf(obj);
for (let key in result) {
  console.log(key + ":" + result[key]); // getPoint:function () { } setPoint:function () { }
};
/**
 * 1. 파라미터에 인스턴스를 작성합니다.
 * 2. 인스턴스를 생성한 function 오브젝트의
 *    prototype에 연결된 프로퍼티를 반환
 * 3. 생성자 함수인 Book을 작성하거나
 *    Book.prototype을 작성하면 반환하지 않습니다.
 * 4. this.point는 prototype에
 *    연결되어 있지 않으므로 반환되지 않습니다.
 */

/**
 * getOwnPropertyNames()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - [프로퍼티 이름]
 *
 * - 오브젝트의 프로퍼티 이름을 배열로 반환
 * - 열거 가능 여부를 체크하지 않음
 * - 자신이 만든 프로퍼티가 대상
 *    - 다른 오브젝트에서 받은 프로퍼티는 제외 [코드2]
 */
console.log("[코드2] 프로퍼티 이름 반환");
let obj2 = {};
Object.defineProperties(obj2, {
  book: { value: "책" },
  point: { value: 123 }
});
let names = Object.getOwnPropertyNames(obj2);
for (let k = 0; k < names.length; k++) {
  console.log(names[k]);  // book point
};

/**
 * keys()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 - 대상 오브젝트
 * 반환 - 프로퍼티 이름
 *
 * - 열거 가능 프로퍼티 이름 반환
 *    - (enumerable: true) [코드3]
 */
console.log("[코드3] 열거 가능 프로퍼티 이름");
let obj3 = {};
Object.defineProperties(obj3, {
  book: {
    value: "책", enumerable: true
  },
  point: { value: 123 }
});
let names2 = Object.keys(obj3);
for (let k = 0; k < names2.length; k++) {
  console.log(names2[k]); // book
};
/**
 * 1. point는 enumerable: false이므로 반환되지 않음
 */