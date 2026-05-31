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

  console.log('Fetching homepage-settings global...');
  const data = await payload.findGlobal({
    slug: 'homepage-settings',
    depth: 2,
  });

  console.log('------------------------------------');
  console.log('HOMEPAGE SETTINGS GLOBAL CONTENT:');
  console.log(JSON.stringify(data, null, 2));
  console.log('------------------------------------');
  process.exit(0);
};

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
