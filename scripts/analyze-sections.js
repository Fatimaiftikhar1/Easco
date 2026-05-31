const fs = require('fs');
const path = require('path');

try {
  const htmlPath = path.resolve('full-page.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  console.log('--- TARGET WEBPAGE ANALYSIS ---');
  
  // Find all sections or major components
  // Let's look for tags like <header>, <section>, <footer> and their classes
  const tagRegex = /<(header|section|footer|nav|div)\b[^>]*>/gi;
  const sections = [];
  
  let match;
  while ((match = tagRegex.exec(htmlContent)) !== null) {
    const openingTag = match[0];
    const type = match[1];
    
    // Extract class and id
    const classMatch = openingTag.match(/class=["']([^"']+)["']/i);
    const idMatch = openingTag.match(/id=["']([^"']+)["']/i);
    const astroCidMatch = openingTag.match(/data-astro-cid-[a-zA-Z0-9]+/i);
    
    if (classMatch || idMatch || ['header', 'footer', 'nav', 'section'].includes(type.toLowerCase())) {
      const cls = classMatch ? classMatch[1] : '';
      const id = idMatch ? idMatch[1] : '';
      const astro = astroCidMatch ? astroCidMatch[0] : '';
      
      // We only care about major sections and wrappers
      if (
        ['header', 'footer', 'nav', 'section'].includes(type.toLowerCase()) ||
        cls.includes('hero-bg') || cls.includes('navbar') || cls.includes('bottom-strip')
      ) {
        sections.push({ type, class: cls, id, astro });
      }
    }
  }
  
  console.log('Detected Major Visual Elements in Target:');
  sections.forEach((s, idx) => {
    console.log(`[${idx + 1}] <${s.type}> Class: "${s.class}" | ID: "${s.id}" | AstroAttr: "${s.astro}"`);
  });
  
} catch (err) {
  console.error('Error analyzing HTML:', err.message);
}
