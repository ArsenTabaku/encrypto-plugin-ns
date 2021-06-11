import { Component, NgZone } from '@angular/core';
import { DemoSharedEncrypto } from '@demo/shared';
import {} from '@my-plugins-scope/encrypto';

@Component({
	selector: 'demo-encrypto',
	templateUrl: 'encrypto.component.html',
})
export class EncryptoComponent {
	demoShared: DemoSharedEncrypto;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedEncrypto();
	}
}
