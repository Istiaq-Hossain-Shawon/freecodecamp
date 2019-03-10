function sym(args) {
    console.log(arguments);
    let  resultofTwo=[];
    var args = Array.prototype.slice.call(arguments);
    for (let i = 0; i < args.length; i++) {
        var element =[];
        
        if(i!=0){
            element = resultofTwo;
           
        }else{
            element = args[i];
        }
        if(i+1==args.length){
            continue;
        }
        resultofTwo=difference(element,args[i+1]);
        var data=differenceSwitch(element,args[i+1]);
        data.forEach(function(entry) {
            resultofTwo.push(entry);
        });
        resultofTwo.concat(data);
        
    }
    
    const finalOut = []
    resultofTwo.forEach((value) => {
        if (!finalOut.some(x=> (x === value))) 
       {
            finalOut.push(value)
        }
    })

    return finalOut;
  }
  function difference(a1, a2) {
    var result = [];
    if (!a2) {return;} 
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    return result;
  }
  function differenceSwitch(a1, a2) {
    var result = [];
    if (!a1) {return;} 
    for (var i = 0; i < a2.length; i++) {
      if (a1.indexOf(a2[i]) === -1) {
        result.push(a2[i]);
      }
    }
    return result;
  }
  console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
