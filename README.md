# JWT Token Utility

It is a utility that seeks to save a few lines of code when generating a token and decoding it using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

## Install

```
$ npm install jwt-token-utility
```

## Usage

For create a token

```javascript
import { createToken } from "jwt-token-utility";

const token = createToken({ id: 2, name: "user" }, "SECRET_KEY", "2d");
```

For verify token

```javascript
import { verifyToken } from "jwt-token-utility";

try {
  verifyToken("TOKEN", "SECRET_KEY");
} catch (err) {
  console.log(err.message);
}
```

## Author

[Davic64](https://github.com/davic64)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENCE) file for more info.
