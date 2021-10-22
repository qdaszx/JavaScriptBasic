/**
 * 클로저(Closure) 논리
 *
 * 클로저
 *
 * - Closure
 *    - function 오브젝트를 생성할 때
 *      함수가 속한 스코프를 [[Scope]]에 설정하고
 *    - 함수가 호출되었을 때
 *      [[Scope]]의 프로퍼티를 사용하는 메커니즘
 * - [[Scope]]의 설정과 사용 방법을 이해하면
 *   클로저는 단지 논리적인 설명
 *
 * 클로저 논리
 *
 * - 실행 중인 function 오브젝트에
 *    - 작성한 변수, 함수를
 *      선언적 환경 레코드에 설정
 * - [[Scope]]의 변수, 함수를
 *    - 외부 렉시컬 환경 참조에 바인딩
 *    - 변수 이름으로 접근하여
 *      값을 사용하거나 변경할 수 있음
 *    - 함수를 호출할 수 있음
 */

/*
실행 콘텍스트: {
  렉시컬 환경 컴포넌트: {
    환경 레코드: {
      선언적 환경 레코드: { },
      오브젝트 환경 레코드: {}
    },
    외부 렉시컬 환경 참조: {}
  }
}
*/

/**
 * 클로저 논리 전개
 *
 * 1. var obj = book();
 *    - book()을 호출하면
 *      엔진은 아래 방법으로 처리
 *    - getPoint()의 클로저가 만들어집니다.
 *
 * ------
 * 실행 준비 단계
 * ------
 *
 * 2. 실행 콘텍스트(EC) 생성
 * 3. 3개의 컴포넌트 생성
 *    - 렉시컬/변수 환경 컴포넌트,
 *      this 바인딩 컴포넌트
 * 4. function 오브젝트의 [[Scope]]를
 *    - 외부 렉시컬 환경 참조에 바인딩
 *    여기까지 모습
실행 콘텍스트 = {
  렉시컬 환경 컴포넌트 = {
  환경 레코드: {
    선언적 환경 레코드: {},
    오브젝트 환경 레코드: {}
  },
  외부 렉시컬 환경 참조: {[[Scope]]}
  },
  변수 환경 컴포넌트 = {Same},
  tihs 바인딩 컴포넌트: {}
}
 * ------
 * 초기화 및 실행 단계
 * ------
 *
 * 5. var point; var getPoint;
 *    - 변수 이름을 선언적 환경 레코드에 설정
 * 6. var point = 100;
 *    - 선언적 환경 레코드의 point에 100 할당
 * 7. var getPoint = function(param){코드};
 *    - function 오브젝트 생성
 *    - 스코프를 [[Scope]]에 바인딩
 *    - point: 100이 [[Scope]]에 바인딩됩니다.
 *    getPoint 오브젝트 모습
 * 8. return getPoint;
 *    - getPoint function 오브젝트 반환
 * 9. var obj = book();
 *    - return getPoint에서 반환한
 *    - getPoint function 오브젝트를 obj에 할당
 * 10. console.log(obj(200));
 *    - obj()를 호출하면
 *      getPoint(200)함수가 호출됩니다.
 *    - 클로저와 관련된 부분만 추려보면
 *      아래 처리를 하게 됩니다.
 *
 * ------
 * 클로저와 관련된 부분
 * ------
 *
 * 11. 실행 콘텍스트(EC) 생성
 *    - getPoint 오브젝트의 [[Scope]]를
 *      외부 렉시컬 환경 참조에 바인딩
 *    - 파라미터 이름에 값을 매핑하고 결과를
 *      선언적 환경 레코드에 설정
 *    여기까지 모습
렉시컬 환경 컴포넌트 = {
  환경 레코드: {
    선언적 환경 레코드: {
      param: 200
    },
  },
  외부 렉시컬 환경 참조: {
    point: 100
  }
}
 *
 * 12. 함수 안의 코드 실행
 * 13. point = point + param;
 *    - point를 선언적 환경 레코드에서 식별자 해결
 *        - point가 없으므로
 *          외부 렉시컬 환경 참조에서 식별자 해결
 *        - point가 있으며 값이 100입니다.
 *    - param을 선언적 환경 레코드에서 식별자 해결
 *        - param이 있으며 값이 200입니다.
 *    - 100과 200을 더해
 *      외부 렉시컬 환경 참조의 point에 할당
 * 14. 변수와 선언적 환경 레코드에 없으면
 *     외부 렉시컬 환경 참조에서 식별자 해결
 * 15. 이것이 클로저 논리입니다.
 */
console.log("[코드1] 클로저 논리 전개");
function book() {
  var point = 100;
  var getPoint = function (param) {
    point = point + param;
    return point;
  };
  return getPoint;
};
var obj = book();
console.log(obj(200));  // 300

/**
 * [정리 시간]
 *
 * - 요구 사항
 *    - 값이 출력되는 논리를 설명하세요.
 */
function book2(bookParam) {
  var point = 100;
  function getPoint(pointParam) {
    point = point + bookParam + pointParam;
    return point;
  };
  return getPoint;
};
var obj2 = book2(200);
console.log(obj2(400)); // 700