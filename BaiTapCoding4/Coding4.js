
var calculateTip  = (bill)=>{
    return bill>=50 && bill <=300 ? 15/100*bill : 20/100*bill
}
var calculateTotalBill =(bill, tip)=>{
    return bill + tip;
}


var bill = 275
var tip = calculateTip(bill)
totalBill = calculateTotalBill(bill,tip).toFixed(2)
console.log("The bill was "+ bill +", the tip was "+tip.toFixed(2) +", and the total value " + totalBill);

bill  = 40;
tip = calculateTip(bill)
totalBill = calculateTotalBill(bill,tip).toFixed(2)
console.log("The bill was "+ bill +", the tip was "+tip.toFixed(2) +", and the total value " + totalBill);

bill  = 430;
tip = calculateTip(bill)
totalBill = calculateTotalBill(bill,tip).toFixed(2)
console.log("The bill was "+ bill +", the tip was "+tip.toFixed(2) +", and the total value " + totalBill);