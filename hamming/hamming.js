export default class Hamming {
    compute(a, b) {
        let difference = 0
        if (a.length !== b.length) {
            throw new Error('DNA strands must be of equal length.')
        } else {
            a.split('').forEach((letter, index) => {
                if (letter !== b[index]) {
                    difference += 1
                }
            })
        }
        return difference
    }
}