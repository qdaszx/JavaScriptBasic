const BASE_URL = "http://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=bW23yTQDBoAIwH6r7A%2FL%2BPuYivYcdTh%2F%2FOvWVIVWuNISPa7Ga%2B%2BhCZ%2BAhWU0BHAuSUJWXu%2BMAF2NmH0%2F%2FNLmxQ%3D%3D"

const $ = (selector) => document.querySelector(selector);

function create(param) {
  const obj = new XMLHttpRequest();
  obj.onload = function () {
    if (this.status === 200) {
      const fromJSON = JSON.parse(this.response);
      fromJSON.data.map((item, index) => {
        return $("#main").innerHTML += `
        <tr class="info + ${index + 1}">
          <td align="center">${index + 1}</td>
          <td>${item.address}</td>
          <td>${item.facilityName}</td>
          <td>${item.centerName}</td>
        </tr>
        `
      });
    }
  }

  obj.open("GET", param);
  obj.send();
};

create(BASE_URL)