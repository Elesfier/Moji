
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent, ContentGuard } from './index'
import { modules } from './index';

const contentRoutes: Routes = [
    {
      path: '',
      component: ContentComponent,
      canActivate: [ContentGuard],
      children: modules.routes
    },
    { path: '**', redirectTo: '' },
];

export const ContentRouting = RouterModule.forChild(contentRoutes);
