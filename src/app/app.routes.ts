import { Routes } from '@angular/router';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { SubstreamComponent } from './substream/substream.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SettingSectionComponent } from './setting-section/setting-section.component';

export const routes: Routes = [
    { path: '', component: MiddleContentComponent },
    {
      path: 'subscription',
      component: SubstreamComponent,
    },
    { path: 'dropdown', component: DropdownComponent },
    {
      path: 'setting',
      component: SettingSectionComponent,
    },
];
