const path = require('path');
const dotenv = require('dotenv');

// Load environment variables immediately before any ES module imports are evaluated
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

// Set the Payload configuration path so the Local API can resolve it correctly.
process.env.PAYLOAD_CONFIG_PATH = path.resolve(process.cwd(), './payload/payload.config.ts');

// Register extension handlers to prevent Node.js from attempting to parse
// client-side stylesheets (SCSS/CSS/images) during standalone terminal execution.
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.svg'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;
require.extensions['.jpeg'] = () => null;

// Require and run the TypeScript seed script
require('./seed.ts');
