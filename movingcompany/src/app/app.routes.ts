import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Make sure this import is correct
import { ContactComponent } from './contact/contact.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TipsComponent } from './tips/tips.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // This makes HomeComponent the default for the root path
    { path: 'contact', component: ContactComponent },
    { path: 'procedure', component: ProcedureComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'tips', component: TipsComponent },
];
