import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainLayoutsComponent } from './main-layouts/main-layouts.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutsComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'imprint',
        component: ImprintComponent
    }
];
