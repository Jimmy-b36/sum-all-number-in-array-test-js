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

module.exports = sumItems;
