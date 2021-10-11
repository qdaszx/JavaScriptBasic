/**
 * toString()
 *
 * 구분 - 데이터(값)
 * data - 문자열, String 인스턴스
 * 파라미터 - 사용하지 않음
 * 반환 - 변환한 값
 *
 * - data 위치의 값을 String 타입으로 변환 [코드1]
 */
console.log("[코드1] toString()");
let value = 123;
let result = value.toString();
console.log(typeof result); // string
/**
 * 1. 123을 String 타입으로 변환하므로
 *    [실행 결과]에 string에 출력됩니다.
 * 2. [코드1] 예제는 String 오브젝트 설명에
 *    적절하지 않습니다.
 * 3. 무엇 때문일까요?
 *    동영상을 멈추고 생각해보기 바랍니다.
 * 4. 다음 페이지에서 이유를 다룹니다.
 */

/**
 * toString()
 * - "123".toString();
 *    - String 타입을 String 타입으로 변환
 *    - 의미가 없다?
 * - toString() 함수가 필요한 이유
 * - __proto__:
 *    toString();
 *    __proto__
 *      toString();
 * - 그래서 대부분의 빌트인 오브젝트에
 *    toString()과 valueOf()가 있습니다.
 */

/**
 * JS 함수 호출 구조
 * - 우선, 데이터 타입으로
 *    - 오브젝트를 결정하고
 *    - 오브젝트의 함수를 호출합니다. [코드2]
 * - toString(123)
 *    - 123을 파라미터에 작성 [코드3]
 */
console.log("[코드2] JS 함수 호출 구조");
let value2 = 123;
value2.toString();
"123".toString();
/**
 * 1. value.toString()은
 * 2. Number 오브젝트의 toString()을 호출합니다.
 * 3. "123".toString()은
 * 4. String 오브젝트의 toString()을 호출합니다.
 */

console.log("[코드3] 파라미터에 값 작성");
let result2 = toString(123);
console.log(result2); // [object Undefined]
/**
 * 1. Object 오브젝트의 toString()이 호출됩니다.
 * 2. 123을 오브젝트로 간주하여
 *    Object 형태를 문자열로 반환합니다.
 */