"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfinityWalletConnector = void 0;
var events_1 = require("events");
var InfinityWalletConnector = /** @class */ (function (_super) {
    __extends(InfinityWalletConnector, _super);
    function InfinityWalletConnector() {
        var _this = _super.call(this) || this;
        _this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDI1IDEwMjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMjUgMTAyNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9DQoJLnN0MntvcGFjaXR5OjAuNDk7ZmlsbDp1cmwoI1NWR0lEXzNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCgkuc3Qze29wYWNpdHk6MC40OTtmaWxsOnVybCgjU1ZHSURfNF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDR7b3BhY2l0eTowLjQ5O2ZpbGw6dXJsKCNTVkdJRF81Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0NXtmaWxsOnVybCgjU1ZHSURfNl8pO30NCgkuc3Q2e29wYWNpdHk6MC40OTtmaWxsOnVybCgjU1ZHSURfN18pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDd7b3BhY2l0eTowLjQ5O2ZpbGw6dXJsKCNTVkdJRF84Xyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0OHtvcGFjaXR5OjAuNDk7ZmlsbDp1cmwoI1NWR0lEXzlfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30NCjwvc3R5bGU+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUxMi41IiB5MT0iMjAzLjgxNTIiIHgyPSI1MTIuNSIgeTI9Ijk0Mi45NzAxIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMUQyNjQzIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzEyMTQyQyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxMDI1IiBoZWlnaHQ9IjEwMjUiLz4NCjxnPg0KCTxnPg0KCQkNCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzE0LjM0OTciIHkxPSIxMDg4LjUyMjIiIHgyPSIzMTQuMzQ5NyIgeTI9IjM2LjIyNTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMjYwKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSI1LjEwMjA0NGUtMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEJGRTEiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjAuOTY1MSIgc3R5bGU9InN0b3AtY29sb3I6IzI3MzhBQiIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTU0LjgsMzcxLjZjLTEuMS0zLTMuNi0zLjktNC43LTQuMmMtMS4xLTAuMy00LjItMC44LTYuOCwxLjhMNTI5LDM4My41bC0yLjQsMi40TDQxMywyNzIuOQ0KCQkJYy0yMC43LTIwLjctNDguNC0zMi4xLTc3LjgtMzIuMXMtNTcsMTEuNC03Ny43LDMyLjFMOTUuOCw0MzQuOGMtMjAuOCwyMC44LTMyLjIsNDguNi0zMi4xLDc4QzYzLjYsNTQyLjQsNzUsNTcwLjIsOTUuOCw1OTENCgkJCWwxNjEuOSwxNjFjMjAuNywyMC43LDQ4LjMsMzIuMSw3Ny43LDMyLjFjMjkuNCwwLDU3LTExLjQsNzcuNy0zMi4xYzAsMCwzNi41LTM2LjUsMzYuOC0zNi44YzQuOC00LjgsMTAuNi0xMS40LDEzLjgtMjANCgkJCWMyLjUtNi45LDMuMy0xNC40LDIuMy0yMS42Yy0xLTcuMy0zLjctMTQuMy03LjktMjAuMmMtMS42LTIuMy0zLjQtNC41LTUuNS02LjRjLTE3LjktMTcuNi00Ny0xNy41LTY0LjksMC4zTDM0Ny45LDY4Nw0KCQkJYy0yLjQsMi40LTUuNCw0LjEtOC43LDQuOGMtMy44LDAuOC02LjIsMC41LTkuNC0wLjZjLTMuMi0xLjEtNS45LTMtOC4yLTUuM0wxNjAuOSw1MjVjLTIuNS0yLjUtNC4yLTUuNy00LjktOQ0KCQkJYy0wLjktNC40LDAtOSwyLjItMTIuNmwwLjktMWMxLjktMS45LDE2Mi4zLTE2MiwxNjMuNy0xNjMuNGMyLjYtMi42LDUuNy00LjIsOS4zLTQuOWMxLjEtMC4yLDIuMi0wLjMsMy4zLTAuMw0KCQkJYzQuOCwwLDkuMiwxLjgsMTIuNSw1LjNsMTEzLjIsMTEyLjVsLTUuNyw1LjdsLTExLjEsMTEuM2MtMi42LDIuNi0yLjEsNS43LTEuOCw2LjhjMC4zLDEuMSwxLjIsMy42LDQuMiw0LjdMNTQ5LDQ5Mi42DQoJCQljNC4yLTAuMSw4LjItMS43LDExLjItNC43YzMuMS0zLDQuNy03LjEsNC44LTExLjNMNTU0LjgsMzcxLjZ6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMTIuODQ5NyIgeTE9IjcxOS40NTQyIiB4Mj0iMTgwLjY0MjMiIHkyPSI2NjIuNzU0NyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAtMC45MzcxIDEyNTkuMzkpIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjMuNDg4NTc1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NDtzdG9wLW9wYWNpdHk6MCIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTU5LjYsNTIzLjZjLTQuNi01LjItNS41LTE0LjItMS40LTIwLjNjMCwwLTUzLjIsNTguMS0yNy42LDEyMi4zbDMzLjcsMzMuNWw0OS04MS41TDE1OS42LDUyMy42eiIvPg0KCQkNCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjMwNi4wOTk2IiB5MT0iLTQwMC43MzIyIiB4Mj0iMjI3My44MDYyIiB5Mj0iLTQ0Ni41MzAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI2ODEuMDAxNSAxMTIyLjA5MykiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy40ODg1NzVlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0Ii8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0O3N0b3Atb3BhY2l0eTowIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0zMjUuNCw2ODkuMWM2MCw1NS4yLDEyNi4xLDI0LjUsMTI2LjEsMjQuNXM4LjctOCwxMi4yLTE4LjZjLTguOS00LjMtNzMuNC01MC41LTczLjQtNTAuNWwtMzguMSwzOC4xDQoJCQlDMzM4LjUsNjk5LjIsMzI1LjQsNjg5LjEsMzI1LjQsNjg5LjF6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzk3LjEwNjIiIHkxPSItODIwLjk3MzYiIHgyPSIyNDIxLjM0MjMiIHkyPSItNzYxLjAyMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjY4MS4wMDE1IDExMjIuMDkzKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSIzLjQ4ODU3NWUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQ7c3RvcC1vcGFjaXR5OjAiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTI4NS44LDM3Ni4xYzAsMCwzOC40LTM4LjcsMzguNS0zOC41YzAsMCwxMC4zLTguMiwyMS4xLTAuN2MwLDAtNjMuOS01Mi42LTEzMi4yLTE5LjZsLTE5LjksMjBMMjg1LjgsMzc2LjF6DQoJCQkiLz4NCgk8L2c+DQoJPGc+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF82XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3MTMuMTUwMyIgeTE9IjEwODguNTIyMiIgeDI9IjcxMy4xNTAzIiB5Mj0iMzYuMjI1MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEyNjApIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjUuMTAyMDQ0ZS0wMyIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkZFMSIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMC45NjUxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjczOEFCIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik00NzIuNyw2NTMuNGMxLjEsMywzLjYsMy45LDQuNyw0LjJzNC4yLDAuOCw2LjgtMS44bDE0LjMtMTQuM2wyLjQtMi40TDYxNC41LDc1Mg0KCQkJYzIwLjcsMjAuNyw0OC40LDMyLjEsNzcuOCwzMi4xYzI5LjQsMCw1Ny0xMS40LDc3LjctMzIuMWwxNjEuNy0xNjEuOWMyMC44LTIwLjgsMzIuMi00OC42LDMyLjEtNzhjMC4xLTI5LjYtMTEuMy01Ny40LTMyLjEtNzguMg0KCQkJbC0xNjEuOS0xNjFjLTIwLjctMjAuNy00OC4zLTMyLjEtNzcuNy0zMi4xcy01NywxMS40LTc3LjcsMzIuMWMwLDAtMzYuNSwzNi41LTM2LjgsMzYuOGMtNC44LDQuOC0xMC42LDExLjQtMTMuOCwyMA0KCQkJYy0yLjUsNi45LTMuMywxNC40LTIuMywyMS42YzEsNy4zLDMuNywxNC4zLDcuOSwyMC4yYzEuNiwyLjMsMy40LDQuNSw1LjUsNi40YzE3LjksMTcuNiw0NywxNy41LDY0LjktMC4zbDM5LjgtMzkuNw0KCQkJYzIuNC0yLjQsNS40LTQuMSw4LjctNC44YzMuOC0wLjgsNi4yLTAuNSw5LjQsMC42czUuOSwzLDguMiw1LjNsMTYwLjcsMTYwLjdjMi41LDIuNSw0LjIsNS43LDQuOSw5YzAuOSw0LjQsMCw5LTIuMiwxMi42bC0wLjksMQ0KCQkJYy0xLjksMS45LTE2Mi4zLDE2Mi0xNjMuNywxNjMuNGMtMi42LDIuNi01LjcsNC4yLTkuMyw0LjljLTEuMSwwLjItMi4yLDAuMy0zLjMsMC4zYy00LjgsMC05LjItMS44LTEyLjUtNS4zbC0xMTMuMy0xMTJsNS43LTUuNw0KCQkJbDExLjEtMTEuM2MyLjYtMi42LDIuMS01LjcsMS44LTYuOHMtMS4yLTMuNi00LjItNC43bC0xMDIuMi0xMi41Yy00LjIsMC4xLTguMiwxLjctMTEuMiw0LjdjLTMuMSwzLTQuNyw3LjEtNC44LDExLjNMNDcyLjcsNjUzLjQNCgkJCXoiLz4NCgkJDQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzdfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE5NjMuNTU5IiB5MT0iLTIxMS42MDk2IiB4Mj0iMjAzMS4zNTE2IiB5Mj0iLTI2OC4zMDg4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI4NzkuMTMwMSA2OTYuNjYpIj4NCgkJCTxzdG9wICBvZmZzZXQ9IjMuNDg4NTc1ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NCIvPg0KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzFCMTQ2NDtzdG9wLW9wYWNpdHk6MCIvPg0KCQk8L2xpbmVhckdyYWRpZW50Pg0KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODY3LjksNTAxLjRjNC42LDUuMiw1LjUsMTQuMiwxLjQsMjAuM2MwLDAsNTMuMi01OC4xLDI3LjYtMTIyLjNsLTMzLjctMzMuNWwtNDksODEuNUw4NjcuOSw1MDEuNHoiLz4NCgkJDQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzhfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQ1NS40MDA1IiB5MT0iNTMwLjMwOTMiIHgyPSI0MjMuMTA2OSIgeTI9IjQ4NC41MTEzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDE5Ny4xOTE2IDgzMy45NTcxKSI+DQoJCQk8c3RvcCAgb2Zmc2V0PSIzLjQ4ODU3NWUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQiLz4NCgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjE0NjQ7c3RvcC1vcGFjaXR5OjAiLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTcwMi4xLDMzNS45Yy02MC01NS4yLTEyNi4xLTI0LjUtMTI2LjEtMjQuNXMtOC43LDgtMTIuMiwxOC42YzguOSw0LjMsNzMuNCw1MC41LDczLjQsNTAuNWwzOC4xLTM4LjENCgkJCUM2ODksMzI1LjgsNzAyLjEsMzM1LjksNzAyLjEsMzM1Ljl6Ii8+DQoJCQ0KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI1NDYuMzI1MyIgeTE9IjExMC4xMDY0IiB4Mj0iNTcwLjU2MTIiIHkyPSIxNzAuMDU4OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxOTcuMTkxNiA4MzMuOTU3MSkiPg0KCQkJPHN0b3AgIG9mZnNldD0iMy40ODg1NzVlLTAyIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0Ii8+DQoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMUIxNDY0O3N0b3Atb3BhY2l0eTowIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxwYXRoIGNsYXNzPSJzdDgiIGQ9Ik03NDEuNiw2NDguOWMwLDAtMzguNCwzOC43LTM4LjUsMzguNWMwLDAtMTAuMyw4LjItMjEuMSwwLjdjMCwwLDYzLjksNTIuNiwxMzIuMiwxOS42bDE5LjktMjBMNzQxLjYsNjQ4Ljl6Ig0KCQkJLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
        _this.url = 'https://infinitywallet.io/download';
        _this.name = 'InfinityWallet';
        _this.connected = false;
        _this.isInstalled = _this.isInstalled.bind(_this);
        _this.isConnected = _this.isConnected.bind(_this);
        _this.sign = _this.sign.bind(_this);
        _this.connect = _this.connect.bind(_this);
        _this.disconnect = _this.disconnect.bind(_this);
        _this.handleAccountsChanged = _this.handleAccountsChanged.bind(_this);
        return _this;
    }
    InfinityWalletConnector.prototype.handleAccountsChanged = function (account) {
        this._publicKey = account;
        this.emit('accountChanged', account);
    };
    // disconnect client
    InfinityWalletConnector.prototype.disconnect = function () {
        var windowStellar = window;
        if (this.isInstalled() && windowStellar.infinitywallet.stellar.removeListener) {
            windowStellar.infinitywallet.stellar.removeListener('accountChange', this.handleAccountsChanged);
        }
        this._publicKey = "";
        this.connected = false;
        this.emit('accountChanged', '');
    };
    // Checks if user has installed InfinityWallet
    InfinityWalletConnector.prototype.isInstalled = function () {
        var _a;
        var windowStellar = window;
        return ((_a = windowStellar === null || windowStellar === void 0 ? void 0 : windowStellar.infinitywallet) === null || _a === void 0 ? void 0 : _a.stellar) != undefined;
    };
    // Checks if connector is connected with InfinityWallet
    InfinityWalletConnector.prototype.isConnected = function () {
        return this.connected;
    };
    Object.defineProperty(InfinityWalletConnector.prototype, "publicKey", {
        // Gets publicKey
        get: function () {
            return this._publicKey;
        },
        enumerable: false,
        configurable: true
    });
    // Signs a XDR coded Object data on InfinityWallet
    InfinityWalletConnector.prototype.sign = function (xdr) {
        var _this = this;
        var _ = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var windowStellar, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!_.isInstalled()) return [3 /*break*/, 1];
                        reject({
                            error: "Not detected"
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        if (!!_.isConnected()) return [3 /*break*/, 2];
                        reject({
                            error: "Not connected"
                        });
                        return [3 /*break*/, 5];
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        windowStellar = window;
                        _a = resolve;
                        return [4 /*yield*/, windowStellar.infinitywallet.stellar.sign(xdr)];
                    case 3:
                        _a.apply(void 0, [_b.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        console.error(e_1);
                        reject(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    // Connects with InfinityWallet
    InfinityWalletConnector.prototype.connect = function () {
        var _this = this;
        var _ = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var windowStellar, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!_.isInstalled()) return [3 /*break*/, 1];
                        reject({
                            error: "Not detected"
                        });
                        _.connected = false;
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        windowStellar = window;
                        return [4 /*yield*/, windowStellar.infinitywallet.stellar.connect()];
                    case 2:
                        result = _a.sent();
                        _.connected = true;
                        windowStellar.infinitywallet.stellar.on('accountChange', _.handleAccountsChanged);
                        _._publicKey = result.publicKey;
                        resolve(result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        _.connected = false;
                        reject(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return InfinityWalletConnector;
}(events_1.EventEmitter));
exports.InfinityWalletConnector = InfinityWalletConnector;
