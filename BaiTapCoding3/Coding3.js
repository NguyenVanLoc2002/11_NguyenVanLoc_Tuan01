var dophinsScore = [96,108,89]
var koalosScore = [88,91,110]


//Dùng vòng lặp reduce 
//accumulator là giá trị tích lũy hay cộng dồn
//currentValue giá trị hiện tại ở từng vị trí 

// var sumDolphins = dophinsScore.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// var avgDolphins = sumDolphins/dophinsScore.length;

// var sumKoalos = koalosScore.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// var avgKoalos = sumKoalos/koalosScore.length;

var avg = (score)=>{
    var sum = score.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
    return sum/score.length;
}
var avgDolphins = avg(dophinsScore);
var avgKoalos = avg(koalosScore);   



console.log("Điểm của đội Dolphins "+avgDolphins.toFixed(2));    
console.log("Điểm của đội Koalas "+avgKoalos.toFixed(2));  

//So sánh
if(avgDolphins > avgKoalos){
    console.log("Team Dolphins is winner");
}else if(avgDolphins > avgKoalos){
    console.log("Team Koalos is winner");
}else{
    console.log("Two Team is draw");
}

var dataBonusDolphin1= [97,112,101]
var dataBonusKoala1= [97,112,101]