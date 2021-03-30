function isValid(user) {
    return Boolean(
      user.diner_username && user.diner_email && user.diner_password
    );
  }
  
  module.exports = {
    isValid,
  };
  