const { findUniq } = require("../index.js");

describe("basic tests", () => {

    const testArray = [
        [[ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ],'BbBb'],
        [[ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ], 'foo'],
        [[ 'silvia', 'vasili', 'victor' ], 'victor'],
        [[ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ], 'Harry Potter'],
        [[ '    ', 'a', ' ' ], 'a'],
        [[ 'foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab' ], '   '],
        [[ 'o', 'b', 'b', 'b' ], 'o']
    ];

    test.each(testArray)("passes test input value %j", (tester ,result) => expect(findUniq(tester)).toEqual(result));

});