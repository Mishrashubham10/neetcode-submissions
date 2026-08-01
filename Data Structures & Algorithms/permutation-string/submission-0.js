class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let k = s1.length;

        let windowFreq = {};
        let targetFreq = {};

        for (let i = 0; i < k; i++) {
            const ch = s1[i];

            targetFreq[ch] = (targetFreq[ch] || 0) + 1;
        }

        for (let right = 0; right < s2.length; right++) {
            const curr = s2[right];
            windowFreq[curr] = (windowFreq[curr] || 0) + 1;

            if (right - left + 1 > k) {
                const leftChar = s2[left];

                windowFreq[leftChar]--;

                if (windowFreq[leftChar] === 0) {
                    delete windowFreq[leftChar];
                }

                left++;
            }

            if (
                right - left + 1 === k &&
                this.isSame(targetFreq, windowFreq)
            ) {
                return true;
            }
        }

        return false;
    }

    isSame(obj1, obj2) {
        const keys = Object.keys(obj1);

        if (keys.length !== Object.keys(obj2).length) {
            return false;
        }

        for (const key of keys) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }
}
