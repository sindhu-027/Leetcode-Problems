/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result =[];
    
    while(matrix.length>0){
        result.push(...matrix.shift());
        
        for(i=0; i<matrix.length; i++){
            if(matrix[i].length>0){
                result.push(matrix[i].pop());
            }
        }
        if(matrix.length>0){
            result.push(...matrix.pop().reverse());
        }
        for(i=matrix.length-1; i>0; i--){
            if(matrix[i].length>0){
                result.push(matrix[i].shift())
            }
        }
    }
    return result;
};

const matrix=[[1,2,3],[4,5,6],[7,8,9]];
const result = spiralOrder(matrix);
console.log(result);
