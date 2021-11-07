const Calculate = {
    sum(inputArray) {
      
    // 0 case
      if(inputArray.length === 0){
        return 0
      }
  
      return inputArray.reduce((sum, value) => {
        return sum + value;
      })
    }
  }
  
  module.exports = Calculate;
  
  