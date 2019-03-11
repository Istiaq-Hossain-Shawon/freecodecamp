function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  for (let index = 0; index < arr2.length; index++) {
    var productName=arr2[index][1];
    var productQantity=arr2[index][0];

    if(!ExistProduct(arr1,productName)){
      arr1.push(arr2[index]);
    }else{
      for (let index = 0; index < arr1.length; index++) {
        if(productName==arr1[index][1]){
          arr1[index][0]=arr1[index][0]+productQantity;
        }
      }
    }
  }
  aarr1rr.sort(function(a,b){
    if(a.item1 == b.item1){
      return a.item2 > b.item2 ? 1 : a.item2 < b.item2 ? -1 : 0;
    }
  
    return a.item1 > b.item1 ? 1 : -1;
  });
  return arr1;
}
function ExistProduct(array, product) {
  // All inventory must be accounted for or you're fired!
  for (let index = 0; index < array.length; index++) {
    if(array[index][1]==product){
      return true;
    }
  }
  return false;
}
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));