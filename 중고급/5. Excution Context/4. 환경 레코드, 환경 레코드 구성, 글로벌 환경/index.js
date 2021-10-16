/**
 * 환경 레코드
 *
 * 환경 레코드 구성
 *
 * - 환경 레코드를 구분하는 이유
 *    - 기록 대상에 따라 다르기 때문
 * - 선언적 환경 레코드
 *    - DER: Declarative Environment Record
 *    - function, 변수, catch 문에서 사용
 *    - 앞 절에서 환경 레코드에 설정한다고 했는데
 *      설명을 위한 것으로 실제로 여기에 설정
 * - 오브젝트 환경 레코드
 *    - OER: Object Environment Record
 *    - 글로벌 함수와 변수, with 문에서 사용
 *    - 정적이 아니라 동적이기 때문
 *
 * 실행 콘텍스트(EC): {
 *  렉시컬 환경 컴포넌트(LEC): {
 *    환경 레코드(ER): {
 *      선언적 환경 레코드(DER): {
 *        point: 123
 *      },
 *      오브젝트 환경 레코드(OER): {}
 *    },
 *    외부 렉시컬 환경 참조(OLER): {}
 *  },
 *  변수 환경 컴포넌트(VEC): {},
 *  this 바인딩 컴포넌트(TBC): {}
 * }
 */

/**
 * 글로벌 환경
 *
 * - Global Environment
 *    - 글로벌 오브젝트에서 사용
 *    - 렉시컬 환경 컴포넌트와 형태 같음
 * - 동적으로 함수와 변수 바인딩
 *    - 함수에서 var 키워드를 사용하지 않고
 *      변수를 선언하면
 *      글로벌 오브젝트에 설정되기 때문
 *    - 이런 이유로 오브젝트 환경 레코드 사용
 * - 외부 렉시컬 환경 참조 값은 null
 *
 * 실행 콘텍스트(EC): {
 *  글로벌 환경(GE): {
 *    환경 레코드(ER): {
 *      오브젝트 환경 레코드: 글로벌 오브젝트
 *    },
 *    외부 렉시컬 환경 참조(OLER): null
 *  }
 * }
 */