const bcrypt = require('bcrypt');

function hash(plaintext) {
  return bcrypt.hashSync(plaintext, 8);
}

function compare(plaintext, hash) {
  return bcrypt.compareSync(plaintext, hash);
}

module.exports = {
  hash, compare
};
