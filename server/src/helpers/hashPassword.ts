import * as bcrypt from 'bcryptjs';

export const hashPassword = (password: string, salt = 10) => {
  return bcrypt.hash(password, salt);
};
