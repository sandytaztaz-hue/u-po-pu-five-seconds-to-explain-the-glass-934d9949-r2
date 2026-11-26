import * as fs from "node:fs";
import * as path from "node:path";

// A house cat's five-second defence of the glass: the glass wobbled
// first, gravity did the paperwork.
const LINE =
  "The glass was empty, it was sitting in my spot, and it had the nerve to wobble when I walked past. Gravity did the paperwork; I just signed it.";
const MAX_CHARS = 200;

if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry line is empty");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} chars, over the ${MAX_CHARS} limit`,
  );
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
