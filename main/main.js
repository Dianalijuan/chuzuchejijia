module.exports = function main(mile, time) {
    var result = 0;
    if (mile <= 2) {
        result = 6 + time * 0.25;
    }
    else if (mile > 2 & mile < 8) {
        result = mile * 0.8 + time * 0.25;
    }
    else {
        result = 8 * 0.8 + (mile - 8) * (0.8 + 0.5 * 0.8) + time * 0.25
    }
    result = Math.round(result)
    return result;
};