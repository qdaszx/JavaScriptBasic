// keep_one.mjs
import { point } from "./keep_export.mjs";
document.getElementById("one").innerHTML = "1. " + point.value; // 1. 초깃값
point.value = "값 변경";
