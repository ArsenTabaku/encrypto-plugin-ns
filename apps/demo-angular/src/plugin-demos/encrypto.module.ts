import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { EncryptoComponent } from './encrypto.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: EncryptoComponent }])],
	declarations: [EncryptoComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class EncryptoModule {}
