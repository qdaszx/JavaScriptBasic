/**
 * prototype 프로퍼티 공유 시점
 *
 * 프로퍼티 공유 시점
 *
 * - 사용하는 시점이 prototype의 프로퍼티 공유
 * - prototype의 프로퍼티로 인스턴스를 생성하지만
 *    - 인스턴스의 프로퍼티는
 *      원본 prototype의 프로퍼티를 참조
 *    - 복사하여 인스턴스에 갖고 있는 개념이 아님
 * - 인스턴스의 메소드를 호출하면
 *    - 원본 prototype의 메소드를 호출
 * - 원본 prototype에 메소드를 추가하면
 *    - 생성된 모든 인스턴스에 추가한 메소드 사용 가능
 *    - 원본 prototype의 메소드를 호출하기 때문
 */

/**
 * 프로퍼티 공유 시점
 *
 * 1. var obj = new Book();
 *    - 인스턴스를 생성하여 obj에 할당
 * 2. console.log(obj.getPoint);
 *    - obj 인스턴스에 getPoint()가 없음
 * 3. Book.prototype.getPoint = function(){
 *      return this.point;
 * };
 *    - Book.prototype에 getPoint() 추가
 *    - 앞에서 생성한 obj 인스턴스에서
 *      getPoint()를 사용할 수 있습니다.
 * 4. var result = obj.getPoint();
 *    - 인스턴스를 생성할 때는 obj에
 *      getPoint가 없었지만
 *    - getPoint()를 호출하기 전에
 *      Book.prototype에 getPoint를 추가했으므로
 *      호출할 수 있습니다.
 * 5. return this.point;
 *    - 추가하더라도 this가 인스턴스를 참조
 * 6. 이런 특징을 활용하여
 *    - 상황(필요)에 따라 메소드를 추가
 *    - 역동적인 프로그램 개발 가능
 */
console.log("[코드1] 프로퍼티 공유 시점");
function Book() {
  this.point = 100;
}
var obj = new Book();
console.log(obj.getPoint); // undefined

Book.prototype.getPoint = function () {
  return this.point;
};
var result = obj.getPoint();
console.log(result); // 100