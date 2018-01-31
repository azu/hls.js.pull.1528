function median(values) {
    values.sort(function(a, b) {
        return a - b;
    });

    const half = Math.floor(values.length / 2);

    if (values.length % 2) {
        return values[half];
    } else {
        return (values[half - 1] + values[half]) / 2.0;
    }
}

const BEFORE = require("./before.json");
const AFTER_V1 = require("./after_v1.json");
const AFTER_V2 = require("./after_v2.json");
const AFTER_V3 = require("./after_v3.json");

/**
 * 0 --- 10 --- 20 ----
 */
const beforeResult = median(Object.values(BEFORE.filter(r => r.FragsCount <= 100).map(r => r.time)));
const afterResult = median(Object.values(AFTER_V3.filter(r => r.FragsCount <= 100).map(r => r.time)));
console.log("Before: Median", beforeResult);
console.log("After: Median", median(Object.values(AFTER_V1.filter(r => r.FragsCount <= 100).map(r => r.time))));
console.log("After v2: Median", median(Object.values(AFTER_V2.filter(r => r.FragsCount <= 100).map(r => r.time))));
console.log("After v3: Median", afterResult);

console.log(`${(beforeResult / afterResult).toFixed(2)} times is faster`);

(() => {
    const STEP = 10;
    const RESULTS = [];
    for (let i = 0; i < 100; i += STEP) {
        const before = BEFORE.filter(r => {
            return i < r.FragsCount && r.FragsCount <= i + STEP;
        }).map(r => r.time);
        const after = AFTER_V3.filter(r => {
            return i < r.FragsCount && r.FragsCount <= i + STEP;
        }).map(r => r.time);
        RESULTS.push({
            count: `${i}-${STEP + i}`,
            before: median(before),
            after: median(after)
        });
    }
    console.log(JSON.stringify(RESULTS))
})();
