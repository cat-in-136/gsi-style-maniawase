import fs from 'fs';
import path from 'path';

import { colors } from './colors';
import { createStyle } from './style';

const lightStyleJson = createStyle(colors.light);
const darkStyleJson = createStyle(colors.dark);

const projectRoot = process.env.APP_ROOT_PATH ? path.resolve(process.env.APP_ROOT_PATH) : path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist');
const lightOutputPath = path.join(outputDir, 'gsi-style-maniawase.json');
const darkOutputPath = path.join(outputDir, 'gsi-style-maniawase-dark.json');

// Ensure the dist directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Write the JSON files to the dist folder
fs.writeFileSync(lightOutputPath, JSON.stringify(lightStyleJson), 'utf-8');
console.log(`Style JSON file created at: ${path.relative(process.cwd(), lightOutputPath)}`);
fs.writeFileSync(darkOutputPath, JSON.stringify(darkStyleJson), 'utf-8');
console.log(`Style JSON file created at: ${path.relative(process.cwd(), darkOutputPath)}`);
