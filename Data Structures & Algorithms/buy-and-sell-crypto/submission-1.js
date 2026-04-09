class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let mostProfit = 0;

        const smallBef = [prices[0]];

        for(let i = 1; i<prices.length;i++) {
            smallBef[i] = Math.min(prices[i],smallBef[i-1]);
        }
        for(let i = 0;i<prices.length;i++) {
            let profit = prices[i] - smallBef[i];
            mostProfit = Math.max(profit, mostProfit)
        }
        return mostProfit
    }
}
