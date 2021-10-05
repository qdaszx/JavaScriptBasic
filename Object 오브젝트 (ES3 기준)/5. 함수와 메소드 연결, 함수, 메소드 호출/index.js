/**
 * 함수와 메소드 연결
 * - 함수
 *    - 오브젝트에 연결
 *    - Object.create()
 * - 메소드
 *    - 오브젝트의 prototype에 연결
 *    - Object.prototype.toString()
 */

// 함수와 메소드를 구분해야 하는 이유는

/**
 * 함수, 메소드 호출
 * - 함수 호출 방법
 *    - Object.create(); [코드1]
 * - 메소드 호출 방법
 *    - Object.prototype.toString();
 *    - 또는 인스턴스를 생성하여 호출 [코드2]
 * - 함수와 메소드를 구분해야 하는 이유
 *    - JS 코드 작성 방법이 다르기 때문
 *    - 함수는 파라미터에 값을 작성하고
 *      메소드는 메소드 앞에 값을 작성 [코드3]
 */
console.log("[코드1] 함수 호출");
console.log(Object.create); //ƒ create() { [native code] }
console.log(Object.prototype.create); //undefined
/**
 * 1. Object에 create가 존재하므로 함수 출력
 * 2. Object.prototype에 create가
 *    존재하지 않으므로 undefined 출력
 */

console.log("[코드2] 메소드 호출");
console.log(Object.prototype.toString); // ƒ toString() { [native code] }

let obj = {};
console.log(obj.toString);  //ƒ toString() { [native code] }
/**
 * 1. Object.prototype에 toString이
 *    존재하므로 함수 출력
 * 2. 인스턴스를 사용하여 메소드를 호출할 때는
 *    prototype을 작성하지 않습니다.
 * 3. prototype에 연결된 메소드로
 *    인스턴스를 생성하기 때문
 */

console.log("[코드3] 함수의 파라미터에 값 작성");
console.log(String.fromCharCode(49, 65)); //1A
/**
 * 1. 함수 앞에 배열로 값을 작성하면
 *    Array 오브젝트의 함수가 호출되므로
 * 2. String 오브젝트의 함수를 호출하면서
 *    파라미터에 값을 작성해야 합니다.
 */

/**
 * 메소드와 메서드
 * - 메서드(method): [meθəd]
 * - 국립국어원 표준국어대사전
 *    - 메소드는 검색되고 메서드는 검색되지 않음
 *    - 프로그램과 관련지어 설명하고 있음
 *    - 강좌에서는 메소드로 표기
 */