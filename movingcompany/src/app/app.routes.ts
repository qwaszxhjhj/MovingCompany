import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Make sure this import is correct
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // This makes HomeComponent the default for the root path
    { path: 'contact', component: ContactComponent },
];
