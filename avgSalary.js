/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    // check input array contain atleast 3 element
      if(salary.length<3){
          throw new Error("Input array should have atleast 3 element");
      }
      
      //find sum excluding min and max salary
      let minSalary = Math.min(...salary);
      let maxSalary = Math.max(...salary);
      
      //cal min and max salary
      let sum = salary.reduce((acc,val) =>{
          if(val !== minSalary && val !== maxSalary){
              return acc+val;
          }else{
              return acc;
          }
      },0)
      
      //cal avg
      let average = sum/(salary.length-2);
      
      //round result
      return Math.round(average*1e5)/1e5;
  };
  
  let salary = [4000,1000,3000];
  let result = average(salary);
  console.log(result);