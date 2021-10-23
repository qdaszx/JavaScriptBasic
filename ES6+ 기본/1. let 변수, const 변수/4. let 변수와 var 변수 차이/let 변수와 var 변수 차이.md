# let 변수와 var 변수 차이

for 문을 반복할 때마다 var 변수는 스코프를 갖지 않지만, let 변수는 스코프를 가집니다.

```js
console.log("[코드1] var 변수와 스코프");
var node = document.querySelector(".sports");
for (var k = 0; k < node.children.length; k++) {
  node.children[k].onclick = function (event) {
    event.target.style.backgroundColor = "yellow";
    console.log(k); // 3 3 3
  };
}
```

var 변수는 전체를 스코프로 갖습니다

```js
console.log("[코드2] let 변수와 스코프");
var node2 = document.querySelector(".sports2");
for (let k = 0; k < node2.children.length; k++) {
  node2.children[k].onclick = function (event) {
    event.target.style.backgroundColor = "red";
    console.log(k); // 0 1 2
  };
}
```

let 변수는 블록 단위로 스코프를 갖습니다.

> var, let 서로 장단점이 있기 때문에 고려해서 사용하면 된다.
