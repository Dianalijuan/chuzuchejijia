const main = require('../main/main');

describe('taxi fee', function () {

    it('公里数为 1.9 公里,停车等待时为 10 分钟时，乘客应付多少钱', function() {

        var result = main(1.9,10);
        expect(result).toEqual(9);
    });

    it('公里数为 6 公里,停车等待时为 2 分钟时，乘客应付多少钱', function() {

        var result = main(6,2);
        expect(result).toEqual(5);
    });

    it('公里数为 9 公里,停车等待时为 0 分钟时，乘客应付多少钱', function() {

        var result = main(9,0);
        expect(result).toEqual(8);
    });
});
