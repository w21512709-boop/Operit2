import { readFileSync, writeFileSync } from "node:fs";
const chunks = [];
for (let i = 1; i <= 6; i++) chunks.push(readFileSync(new URL("./chunks/" + i + ".txt", import.meta.url), "utf8").trim());
writeFileSync(new URL("./server.js", import.meta.url), Buffer.from(chunks.join(""), "base64").toString("utf8"));
console.log("server.js reconstructed");
