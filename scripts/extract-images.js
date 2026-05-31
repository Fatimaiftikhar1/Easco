const fs = require('fs');
const path = require('path');

try {
  const htmlPath = path.resolve('full-page.html');
  const content = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract all src="..." and url(...) containing image extensions
  const imgRegex = /src=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|gif))["']/gi;
  const urlRegex = /url\(["']?([^"')]+\.(?:png|jpg|jpeg|svg|webp|gif))["']?\)/gi;
  
  const matches = new Set();
  
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    matches.add(match[1]);
  }
  
  while ((match = urlRegex.exec(content)) !== null) {
    matches.add(match[1]);
  }
  
  console.log('--- Unique images found in full-page.html ---');
  matches.forEach(m => console.log(m));
  
} catch (err) {
  console.error('Failed to read full-page.html:', err.message);
}
