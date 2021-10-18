/**
 * 인스턴스 프로퍼티
 *
 * - prototype에 연결된 프로퍼티도
 *    - 인스턴스 프로퍼티가 됩니다.
 *    - 직접 인스턴스에 연결된
 *      프로퍼티와 차이 있음
 * - 인스턴스의 프로퍼티를
 *    - prototype으로 만든
 *    - 인스턴스 프로퍼티 보다 먼저 사용
 * - 인스턴스마다 값을 다르게 가질 수 있음
 *    - 인스턴스를 사용하는 중요한 목적
 */
// obj 인스턴스 = {
//   point: 100,
//   getPoint: function () { },
//   __proto__: {
//     getPoint: function(){}
//   }
// }

/**
 * 인스턴스 프로퍼티 우선 사용
 *
 * 1. Book.prototype.getPoint = function(){return 100;};
 *    - prototype에 getPoint를 연결합니다.
 *    - 인스턴스의 getPoint()를 호출하면 100을 반환
 * 2. obj.getPoint = function(){return this.point;};
 *    - 생성한 인스턴스에 getPoint를 연결합니다.
 *    - 함수가 호출되면 200을 반환
 * 3. obj 인스턴스 구성 형태
obj 인스턴스 = {
  getPoint: function(){return this.point;},
  __proto__: {
    getPoint: function(){return 100;}
  }
}
 *
 * 4. obj.getPoint();
 *    - obj 인스턴스으 getPoint() 호출
 *    - prototype의 getPoint()가 호출되지 않고
 *      인스턴스의 getPoint()가 호출됨
 *    - 인스턴스에 연결한 프로퍼티를
 *      먼저 사용하기 때문
 * 5. 인스턴스 프로퍼티는 공유되지 않음
 * 6. Class 접근
 *    - 설계가 중요
 *    - OOP 개념 이해 필요
 *
 */
console.log("[코드1] 인스턴스 프로퍼티 우선 사용");
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function () {
  return 100;
};
var obj = new Book(200);

obj.getPoint = function () {
  return this.point;
};
console.log(obj.getPoint());  // 200