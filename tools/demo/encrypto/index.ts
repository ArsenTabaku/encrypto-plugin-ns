import { DemoSharedBase } from '../utils';
import { EncryptoCommon } from '@my-plugins-scope/encrypto/common';
import { EncryptoIOS } from '@my-plugins-scope/encrypto/index.ios';
import { EncryptoAndroid } from '@my-plugins-scope/encrypto/index.android';
import { platformNames } from '@nativescript/core';


export class DemoSharedEncrypto extends DemoSharedBase {
	testIt() {
		// console.log('test encrypto!!!');
		EncryptoCommon.testCommon();
		if(!platformNames.ios) {
			EncryptoIOS.testIOS();
		} else {
			EncryptoAndroid.testAndroid();
		}
	}
}
