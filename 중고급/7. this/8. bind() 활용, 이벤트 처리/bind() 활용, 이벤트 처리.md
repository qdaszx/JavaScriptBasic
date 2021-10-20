## bind() 활용, 이벤트 처리

```js
var book = {
  myPoint: 100,
  setEvent: function () {
    var node = document.getElementById("point");
    node.onclick = this.show.bind(book, node);
  },
  show: function (node, evnet) {
    console.log(node.textContent);
    console.log(this.myPoint);
  },
};
book.setEvent();
```

### 시나리오 -> "값 출력" 버튼을 클릭하면 값을 표시합니다.

이벤트 처리의 어려움을 알아보자

이벤트를 설정할 때의 오브젝트를 핸들러 함수에서 this로 참조 할 수 없습니다.

이벤트 설정과 핸들러 함수를 같이 설정하는 이유는 이벤트 설정과 핸들러를 한 눈에 볼 수 있습니다.

어째든 핸들러 함수에서 this를 사용할 수 있어야 합니다.

왜냐하면 this를 사용하지 않으면 값을 악세스 하는 방법이 하나가 없어집니다.

함수에서 값을 처리하는 방법이 4가지 형태가 있었습니다.

1. 우선 파라미터로 넘겨준 값을 구할 수 있습니다.
2. 변수를 선언해서 값을 구할 수 있습니다.
3. 다른 메소드를 호출해서 값을 구할 수 있습니다.
4. **this로 참조해서 값을 구할 수 있습니다.**

이 코드에서 this는 프로퍼티 값을 공유하기 때문에 this를 사용해야 합니다.

bind 메소드로 this를 사용할 수 있게 되었습니다.

document.getElementById("point"); button #point 엘리먼트 오브젝트를 생성합니다.

node.onclick = this.show.bind(book, node); 엘리먼트 오브젝트를 이용해서 onclick 이벤트를 설정합니다.

여기서 this는 book를 나타내며 show는 핸들러 함수이고 bind 메소드로 묶었습니다.

핸들러 함수에서 this로 참조할 수 있는 오브젝트는 book 오브젝트로 첫 번째 파라미터를 넘겼고, 이벤트를 설정했던 엘리먼트 오브젝트를 두 번째 파라미터로 넘기면서 묶었습니다.

show: function(node, event){...}클릭 후 핸들러 함수가 실행됩니다.

핸들러 함수 첫번째 파라미터인 node가 bind 메소드에 묶었던 두 번째 파라미터 node로 설정됩니다.

event는 event 오브젝트입니다. 이 안에 많은 프로퍼티가 있습니다.

node.textContent로 값 출력의 텍스트를 출력합니다. 이때 node는 bind 메소드에서 받은 node 입니다. 이처럼 파라미터로 넘겨줄 수 있습니다. 이것이 bind 메소드의 또하나의 특징입니다.

this는 파라미터 값을 넘겨주지 않고 시스템이 넘겨주는 것이다. 이때 this는 book 오브젝트를 참조하게 되는 것 입니다.

this.mypoint는 book.mypoint와 같습니다.

---

> 이전에는 bind 메소드로 function 오브젝트를 만들었습니다. 그리고 그것을 호출했습니다. 그러나 호출하는 역할을 이벤트가 해주는 것 입니다. 이와 같이 이벤트 처리할 때 bind 메소드를 사용하면 심플하게 다양한 값들을 핸들러 함수에서 사용할 수 있습니다.
