# hls.js performance log

> [Improve `StreamController#_checkAppendedParsed` performance by azu · Pull Request #1528 · video-dev/hls.js](https://github.com/video-dev/hls.js/pull/1528 "Improve `StreamController#_checkAppendedParsed` performance by azu · Pull Request #1528 · video-dev/hls.js")

## Median Script

    $ node ./median.js

## Results

- count: Fragments Count
- before/after: time(ms)

| count  | before             | after              | improvements(%) |
|--------|--------------------|--------------------|-----------------|
| 0-10   | 0.8525000000008731 | 0.600000000304135  | 142.1%          |
| 10-20  | 1.7874999999985448 | 1.0500000003048626 | 170.2%          |
| 20-30  | 1.7800000000024738 | 0.8000000007086783 | 222.5%          |
| 30-40  | 2.0200000000186265 | 0.8999999999941792 | 224.4%          |
| 40-50  | 2.330000000009022  | 0.9999999997489795 | 233.0%          |
| 50-60  | 3.194999999999709  | 1.0000000002037268 | 319.5%          |
| 60-70  | 3.595000000001164  | 1.0999999999185093 | 326.8%          |
| 70-80  | 3.8800000000192085 | 1.299999999886495  | 298.5%          |
| 80-90  | 4.197499999994761  | 1.1000000003841706 | 381.6%          |
| 90-100 | 4.552499999997963  | 1.1000000004096364 | 413.9%          |
