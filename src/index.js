import jwt from "jsonwebtoken";

/**
 *
 * @param {object} data
 * @param {string} secretKey
 * @param {string | number} expires
 * @returns {string}
 */
export const createToken = (data, secretKey, expires) => {
  const token = jwt.sign(data, secretKey, { expiresIn: expires });
  return token;
};

/**
 *
 * @param {string} token
 * @param {string} secretKey
 * @returns {object}
 */
export const verifyToken = (token, secretKey) => {
  const verified = jwt.verify(token, secretKey, (err, decoded) => {
    if (err) throw new Error(err);
    return decoded;
  });
  return verified;
};
