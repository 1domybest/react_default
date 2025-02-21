"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const LoginBottomSheetViewModel_tsx_1 = __importDefault(require("../ViewModel/LoginBottomSheetViewModel.tsx"));
const LoginBottomSheetView = (0, mobx_react_1.observer)(({ pk, loginSucceed, loginFailed }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const vm = (0, react_1.useRef)(new LoginBottomSheetViewModel_tsx_1.default(pk, loginSucceed, loginFailed));
    (0, react_1.useEffect)(() => {
        console.log("View 마운트");
        console.log("View 마운트");
        vm.current?.init();
        vm.current?.setNavigate(navigate);
        return () => {
            // ViewModel 정리 (필요할 경우)
            // 메모리 해제
            console.log("View 언마운트");
            vm.current?.deinit();
            vm.current = null;
        };
    }, []);
    return <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            height: "auto",
        }}>
            <button onClick={(event) => {
            event.preventDefault();
            vm.current?.snsLogin("naver");
            // window.location.href = `http://localhost:8080/oauth2/authorization/naver`
        }}>
                네이버 로그인
            </button>
        </div>

    </>;
});
exports.default = LoginBottomSheetView;
