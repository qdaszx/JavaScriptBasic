/*
constructor

constructor는 생성자로 인스턴스를 생성하고 초기화합니다.

ES5까지는 constructor를 작성할 수 없었으나 ES6부터는 작성할 수 있습니다. [코드1]
*/
console.log("[코드1] 클래스에 constructor 작성");
class Point {
  constructor(point) {
    this.point = point;
  }
};
const obj = new Point(100);
/**
 * 인스턴스 생성 방법
 * 1. const obj = new Point(100);
 *    new 연산자가 Point가 클래스 오브젝트의 constructor를 호출합니다.
 *    파라미터 값인 100을 constructor로 넘겨줍니다.
 * 2. constructor(point){...}
 *    point 파라미터 값은 100이 됩니다.
 * 3. 엔진은 빈 오브젝트를 생성합니다.
 *    이것이 인스턴스입니다.
 * 4. 인스턴스에 프로퍼티 이름과 값을 설정하여 인스턴스 구조를 만듭니다.
 *    __proto__, __proto__.constructor 등
 * 5. constructor 블록의 코드를 실행합니다.
 * 6. this.point = point;
 *    this가 생성한 인스턴스를 참조합니다.
 *    인스턴스{}를 먼저 생성하므로 this로 참조할 수 있습니다.
 * 7. point는 인스턴스 프로퍼티가 됩니다.
 *    point 파라미터 값이 100이므로 point 프로퍼티 값은 100이 됩니다.
 * 8. 생성한 인스턴스를 반환합니다.
 */

/*
constructor 미작성

constructor를 작성하지 않은 상태에서 new 연산자로 인스턴스를 생성하면 prototype에 연결된 constructor가 호출됩니다. [코드2]
*/
console.log("[코드2] constructor를 작성하지 않음");
class Point2 {
  setPoint(point) {
    this.point = point;
  }
};
const obj2 = new Point2();
obj2.setPoint(100);
/**
 * 1. 엔진이 class 키워드를 만나 Point 클래스 오브젝트를 생성할 때
 *    constructor에서 클래스 전체를 참조하도록 환경을 만듭니다.
 * 2. constructor를 작성하지 않으면 prototype.constructor를 사용하므로 인스턴스를 생성할 수 있지만 인스턴스에 초깃값을 설정할 수 없습니다.
 * 3. 클래스에 constructor를 작성하면 prototype.constructor를 오버라이드하게 됩니다.
 */

/*
constructor 반환

constructor에 return을 작성하지 않으면 생성한 인스턴스를 반환합니다.

constructor에서 Number, String을 반환하면 이를 무시하고 인스턴스를 반환합니다. [코드3]

constructor에서 Object를 반환하면 인스턴스를 반환하지 않고 Object 반환 [코드4]
*/
console.log("[코드3] Number 반환");
class Point3 {
  constructor(point) {
    this.point = point;
    return point;
  }
};
const obj3 = new Point3(100);
console.log(obj3.point);  // 100
console.log(obj3 instanceof Point3);  // true
/**
 * 1. return point;
 *    constructor에서 파라미터로 받은 Number 타입의 100을 반환합니다.
 * 2. 이때, 100을 반환하지 않고 생성한 인스턴스를 반환합니다.
 * 3. console.log(obj.point)
 *    obj가 인스턴스이므로 프로퍼티로 값을 구할 수 있습니다.
 * 4. console.log(obj instanceof Point);
 *    obj가 Point 클래스로 만든 인스턴스이므로 true가 출력됩니다.
 */

console.log("[코드4] Object 반환");
class Point4 {
  constructor(point) {
    return { point: point };
  }
};
const obj4 = new Point4(100);
console.log(obj4);  // {point: 100}
console.log(obj4 instanceof Point4);  // false
/**
 * 1. return {point: point};
 *    constructor에서 Object를 반환합니다.
 * 2. 생성한 인스턴스를 반환하지 않고 return 표현식의 결과를 반환합니다.
 * 3. console.log(obj)
 *    return한 Object가 출력됩니다.
 * 4. console.log(obj instanceof Point);
 *    obj가 Point으로 만든 인스턴스가 아니므로 false가 출력됩니다.
 */