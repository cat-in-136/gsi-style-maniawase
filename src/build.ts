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

// --- New code for HTML generation ---
const templatePath = path.join(__dirname, 'template.html');
const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders in the HTML template
const finalHtml = htmlTemplate
    .replace('gsi-style-maniawase.json', path.relative(outputDir, lightOutputPath))
    .replace('gsi-style-maniawase-dark.json', path.relative(outputDir, darkOutputPath));

const htmlOutputPath = path.join(outputDir, 'index.html');
fs.writeFileSync(htmlOutputPath, finalHtml, 'utf-8');
console.log(`Sample HTML file created at: ${path.relative(process.cwd(), htmlOutputPath)}`);
