
/*

Define K^2 to be the
ratio of the product of the distances divided by the square of the half distance between the fixed
points, i.e., K^2 = b^2/a^2

(x^2 + y^2 + a^2)^2 - 4a^2x^2 = a^4K^4
(x^2 + y^2 + a^2)^2 = a^4K^4 + 4a^2x^2
x^2 + y^2 + a^2 = sqrt(a^4K^4 + 4a^2x^2)
y^2 = sqrt(a^4K^4 + 4a^2x^2) - x^2 - a^2
y = sqrt(sqrt(a^4K^4 + 4a^2x^2) - x^2 - a^2)
*/

function root(num, degree) {
    return Math.pow(num, 1/degree)
}

function pow(base, power) {
    return Math.pow(base, power)
}

/*
old one
(x^2 + y^2 + a^2)^2 - 4a^2x^2 = b^4
function getY(x, a, b) {
    return root(root(pow(b, 4) + 4 * pow(a, 2) * pow(x, 2), 2) - pow(x, 2) - pow(a, 2), 2)
}
*/

function getY(x, a, K) {
    return root(root(pow(a, 4) * pow(K, 4) + 4 * pow(a, 2) * pow(x, 2), 2) - pow(x, 2) - pow(a, 2), 2)
}

function getFunction(a, K) {
    return function(x) {
        return getY(x, a, K)
    }
}

// module.exports.getB = getB