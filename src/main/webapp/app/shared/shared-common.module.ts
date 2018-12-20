import { NgModule } from '@angular/core';

import { PhoneStatefulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [PhoneStatefulSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [PhoneStatefulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PhoneStatefulSharedCommonModule {}
