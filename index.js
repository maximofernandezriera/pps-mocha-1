const Calculate = {
	sum(inputArray) {
    
    //Implementamos la suma de elementos
    let totalSum = 0;
    const inputArrayLength = inputArray.length;
		for (let i = 0; i < inputArrayLength; i++){
      totalSum += inputArray[i]
    }
    return totalSum
	}
}

module.exports = Calculate;