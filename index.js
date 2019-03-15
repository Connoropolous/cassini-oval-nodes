
// 
// (x^2 + y^2 + a^2)^2 - 4a^2x^2 = b^4

/*

(x^2 + y^2 + a^2)^2 = 4a^2x^2 + b^4




*/


function getB(x, y, a) {
    return root(pow(pow(x, 2) + pow(y, 2) + pow(a, 2), 2) - 4 * pow(a, 2) * pow(x, 2), 4)
}

function root(num, degree) {
    return Math.pow(num, 1/degree)
}

function pow(base, power) {
    return Math.pow(base, power)
}

function getY(x, a, b) {
    return root(root(pow(b, 4) + 4 * pow(a, 2) * pow(x, 2), 2) - pow(x, 2) - pow(a, 2), 2)
}

function getFunction(a, b) {
    return function(x) {
        return getY(x, a, b)
    }
}

// module.exports.getB = getB