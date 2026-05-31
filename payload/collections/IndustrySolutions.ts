import { CollectionConfig } from 'payload/types';

const IndustrySolutions: CollectionConfig = {
  slug: 'industry-solutions',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
};

export default IndustrySolutions;
