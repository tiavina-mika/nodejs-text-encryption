const crypto = require("crypto");

const fixedKey = "djacgb6nsvspubhq5jc";
const fullKey = "rsbqtmgxavuwcvrrbgn87y382na3p2n4"; // 32 characters
const IV = "9ytt5j98p2evf48c"; // 16 characters
const ALGO = "aes-256-ctr";

/**
 * fixed key with dynamic key (id)
 * or one static key
  @param {} id 
* @returns 
*/
const getKey = (id) => (id ? fixedKey + id : fullKey);

const encrypt = (text, id, withSpecialCharacters = true) => {
  const ENC = getKey(id);
  const encryptionType = withSpecialCharacters ? "base64" : "hex";
  let cipher = crypto.createCipheriv(ALGO, ENC, IV);
  let encrypted = cipher.update(text.trim(), "utf8", encryptionType);
  encrypted += cipher.final(encryptionType);
  return encrypted;
};

const decrypt = (text, id, withSpecialCharacters = true) => {
  const ENC = getKey(id);
  const encryptionType = withSpecialCharacters ? "base64" : "hex";

  let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
  let decrypted = decipher.update(text, encryptionType, "utf8");
  return decrypted + decipher.final("utf8");
};

exports.encrypt = encrypt;
exports.decrypt = decrypt;
