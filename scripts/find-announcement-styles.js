const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.resolve('public/easco-design.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('--- FINDING ANNOUNCEMENT BAR STYLES ---');
  
  let idx = 0;
  while ((idx = cssContent.indexOf('announcement-bar', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 16;
  }
  
  idx = 0;
  while ((idx = cssContent.indexOf('announcement-inner', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 18;
  }
  
} catch (err) {
  console.error('Error:', err.message);
}
