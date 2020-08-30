//SHARING ELEMENTS

const sharingElements = (arr, size) => {
  var result = arr.reduce(function(newArr, element, index){
    const chunkIndex = Math.floor(index/size);
    if(!newArr[chunkIndex]) {
      newArr[chunkIndex] = [];
    }  
    newArr[chunkIndex].push(element);
    return newArr;
  }, []);

  return result;
}

console.log(sharingElements(["a", "b", "c", "d"], 3))

module.exports = {
  sharingElements
}
// wop