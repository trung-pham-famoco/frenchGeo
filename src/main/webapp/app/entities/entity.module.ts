import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.FrenchGeoRegionModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.FrenchGeoDepartmentModule)
      },
      {
        path: 'city',
        loadChildren: () => import('./city/city.module').then(m => m.FrenchGeoCityModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class FrenchGeoEntityModule {}
