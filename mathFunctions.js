
function calculateMean(nums) {
    const total = nums.reduce((acc, next) => acc + next);
    const count = nums.length;
    return total / count;
}

function calculateMode(nums) {
    const counts = nums.reduce((count, next) => {
        if (!count[next]) count[next] = 0;
        count[next]++;
        return count;
    }, {});
    let max = 0;
    let result = "No Mode";
    for ([num, count] of Object.entries(counts)) {
        if (count > max) {
            result = num;
            max = count;
        } else if (count == max) {
            result = "No Mode";
        }
    }
    return result;
}

function calculateMedian(nums) {
    const sortedArray = nums.sort((first, second) => first - second);
    const length = sortedArray.length;
    if (length % 2 == 1) {
        //num of nums is odd
        const i = Math.ceil(length / 2) - 1;
        return nums[i];

    } else {
        //num of nums is even
        const i = (length / 2) - 1;
        const midPoint1 = nums[i];
        const midPoint2 = nums[i + 1];
        return calculateMean([midPoint1, midPoint2]);
    }
}

module.exports = {
    calculateMean, calculateMedian, calculateMode
}