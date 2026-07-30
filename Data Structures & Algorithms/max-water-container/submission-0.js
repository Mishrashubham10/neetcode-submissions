class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let maxLength = 0
        let right = heights.length - 1

        while (left < right) {
            let w = right - left
            let h = Math.min(heights[left], heights[right])
            const area = w * h

            maxLength = Math.max(maxLength, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxLength;
    }
}
