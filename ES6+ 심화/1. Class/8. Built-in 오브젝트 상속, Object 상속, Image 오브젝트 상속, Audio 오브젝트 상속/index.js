/*
Built-in. DOM 오브젝트 상속

빌트인 오브젝트를 상속받을 수 있습니다.
  - 인스턴스가 빌트인 오브젝트의 특징을 갖게 되며
  - this로 빌트인 오브젝트에 접근할 수 있습니다.
  - extends 키워드로 구현합니다. [코드1]

코드 프로세스
  - class Point extends Array {...}
  - const obj = new Point();
  - constructor() {super()}
  - obj.push(10, 20, 30);
  - obj.getTotal()
  - for (const value of this) {...}
*/
console.log("[코드1] 빌트인 오브젝트 상속");
class Point extends Array {
  constructor() {
    super();
  }
  getTotal() {
    let total = 0;
    for (const value of this) {
      total += value;
    };
    return total;
  }
};
const obj = new Point();
obj.push(10, 20, 30);
console.log(obj.getTotal());  // 60
/**
 * 1. class Point extends Array {...}
 *    빌트인 Array 오브젝트를 상속받습니다.
 * 2. constructor(){super();}
 *    빌트인 오브젝트의 constructor를 호출합니다.
 *    생성하는 인스턴스의 __proto__.__proto__에 Array.prototype의 메소드가 설정됩니다.
 * 3. obj.push(10, 20, 30);
 *    obj가 Point 인스턴스이지만 Array 오브젝트를 상속받았으므로 push() 메소드를 호출할 수 있습니다.
 * 4. 인스턴스 프로퍼티로 {0: 10, 1: 20, 2: 30, length: 3}이 설정됩니다.
 * 5. obj에 [10, 20, 30]이 있으며 obj.__proto__에 getTotal()이 있고 obj.__proto__.__proto__에 Array 오브젝트의 메소드가 있으므로 값과 메소드를 모두 사용할 수 있습니다.
 * 6. for (const value of this) {...}
 *    this가 obj 인스턴스를 참조하며 Array[10, 20, 30]은 이터러블 오브젝트이므로 for-of로 반복할 수 있습니다.
 */

/*
Object 상속

Object는 클래스가 아니므로
  - 다른 Object를 상속받을 수 없지만
  - 상속받으면 __proto__ 구조가 되는 것을 활용하여 상속을 구현할 수 있습니다.

Object 상속
  - Object.setPrototypeOf()으로 __proto__ 구조를 만듭니다. [코드2]
*/
console.log("[코드2] Object 상속");
const Book2 = {
  getTitle() {
    console.log("Book");
  }
};
const Point2 = {
  getTitle() {
    super.getTitle();
  }
};
Object.setPrototypeOf(Point2, Book2);
Point2.getTitle();  // Book
/**
 * 1. Book과 Point는 Object입니다.
 *    getTitle()은 함수이며 각 Object에 있습니다.
 * 2. Object.setPrototypeOf(Point, Book);
 *    Point에 getTitle()이 있고 Point.__proto__에 Book의 getTitle()이 있는 구조가 됩니다.
 * 3. Point.getTitle();
 *    Point 오브젝트의 getTitle()이 호출됩니다.
 * 4. super.getTitle();
 *    super()가 아니라 super입니다.
 * 5. super는 한 단계 아래의 __proto__를 참조합니다.
 *    아래는 __proto__에 연결되어 있다는 뜻입니다.
 *    Book 오브젝트의 getTitle()을 호출합니다.
 */

/*
Image 오브젝트 상속

Image 오브젝트 상속 코드 [코드3]

super();
  - Image 오브젝트의 constructor를 호출

this.src, this.alt, this.title
  - Image 오브젝트를 this로 참조
  - Image 속성에 값을 할당합니다.
*/
console.log("[코드3] Image 오브젝트 상속");
class Home extends Image {
  constructor() {
    super();
  };
  setAttr() {
    this.src = "./rainbow.png";
    this.alt = "집과 나무가 있고 " + "무지개가 있는 모습";
    this.title = "무지개";
  }
};
const obj3 = new Home();
obj3.setAttr();
document.querySelector("#show").appendChild(obj3);

/*
Audio 오브젝트 상속

Audio 오브젝트 상속 [코드4]

super();
  - Audio 오브젝트의 constructor를 호출

this.src, this.controls
  - Audio 오브젝트를 this로 참조
  - Audio 속성에 값을 할당합니다.
  - 파라미터 값을 받아 속성값을 설정하면 범융 클래스로 사용할 수 있습니다.
*/
console.log("[코드4] Audio 오브젝트 상속");
class Music extends Audio {
  constructor() {
    super();
  };
  setAttr(src, controls, muted, loop) {
    this.src = src;
    this.controls = controls;
    this.muted = muted;
    this.loop = loop;
  }
};
const obj4 = new Music();
const src = "오디오 주소";
obj4.setAttr(src, true, true, true);
document.querySelector("#show").appendChild(obj4);