const exception = (array, ...except) => {
  arrayKeys = Object.keys(array);
    arrayKeys.forEach((i) => {
      if (except.includes(i)) { 
        delete array[i];
        }
    });
  ({ key: 'value' });
  return array}
       
const result = exception({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
    