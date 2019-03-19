function permAlone(str) {
  var charecter=str.split("");
  var output=[];
  heapPermutation(charecter, charecter.length, charecter.length);
  function heapPermutation(array, arraySize, arrayLength) 
    { 

        if (arraySize == 1) {
          //console.log(array);
          var output1=[];
          for (var i=0; i<array.length; i++) {
            if(array[i]==array[i+1]){
              return [];;
            }
            output1.push(array[i]);
          }
          // console.log(output);
          return output.push(output1);
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

  return output.length;
}

console.log(permAlone('abfdefa'));

