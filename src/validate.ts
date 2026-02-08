import { readdirSync } from 'fs';
import { resolve, join } from 'path';
import { spawnSync } from 'child_process';

const projectRoot = process.env.APP_ROOT_PATH
  ? resolve(process.env.APP_ROOT_PATH)
  : resolve(__dirname, '..');
const outputDir = join(projectRoot, 'dist');

const files = readdirSync(outputDir).filter((f) => f.endsWith('.json'));

for (const f of files) {
  const result = spawnSync('gl-style-validate', [join(outputDir, f)], {
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
