var arrayBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

var calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

var calcTotalBill = (bill, tip) => {
  return bill + tip;
};

for (var i = 0; i < arrayBill.length; i++) {
  var tip = calcTip(arrayBill[i]);
  tips.push(tip);
  var totalBill = calcTotalBill(arrayBill[i], tips[i]);
  totals.push(totalBill);
}
console.log("Mảng bill: "+ arrayBill);
console.log("Mảng tiền tips: "+tips);
console.log("Mảng tổng bill: "+(totals));


//Hàm tính trung bình mảng 
//Cách 1: dùng for

// var calcAverage = (array)=>{
//     var sum= 0;
//     for(var i = 0 ; i<array.length -1 ; i++){
//         sum+=array[i];
//     }
//     return sum/array.length;
// };

//Cách 2: Dùng reduce

var calcAverage = (array)=>{
    var sum= array.reduce((acc,curr)=> acc+ curr,0);
    return sum/array.length;
}

console.log("Giá trị trung bình của mảng bill "+ calcAverage(arrayBill).toFixed(2));
console.log("Giá trị trung bình của tips "+ calcAverage(tips).toFixed(2));
console.log("Giá trị trung bình của totals "+ calcAverage(totals).toFixed(2));