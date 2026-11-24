import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "It identified as dust. I was just doing my job.";

const MAX_LEN = 200;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
if (line.length < 1 || line.length > MAX_LEN) {
  throw new Error("entry must be 1-200 characters");
}
if (line !== line.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (!line.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
