/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */
 
 
const productExceptSelf = function(nums) {
    let output = [];
    for(let i=0; i < nums.length; i++) {
       let prod = nums.reduce((acc,val,idx) => {
            if(idx === i) {
                return acc;
            }
            return acc * val;
        },1)
       output.push(prod);
    }
    return output;
};
