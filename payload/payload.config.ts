import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';

import Media from './collections/Media';
import Products from './collections/Products';
import Testimonials from './collections/Testimonials';
import IndustrySolutions from './collections/IndustrySolutions';
import Stats from './globals/Stats';
import HomepageSettings from './globals/HomepageSettings';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/easco',
  }),
  collections: [
    Media,
    Products,
    Testimonials,
    IndustrySolutions,
  ],
  globals: [
    Stats,
    HomepageSettings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
