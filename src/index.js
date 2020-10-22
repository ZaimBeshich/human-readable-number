module.exports = function toReadable(number) {
    let nums = new Map([
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30, "thirty"],
        [40, "forty"],
        [50, "fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ]);
    let arr = String(number).split("");
    if (number <= 19 || (number % 10 === 0 && number < 100)) {
        return nums.get(number);
    } else if (number > 20 && number < 100) {
        return nums.get(arr[0] * 10) + " " + nums.get(arr[1] * 1);
    } else if (number >= 100 && number % 100 === 0) {
        return nums.get(arr[0] * 1) + " hundred";
    } else if (number > 100 && Number(arr[1] + arr[2]) < 10) {
        return nums.get(arr[0] * 1) + " hundred" + " " + nums.get(arr[2] * 1);
    } else if (number > 100 && (Number(arr[1] + arr[2]) >= 10 && Number(arr[1] + arr[2]) % 10 == 0)) {
        return nums.get(arr[0] * 1) + " hundred" + " " + nums.get(arr[1] * 10);
    } else if (number > 100 && (Number(arr[1] + arr[2]) >= 10 && Number(arr[1] + arr[2]) <= 19))
        return nums.get(arr[0] * 1) + " hundred" + " " + nums.get((arr[1] + arr[2]) * 1);
    else return nums.get(arr[0] * 1) + " hundred" + " " + nums.get(arr[1] * 10) + " " + nums.get(arr[2] * 1);
}