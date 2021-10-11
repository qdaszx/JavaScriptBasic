/**
 * 빌트인 오브젝트 구조
 * - 오브젝트 이름(Object, String, Number...)
 * - 오브젝트.prototype
 *    - 인스턴스 생성 가능 여부 기준
 *    - 프로퍼티를 연결하는 오브젝트
 * - 오브젝트.prototype.constructor
 *    - 오브젝트의 생성자
 * - 오브젝트.prototype.method
 *    - 메소드 이름과 함수 작성
 * - 오브젝트 구조
 */

/**
 * 1. 오브젝트 이름이 필요하다
 * 2. 오브젝트.prototype이 가능하면 인스턴스 생성이 가능하다
 * 3. 그 후 프로퍼티를 연결한다 constructor, method
 * 4. 오브젝트.prototype.constructor는 생성자 함수라는 것
 * 실제로 new Number()에서 생성자 함수를 호출하면 엔진은 constructor를 호출하여 인스턴스를 만든다.
 * 5. 오브젝트.prototype.method 메소드 이름과 함수로 연결
 */