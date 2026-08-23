import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';

export default defineConfig({
  name: 'acwa-studio',
  title: 'ACWA Content Studio',

  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'acwa-project').replace(/[^a-z0-9-]/gi, '') || 'acwa-project',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
