/**
 * function 오브젝트 생성 과정
 *
 * 1. function sports(){...} 형태에서
 *    - function 키워드를 만나면
 * 2. 오브젝트를 생성하고 저장
 *    - {sports: {...}}
 *    - sports는 function 오브젝트 이름
 *    - 오브젝트{...}에 프로퍼티가 없는 상태
 * - 이제부터 빈 프로젝트를 채웁니다.
 * - sports 오브젝트 형태
 * 3. sports 오브젝트에 prototype 오브젝트 첨부
 * 4. prototype에 constructor 프로퍼티 첨부
 *    - prototype.constructor가 sports 오브젝트 참조
 * 5. prototype에 __proto__ 오브젝트 첨부
 *    - ES5 스펙에  __proto__가 기술되어 있지 않으며
 *      ES6 스펙에 기술
 *    - 엔진이 사용한다는 뉘앙스로 정의
 *    - ES5 기준으로 보면 표준이 아니지만
 *      2000년대 초부터 파이어폭스에서 사용
 * 6. 빌트인 Object.prototype의 메소드로
 *    - Object 인스턴스를 생성하여
 *    - prototype.__proto__에 첨부
 * 7. sports 오브젝트에  __proto__ 오브젝트 첨부
 *    - sports.__proto__구조가 됩니다.
 * 8. 빌트인 Function.prototype의 메소드로
 *    - function 인스턴스를 생성하여
 *    - sports.__proto__에 첨부
 * 9. sports 오브젝트 프로퍼티에 초기값 설정
 *  arguments, caller, length, name 프로퍼티
 */

/**
 * function 오브젝트 구조
 *
 * - function 오브젝트에 prototype이 있으며
 *    - constructor가 연결됩니다.
 *    - __proto__가 연결되어 있으며
 *    - Object 인스턴스가 연결됩니다.
 * - function 오브젝트에 __proto__가 있으며
 *    - Function 인스턴스가 연결됩니다.
 *    - Array이면 Array 인스턴스가 연결되고
 *    - String이면 String 인스턴스가 연결됩니다.
 */