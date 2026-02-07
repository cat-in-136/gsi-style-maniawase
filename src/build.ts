import fs from 'fs';
import path from 'path';

import styleJson from './style';

const outputJsonPath = path.join(__dirname, 'dist', 'gsi-style-maniawase.json');

// Ensure the dist directory exists
fs.mkdirSync(path.dirname(outputJsonPath), { recursive: true });

// Write the JSON to the dist folder
fs.writeFileSync(outputJsonPath, JSON.stringify(styleJson), 'utf-8');

console.log('Style JSON copied to dist/gsi-style-maniawase.json');
