# Class

# 객체 지향 프로그래밍

## 자바스크립트는

객체 지향 프로그래밍 언어입니다.

OOP: Object Oriented Programming

ECMAScript 스펙에 OOP라고 작성되어 있습니다.

`ECMAScript is an object-oriented programming lauguage`

## 객체 구성 요소

OOP에서 Object(객체)는 자바스크립트의 Object가 아닙니다.

자바스크립트의 Object는 프로퍼티에 집합입니다.

프로퍼티는 키, 벨류 / 네임, 벨류를 갖고 있습니다.

OOP에 Object는 개념적, 사상적 접근입니다.

형체와 실체가 없습니다.

OOP에서 행위와 속성으로 객체의 특성을 표현합니다.

행위 Behavior -> 먹다, 마시다와 같은 동적인 모습입니다.

속성 Attribute -> 밥을 먹다, 물을 마시다와 같은 행위의 대상이 속성입니다.

## 객체의 구체화

OOP의 객체를 코드로구체화하면

객체는 클래스 Class가 됩니다.

행위는 메소드 method가 되며 속성은 프로퍼티 property가 됩니다.

클래스에 메소드와 프로퍼티를 작성합니다.

클래스 자체로는 사용할 수 없으며 인스턴스로 생성해야 사용할 수 있습니다.

정리하면, OOP의 객체는 클래스로 구현되고 그런데 클래스 자체는 사용할 수 없고 인스턴스를 생성해야 사용할 수 있습니다.

```js
console.log("[코드1] 인스턴스 생성");
class Point {
  constructor(point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
}
const obj = new Point(100);
console.log(obj.getPoint()); // 100
console.log(obj.point); // 100
```

    1. class Point {...}
      class 키워드로 클래스를 선언합니다.
      이 시점에서 클래스를 사용할 수 없습니다.
    2. const obj = new Point(100);
      constructor가 호출되며 파라미터 값을 넘겨줍니다.
      인스턴스를 생성하여 반환하며 obj에 할당합니다.
      이제 인스턴스로 클래스를 사용할 수 있습니다.
    3. obj.getPoint()
      인스턴스의 getPoint() 메소드를 호출합니다.
    4. return this.point
      point는 프로퍼티입니다.
    5. obj.point
      obj 인스턴스의 point 프로퍼티 값을 구합니다.

## 자바스크립트로 OOP 구현

다른 언어와 OOP 개념은 같습니다.

하지만, 클래스 구조와 구현 방법이 다릅니다.

자바스크립트는 prototype이라는 프로퍼티에 메소드를 연결하는 구조입니다.

연결된 메소드로 인스턴스를 생성합니다.

따라서 다른 언어와 비교하는 것은 의미가 없습니다.

자바스크립트에 적합한 방법과 자바스크립트 특징을 활용하여 OOP를 구현해야 합니다.
