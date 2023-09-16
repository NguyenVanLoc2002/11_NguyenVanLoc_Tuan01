var mark = {
    fullname: "Mark",
    weight: 78,//Cân nặng (kg)
    height: 1.69//Chiều cao(m)
};

var john = {
    fullname: "John",
    weight: 92,//Cân nặng (kg)
    height: 1.95//Chiều cao(m)
};

var calcBMI = (weight,height)=>{
    return weight/ height **2;
};

var checkBMI= (mark,john)=>{
    var markBMI = calcBMI(mark.weight, mark.height)
    var johnBMI = calcBMI(john.weight, john.height)
    if( markBMI> johnBMI){
        console.log(mark.fullname+ "'s BMI ("+markBMI.toFixed(1)+") is higher than "+john.fullname+"'s ("+johnBMI.toFixed(1)+")!");
    }else if( markBMI< johnBMI){
        console.log(john.fullname+"'s BMI ("+john.toFixed(1)+") is higher than "+mark.fullname+"'s ("+mark.toFixed(1)+")!");
    }else{
        console.log(john.fullname+"'s BMI ("+john.toFixed(1)+") is draw "+mark.fullname+"'s ("+mark.toFixed(1)+")!");
    }
}

checkBMI(mark, john);


