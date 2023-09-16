var dophinsScore  =[12,123,123]


var calcAverage = (score)=>{
    var calcSumScore = score.reduce((accumulator, currentValue)=>accumulator+currentValue ,0);
    return calcSumScore/score.length;
}

var checkWinner=(avgDolhins, avgKoalas)=>{
    if(avgDolhins >=2*avgKoalas){
        console.log("Dolphins win ("+avgDolhins +" vs "+ avgKoalas+")");
    }else if(avgDolhins <=2*avgKoalas){
        console.log("Koalas win ("+avgDolhins +" vs "+ avgKoalas+")");
    }else{
        console.log("Dolphins draw Koalas ("+avgDolhins +" vs "+ avgKoalas+")");
    }
}

//Data 1
var dophinsScore  =[44,23,71]
var koalasScore  =[65,54,49]
var avgDolhins = calcAverage(dophinsScore);
var avgKoalas = calcAverage(koalasScore);
checkWinner(avgDolhins,avgKoalas)


//Data 2
var dophinsScore  =[85,54,41]
var koalasScore  =[23,34,27]
var avgDolhins = calcAverage(dophinsScore);
var avgKoalas = calcAverage(koalasScore);
checkWinner(avgDolhins,avgKoalas)