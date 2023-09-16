var printForecast = (array)=>{
    let rs ="";
    for(let i = 0; i<= array.length -1; i++){
        rs += "... "+array[i]+" oC in "+(i + 1)+" day(s) ";
    }
    console.log(rs);
}

//Data 1: [17, 21, 23]
var ar =  [17, 21, 23];
printForecast(ar);

// Data 2: [12, 5, -5, 0, 4]
ar =  [12, 5, -5, 0, 4];
printForecast(ar);