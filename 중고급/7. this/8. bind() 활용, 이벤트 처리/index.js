/**
 * bind() 활용, 이벤트 처리
 *
 * - 시나리오
 *    - "값 출력" 버튼을 클릭하면 값을 표시합니다.
 * - HTML 형태:
 *    <script src="point.js" defer></script>
 *    <button id=point>값 출력</button>
 * - 이벤트 처리의 어려움은
 *    - 이벤트를 설정할 때의 오브젝트를
 *    - 핸들러에서 this로 참조할 수 없다는 것
 * - bind()로 해결할 수 있습니다.
 * - document.getElementById("point");
 *    - button#point로 엘리먼트 오브젝트 생성
 * - node.onclick = this.show.bind(book, node);
 *    - show()는 onclick 이벤트의 핸들러
 *    - show()에서 this로 book 오브젝트를
 *      참조하기 위해 바인드
 *    - show() 파라미터 값으로 node를 넘겨줍니다.
 * - show: function(node, event) {}
 *    - button#point를 클릭했을 때 호출됩니다.
 *    - node: 이벤트를 설정한 엘리먼트
 *    - event: Event 오브젝트
 * - console.log(this.mypoint);
 *    - bind() 첫 번째 파라미터에
 *      book 오브젝트를 작성했으며
 *    - 이를 this로 참조하므로 123이 표시됩니다.
 */

/*
var book = {
  myPoint: 100,
  setEvent: function () {
    var node = document.getElementById("point");
    node.onclick = this.show.bind(book, node);
  },
  show: function (node, evnet) {
    console.log(node.textContent);
    console.log(this.myPoint);
  }
};
book.setEvent();
*/