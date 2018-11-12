
export * from '../_common/index';

import { ArchiveComponent } from './archive/archive.component';
import { DetailsArchiveModalComponent } from './archive/details/details-archive-modal.component';
import { CreateArchiveModalComponent } from './archive/create/create-archive-modal.component';

import { PluginsComponent } from './plugins/plugins.component';

import { RSSComponent } from './RSS/rss.component';
import { DetailsRSSModalComponent } from './RSS/details/details-rss-modal.component';
import { CreateRSSModalComponent } from './RSS/create/create-rss-modal.component';

export const ContentRoutes = [
  {
    path: 'archive',
    component: ArchiveComponent
  },
      {
        path: 'archive',
        component: DetailsArchiveModalComponent
      },
      {
        path: 'archive',
        component: CreateArchiveModalComponent
      },
  {
    path: 'plugins',
    component: PluginsComponent
  },
  {
    path: 'RSS',
    component: RSSComponent
  },
      {
        path: 'RSS',
        component: DetailsRSSModalComponent
      },
      {
        path: 'RSS',
        component: CreateRSSModalComponent
      }
];
