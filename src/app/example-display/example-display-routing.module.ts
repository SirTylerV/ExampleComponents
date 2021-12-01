import { Routes } from "@angular/router";
import { ExampleDisplayComponent } from "./example-display.component";

export const ExampleDisplayRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example-display'
    },
    {
        path: 'example-display',
        component: ExampleDisplayComponent
    }
];
