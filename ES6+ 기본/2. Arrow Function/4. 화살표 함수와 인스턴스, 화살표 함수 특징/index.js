/*
화살표 함수와 인스턴스

- 인스턴스에서
    - 화살표 함수의 작성 위치에 따라
    - this가 참조하는 오브젝트가 다름

- prototype에 메소드로 작성 [코드1]
- prototype의 메소드 안에 작성 [코드2]
*/
console.log("[코드1] 메소드로 작성");
var point = 200;
const Point = function () {
  this.point = 100;
};
Point.prototype.getPoint = () => {
  console.log(this.point);
};
new Point().getPoint(); // 200
/**
 * 1. prototype에 화살표 함수를 연결하면
 *    함수 안에서 this가
 *    글로벌 오브젝트를 참조합니다.
 * 2. console.log(this.point)에서
 *    글로벌 오브젝트의 point 값인 200을 출력
 */

console.log("[코드2] 메소드 안에 작성");
const Point2 = function () {
  this.point = 100;
};
Point2.prototype.getPoint = function () {
  const add = () => this.point + 20;
  console.log(add());
  [1, 2].forEach((value) => {
    console.log(this.point + value);
  })
};
new Point2().getPoint();  // 120 101 102
/**
 * 1. prototype에 일반 함수를 연결하고
 *    함수 안에 화살표 함수를 작성한 형태입니다.
 * 2. getPoint()가 일반 함수이므로
 *    this가 생성한 인스턴스 참조합니다.
 * 3. 또한, 화살표 함수에서도
 *    this가 생성한 인스턴스를 참조합니다.
 * 4. 화살표 함수의 스코프인 getPoint()의
 *    this를 사용하기 때문입니다.
 */

/*
화살표 함수 특징

- function 대신 => 를 사용, 함수 표현식 형태
  prototype이 없으므로 함수가 가볍다.
  constructor가 없으므로
  new 연산자로 인스턴스를 생성할 수 없다.

- 화살표 함수에 this가 없다.
  화살표 함수로 Function 오브젝트를 생성할 때
  정적으로 화살표 함수가 속한 스코프의 this를
  화살표 함수에 바인딩한다.
  바인딩된 this 참조가 바뀌지 않으며
  화살표 함수에서 this로 사용한다.
  일반 함수는 call() 등으로 바꿀 수 있다.

- 메소드보다 함수로 사용하는 것이 효율성이 높다.
*/