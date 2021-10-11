/**
 * 브리미티브 값
 * - Primitive Value
 *    - 언어에 있어 가장 낮은 단계의 값
 *    - var book = "책";
 *      "책"은 더 이상 분해, 전개 불가
 * - 프리미티브 타입
 *    - Number, String, Boolean: 인스턴스 생성 가능
 *    - Null, Undefined: 인스턴스 생성 불가
 *    - Object는 프리미티브 값을 제공하지 않음
 */

/**
 * 인스턴스의 프리미티브 값
 * - var obj = new Number(123);
 *    - 인스턴스를 생성하면
 *    - 파라미터 값을 인스턴스의
 *      프리미티브 값으로 설정
 * - 프리미티브 값을 갖는 오브젝트
 *    - Boolean, Data, Number, String [코드1]
 */
console.log("[코드1] 프리미티브 값 반환");
let obj = new Number(123);
console.log(obj + 200); // 323
/**
 * 1. new Number(123)로 인스턴스를 생성하여
 *    obj에 할당한 후
 *    obj에 값을 더하면 값이 더해 집니다.
 * 2. obj가 인스턴스이므로 값을 더할 수 없는데
 *    값이 더해지는 것은
 * 3. 123을 인스턴스의 프리미티브 값으로
 *    설정하기 때문입니다.
 * 4. 프리미티브 값을 갖는 인스턴스에 값을 더하면
 *    인스턴스의 프리미티브 값에 값을 더합니다.
 */

/**
 * valueOf()
 *
 * 구분 - 데이터(값)
 * data - Number 인스턴스, 숫자
 * 파라미터 - 사용하지 않음
 * 반환 - 프리미티브 값
 *
 * - Number 인스턴스의
 *   프리미티브 값 반환 [코드2]
 */
console.log("[코드2] 프리미티브 값 반환");
let obj2 = new Number("123");
console.log(obj2.valueOf());  // 123
/**
 * 1. obj의 프리미티브 값을 반환합니다.
 */