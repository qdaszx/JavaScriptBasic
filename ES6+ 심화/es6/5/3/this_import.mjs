import { point } from "./this_export.mjs"
// type="module" 파일에서 this는 undefined입니다.
document.getElementById("one").innerHTML = this;