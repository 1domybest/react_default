"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBottomSheetModel = void 0;
const mobx_1 = require("mobx");
class CustomBottomSheetModel {
    pk = "";
    show = true;
    backgroundTouchClose = true;
    view = null;
    backgroundColor = 'rgba(0, 0, 0, 0.5)';
    constructor(view) {
        this.view = view;
        (0, mobx_1.makeAutoObservable)(this); // 상태를 자동으로 감지하고 관찰 가능하게 만듦
    }
    // 상태 업데이트 메서드 추가
    setBackgroundColor(color) {
        this.backgroundColor = color;
    }
    setBackgroundTouchClose(status) {
        this.backgroundTouchClose = status;
    }
    closeBottomSheet() {
        this.show = false;
    }
}
exports.CustomBottomSheetModel = CustomBottomSheetModel;
