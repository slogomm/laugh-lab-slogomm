import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Revised after local test
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const entry = 'I admit I ate the sock, but it had been on your floor for four days. I was clearing a health hazard and I resent the tone.';
writeFileSync(join(outputDir, 'entry.txt'), entry);