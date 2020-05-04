'use strict';

const findBestEmployee = function (employees) {
  const worker = { ...employees };
  let maxTask = 0;
  let nameWorker = '';

  for (const ind of Object.keys(worker))
    if (maxTask <= worker[ind]) {
      maxTask = worker[ind];
      nameWorker = ind;
    }
  return nameWorker;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);