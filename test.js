const crypto = require('crypto');

const password = 'SuperSecretPassword!';
const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
const iterations = 100000; // Number of iterations
const keyLength = 64; // Desired key length
const digest = 'sha512'; // Hash function (HMAC with SHA-512)

crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
  if (err) throw err;
  console.log('Derived Key:', derivedKey.toString('hex'));
  console.log('Salt:', salt);
});
