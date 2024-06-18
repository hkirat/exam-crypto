

const sss = require('shamirs-secret-sharing')

const secret = Buffer.from('Encryption key')
const shares = sss.split(secret, { shares: 3, threshold: 3 })
// ["asdid9d9", "asdid9d9", "asdid9d9"]
const smallerShares = shares.slice(0, 2); // ["asdid9d9"]
const recovered = sss.combine(smallerShares)

console.log(shares.map(x => x.toString('hex')));
console.log(recovered.toString()) // 'Encryption key'