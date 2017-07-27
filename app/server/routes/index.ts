
export * from '../_common/index';
export * from '../_model/index';

import { archiveRoute } from './archive/index';
import { pluginsRoute } from './plugins/index';

export const routes = []
  .concat(pluginsRoute)
  .concat(archiveRoute);
