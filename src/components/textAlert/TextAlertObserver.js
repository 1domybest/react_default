"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// UIState.ts
const mobx_1 = require("mobx");
class TextAlertObserver {
    textAlertList = [];
    isTextAlertVisible = false;
    constructor() {
        (0, mobx_1.makeAutoObservable)(this);
    }
    // 바텀 시트 추가 함수
    showTextAlert(content) {
        console.log("시트 열림", this.textAlertList.length);
        this.textAlertList.push(content); // 새로운 바텀 시트를 배열에 추가
        this.isTextAlertVisible = true;
    }
    closeTextAlert(pk) {
        const index = this.findTextAlertIndexByPk(pk);
        console.log("닫기 애니메이션 시작", pk, index, this.textAlertList.length);
        if (index != null) {
            this.textAlertList[index].show = false;
        }
    }
    // 바텀 시트 삭제 함수
    hideTextAlert(pk) {
        console.log("애니메이션 종료" + pk);
        const index = this.findTextAlertIndexByPk(pk);
        if (index != null) {
            this.textAlertList.splice(index, 1);
        }
        if (this.textAlertList.length === 0) {
            this.isTextAlertVisible = false;
        }
    }
    // 바텀 시트 삭제 함수
    hideAllTextAlert() {
        this.textAlertList = [];
        if (this.textAlertList.length === 0) {
            this.isTextAlertVisible = false;
        }
    }
    findTextAlertIndexByPk = (pk) => {
        const index = this.textAlertList.findIndex(sheet => sheet.pk === pk);
        return index !== -1 ? index : null; // 일치하는 항목이 없으면 null 반환
    };
}
const CustomTextAlertObserver = new TextAlertObserver();
exports.default = CustomTextAlertObserver;
