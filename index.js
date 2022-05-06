function sumItems(array) {
  let i = array.length;
  console.log(i, array[i - 1]);

  if (!i) {
    console.log("finito");
    return 0;
  }

  let value = array[i - 1];
  if (Array.isArray(value)) {
    value = sumItems(value);
    console.log("array value =", value);
  }

  const newArray = array.slice(0, -1);
  return value + sumItems(newArray);
}

// const array = [1, 2, [3, 4], 5];
// // const array = [1, 2, 3];
// const result = sumItems(array);
// console.log(result);
module.exports = sumItems;
