const path = require('path');
const dotenv = require('dotenv');

// Load env
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

process.env.PAYLOAD_CONFIG_PATH = path.resolve(process.cwd(), './payload/payload.config.ts');
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.svg'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;
require.extensions['.jpeg'] = () => null;

const { getPayload } = require('payload/dist/payload');
const config = require('../payload/payload.config').default;

const main = async () => {
  console.log('Connecting to database...');
  const payload = await getPayload({
    secret: process.env.PAYLOAD_SECRET,
    config,
  });

  console.log('Fetching all media documents...');
  const mediaList = await payload.find({
    collection: 'media',
    limit: 100,
  });

  console.log(`Total Media documents found in DB: ${mediaList.docs.length}`);
  mediaList.docs.forEach((doc, idx) => {
    console.log(`[${idx + 1}] ID: ${doc.id} | Alt: "${doc.alt}" | Filename: "${doc.filename}" | URL: "${doc.url}"`);
  });

  process.exit(0);
};

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
