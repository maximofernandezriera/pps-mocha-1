const Calculate = {
    sum(inputArray) {
    //Refactoring using .reduce
      return inputArray.reduce((sum, value) => {
        return sum + value;
      })
    }
  }
  
  module.exports = Calculate;