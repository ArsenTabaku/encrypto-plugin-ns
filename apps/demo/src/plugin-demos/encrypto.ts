import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedEncrypto } from '@demo/shared';
import {} from '@my-plugins-scope/encrypto';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedEncrypto {}
