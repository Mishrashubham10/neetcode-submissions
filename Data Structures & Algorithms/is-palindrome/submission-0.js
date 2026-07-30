class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 0) return

        let left = 0
        let right = s.length - 1

        while (left < right) {
            while (left < right && !(
                (s[left] >= 'a' && s[left] <= 'z') ||
                (s[left] >= 'A' && s[left] <= 'Z') ||
                (s[left] >= '0' && s[left] <= '9')
            )) {
            left++
        }

        while (left < right && !(
                (s[right] >= 'a' && s[right] <= 'z') ||
                (s[right] >= 'A' && s[right] <= 'Z') ||
                (s[right] >= '0' && s[right] <= '9')
            )) {
                right--
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right--
        }

        return true
    }
}
