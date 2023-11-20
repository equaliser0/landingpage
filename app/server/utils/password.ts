import crypto from 'crypto';

export function hashPassword(password, salt) {
  const hash = crypto.createHmac('sha256', salt);
  hash.update(password);
  const hashedPassword = hash.digest('hex');
  return hashedPassword;
}

export function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

export function verifyPassword(enteredPassword, storedPassword, salt) {
  const hashedEnteredPassword = hashPassword(enteredPassword, salt);
  return hashedEnteredPassword === storedPassword;
}
