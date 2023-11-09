const User = require('../models/user-models');

async function authenticateUser(name) {
  try {
    const user = await User.findOne({ name });
    console.log(`THE user is ${user}`);
    if (!user) {
      // User not found
      throw new Error('Invalid name');
    }

    // Authentication successful
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  authenticateUser,
};