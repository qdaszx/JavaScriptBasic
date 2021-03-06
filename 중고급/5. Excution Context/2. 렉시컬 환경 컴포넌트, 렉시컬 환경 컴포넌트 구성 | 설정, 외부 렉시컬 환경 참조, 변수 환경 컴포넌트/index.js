/**
 * 렉시컬 환경 컴포넌트
 *
 * - 함수와 변수의 식별자 해결을 위한 환경 설정
 * - 함수 초기화 단계에서 해석한
 *    - 함수와 변수를 {name: value} 형태로 저장
 *    - 이름으로 함수와 변수를 검색할 수 있게 됨
 * - 함수 밖의 함수와 변수 참조 환경 설정
 *    - 함수 밖의 함수와 변수를 사용할 수 있게 됨
 * - 스펙의 렉시컬 환경 개념
 */

/**
 * 렉시컬 환경 컴포넌트 구성
 *
 * - 렉시컬 환경 컴포넌트 생성
 *    - function, with, try-catch에서 생성
 * - 컴포넌트 구성
 *    - 환경 레코드
 *      ER: Environment Record
 *    - 외부 렉시컬 환경 참조
 *      OLER: Outer Lexical Environment Reference
 *
 * 실행 콘텍스트(EC): {
 *    렉시컬 환경 컴포넌트(LEC): {
 *      환경 레코드(ER): {
 *        point: 100
 *    },
 *    외부 렉시컬 환경 참조(OLER): {
 *      title: "책",
 *      getTitle: function(){}
 *    }
 *  }
 * }
 */

/**
 * 렉시컬 환경 컴포넌트 설정
 *
 * - 환경 레코드에
 *    - 함수 안의 함수와 변수를 기록
 * - 외부 렉시컬 환경 참조에
 *    - function 오브젝트의 [[Scope]]를 설정
 * - 따라서 함수 안과 밖의 함수와 변수를
 *   사용할 수 있게 됨
 */

/**
 * 외부 렉시컬 환경 참조
 *
 * - 스코프와 실행 중인 함수가 Context 형태이므로
 *    - 스코프의 변수와 함수를
 *    - 별도의 처리 없이 즉시 사용할 수 있음
 * - 실행 콘텍스트에서
 *    - 함수 안과 밖의 함수, 변수를
 *      사용할 수 있으므로
 *    - 함수와 변수를 찾기 위해
 *    - 실행 콘텍스트를 벗어 나지 않아도 됩니다.
 */

/**
 * 변수 환경 컴포넌트
 *
 * - 실행 콘텍스트 초기화 단계에서
 *    - 렉시컬 환경 컴포넌트와 같게 설정
 * - 이렇게 하는 이유는?
 *    - 초깃값을 복원할 때 사용하기 위한 것
 * - 함수 코드가 실행되면
 *    - 실행 결과를 렉시컬 환경 컴포넌트에 설정
 *    - 초깃값이 변하게 되므로 이를 유지하기 위한 것
 * 실행 콘텍스트(EC): {
 *    렉시컬 환경 컴포넌트(LEC): {},
 *    변수 환경 컴포넌트(VEC): {},
 *    this 바인딩 컴포넌트(TBC): {}
 * }
 */
