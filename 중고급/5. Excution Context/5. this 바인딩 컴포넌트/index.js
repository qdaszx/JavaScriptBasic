/**
 * this 바인딩 컴포넌트
 *
 * - 목적
 *    - this로, 함수를 호출한 오브젝트의 프로퍼티에 악세스
 *    - 예: this.propertyName
 * - 악세스 메커니즘
 *    - obj.book() 형태에서
 *    - this로 obj를 참조할 수 있도록
 *    - this 바인딩 컴포넌트에 obj 참조를 설정
 * - obj의 프로퍼티가 변경되면 동적으로 참조
 *    - 설정이 아닌 참조이기 때문
 */

/**
 * getPoint() 함수에서
 * 100이 반환되는 과정을 살펴봅니다.
 *
 * ------
 * 준비 단계
 * ------
 *
 * 1. 마지막 줄에서 obj.getPoint() 함수 호출
 * 2. 실행 콘텍스트 생성
 * 3. 3개의 컴포넌트 생성
 *    - 렉시컬/변수 환경 컴포넌트,
 *      this 바인딩 컴포넌트
 * 4. this 바인딩 컴포넌트에
 *    - getPoint()에서 this로 obj의 프로퍼티를
 *    - 사용할 수 있도록 바인딩
 *
 * ------
 * 초기화 단계
 * ------
 *
 * 5. 파라미터, 함수 선언문, 변수 선언 없음
 *
 * ------
 * 실행 단계
 * ------
 *
 * 6. return this.point; 실행
 * 7. this 바인딩 컴포넌트에서 point 검색
 *    - getPoint() 함수를 호출한 오브젝트가
 *    - this 바인딩 컴포넌트에 설정(참조)된 상태
 * 8. this 바인딩 컴포넌트에
 *    - point 프로퍼티가 있으므로 100을 반환
 *
 * ------
 * 추가 설명
 * ------
 *
 * 9. obj.getPoint()에서 obj의 프로퍼티가
 *    - this 바인딩 컴포넌트에 바인딩되도록
 *    - 의도적으로 설계해야 합니다.
 */
console.log("[코드1] this 바인딩");
var obj = { point: 100 };
obj.getPoint = function () {
  return this.point;
};
obj.getPoint();

// 실행 콘텍스트: {
//   렉시컬 환경 컴포넌트 = {
//     환경 레코드(ER): {
//       선언적 환경 레코드(DER): {},
//       오브젝트 환경 레코드(OER): {}
//     },
//     외부 렉시컬 환경 참조: {}
//   },
//   변수 환경 컴포넌트: { },
//   this 바인딩 컴포넌트(TBC): {
//     point: 100,
//     getPoint: function() { }
//   }
// }