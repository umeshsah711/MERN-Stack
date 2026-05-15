import fs from "fs/promises";

async function read() {
  const data = await fs.readFile("node/data/user.json", "utf8");
}
console.log(data);
read();
