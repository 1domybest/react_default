"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTextAlertModel = void 0;
const mobx_1 = require("mobx");
class CustomTextAlertModel {
    pk = "";
    show = true;
    backgroundTouchClose = true;
    backgroundColor = 'rgba(0, 0, 0, 0.5)';
    contentBackgroundColor = 'rgba(0, 0, 0, 0.5)';
    title = "'";
    description = "";
    leftButtonText = "";
    rightButtonText = "";
    leftButtonAction;
    rightButtonAction;
    backgroundTouchAction;
    constructor(pk) {
        this.pk = pk;
        this.leftButtonAction = () => { };
        this.rightButtonAction = () => { };
        this.backgroundTouchAction = () => { };
        (0, mobx_1.makeAutoObservable)(this); // 상태를 자동으로 감지하고 관찰 가능하게 만듦
    }
    closeTextAlert() {
        this.show = false;
    }
}
exports.CustomTextAlertModel = CustomTextAlertModel;
