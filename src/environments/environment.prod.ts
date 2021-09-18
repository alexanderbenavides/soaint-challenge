import { properties } from 'src/app/utils/properties';

export const environment = {
  production: true,
  basePath: `${properties.basePathProduction}`,
  fullPath: `${properties.basePathProduction}/${properties.apiName}/${properties.version}`
};
