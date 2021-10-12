/**
 * 실행 콘텍스트 형태
 * - book() 함수가 호출되면
 *    - show Function 오브젝트 생성
 *    - show의 [[Scope]]에 스코프 설정
 * - show() 함수가 호출되면 EC 생성
 *    - 함수 실행을 위한 Context 환경 구축
 *    - LEC, VEC, TBC 생성 첨부
 *    - LEC에 ER, OLER 첨부
 *    - ER에 DER, OER 첨부
 * - DER에 show()의 변수, 함수 기록
 * - OLER에 show의 [[Scope]]를 설정
 * - this 바인딩 컴포넌트에 this 참조 설정
 */

console.log("실행 콘텍스트 형태");
function book() {
  let point = 123;
  function show() {
    let title = "JS책";
    // getPoint();
    // this.bookAmount
  };
  function getPoint() {
    return point;
  };
  show();
};
book();

/**
 * show 실행 콘텍스트(EC): {
 *  렉시컬 환경 컴포넌트(LEC): {
 *    환경 레코드(ER): {
 *      선언적 환경 레코드(DER): {
 *        title: "JS책"
 *      },
 *      오브젝트 환경 레코드(OER): {}
 *    },
 *    외부 렉시컬 환경 참조(OLER): {
 *      point: 123,
 *      getPoint: function(){}
 *    }
 *  },
 *  변수 환경 컴포넌트(VEC): {},
 *  this 바인딩 컴포넌트(TBC): {
 *    글로벌 오브젝트(window)
 *  }
 * }
 */