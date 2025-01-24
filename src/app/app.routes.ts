import { Routes } from '@angular/router';
import { SideMessageComponent } from './side-message/side-message.component';
import { ReposResultComponent } from './repos-result/repos-result.component';

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
