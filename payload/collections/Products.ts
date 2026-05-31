import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Optical Speed Gate', value: 'optical-speed-gate' },
        { label: 'Flap Barrier', value: 'flap-barrier' },
        { label: 'Tripod Turnstile', value: 'tripod-turnstile' },
        { label: 'Full Height', value: 'full-height' },
        { label: 'Swing Gate', value: 'swing-gate' },
        { label: 'Sliding Gate', value: 'sliding-gate' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Products;
