// Promise: Async Programming, promise is a future value
// pending -> fulfilled, rejected

import fs from "fs/promises";

fs.readFile("node/data/data.txt", "utf8")
.then((data) => console.log(data))
.catch((error) => console.log(error));