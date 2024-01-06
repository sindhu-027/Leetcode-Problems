var calPoints = function(operations){
    let scores = [];;

    for( let op of operations ){
        if( op === "+"){
            let lastScores = scores.slice(-2);
            let newScore = lastScores.reduce((acc, val)=> acc+val , 0);
            scores.push(newScore);
        }else if(op === "D"){
            let lastScores = scores[scores.length-1];
            scores.push(lastScores*2);
        } else if(op ==="C"){
          scores.pop();
        }else{
            scores.push(parseInt(op));
        }
    }
    return scores.reduce((acc,val)=> acc+val,0);
};

//example
const operations = ["5","2","C","D","+"];
const result = calPoints(operations);
console.log(result);