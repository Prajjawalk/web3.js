/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import * as net from 'net';
import { Bzz } from 'web3-zond-bzz';
import { BatchRequest, provider, Providers, Extension } from 'web3-zond-core';
import { Zond } from 'web3-zond';
import { Personal } from 'web3-zond-personal';
import { Network } from 'web3-zond-net';
import { Shh } from 'web3-zond-shh';
import { Utils } from 'web3-zond-utils';

export default class Web3 {
    constructor();
    constructor(provider: provider);
    constructor(provider: provider, net: net.Socket);

    static modules: Modules;
    readonly givenProvider: any;
    static readonly givenProvider: any;
    defaultAccount: string | null;
    defaultBlock: string | number;
    readonly currentProvider: provider;
    setProvider(provider: provider): boolean;
    BatchRequest: new () => BatchRequest;
    static readonly providers: Providers;

    utils: Utils;
    zond: Zond;
    shh: Shh;
    bzz: Bzz;
    version: string;
    static readonly version: string;
    static readonly utils: Utils;
    extend(extension: Extension): any;
}

export interface Modules {
    Zond: new (provider: provider, net: net.Socket) => Zond;
    Net: new (provider: provider, net: net.Socket) => Network;
    Personal: new (provider: provider, net: net.Socket) => Personal;
    Shh: new (provider: provider, net: net.Socket) => Shh;
    Bzz: new (provider: provider) => Bzz;
}
