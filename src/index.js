module.exports = function reverse (n) {
    
    if (!n || n == 0) {
        return 0;
      } else {
        // var absN = Math.abs(n);
        // var nStr = String(absN);
        // var newStrArr = Array.from(nStr);
        // var reverseArr = newStrArr.reverse();
        // var reverseStr = reverseArr.join('');
        
        return Array.from(String(Math.abs(n))).reverse().join('');
      }
  
}
