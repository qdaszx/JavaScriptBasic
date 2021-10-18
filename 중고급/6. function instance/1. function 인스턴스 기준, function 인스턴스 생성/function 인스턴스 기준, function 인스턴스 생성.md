# function instance

## function 인스턴스 기준

```js
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point + 200;
};
var obj = new Book(100);
obj.getPoint();
```

function 구분은 빌트인 Function 오브젝트가 있습니다. 이것은 엔진에서 제공하는 것 입니다.

function 키워드로 생성하는 function 오브젝트가 있습니다.

new 연산자로 생성하는 function 인스턴스가 있습니다.

그런데, function 오브젝트도 인스턴스입니다.

왜냐하면 빌트인 Function 오브젝트로 생성하기 때문입니다.

하지만 성격적으로는 인스턴스이지만 new 연산자로 생성한 인스턴스와 구분하기 위해서는 function 오브젝트로 표기하겠습니다.

일반적으로 말하는 함수가 function 오브젝트인데, new 연산자로 생성하는 인스턴스는 일반적으로 prototype에 프로퍼티를 작성합니다.

그래서 prototype만 보면 new 연산자로 인스턴스를 만들겠구나 짐작을 할 수 있습니다.

만약에 new 연산자로 인스턴스를 만들지 않는다면 이것은 특별한 케이스입니다.

## function 인스턴스 생성 순서, 방법

```js
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point + 200;
};
var obj = new Book(100);
console.log(obj.point); // 100
console.log(obj.getPoint()); // 300
```

위 코드는 function 인스턴스를 생성하는 전형적인 형태입니다.

function Book(point){...} 에서 Book 오브젝트를 만듭니다. 이때, Book.prototype이 만들어 집니다. 그리고 이것은 오브젝트입니다.

따라서 Book.prototype에 getPoint라는 프로퍼티를 연결하고 function(){}을 할당합니다.

var obj = new Book(100); new Book(100)을 실행하면 Book을 호출합니다. 실행되자마자 인스턴스를 생성하고 생성한 인스턴스에 코드를 실행해서 point 값을 설정하게 됩니다. 여기서 this는 생성한 인스턴스를 참조합니다.

그리고 Book.prototype에 연결되어 있는 메소드들을 생성한 인스턴스에 설정합니다.

이럴 때, `{getPoint: function(){}}`형태로 인스턴스에 설정합니다.

자동적으로 인스턴스를 리턴하게 되고, obj 변수에 할당되게 됩니다.

console.log(obj.point); obj 인스턴스에서 프로퍼티 이름으로 point를 찾습니다. 있으면 해당 값을 출력합니다.

console.log(obj.getPoint()); obj 인스턴스의 getPoint 메소드를 호출합니다. 그때 this는 obj를 참조하게 되는데 obj는 인스턴스이니까 프로퍼티 이름 point를 참조해서 100 + 200으로 값을 출력하게 됩니다.

Book()은 함수이고 getPoint()는 메소드입니다.

prototype에 연결되어 있으면 메소드이고 연결되어 있지 않으면 함수입니다.
