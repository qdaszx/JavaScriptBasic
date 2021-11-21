function create(param) {
  return new Promise((resolve) => {
    resolve(param);
  });
}
async function getPoint(option) {
  const value = await create(option);
  console.log(value);
}
getPoint({ point: 100 }); // {point: 100}

async function getPoint2(option) {
  const value = (await option.point) + 200;
  console.log(value);
}
getPoint2({ point: 100 });

function create2(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint3(option) {
  try {
    await create2(option);
  } catch (error) {
    console.log(error);
  }
}
getPoint3({ point: 100 });

function create3(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint4(option) {
  await create3(option)
    .catch((value) => {
      return 300;
    })
    .then((param) => {
      console.log(param);
    });
}
getPoint4({ point: 100 });

function create4(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint5(option) {
  const value = await create4(
    option).catch((value) => {
      return 300;
    })
  console.log(value);
}
getPoint5({ point: 100 });

const list = [10, 20];
async function show() {
  for await (const value of list) {
    console.log(value);
  }
}
show();

async function* point() {
  yield 10;
  yield 20;
}
async function show2() {
  for await (const value of point()) {
    console.log(value);
  }
}
show2();