const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.resolve('public/easco-design.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('--- FINDING BOTTOM STRIP STYLES ---');
  
  let idx = 0;
  while ((idx = cssContent.indexOf('bottom-strip', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 12;
  }
  
  idx = 0;
  while ((idx = cssContent.indexOf('strip-container', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 15;
  }
  
} catch (err) {
  console.error('Error:', err.message);
}
