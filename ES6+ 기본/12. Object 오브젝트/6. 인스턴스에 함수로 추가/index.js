/*
인스턴스에 함수로 추가

- new 연산자로 인스턴스를 생성하고
    - 인스턴스의 프로퍼티로 함수를 추가
    - 다른 인스턴스와 공유하지 않음

- 인스턴스에 추가한 후의 인스턴스 구조
*/
// 인스턴스에 추가한 후의 인스턴스 구조
{
  "ues strict"
  debugger;

  function Book() {
    this.point = 100;
  };
  Book.prototype.getPoint = function () {
    return this.point;
  };
  const obj = new Book();
  debugger;

  // 인스턴스 프로퍼티(함수)로 추가합니다.
  obj.setPoint = function (param) {
    this.point = param;
  };
  // obj를 펼치면 __proto__ 웨 setPoint가 표시됩니다.
  debugger;

  // ----------
  obj.setPoint(200);
  // 인스턴스의 함수 형태로 호출합니다.
  // 함수에서 this가 인스턴스를 참조합니다.

  console.log(obj.getPoint());
  // prototype에 연결된 메소드를 호출합니다.
  debugger;

  // -------
  const newObj = new Book();
  console.log(newObj.setPoint);
  /*
  1. 새로운 인스턴스를 생성하면
      - setPoint()를 인스턴스에서 사용할 수 없게 됩니다.
  2. 인스턴스의 프로퍼티를 설정했기 때문입니다.
  3. 인스턴스의 프로퍼티로 연결한 것과 prototype에 연결한 메소드의 차이입니다.
  */
  debugger;
}