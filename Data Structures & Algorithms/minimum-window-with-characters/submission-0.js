class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    let left = 0;
    let windowFreq = {};
    let targetFreq = {};
    let minLength = Infinity;
    let formed = 0;
    let startIndex = 0;

    for (const char of t) {
        targetFreq[char] = (targetFreq[char] || 0) + 1;
    }

    const required = Object.keys(targetFreq).length;

    for (let right = 0; right < s.length; right++) {
        const current = s[right];

        windowFreq[current] = (windowFreq[current] || 0) + 1;

        if (targetFreq[current] && windowFreq[current] === targetFreq[current]) {
            formed++;
        }

        while (formed === required) {

            const windowLength = right - left + 1;

            if (windowLength < minLength) {
                minLength = windowLength;
                startIndex = left;
            }

            const leftChar = s[left];

            if (windowFreq[leftChar] === targetFreq[leftChar]) {
                formed--;
            }

            windowFreq[leftChar]--;
            left++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.slice(startIndex, startIndex + minLength);
}
}
