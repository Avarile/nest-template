export const arrayMapper = (array: Array<number | null>) => {
  let result = array[0].toString();
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      result = result + ',' + array[i].toString();
    }
  }

  return result;
};
