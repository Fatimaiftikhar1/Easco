const fs = require('fs');
const path = require('path');

try {
  const htmlPath = path.resolve('full-page.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  console.log('--- FINDING LOGO NODES IN HTML ---');
  
  const regex = /<div class="client-logo"[^>]*>([\s\S]*?)<\/div>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(htmlContent)) !== null && count < 12) {
    console.log(`Logo ${count + 1}:\n${match[0].trim()}\n-----------------\n`);
    count++;
  }
} catch (err) {
  console.error('Error:', err.message);
}
