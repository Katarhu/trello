import * as bcrypt from 'bcryptjs';

export const comparePasswords = (inputPassword, userPassword) => {
  return bcrypt.compare(inputPassword, userPassword);
};
