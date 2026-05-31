const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
};

try {
  const compDir = path.resolve('components');
  const appDir = path.resolve('app');
  const files = [...walk(compDir), ...walk(appDir)];
  
  console.log('--- Checking for url() inside React files ---');
  files.forEach((file) => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('url(')) {
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (line.includes('url(') && (line.includes('style=') || line.includes('backgroundImage'))) {
            console.log(`File: ${file} (Line ${idx + 1}): ${line.trim()}`);
          }
        });
      }
    }
  });
} catch (err) {
  console.error('Error walking files:', err.message);
}
