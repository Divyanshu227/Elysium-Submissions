// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
        // code here
        let start =0;
        let sum =0;
        for(let i =0;i<arr.length;i++){
            sum+=arr[i];
            while(sum >target && start <= i){
                sum -=arr[start];
                start++;
            }
            if(sum == target){
                return [start+1,i+1];
            }
        }
        return [-1];
    }
}