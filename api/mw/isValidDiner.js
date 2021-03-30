module.exports = {
  isValid,
};

function isValid(user) {
  return Boolean(
    user.diner_username &&
      user.diner_password &&
      typeof user.diner_password === "string"
  );
}
