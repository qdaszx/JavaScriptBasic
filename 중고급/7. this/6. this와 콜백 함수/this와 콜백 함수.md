## this와 콜백 함수

```js
console.log("[코드1] 콜백 함수에서 this 사용");
var obj = { value: 100 };
var data = [5, 6, 7];

function callback(element, index, data) {
  return element + this.value;
}
function get(data) {
  return data.map(callback, obj);
}
var result = get(data);
console.log(result); // [105, 106, 107]
```

ES5의 map() 메소드, forEach() 메소드처럼 콜백 함수가 있는 메소드는 두 번째 파라미터에 this로 참조할 오브젝트를 작성합니다.(opt)

map 메소드에 기능은 callback 함수를 호출하면서 두번째 파라미터에 오브젝트가 작성되어 있으면 이것을 넘겨주는 것 입니다.

map 메소드가 callback함수가 무엇을 하는지 알 필요가 없습니다. 이것이 독릭성입니다.

callback 함수에서 처리할 수 있는 데이터는 다 파라미터로 넘겨줍니다.

this가 참조하는 오브젝트는 map 메소드 두번째 파라미터에서 넘겨줍니다.

> 데이터 관점에 접근을 원하는 것이 ES5의 map 메소드 등 7개의 메소드 입니다.

### 따라서 콜백 함수를 갖는 메소드 7개를 정확하게 파악해야 합니다.
