
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LoginGuard } from './login/index';
import { RegisterComponent } from './register/index';
import { SiteComponent } from './site/index';
import { ContentGuard } from '../_content/index';

//[NOTE]: After changing this, you must change base link in content
const CONTENT_PATH: string = 'moji';

const appRoutes: Routes = [
    { path: '', component: SiteComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'site', component: SiteComponent },
    { path: CONTENT_PATH, loadChildren: '../_content/content.module#ContentModule' },
    { path: '**', redirectTo: 'site' }
];

export const RootRouting = RouterModule.forRoot(appRoutes);
