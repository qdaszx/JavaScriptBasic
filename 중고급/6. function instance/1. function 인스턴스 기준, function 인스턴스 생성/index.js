/**
 * function instance
 *
 * function 인스턴스 기준
 *
 * - function 구분
 *    - 빌트인 Function 오브젝트
 *    - function 오브젝트: function 키워드로 생성
 *    - function 인스턴스: new 연산자로 생성
 * - function 오브젝트도 인스턴스
 *    - 빌트인 Function 오브젝트로 생성하기 때문
 *    - 성격적으로는 인스턴스이지만
 *    - new 연산자로 생성한 인스턴스와
 *      구분하기 위해 강좌에서는 function 오브젝트로 표기
 * - new 연산자로 생성하는 인스턴스는
 *    - 일반적으로 prototype에 프로퍼티를 작성
 */
console.log("[코드1] function 인스턴스 생성");
function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function () {
  return this.point + 200;
};
var obj = new Book(100);
obj.getPoint();

/**
 * 인스턴스 생성 순서, 방법
 *
 * 1. function Book(point){...}
 *    - Book 오브젝트를 생성합니다.
 *    - Book.prototype이 만들어 집니다.
 * 2. Book.prototype.getPoint = function(){}
 *    - Book.prototype에 getPoint를 연결하고
 *      function(){}을 할당
 *    - Book.prototype이 오브젝트이므로
 *      프로퍼티를 연결할 수 있습니다.
 * 3. var = obj = new Book(100);
 *    - Book()을 실행하며
 *      인스턴스를 생성하고
 *      생성한 인스턴스에 point 값을 설정
 *    - Book.prototype에 연결된 프로퍼티를
 *      생성한 인스턴스에 할당
 * 4. console.log(obj.point);
 *    - obj 인스턴스에서 프로퍼티 이름으로
 *      값을 구해 출력
 * 5. console.log(obj.getPoint());
 *    - obj 인스턴스의 메소드를 호출
 * 6. return this.point + 200;에서
 *    - this가 obj 인스턴스를 참조
 * 7. 강좌의 함수/메소드 사용 기준
 *    - Book(): 함수
 *    - getPoint(): 메소드, prototype에 연결
 */