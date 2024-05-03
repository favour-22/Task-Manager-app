// const User = require('../models/user-models');
// const compareHash = require('../utils/pass-utils');

// async function authenticateUser(name) {
//   try {
//     const user = await User.findOne({ name });

//     if (!user) {
//       throw new Error('Invalid name');
//     }

//     return user;
//   } catch (error) {
//     throw error;
//   }
// }

// async function authenticatePass(user, password) {
//   try {
//     const isPasswordValid = await compareHash(password, user.password);

//     return isPasswordValid;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = { authenticateUser, authenticatePass };