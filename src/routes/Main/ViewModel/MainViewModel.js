"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const MemberAPI_tsx_1 = require("../../../service/MemberAPI.tsx");
const AuthAPI_tsx_1 = require("../../../service/AuthAPI.tsx");
const CustomBottomSheetModel_tsx_1 = require("../../../components/CustomBottomSheetModel.tsx");
const LoginBottomSheet_tsx_1 = __importDefault(require("../../../components/bottomSheet/LoginBottomSheet.tsx"));
const CustomTextAlertModel_tsx_1 = require("../../../components/CustomTextAlertModel.tsx");
const TextAlertObserver_tsx_1 = __importDefault(require("../../../components/textAlert/TextAlertObserver.tsx"));
const BottomSheetObserver_tsx_1 = __importDefault(require("../../../components/bottomSheet/BottomSheetObserver.tsx"));
const LoginBottomSheetView_tsx_1 = __importDefault(require("../../../components/bottomSheet/login/View/LoginBottomSheetView.tsx"));
const BottomSheetObserver_tsx_2 = __importDefault(require("../../../components/bottomSheet/BottomSheetObserver.tsx"));
class MainViewModel {
    navigate = null;
    constructor() {
        (0, mobx_1.makeAutoObservable)(this);
    }
    // 네비게이터 설정
    setNavigate(navigate) {
        this.navigate = navigate;
    }
    // 초기화 메서드
    init() {
        console.log("생성됨");
    }
    // 메모리 해제 메서드
    deinit() {
        this.navigate = null;
        console.log("VM 메모리 해제됨");
    }
    // 회원 가입
    async join() {
        const request = {
            username: "myUsername",
            password: "myPassword",
        };
        try {
            const data = await (0, MemberAPI_tsx_1.join)(request);
            console.log("가입 성공", data);
        }
        catch (error) {
            console.error("가입 실패", error);
        }
    }
    // 로그인
    async login() {
        const request = {
            username: "myUsername",
            password: "myPassword",
        };
        try {
            const data = await (0, MemberAPI_tsx_1.login)(request);
            console.log("로그인 성공", data);
        }
        catch (error) {
            console.error("로그인 실패", error);
        }
    }
    // 토큰 테스트
    async tokenTest() {
        console.log("tokenTest");
        try {
            await (0, AuthAPI_tsx_1.tokenTest)();
        }
        catch (error) {
            console.error("토큰 테스트 실패", error);
        }
    }
    // 인증이 필요한 요청
    async needToken() {
        console.log("needToken");
        try {
            const data = await (0, AuthAPI_tsx_1.needToken)();
            console.log("tokenTest", data);
        }
        catch (error) {
            console.error("토큰 필요 요청 실패", error);
        }
    }
    // SNS 로그인
    async snsLogin() {
        console.log("SNS 로그인 시작");
        const pk = crypto.randomUUID();
        const bottomSheetModel = new CustomBottomSheetModel_tsx_1.CustomBottomSheetModel(<LoginBottomSheetView_tsx_1.default pk={pk} loginSucceed={this.loginSucceed} loginFailed={this.loginFailed}/>);
        bottomSheetModel.backgroundColor = "rgb(0, 0, 0, 0.7)";
        bottomSheetModel.pk = pk;
        bottomSheetModel.backgroundTouchClose = true;
        BottomSheetObserver_tsx_1.default.showBottomSheet(bottomSheetModel);
    }
    loginSucceed(pk) {
        console.log("login 성공");
        BottomSheetObserver_tsx_2.default.hideBottomSheet(pk);
        if (this.navigate) {
            this.navigate('/');
        }
    }
    loginFailed(pk) {
        console.log("login 실패");
        BottomSheetObserver_tsx_2.default.hideBottomSheet(pk);
    }
    // 데이터 가져오기
    async getData() {
        try {
            const data = await (0, AuthAPI_tsx_1.getData)();
            console.log("데이터 가져오기 성공", data);
        }
        catch (error) {
            console.error("데이터 가져오기 실패", error);
        }
    }
    // 바텀 시트 표시
    showBottomSheet() {
        const pk = crypto.randomUUID();
        const bottomSheetModel = new CustomBottomSheetModel_tsx_1.CustomBottomSheetModel(<LoginBottomSheet_tsx_1.default pk={pk}/>);
        bottomSheetModel.backgroundColor = "rgb(0, 0, 0, 0.7)";
        bottomSheetModel.pk = pk;
        bottomSheetModel.backgroundTouchClose = true;
        BottomSheetObserver_tsx_1.default.showBottomSheet(bottomSheetModel);
    }
    // 텍스트 알림 표시
    showTextAlert() {
        const pk = crypto.randomUUID();
        const textAlertModel = new CustomTextAlertModel_tsx_1.CustomTextAlertModel(pk);
        textAlertModel.backgroundColor = "rgb(0, 0, 0, 0.7)";
        textAlertModel.contentBackgroundColor = "white";
        textAlertModel.pk = pk;
        textAlertModel.title = "첫번째 창";
        textAlertModel.description = "첫번쨰 내용";
        textAlertModel.backgroundTouchClose = true;
        textAlertModel.leftButtonText = "왼쪽 버튼";
        textAlertModel.rightButtonText = "오른쪽 버튼";
        textAlertModel.leftButtonAction = (bool) => {
            const newPk = crypto.randomUUID() + "asdasd";
            console.log("왼쪽 버튼 클릭", newPk, bool);
            const newTextAlertModel = new CustomTextAlertModel_tsx_1.CustomTextAlertModel(newPk);
            newTextAlertModel.backgroundColor = "rgb(0, 0, 0, 0.7)";
            newTextAlertModel.contentBackgroundColor = "white";
            newTextAlertModel.title = "두번째 창";
            newTextAlertModel.description = "두번째 내용";
            newTextAlertModel.pk = newPk;
            newTextAlertModel.backgroundTouchClose = true;
            newTextAlertModel.leftButtonText = "왼쪽 버튼";
            newTextAlertModel.rightButtonText = "오른쪽 버튼";
            TextAlertObserver_tsx_1.default.showTextAlert(newTextAlertModel);
        };
        textAlertModel.rightButtonAction = (bool) => {
            console.log("오른쪽 버튼 클릭", bool);
        };
        TextAlertObserver_tsx_1.default.showTextAlert(textAlertModel);
    }
}
exports.default = MainViewModel;
