import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FrenchGeoSharedModule } from 'app/shared/shared.module';
import { CityComponent } from './city.component';
import { CityDetailComponent } from './city-detail.component';
import { CityUpdateComponent } from './city-update.component';
import { CityDeleteDialogComponent } from './city-delete-dialog.component';
import { cityRoute } from './city.route';

@NgModule({
  imports: [FrenchGeoSharedModule, RouterModule.forChild(cityRoute)],
  declarations: [CityComponent, CityDetailComponent, CityUpdateComponent, CityDeleteDialogComponent],
  entryComponents: [CityDeleteDialogComponent]
})
export class FrenchGeoCityModule {}
