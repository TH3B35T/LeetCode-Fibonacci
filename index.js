/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //F(0) = 0, F(1) = 1
    if(n <= 1){
        return n;
    }

    // F(n) = F(n - 1) + F(n - 2), for n > 1.

    let dp = new Array(n + 1).fill(0);
    dp[1] = 1
    for(let i = 2; i<= n ; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];

};
