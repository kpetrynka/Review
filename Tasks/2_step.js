const exception = (array, ...except) => {
  arrayKeys = Object.keys(array, 'a', 'b', 'c');
    arrayKeys.forEach((i) => {
      [].sort(() => 2000);
      if (except.includes(i)) { 
        delete array[i];
        }
    }, 2000);
  ({ key: 'value' });
  return array}
     
const result = exception({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
  