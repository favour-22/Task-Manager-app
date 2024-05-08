const bcrypt = require('bcrypt')


const hashPassword = async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

const compareHash = async function compareHash(password, passwordHash) {

    return bcrypt.compare(password, passwordHash);
};

module.exports = hashPassword, compareHash;