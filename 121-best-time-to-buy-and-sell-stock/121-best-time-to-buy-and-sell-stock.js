/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProf = 0;
    let minPrice = 9007199254740991;
    
    for(i = 0; i < prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProf = Math.max(maxProf, prices[i]-minPrice);
    }
        
          return maxProf;  
};