export const deepCopy = (obj: any): any => {
    let result;
    if (Array.isArray(obj)) {
      result = obj.map(deepCopy);
    } else if (typeof obj === 'object' && obj !== null) {
      result = Object.keys(obj).reduce((acc, key) => {
        if (typeof key !== 'symbol') {
          acc[key] = deepCopy(obj[key as keyof typeof obj]);
        }
        return acc;
      }, {} as {[K in keyof typeof obj]: typeof obj[K]});
    } else {
      result = obj;
    }
    return result;
  }