import { GlobalConfig } from 'payload/types';

const HomepageSettings: GlobalConfig = {
  slug: 'homepage-settings',
  fields: [
    {
      name: 'heroHeadline',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroSubtext',
      type: 'textarea',
      required: true,
    },
    {
      name: 'heroCTAPrimary',
      type: 'text',
      required: true,
    },
    {
      name: 'heroCTASecondary',
      type: 'text',
      required: true,
    },
    {
      name: 'heroBackgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'trustedByLogos',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default HomepageSettings;
