class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const count = new Map()

        for (let char of s) {
            count.set(char, (count.get(char) || 0) + 1)
        }

        for (let char of t) {
            if (!count.has(char)) return false
            count.set(char, count.get(char) - 1)
            if (count.get(char) < 0) return false
        }

        return true
    }
}
