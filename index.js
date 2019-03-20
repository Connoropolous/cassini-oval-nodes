
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

function root(degree, num) {
    return Math.pow(num, 1/degree)
}

function pow(base, power) {
    return Math.pow(base, power)
}

function log(num) {
    return Math.log(num)
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


// When K >= 1, the volume of an oval or revolution 
// When 0 < K < 1, there are two distinct ovals corresponding to the divided cell. In this case, the volume

function getVolume(a, K) {
    if (K >= 1) {
        const smth = Math.sqrt(1 + pow(K, 2))

        const partA = ((pow(K, 2) + 2) * smth) / 3

        const partB = pow(K, 4) * log((1 + smth) / K)

        const AB = partA + partB

        return Math.PI * pow(a, 3) * AB
    } else if (K < 1) {

    }
}
module.exports.getVolume = getVolume

function getA(K, volume) {
    const smth = Math.sqrt(1 + pow(K, 2))
    const partA = ((pow(K, 2) + 2) * smth) / 3
    const partB = pow(K, 4) * log((1 + smth) / K)
    const AB = partA + partB
    return root(3, volume / Math.PI / AB)
}
module.exports.getA = getA

console.log(getVolume(1, 2))
console.log(getA(2, 28.872))
