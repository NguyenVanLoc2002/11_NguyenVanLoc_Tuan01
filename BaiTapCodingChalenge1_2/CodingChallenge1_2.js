//Data for Marks

const marksMass1 = 78;
const marksHeight1 = 1.69

const marksMass2 = 92;
const marksHeight2 = 1.95;

//Data for John
const johnMass1 = 95;
const johnHeight1 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

const calculateBMI = (mass, height)=>{
    return mass/height**2;
}

//Tinh BMI 

const marksBMI1= calculateBMI(marksMass1, marksHeight1);
const marksBMI2= calculateBMI(marksMass2, marksHeight2);

const johnBMI1= calculateBMI(johnMass1, johnHeight1);
const johnBMI2= calculateBMI(johnMass2, johnHeight2);

//Compare BMIs
const marksHigherBMI1 = marksBMI1 > johnBMI1;
const marksHigherBMI2 = marksBMI2 > johnBMI2;

//Console
console.log("Dữ liệu BMIs đầu của Marks lớn hơn của John: " + marksHigherBMI1)

if(marksHeight1){
    console.log("Mark's BMI1 (" + marksBMI1.toFixed(2)+") is higher than John's ("+johnBMI1.toFixed(2)+")")
}else{
    console.log("John's BMI1 (" + johnBMI1.toFixed(2)+") is higher than Mark's ("+marksBMI1.toFixed(2)+")")
}


console.log("Dữ liệu BMIs sau của Marks lớn hơn của John: " + marksHigherBMI2)
if(marksHigherBMI2){
    console.log("Mark's BMI1 (" + marksBMI2.toFixed(2)+") is higher than John's ("+johnBMI2.toFixed(2)+")")
}else{
    console.log("John's BMI1 (" + johnBMI2.toFixed(2)+") is higher than Mark's ("+marksBMI2.toFixed(2)+")")
}



