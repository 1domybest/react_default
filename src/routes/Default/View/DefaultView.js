"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const DefaultViewModel_tsx_1 = __importDefault(require("../ViewModel/DefaultViewModel.tsx"));
const DefaultView = (0, mobx_react_1.observer)(({ someData }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const vm = (0, react_1.useRef)(new DefaultViewModel_tsx_1.default());
    (0, react_1.useEffect)(() => {
        console.log("View 마운트", someData);
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
    </>;
});
exports.default = DefaultView;
