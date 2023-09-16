var calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

var arrayBill = [125, 555, 44];
var arrayTip = [];
for (var i = 0; i < arrayBill.length; i++) {
  var tip = calcTip(arrayBill[i]);
  arrayTip.push(tip);
}

console.log(arrayTip);

//Cách 1:

// var total = [];
// var calcTotalBill = (bill, tip) => {
//   return bill + tip;
// };

// for (var i = 0; i < arrayBill.length-1; i++) {
//   var totalBill = calcTotalBill(arrayBill[i], arrayTip[i]);
//   total.push(totalBill);
// }


//Cách 2:
var total = arrayBill.map(function (bill, index) {
  return bill + arrayTip[index];
});
console.log(total);
