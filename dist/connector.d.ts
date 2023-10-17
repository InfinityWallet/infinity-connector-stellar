/// <reference types="node" />
import { EventEmitter } from 'events';
export interface SignResult {
    xdr?: string;
    error?: string;
}
export interface ConnectResult {
    publicKey?: string;
    error?: string;
}
export declare class InfinityWalletConnector extends EventEmitter {
    connected: Boolean;
    icon: string;
    url: string;
    name: string;
    private _publicKey;
    constructor();
    handleAccountsChanged(account: any): void;
    disconnect(): void;
    isInstalled(): Boolean;
    isConnected(): Boolean;
    get publicKey(): string;
    sign(xdr: string): Promise<SignResult>;
    connect(): Promise<ConnectResult>;
}
