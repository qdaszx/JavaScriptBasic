/**
 * Execution Context
 *
 * 실행 콘텍스트
 *
 * - Execution Context
 *    - 함수가 실행되는 영역, 묶음
 *    - 함수 코드를 실행하고 실행 결과를 저장
 *    - 스펙상의 사양
 *    - 실행 콘텍스트 스펙
 * - music("음악")으로 함수를 호출하면
 *    - 엔진은 실행 콘텍스트를 생성하고
 *    - 실행 콘텍스트 안으로 이동합니다.
 * - 실행 콘텍스트 실행 단계
 *    - 준비 단계, 초기화 단계, 코드 실행 단계
 *
 * - Execution Context 생성 시점
 *    - 실행 가능한 코드를 만났을 때
 * - 실행 가능한 코드 유형
 *    - 함수 코드, 글로벌 코드, eval 코드
 * - 코드 유형을 분리한 이유
 *    - 실행 콘텍스트에서 처리 방법과
 *      실행 환경이 다르기 때문
 *    - 함수 코드: 렉시컬 환경
 *    - 글로벌 코드: 글로벌 환경
 *    - eval 코드: 동적 환경
 */
console.log("[코드1] 실행 콘텍스트");
function music(title) {
  var musicTitle = title;
};
music("음악");

/**
 * 실행 콘텍스트 상태 컴포넌트
 *
 * - 실행 콘텍스트 상태를 위한 오브젝트
 *    - 실행 콘텍스트 안에 생성
 * - 상태 컴포넌트 유형
 *    - 렉시컬 환경 컴포넌트(LEC):
 *      Lexical Environment Component
 *    - 변수 환경 컴포넌트(VEC):
 *      Variable Environment Component
 *    - this 바인딩 컴포넌트(TBC):
 *      This Binding Component
 *
 * 실행 콘텍스트(EC): {
 *    렉시컬 환경 컴포넌트(LEC): {},
 *    변수 환경 컴포넌트(VEC): {},
 *    this 바인딩 컴포넌트(TBC): {}
 * }
 */