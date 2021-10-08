/**
 * 프로퍼티 리스트 (ES5)
 *
 * 이름 - 개요
 * Array함수
 * isArray() - 배열 여부 반환; 배열이면 true, 아니면 false 반환
 *
 * Array.prototype
 * indexOf() - 지정한 값에 일치하는 엘리먼트 인덱스 반환
 * lastIndexOf() - indexOf()와 같으며, 마지막 인덱스 반환
 * forEach() - 배열을 반복하면서 콜백 함수 실행
 * every() - 반환 값이 false일 때까지 콜백 함수 실행
 * some() - 반환 값이 true일 때까지 콜백 함수 실행
 * filter() - 콜백 함수에서 true를 반환한 엘리먼트 반환
 * map() - 콜백 함수에서 반환한 값을 새로운 배열로 반환
 * reduce() - 콜백 함수의 반환 값을 파라미터 값으로 사용
 * reduceRight() - reduce()와 같음. 단, 배열의 끝에서 앞으로 진행
 */

/**
 * isArray()
 *
 * 구분 - 데이터(값)
 * object - Array 오브젝트
 * 파라미터 - 체크 대상
 * 반환 - 배열: true, 아니면: false
 *
 * - 체크 대상이 배열이면 true, 아니면 false
 * - isArray()는 함수 [코드1]
 * - isArray()는 함수가 필요한 이유 [코드2]
 */
console.log("[코드1] 배열 여부 체크");
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray(123));  // false
/**
 * 1. isArray()는 함수이므로
 * 2. Array.isArray() 형태로 호출
 */

console.log("[코드2]typeof 체크");
console.log(typeof { a: 1 }); // object
console.log(typeof [1, 2]); // object
console.log(typeof null); // object
/**
 * 1. typeof 연산자로 데이터 타입을 구하면
 * 2. 모두 object이므로 배열 여부 체크 불가
 * 3. [1, 2]는 Array.isArray() 사용
 * 4. null는 Object.is() 사용
 */