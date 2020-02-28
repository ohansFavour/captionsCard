export const selectSixOfMany = arr => {
  return arr.filter((element, index) => index < 6);
};
export const selectTwentyOfMany = arr => {
  return arr.filter((element, index) => index < 20);
};

export const checkIfAvailableInArray = (name, array) => {
  const available = array.includes(name);
  let index = undefined;
  if (available) {
    index = array.indexOf(name) + 1;
  }
 
  return {
    available: available,
    id: index
  };
};

export const convertArrayOfObjects = (array, property) => {
  return array.map(obj => obj[property]);
};
export const normalizeArray = array => {
  return array.reduce((normalizedObject, currentItem) => {
    return {
      ...normalizedObject,
      [currentItem.id]: currentItem
    };
  }, {});
};

export const denormalizeObject = object => {
  if (!object) {
    return null;
  } else return Object.values(object);
};

export const splitString = string => {
  const removeWhitespaces = string.replace(/ /g, "");
  return removeWhitespaces.split(",");
};

export const filterArray = (array, string) => {
  return array.filter(element => element.includes(string));
};
export const filterCaptionsArray = (array, string) => {
  return array.filter(element => element.caption.includes(string));
};
export const changeValueOfIndex = (array,index) => {
  return array.map((element,ind) => {
    return index===ind+1? !element : element
  });
};
export const createInitialArray = size => {
  let array = [];

  for (let i = 1; i < size; i++) {
    array.push(false);
  }
  return array;
};
export const checkIfAnySelected = (array) => {
  return array.includes(true);
};
export const countAmountInArray = (array, item)=>{
  var count = 0;
  for(var i = 0; i<array.length; i++){
    if(array[i] === item){
      count++;
    }
  }
  return count;
}

export const getAllIndexes = (arr, item)=>{
  var indexes =[];
  var i=-1;
  while((i = arr.indexOf(item, i+1)) != -1){
    indexes.push(i);
  }
return indexes;
}

export const getCorrespondingArray =(array1, array2)=>{
  
  return array1.map((item)=> array2[item])
}