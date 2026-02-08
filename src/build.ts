import fs from 'fs';
import path from 'path';

import { colors } from './colors';
import { createStyle } from './style';

const lightStyleJson = createStyle(colors.light);
const darkStyleJson = createStyle(colors.dark);

const outputDir = path.join(__dirname, 'dist');
const lightOutputPath = path.join(outputDir, 'gsi-style-maniawase.json');
const darkOutputPath = path.join(outputDir, 'gsi-style-maniawase-dark.json');

// Ensure the dist directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Write the JSON files to the dist folder
fs.writeFileSync(lightOutputPath, JSON.stringify(lightStyleJson), 'utf-8');
fs.writeFileSync(darkOutputPath, JSON.stringify(darkStyleJson), 'utf-8');

console.log('Style JSON copied to dist/gsi-style-maniawase.json');
console.log('Style JSON copied to dist/gsi-style-maniawase-dark.json');
