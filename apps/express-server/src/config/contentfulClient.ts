import * as dotenv from 'dotenv';
dotenv.config({ path: 'apps/express-server/.env' });

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT as string, // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export default client;
