
export * from '../_common/index';
export * from '../_model/index';

import { archiveRoute } from './archive/index';
import { pluginsRoute } from './plugins/index';
import { rssRoute } from './rss/index';

export const routes = []
  .concat(pluginsRoute)
  .concat(rssRoute)
  .concat(archiveRoute);
