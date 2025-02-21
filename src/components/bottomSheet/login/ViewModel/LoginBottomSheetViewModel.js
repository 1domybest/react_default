"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const AuthAPI_tsx_1 = require("../../../../service/AuthAPI.tsx");
class LoginBottomSheetViewModel {
    navigate = null;
    pk;
    loginSucceed;
    loginFailed;
    constructor(pk, loginSucceed, loginFailed) {
        this.pk = pk;
        this.loginSucceed = loginSucceed;
        this.loginFailed = loginFailed;
        console.log("pk", pk);
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
    snsLogin(provider) {
        const loginWindow = window.open(`http://localhost:8080/oauth2/authorization/${provider}`, "login", "width=auto,height=auto,top=100,left=100,location=no,resizable=yes,menubar=no,toolbar=no,status=no");
        const checkLoginStatus = setInterval(async () => {
            if (loginWindow?.closed) {
                console.log("자식 창이 닫혔습니다. 로그인 완료 확인 필요.");
                clearInterval(checkLoginStatus);
                await this.succeedSNSLogin();
            }
        }, 500);
    }
    // SNS 로그인 성공 처리
    async succeedSNSLogin() {
        console.log("로그인 성공은 함");
        await (0, AuthAPI_tsx_1.tokenRefresh)()
            .then(() => {
            this.loginSucceed(this.pk);
        })
            .catch(error => {
            this.loginFailed(this.pk);
            console.log(error);
        });
    }
}
exports.default = LoginBottomSheetViewModel;
