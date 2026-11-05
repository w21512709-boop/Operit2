import { readFileSync, writeFileSync } from "node:fs";
const chunks = [];
for (let i = 1; i <= 18; i++) {
  const n = String(i).padStart(2, "0");
  chunks.push(readFileSync(new URL("./chunks/" + n + ".txt", import.meta.url), "utf8").trim());
}
writeFileSync(new URL("./server.js", import.meta.url), Buffer.from(chunks.join(""), "base64").toString("utf8"));
console.log("server.js reconstructed");
