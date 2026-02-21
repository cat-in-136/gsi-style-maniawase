import fs from 'fs';
import path from 'path';

import { colors } from './colors';
import { createStyle } from './style';

const URL_PREFIX = 'https://cat-in-136.github.io/gsi-style-maniawase/';
const lightStyleJson = createStyle(colors.light);
const darkStyleJson = createStyle(colors.dark, {
  "name": "gsi-style-maniawase-dark",
  "sprite": `${URL_PREFIX}sprite/dark`,
});
const paleStyleJson = createStyle(colors.pale, {
  "name": "gsi-style-maniawase-pale",
  "sprite": "https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/sprite/pale",
});

const projectRoot = process.env.APP_ROOT_PATH ? path.resolve(process.env.APP_ROOT_PATH) : path.resolve(__dirname, '..');
const outputDir = path.join(projectRoot, 'dist');
const spriteDir = path.join(projectRoot, 'sprite');
const spriteOutputDir = path.join(outputDir, 'sprite');
const lightOutputPath = path.join(outputDir, 'gsi-style-maniawase.json');
const darkOutputPath = path.join(outputDir, 'gsi-style-maniawase-dark.json');
const paleOutputPath = path.join(outputDir, 'gsi-style-maniawase-pale.json');

// Ensure the dist directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Copy sprite directory to dist if it exists
if (fs.existsSync(spriteDir)) {
  console.log(`Copying sprite directory from ${spriteDir} to ${spriteOutputDir}`);

  // Create sprite output directory
  fs.mkdirSync(spriteOutputDir, { recursive: true });

  // Get all files in sprite directory
  const spriteFiles = fs.readdirSync(spriteDir);

  // Copy each file
  for (const file of spriteFiles) {
    const srcPath = path.join(spriteDir, file);
    const destPath = path.join(spriteOutputDir, file);

    if (fs.statSync(srcPath).isFile()) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to sprite directory`);
    }
  }
} else {
  console.warn('Sprite directory not found, skipping sprite copy');
}

// Write the JSON files to the dist folder
fs.writeFileSync(lightOutputPath, JSON.stringify(lightStyleJson), 'utf-8');
console.log(`Style JSON file created at: ${path.relative(process.cwd(), lightOutputPath)}`);
fs.writeFileSync(darkOutputPath, JSON.stringify(darkStyleJson), 'utf-8');
console.log(`Style JSON file created at: ${path.relative(process.cwd(), darkOutputPath)}`);
fs.writeFileSync(paleOutputPath, JSON.stringify(paleStyleJson), 'utf-8');
console.log(`Style JSON file created at: ${path.relative(process.cwd(), paleOutputPath)}`);

// --- New code for HTML generation ---
const templatePath = path.join(__dirname, 'template.html');
const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders in the HTML template
const finalHtml = htmlTemplate
    .replace('gsi-style-maniawase.json', path.relative(outputDir, lightOutputPath))
    .replace('gsi-style-maniawase-dark.json', path.relative(outputDir, darkOutputPath))
    .replace('gsi-style-maniawase-pale.json', path.relative(outputDir, paleOutputPath));

const htmlOutputPath = path.join(outputDir, 'index.html');
fs.writeFileSync(htmlOutputPath, finalHtml, 'utf-8');
console.log(`Sample HTML file created at: ${path.relative(process.cwd(), htmlOutputPath)}`);
