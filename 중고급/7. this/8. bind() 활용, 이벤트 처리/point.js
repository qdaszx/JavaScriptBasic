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