const fs = require('fs');
const path = require('path');

const searchFile = (dir, fileName) => {
  let foundPaths = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue; // skip broken symlinks
      }
      
      if (stat && stat.isDirectory()) {
        // Skip common large folders to avoid hangs
        if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'AppData') {
          continue;
        }
        foundPaths = foundPaths.concat(searchFile(fullPath, fileName));
      } else if (file.toLowerCase().includes(fileName.toLowerCase())) {
        foundPaths.push(fullPath);
      }
    }
  } catch (err) {
    // skip folders we don't have permission for
  }
  return foundPaths;
};

try {
  const searchRoot = 'C:\\Users\\fatim';
  console.log(`Searching for "hero (1)" in ${searchRoot}...`);
  const results = searchFile(searchRoot, 'hero (1)');
  console.log('--- Search Results ---');
  results.forEach(p => console.log(p));
} catch (err) {
  console.error('Error searching:', err.message);
}
