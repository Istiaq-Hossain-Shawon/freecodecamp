function permAlone(str) {
  
  var charecter=str.split("");
  heapPermutation(charecter, charecter.length, charecter.length) ;
  str=data.length;
  return str;

}
var data=[];
console.log(permAlone('aabb'));

function heapPermutation(array, arraySize, arrayLength) 
    { 
      
        // if size becomes 1 then prints the obtained 
        // permutation 
        if (arraySize == 1) {
          var outputOfArray=printArr(array,arrayLength);
          if(outputOfArray.length!=0){
            data.push(outputOfArray); 
          }
        }
   
        for (var i=0; i<arraySize; i++) 
        { 
            heapPermutation(array, arraySize-1, arrayLength); 
   
            // if size is odd, swap first and last 
            // element 
            if (arraySize % 2 == 1) 
            { 
                var temp = array[0]; 
                array[0] = array[arraySize-1]; 
                array[arraySize-1] = temp; 
            } 
   
            // If size is even, swap ith and last 
            // element 
            else
            { 
                var temp = array[i]; 
                array[i] = array[arraySize-1]; 
                array[arraySize-1] = temp; 
            } 
        } 
    }
    function  printArr(array, arrayLength) 
    { 
      var output=[];
        for (var i=0; i<arrayLength; i++) {
          if(array[i]==array[i+1]){
            return [];;
          }
          output.push(array[i]);

        }
        return output;
    } 
   