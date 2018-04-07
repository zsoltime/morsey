// Check if an array or object values has duplicate values
export const hasDuplicateValues = (obj) => {
  if (typeof obj !== 'object') {
    return undefined;
  }

  const array = Array.isArray(obj) ? obj : Object.values(obj);

  return new Set(array).size !== array.length;
};
