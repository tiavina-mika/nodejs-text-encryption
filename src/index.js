const express = require("express");

const app = express();
const { encrypt, decrypt } = require("./encrypt.utils");

app.get("/", (req, res) => {
  const page = `
    <h1>Encrypt text with Node crypto module</h1>
    <div>
      <div>
        <h3>With special characters</h3>
        <ul>
          <li><b>Encrypted</b>: ${encrypt(
            "tikskun@gmail.com",
            "0000000000000"
          )} </li>
          <li><b>Decrypted</b>: ${decrypt(
            "l/V+CXskLcp49Txw2tcfeJU=",
            "0000000000000"
          )} </li>
        </ul>
      </div>
      <div>
        <h3>Without special characters</h3>
        <ul>
          <li>
            <b>Encrypted</b>:
            <span>
              ${encrypt("tikskun@gmail.com", "0000000000000", false)}
            </span>
          </li>
          <li>
            <b>Decrypted</b>: 
            <span>
              ${decrypt(
                "97f57e097b242dca78f53c70dad71f7895",
                "0000000000000",
                false
              )}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <p>By <b>Tiavina Michael RALAINIRIANA</p>
        <p>Full stack develop from Madagascar with 6 year experiencess</p>
      </div>
    </div>
  `;
  res.send(page);
});

app.listen(8080);
