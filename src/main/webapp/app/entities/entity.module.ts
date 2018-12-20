import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PhoneStatefulRegionModule } from './region/region.module';
import { PhoneStatefulCountryModule } from './country/country.module';
import { PhoneStatefulLocationModule } from './location/location.module';
import { PhoneStatefulDepartmentModule } from './department/department.module';
import { PhoneStatefulTaskModule } from './task/task.module';
import { PhoneStatefulEmployeeModule } from './employee/employee.module';
import { PhoneStatefulJobModule } from './job/job.module';
import { PhoneStatefulJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        PhoneStatefulRegionModule,
        PhoneStatefulCountryModule,
        PhoneStatefulLocationModule,
        PhoneStatefulDepartmentModule,
        PhoneStatefulTaskModule,
        PhoneStatefulEmployeeModule,
        PhoneStatefulJobModule,
        PhoneStatefulJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhoneStatefulEntityModule {}
