/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
commentary
Approach 1: Brute force, run two loops, compare each element in the array with every other, and return two elements that add up to the given target. Time complexity is O(n^2) & space complexity O(1)

Approach 2:
0. Sort the array
1. Iterate through the array
2. Take a diff with the target, and see if that element has been seen in the array. This lookup can be done in the Map with key as the element: index
3. When the Map returns a hit, return the two indexes

This approach is better because the time complexity is O(n) & space complexity is O(n)
*/
var twoSum = function(nums, target) {
    if (!nums || nums.length < 2 ) {
        return [];
    }
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i)

    }
    return [];
};

/*
T: O(n)
S: O(1)
*/
