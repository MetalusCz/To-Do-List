const multiplyAfterExpiryTime = (x, y, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(x) || isNaN(y)) {
        reject(new Error('Invalid numbers'));
      } else {
        const result = x * y;
        resolve(result);
      }
    }, delay);
  });
};

multiplyAfterExpiryTime(6, 7, 3000)
  .then(result => {
    console.log(`Multiply: ${result}`);
  })
  .catch(error => {
    console.log('Error:', error);
  });


/*--------------- Used callback -------------------------------*/ 

  function multiplyAsync(x, y, delay, callback) {
    setTimeout(() => {
      const result = x * y;
      callback(null, result); 
    }, delay);
  }
  
  function handleResult(error, result) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log(`Multiply: ${result}`);
    }
  }
  
  multiplyAsync(-5, 10, 5000, handleResult);