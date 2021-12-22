const exception = (array, ...except) => {
  const arrayKeys = Object.keys(array);
    arrayKeys.forEach((i) => {
      if (except.includes(i)) { 
        delete array[i];
        }
    });
  return array;
}
       
const result = exception({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);
    