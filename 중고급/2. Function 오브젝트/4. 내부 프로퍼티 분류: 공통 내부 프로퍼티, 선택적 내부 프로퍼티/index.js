/**
 * 내부 프로퍼티 분류
 *
 * - 공통 프로퍼티, 선택적 프로퍼티
 * - 공통 프로퍼티
 *    - 모든 오브젝트에
 *      공통으로 설정되는 프로퍼티
 * - 선택적 프로퍼티
 *    - 오브젝트에 따라
 *      선택적으로 설정되는 프로퍼티
 *    - 해당되는 오브젝트에만 설정
 */

/**
 * 공통 내부 프로퍼티
 *
 * - 모든 오브젝트에 설정
 * 프로퍼티 이름 - 값 형태 - 개요
 * [[Prototype]] - Object 또는 Null - 오브젝트의 prototype
 * [[Class]] - String - 오브젝트 유형 구분
 * [[Extensible]] - Boolean - 오브젝트에 프로퍼티 추가 가능 여부
 * [[Get]] - any - 이름의 프로퍼티 값
 * [[GetOwnProperty]] - 프로퍼티 드스크립터 - 오브젝트 소유의 프로퍼티 디스크립터 속성
 * [[GetProperty]] - 프로퍼티 디스크립터 - 오브젝트의 프로퍼티 디스크립터 속성
 * [[Put]] - ... - 프로퍼티 이름으로 프로퍼티 값 설정
 * [[CanPut]] - Boolean - 값(value) 설정 가능 여부
 * [[HasProperty]] - Boolean - 프로퍼티의 존재 여부
 * [[Delete]] - Boolean - 오브젝트에서 프로퍼티 삭제 가능 여부
 * [[DefaultValue]] - any - 오브젝트의 디폴트 값
 * [[DefinedOwnProperty]] - Boolean - 프로퍼티 추가, 프로퍼티 값 변경 가능 여부
 */

/**
 * 선택적 내부 프로퍼티
 *
 * - 오브젝트에 따라 선택적 설정
 * 프로퍼티 이름 - 값 형태 - 개요
 * [[PrimitiveValue]] - 프리미티브 값 - Boolean, Date, Number, String 오브젝트에서 제공
 * [[Construct]] - Object - new 연산자로 호출되며 인스턴스를 생성
 * [[Call]] - any - 함수 호출
 * [[HasInstance]] - Boolean - 지정한 오브젝트로 생성한 인스턴스 여부
 * [[Scope]] - 렉시컬 환경 - Function 오브젝트가 실행되는 렉시컬(정적) 환경
 * [[FormalParameters]] - 문자열 리스트 - 호출된 함수의 파라미터 이름 리스트
 * [[Code]] - JS 코드 - 함수에 작성한 JS 코드 설정, 함수가 호출되었을 때 실행
 * [[TargetFunction]] - Object - Function 오브젝트의 bind()에 생성한 타깃 함수 오브젝트 설정
 * [[BoundThis]] - any - bind()에 바인딩된 this 오브젝트
 * [[BoundArguments]] - 리스트 - bind()에 바인딩된 아규먼트 리스트
 * [[Match]] - 매치 결과 - 정규표현식의 매치 결과
 * [[ParameterMap]] - Object - 아규먼트 오브젝트와 함수의 파라미터 매핑
 */