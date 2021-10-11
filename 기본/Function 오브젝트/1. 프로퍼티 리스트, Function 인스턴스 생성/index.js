/**
 * 프로퍼티 리스트
 * 이름 - 개요
 * Function
 * new Function() - 인스턴스 생성
 * Function() - 인스턴스 생성
 *
 * Function 프로퍼티
 * length - 함수의 파라미터 수
 *
 * Function.prototype
 * constructor - 생성자
 * call() - 함수 호출
 * apply() - 함수 호출: 배열을 파라미터로 사용
 * toString() - 함수를 문자열로 반환
 * bind() - 새로운 오브젝트를 생성하고 함수 실행
 */

/**
 * new Function()
 * 구분 - 데이터(값)
 * 파라미터 - 파라미터opt
 *        - 실행 가능한 JS 코드opt
 * 반환 - 생성한 Function 인스턴스
 *
 * - Function 인스턴스 생성
 * - 파라미터에 문자열로
 *   함수의 파라미터와 함수 코드 작성
 *    - let obj = new Function("book", "return book;");
 *    - obj("JS 책");
 * - 파라미터 수에 따라 인스턴스 생성 기준이 다름
 */

/**
 * new Function()
 * - 파라미터 2개 이상 작성
 *    - 마지막 파라미터에
 *      함수에서 실행할 함수 코드 작성
 *    - 마지막을 제외한 파라미터에 이름 작성 [코드1]
 * - 파라미터 하나 작성
 *    - 함수에서 실행할 함수 코드 작성
 *    - 파라미터가 없을 때 사용 [코드2]
 * - 파라미터를 작성하지 않으면
 *    - 함수 코드가 없는 Function 인스턴스 생성
 */
console.log("[코드1] 파라미터 2개 이상 작성");
let obj = new Function("one", "two", "return one + two;");
console.log(obj(100, 200)); // 300
/**
 * 1. 파라미터를 3개 작성했으며
 * 2. 1번째와 2번째는 호출한 곳에서 넘겨준 값을
 *    매핑할 때 파라미터 이름을 작성
 * 3. 3번째는 호출되었을 때 실행될 함수 코드
 */

console.log("[코드2] 파라미터 하나 작성");
let obj2 = new Function("return 1 + 2;");
console.log(obj2());  // 3

/**
 * Function()
 * 구분 - 데이터(값)
 * 파라미터 - 파라미터opt
 *       - 실행 가능한 JS 코드opt
 * 반환 - 생성한 Function 인스턴스
 *
 * - Function 인스턴스 생성
 * - 처리 방법과 파라미터 작성이
 *   new Function()과 같음
 * - 단지 new 연산자를 사용하지 않은 것
 */