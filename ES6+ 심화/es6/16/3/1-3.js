async function getData(option){
  for (let url of option){
    try {
      const res = await create(url);
      console.log(JSON.parse(res));
    } catch (xhr){
      console.log(xhr.status);
    };
  };
};
const option = [
  {url: "../file/data1.txt"},
  {url: "../file/νμΌμμ.txt"},
  {url: "../file/data3.txt"}
];
getData(option);
