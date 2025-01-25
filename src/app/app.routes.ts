import { Routes } from '@angular/router';
import { SideMessageComponent } from './views/side-message/side-message.component';
import { ReposResultComponent } from './views/repos-result/repos-result.component';

export const routes: Routes = [
    {
        path:'',
        component: SideMessageComponent
    },
    {
        path:'result',
        component: ReposResultComponent
    }
];
