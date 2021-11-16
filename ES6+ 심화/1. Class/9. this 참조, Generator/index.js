/*
this 참조, Generator

인스턴스.메소드() 형태로 호출하면
  - 메소드에서 this가 인스턴스를 참조합니다.

static 메소드에서 this는 메소드가 속한 클래스를 참조합니다. [코드1]

static property [코드2]

constructor에서 this.constructor는 생성하는 인스턴스가 아니라 클래스 오브젝트를 참조합니다. [코드3]
*/
console.log("[코드1] 클래스 참조");
class Point {
  static setPoint(point) {
    this.value = point;
  }
};
Point.setPoint(100);
console.log(Point.value); // 100
console.log(new Point().value); // undefined
/**
 * 1. class Point {...}
 *    엔진이 class 키워드를 만나면 클래스 오브젝트로 만듭니다.
 * 2. this.value = point;
 *    this가 메소드를 호출한 오브젝트를 참조합니다.
 *    즉, this가 Point 클래스를 참조하므로 Point 클래스에 {value: 100} 형태로 설정됩니다.
 * 3. Point.value
 *    Point 클래스에서 value 값을 구하게 되며 100이 반환됩니다.
 * 4. new Point().value
 *    Point 인스턴스를 생성하고 value 값을 구하면 undefined가 반환됩니다.
 * 5. Point 클래스에 설정된 value 프로퍼티는 생성한 인스턴스에 포함되지 않습니다.
 */

console.log("[코드2] static property");
class Point2 {
  static value = 100;
};
console.log(Point2.value);  // 100
Point2.bonus = 300;
console.log(Point2.bonus);  // 300
console.log(new Point2().value);  // undefined
/**
 * 1. static value = 100;
 *    값을 static property에 설정합니다.
 * 2. ES2020 기준으로 스펙 제안 단계입니다.
 *    하지만 대부분의 브라우저에서 지원합니다.
 * 3. Point.value
 *    Point 클래스와 static 프로퍼티로 값을 구합니다.
 * 4. Point.bonus = 300;
 *    Point 클래스에 static 프로퍼티로 설정되며 {bonus: 300} 형태입니다.
 * 5. Point.bonus
 *    Point 클래스와 static 프로퍼티로 값을 구합니다.
 * 6. new Point().value
 *    Point 인스턴스를 생성하고 value 값을 구하면 undefined가 반환됩니다.
 * 7. Point 클래스의 static 프로퍼티는 생성한 인스턴스에 포함되지 않습니다.
 */


console.log("[코드3] this.constructor 참조");
class Point3 {
  constructor() {
    console.log(this.constructor.get())
  }
  static get() {
    return 100;
  }
};
new Point3(); // 100
/**
 * 1. this.constructor.get()
 *    this.constructor가 Point 클래스를 참조하므로 static 메소드를 호출할 수 있습니다.
 */

/*
Generator

클래스의 제너레이터 함수는
  - prototype에 연결됩니다.
  - 인스턴스로 호출해야 합니다. [코드4]
*/
console.log("[코드4] 제너레이터 함수");
class Point4 {
  *getPoint() {
    yield 10;
    yield 20;
  }
};
const gen = new Point4();
const obj4 = gen.getPoint();
console.log(obj4.next()); // {value: 10, done: false}
console.log(obj4.next()); // {value: 20, done: false}
console.log(obj4.next()); // {value: undefined, done: true}
/**
 * 1. const obj = get.getPoint();
 *    인스턴스의 제너레이터 함수를 호출하면 이터레이터 오브젝트를 생성하여 반환합니다.
 * 2. obj.next()
 *    obj.next()를 실행할 때마다 yield에서 결과처럼 반환합니다.
 */