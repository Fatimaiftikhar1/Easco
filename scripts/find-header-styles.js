const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.resolve('public/easco-design.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('--- FINDING HEADER STYLES ---');
  
  let idx = 0;
  while ((idx = cssContent.indexOf('header-wrapper', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 14;
  }
  
  idx = 0;
  while ((idx = cssContent.indexOf('navbar', idx)) !== -1) {
    const start = Math.max(0, idx - 40);
    const end = Math.min(cssContent.length, idx + 300);
    console.log(`Snippet: ${cssContent.substring(start, end)}\n-----------------\n`);
    idx += 7;
  }
  
} catch (err) {
  console.error('Error:', err.message);
}
