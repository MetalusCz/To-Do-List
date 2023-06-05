function print(string) {
    return function() {
      return string + ' ' + Array.from(arguments).join(' ');
    };
  }
  
  console.log(print('Hello')('World')); 
  console.log(print('Good')('Luck')); 
  