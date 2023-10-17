import {EventEmitter} from 'events';

export interface SignResult {
    xdr?: string;
    error?: string;
}

export interface ConnectResult  {
    publicKey?: string;
    error?: string;
}

interface InfinityWallet extends EventEmitter {
  disconnect(): Promise<void>;
  close(): Promise<void>;
  sign(xdr: string): Promise<SignResult>;
  connect(): Promise<ConnectResult>;
  once(eventName: string | symbol, listener: (...args: any[]) => void): this;
  on(eventName: string | symbol, listener: (...args: any[]) => void): this;
  off(eventName: string | symbol, listener: (...args: any[]) => void): this;
  addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
  removeAllListeners(event?: string | symbol): this;
}
interface Window {
  infinitywallet?: {
      stellar?: InfinityWallet;
  };
}
export class InfinityWalletConnector extends EventEmitter {
  connected: Boolean;
  icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDI1IDEwMjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMjUgMTAyNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9DQoJLnN0MntvcGFjaXR5OjAuNDk7ZmlsbDp1cmwoI1NWR0lEXzNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qze29wYWNpdHk6MC40OTtmaWxsOnVybCgjU1ZHSURfNF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDR7b3BhY2l0eTowLjQ5O2ZpbGw6dXJsKCNTVkdJRF81Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0NXtmaWxsOnVybCgjU1ZHSURfNl8pO30NCgkuc3Q2e29wYWNpdHk6MC40OTtmaWxsOnVybCgjU1ZHSURfN18pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDd7b3BhY2l0eTowLjQ5O2ZpbGw6dXJsKCNTVkdJRF84Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0OHtvcGFjaXR5OjAuNDk7ZmlsbDp1cmwoI1NWR0lEXzlfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCjwvc3R5bGU+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUxMi41IiB5MT0iMjAzLjgxNTIiIHgyPSI1MTIuNSIgeTI9Ijk0Mi45NzAxIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMUQyNjQzIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzEyMTQyQyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxMDI1IiBoZWlnaHQ9IjEwMjUiLz4NCjxnPg0KCTxnPg0KCQkNCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzE0LjM0OTciIHkxPSIxMDg4LjUyMjIiIHgyPSIzMTQuMzQ5NyIgeTI9IjM2LjIyNTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMjYwKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSI1LjEwMjA0NGUtMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEJGRTEiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjAuOTY1MSIgc3R5bGU9InN0b3AtY29sb3I6IzI3MzhBQiIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTU0LjgsMzcxLjZjLTEuMS0zLTMuNi0zLjktNC43LTQuMmMtMS4xLTAuMy00LjItMC44LTYuOCwxLjhMNTI5LDM4My41bC0yLjQsMi40TDQxMywyNzIuOQ0KCQkJYy0yMC43LTIwLjctNDguNC0zMi4xLTc3LjgtMzIuMXMtNTcsMTEuNC03Ny43LDMyLjFMOTUuOCw0MzQuOGMtMjAuOCwyMC44LTMyLjIsNDguNi0zMi4xLDc4QzYzLjYsNTQyLjQsNzUsNTcwLjIsOTUuOCw1OTENCgkJCWwxNjEuOSwxNjFjMjAuNywyMC43LDQ4LjMsMzIuMSw3Ny43LDMyLjFjMjkuNCwwLDU3LTExLjQsNzcuNy0zMi4xYzAsMCwzNi41LTM2LjUsMzYuOC0zNi44YzQuOC00LjgsMTAuNi0xMS40LDEzLjgtMjANCgkJCWMyLjUtNi45LDMuMy0xNC40LDIuMy0yMS42Yy0xLTcuMy0zLjctMTQuMy03LjktMjAuMmMtMS42LTIuMy0zLjQtNC41LTUuNS02LjRjLTE3LjktMTcuNi00Ny0xNy41LTY0LjksMC4zTDM0Ny45LDY4Nw0KCQkJYy0yLjQsMi40LTUuNCw0LjEtOC43LDQuOGMtMy44LDAuOC02LjIsMC41LTkuNC0wLjZjLTMuMi0xLjEtNS45LTMtOC4yLTUuM0wxNjAuOSw1MjVjLTIuNS0yLjUtNC4yLTUuNy00LjktOQ0KCQkJYy0wLjktNC40LDAtOSwyLjItMTIuNmwwLjktMWMxLjktMS45LDE2Mi4zLTE2MiwxNjMuNy0xNjMuNGMyLjYtMi42LDUuNy00LjIsOS4zLTQuOWMxLjEtMC4yLDIuMi0wLjMsMy4zLTAuMw0KCQkJYzQuOCwwLDkuMiwxLjgsMTIuNSw1LjNsMTEzLjIsMTEyLjVsLTUuNyw1LjdsLTExLjEsMTEuM2MtMi42LDIuNi0yLjEsNS43LTEuOCw2LjhjMC4zLDEuMSwxLjIsMy42LDQuMiw0LjdMNTQ5LDQ5Mi42DQoJCQljNC4yLTAuMSw4LjItMS43LDExLjItNC43YzMuMS0zLDQuNy03LjEsNC44LTExLjNMNTU0LjgsMzcxLjZ6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMTIuODQ5NyIgeTE9IjcxOS40NTQyIiB4Mj0iMTgwLjY0MjMiIHkyPSI2NjIuNzU0NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMC45MzcxIDEyNTkuMzkpIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjMuNDg4NTc1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NDtzdG9wLW9wYWNpdHk6MCIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTU5LjYsNTIzLjZjLTQuNi01LjItNS41LTE0LjItMS40LTIwLjNjMCwwLTUzLjIsNTguMS0yNy42LDEyMi4zbDMzLjcsMzMuNWw0OS04MS41TDE1OS42LDUyMy42eiIvPg0KCQkNCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjMwNi4wOTk2IiB5MT0iLTQwMC43MzIyIiB4Mj0iMjI3My44MDYyIiB5Mj0iLTQ0Ni41MzAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI2ODEuMDAxNSAxMTIyLjA5MykiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy40ODg1NzVlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0Ii8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0O3N0b3Atb3BhY2l0eTowIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMjUuNCw2ODkuMWM2MCw1NS4yLDEyNi4xLDI0LjUsMTI2LjEsMjQuNXM4LjctOCwxMi4yLTE4LjZjLTguOS00LjMtNzMuNC01MC41LTczLjQtNTAuNWwtMzguMSwzOC4xDQoJCQlDMzM4LjUsNjk5LjIsMzI1LjQsNjg5LjEsMzI1LjQsNjg5LjF6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzk3LjEwNjIiIHkxPSItODIwLjk3MzYiIHgyPSIyNDIxLjM0MjMiIHkyPSItNzYxLjAyMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjY4MS4wMDE1IDExMjIuMDkzKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSIzLjQ4ODU3NWUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQ7c3RvcC1vcGFjaXR5OjAiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTI4NS44LDM3Ni4xYzAsMCwzOC40LTM4LjcsMzguNS0zOC41YzAsMCwxMC4zLTguMiwyMS4xLTAuN2MwLDAtNjMuOS01Mi42LTEzMi4yLTE5LjZsLTE5LjksMjBMMjg1LjgsMzc2LjF6DQoJCQkiLz4NCgk8L2c+DQoJPGc+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF82XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3MTMuMTUwMyIgeTE9IjEwODguNTIyMiIgeDI9IjcxMy4xNTAzIiB5Mj0iMzYuMjI1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEyNjApIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjUuMTAyMDQ0ZS0wMyIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZFMSIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC45NjUxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjczOEFCIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik00NzIuNyw2NTMuNGMxLjEsMywzLjYsMy45LDQuNyw0LjJzNC4yLDAuOCw2LjgtMS44bDE0LjMtMTQuM2wyLjQtMi40TDYxNC41LDc1Mg0KCQkJYzIwLjcsMjAuNyw0OC40LDMyLjEsNzcuOCwzMi4xYzI5LjQsMCw1Ny0xMS40LDc3LjctMzIuMWwxNjEuNy0xNjEuOWMyMC44LTIwLjgsMzIuMi00OC42LDMyLjEtNzhjMC4xLTI5LjYtMTEuMy01Ny40LTMyLjEtNzguMg0KCQkJbC0xNjEuOS0xNjFjLTIwLjctMjAuNy00OC4zLTMyLjEtNzcuNy0zMi4xcy01NywxMS40LTc3LjcsMzIuMWMwLDAtMzYuNSwzNi41LTM2LjgsMzYuOGMtNC44LDQuOC0xMC42LDExLjQtMTMuOCwyMA0KCQkJYy0yLjUsNi45LTMuMywxNC40LTIuMywyMS42YzEsNy4zLDMuNywxNC4zLDcuOSwyMC4yYzEuNiwyLjMsMy40LDQuNSw1LjUsNi40YzE3LjksMTcuNiw0NywxNy41LDY0LjktMC4zbDM5LjgtMzkuNw0KCQkJYzIuNC0yLjQsNS40LTQuMSw4LjctNC44YzMuOC0wLjgsNi4yLTAuNSw5LjQsMC42czUuOSwzLDguMiw1LjNsMTYwLjcsMTYwLjdjMi41LDIuNSw0LjIsNS43LDQuOSw5YzAuOSw0LjQsMCw5LTIuMiwxMi42bC0wLjksMQ0KCQkJYy0xLjksMS45LTE2Mi4zLDE2Mi0xNjMuNywxNjMuNGMtMi42LDIuNi01LjcsNC4yLTkuMyw0LjljLTEuMSwwLjItMi4yLDAuMy0zLjMsMC4zYy00LjgsMC05LjItMS44LTEyLjUtNS4zbC0xMTMuMy0xMTJsNS43LTUuNw0KCQkJbDExLjEtMTEuM2MyLjYtMi42LDIuMS01LjcsMS44LTYuOHMtMS4yLTMuNi00LjItNC43bC0xMDIuMi0xMi41Yy00LjIsMC4xLTguMiwxLjctMTEuMiw0LjdjLTMuMSwzLTQuNyw3LjEtNC44LDExLjNMNDcyLjcsNjUzLjQNCgkJCXoiLz4NCgkJDQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzdfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE5NjMuNTU5IiB5MT0iLTIxMS42MDk2IiB4Mj0iMjAzMS4zNTE2IiB5Mj0iLTI2OC4zMDg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI4NzkuMTMwMSA2OTYuNjYpIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjMuNDg4NTc1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NDtzdG9wLW9wYWNpdHk6MCIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODY3LjksNTAxLjRjNC42LDUuMiw1LjUsMTQuMiwxLjQsMjAuM2MwLDAsNTMuMi01OC4xLDI3LjYtMTIyLjNsLTMzLjctMzMuNWwtNDksODEuNUw4NjcuOSw1MDEuNHoiLz4NCgkJDQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzhfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ1NS40MDA1IiB5MT0iNTMwLjMwOTMiIHgyPSI0MjMuMTA2OSIgeTI9IjQ4NC41MTEzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDE5Ny4xOTE2IDgzMy45NTcxKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSIzLjQ4ODU3NWUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQ7c3RvcC1vcGFjaXR5OjAiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTcwMi4xLDMzNS45Yy02MC01NS4yLTEyNi4xLTI0LjUtMTI2LjEtMjQuNXMtOC43LDgtMTIuMiwxOC42YzguOSw0LjMsNzMuNCw1MC41LDczLjQsNTAuNWwzOC4xLTM4LjENCgkJCUM2ODksMzI1LjgsNzAyLjEsMzM1LjksNzAyLjEsMzM1Ljl6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1NDYuMzI1MyIgeTE9IjExMC4xMDY0IiB4Mj0iNTcwLjU2MTIiIHkyPSIxNzAuMDU4OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxOTcuMTkxNiA4MzMuOTU3MSkiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy40ODg1NzVlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0Ii8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0O3N0b3Atb3BhY2l0eTowIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDgiIGQ9Ik03NDEuNiw2NDguOWMwLDAtMzguNCwzOC43LTM4LjUsMzguNWMwLDAtMTAuMyw4LjItMjEuMSwwLjdjMCwwLDYzLjksNTIuNiwxMzIuMiwxOS42bDE5LjktMjBMNzQxLjYsNjQ4Ljl6Ig0KCQkJLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
  url = 'https://infinitywallet.io/download';
  name = 'InfinityWallet';
  private _publicKey:string;

  constructor() {
    super()
    this.connected = false
    this.isInstalled = this.isInstalled.bind(this)
    this.isConnected = this.isConnected.bind(this)
    this.sign = this.sign.bind(this)
    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.handleAccountsChanged = this.handleAccountsChanged.bind(this)
  }
  handleAccountsChanged(account){
    this._publicKey = account
    this.emit('accountChanged',account)
  }

  // disconnect client
  disconnect() {
    const windowStellar = window as Window
    if (this.isInstalled() && windowStellar.infinitywallet.stellar.removeListener) {
      windowStellar.infinitywallet.stellar.removeListener('accountChange', this.handleAccountsChanged)
    }
    this._publicKey = ""
    this.connected = false
    this.emit('accountChanged','')
  }


  // Checks if user has installed InfinityWallet
  isInstalled():Boolean{
    const windowStellar = window as Window
    return windowStellar?.infinitywallet?.stellar != undefined
  }

  // Checks if connector is connected with InfinityWallet
  isConnected():Boolean{
    return this.connected
  }

  // Gets publicKey
  get publicKey():string{
    return this._publicKey
  }

  // Signs a XDR coded Object data on InfinityWallet
  sign(xdr: string): Promise<SignResult> {
    const _ = this;
    return new Promise(async (resolve,reject)=>{
      if(!_.isInstalled()){
        reject({
          error:"Not detected"
        })
      }
      else if(!_.isConnected()){
        reject({
          error:"Not connected"
        })
      }
      else{
        try{
          const windowStellar = window as Window
          resolve(await windowStellar.infinitywallet.stellar.sign(xdr))
        }
        catch(e){
          console.error(e)
          reject(e)
        }
      }

    })

  }

  // Connects with InfinityWallet
  connect():Promise<ConnectResult> {
    const _ = this;
    return new Promise(async (resolve,reject)=>{
      if(!_.isInstalled()){
        reject({
          error:"Not detected"
        })
        _.connected = false
      }
      else{
        try{
          const windowStellar = window as Window
          const result = await windowStellar.infinitywallet.stellar.connect()
          _.connected = true
          windowStellar.infinitywallet.stellar.on('accountChange', _.handleAccountsChanged)
          _._publicKey = result.publicKey
          resolve(result)
        }
        catch(e){
          console.error(e)
          _.connected = false
          reject(e)
        }
      }

    })
  }

}
