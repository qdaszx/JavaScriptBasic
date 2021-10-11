/**
 * ES5 Object 특징
 * - ES5 Object에 함수가 추가됨
 *    - 메소드는 하나도 없음
 * - 빌트인 Object의 모든 메소드는
 *    - 대부분의 빌트인 오브젝트에 첨부됨
 *    - 빌트인으로 오브젝트를 생성하므로
 *      연결이 많이 발생
 * - 함수는 첨부되지 않으므로
 *    - 연결 부하를 줄일 수 있음
 */

/**
 * ES5 Object 함수
 * 이름 - 개요
 * defineProperty() - 프로퍼티 추가, 프로퍼티 속성 변경
 * defineProperties() - 다수의 프로퍼티 추가, 속성 변경
 * getPrototypeOf() - prototype에 연결된 프로퍼티 반환
 * getOwnPropertyNames() - 프로퍼티 이름을 배열로 반환
 * keys() - 열거 가능 프로퍼티 이름 반환
 * getOwnPropertyDescriptor() - 디스크립터 속성 반환
 * preventExtensions() - 프로퍼티 추가 금지 설정
 * isExtensible() - 프로퍼티 추가 금지 여부 반환
 * seal() - 프로퍼티 추가, 삭제 금지 설정
 * isSealed() - 프로퍼티 추가, 삭제 금지 여부 반환
 * freeze() - 프로퍼티 추가, 삭제/변경 금지 설정
 * isFrozen() - 프로퍼티 추가, 삭제/변경 금지 여부 반환
 */

/**
 * 프로퍼티 디스크립터
 * 이름 - 개요
 * value - [[Value]], 설정할 값
 * writable - [[Writable]], 값 변경 가능 여부
 * get - [[Get]], 값 반환 프로퍼티 함수
 * set - [[Set]], 값 설정 프로퍼티 함수
 * enumerable - [[Enumerable]], 프로퍼티 열거 가능 여부
 * configurable - [[Configurable]], 프로퍼티 삭제 가능 여부
 */