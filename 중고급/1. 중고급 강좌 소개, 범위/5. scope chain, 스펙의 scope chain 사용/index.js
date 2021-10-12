/**
 * ES3: scope chain
 * - scope chain은
 *    - 실행 콘텍스트와 관련이 있으며
 *    - 식별자 해결을 위해 사용
 * - scope chain은
 *    - 식별자를 검색하기 위한
 *    - {name: value} 리스트 [++]
 */

/**
 * - 함수가 호출되면
 *    - scope를 생성하고
 *    - 함수의 변수와 함수를
 *      {name: value} 형태로 설정
 * - 생성한 scope를
 *    - scope chain에 연결하고
 *    - scope chain에서 식별자를 해결
 * - 동적 처리
 * - ES3의 실행 콘텍스트 환경
 *    - scope chain
 *    - Activation Object
 */

/**
 * 스펙의 scope chain 사용
 *
 * - 스펙의 scope chain 사용 횟수
 *    - ES3: 37
 *      ES5: 1
 *      ES6: 0
 * - ES5: 바뀐 것을 나타내기 위해 사용
 *    - Lexical Environment의
 *      Declarative Environment Record에
 *      함수의 변수와 함수 이름을 바인드
 *    - scope chain을 사용하지 않으며
 *      DER에서 변수와 함수 이름을 검색
 */