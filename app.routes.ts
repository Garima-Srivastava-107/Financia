import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'financia',loadChildren:()=> import('./financia/financia.module').then(m=>m.FinanciaModule)
    }
];
