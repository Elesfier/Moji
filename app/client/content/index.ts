
export * from '../_common/index';

import { ArchiveComponent } from './archive/archive.component';
import { DetailsArchiveModalComponent } from './archive/details/details-archive-modal.component';
import { CreateArchiveModalComponent } from './archive/create/create-archive-modal.component';
import { PluginsComponent } from './plugins/plugins.component';

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
  }
];
