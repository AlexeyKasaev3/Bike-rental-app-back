function handleServerError(error, res) {
  console.error(error.stack);
  res.sendStatus(500);
}

module.exports = handleServerError;
