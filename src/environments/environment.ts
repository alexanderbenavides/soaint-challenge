import { properties } from 'src/app/utils/properties';

export const environment = {
  production: false,
  basePath: `${properties.basePathDev}`,
  // basePath: `/${properties.basePathProxy}/${properties.apiName}/${properties.version}`, // for proxy service
  fullPath: `${properties.basePathDev}/${properties.apiName}/${properties.version}`,
  // fullPath: `/${properties.basePathProxy}/${properties.apiName}/${properties.version}`, // for proxy service

};
