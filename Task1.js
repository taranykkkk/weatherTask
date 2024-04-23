function groupToWeight(group) {
    group.sort((a, b) => b - a);

    let arr1 = [];
    let arr2 = [];
    let sum1 = 0;
    let sum2 = 0;

    group.forEach(weight => {
        if (sum1 <= sum2) {
            arr1.push(weight);
            sum1 += weight;
        } else {
            arr2.push(weight);
            sum2 += weight;
        }
    });

    return [arr1, arr2];
}

let people = [70, 80, 60, 90, 100, 66]
let result = groupToWeight(people)

console.log(result);