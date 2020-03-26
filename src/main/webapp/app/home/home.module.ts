import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrenchGeoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [FrenchGeoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class FrenchGeoHomeModule {}
