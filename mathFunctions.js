
function calculateMean(nums) {
    if(nums.length){
        const total = nums.reduce((acc, next) => acc + next);
        const count = nums.length;
        return total / count;
    } else {
        return false;
    }
}

function calculateMode(nums) {
    if(nums.length){
        const counts = nums.reduce((count, next) => {
            if (!count[next]) count[next] = 0;
            count[next]++;
            return count;
        }, {});
        let max = 0;
        let result = "No Mode";
        for ([num, count] of Object.entries(counts)) {
            if (count > max) {
                result = Number(num);
                max = count;
            } else if (count == max) {
                result = "No Mode";
            }
        }
        return result;
    } else { 
        return false;
    }
}

function calculateMedian(nums) {
    if(nums.length){
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
    } else {
        return false;
    }
}

module.exports = {
    calculateMean, calculateMedian, calculateMode
}