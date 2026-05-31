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
  const files = walk(compDir);
  
  console.log('--- Unsplash references found in components/ ---');
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('unsplash.com')) {
      console.log(`File: ${file}`);
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('unsplash.com')) {
          console.log(`  Line ${idx + 1}: ${line.trim()}`);
        }
      });
    }
  });
} catch (err) {
  console.error('Error walking components:', err.message);
}
