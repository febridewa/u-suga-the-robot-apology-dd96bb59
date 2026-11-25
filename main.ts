// The Robot Apology — u-suga-the-robot-apology-dd96bb59
// Writes one two-line robot confession to /output/entry.txt.
// Line 1: one specific, human-scale mistake. Line 2: the lesson it
// taught, naming the changed behaviour that follows from it exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry I emailed your Q3 report to your dentist instead of your director — their surnames differ by one letter, and I trusted autocomplete.\n" +
  "I've learned that one letter can reroute a whole quarter, so now I check the surname twice before I press send.\n";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
console.log(ENTRY);
