import { GlobalConfig } from 'payload/types';

const Stats: GlobalConfig = {
  slug: 'stats',
  fields: [
    {
      name: 'installationsWorldwide',
      type: 'number',
      required: true,
      defaultValue: 500,
    },
    {
      name: 'countriesServed',
      type: 'number',
      required: true,
      defaultValue: 40,
    },
    {
      name: 'patentsHeld',
      type: 'number',
      required: true,
      defaultValue: 200,
    },
    {
      name: 'yearsExperience',
      type: 'number',
      required: true,
      defaultValue: 20,
    },
  ],
};

export default Stats;
