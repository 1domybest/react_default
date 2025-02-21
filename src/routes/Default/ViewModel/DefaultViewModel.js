"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class DefaultViewModel {
    navigate = null;
    constructor() {
        (0, mobx_1.makeAutoObservable)(this);
    }
    init() {
    }
    deinit() {
    }
    // 네비게이터 설정
    setNavigate(navigate) {
        this.navigate = navigate;
    }
}
exports.default = DefaultViewModel;
