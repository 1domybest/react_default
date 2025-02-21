"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
require("./App.css");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
require("bootstrap/dist/css/bootstrap.min.css");
const react_router_dom_1 = require("react-router-dom");
const mobx_react_1 = require("mobx-react");
// 바텀시트 얼랏
const TextAlertObserver_tsx_1 = __importDefault(require("./components/textAlert/TextAlertObserver.tsx"));
const BottomSheetObserver_tsx_1 = __importDefault(require("./components/bottomSheet/BottomSheetObserver.tsx"));
const CustomBottomSheet_tsx_1 = __importDefault(require("./components/bottomSheet/CustomBottomSheet.tsx"));
const CustomTextAlert_tsx_1 = __importDefault(require("./components/textAlert/CustomTextAlert.tsx"));
// View
// import LoginView from "./routes/Login/View/LoginView.tsx";
const OAuth2SucceedView_tsx_1 = __importDefault(require("./components/bottomSheet/login/View/OAuth2SucceedView.tsx"));
const MainView_tsx_1 = __importDefault(require("./routes/Main/View/MainView.tsx"));
const App = (0, mobx_react_1.observer)(() => {
    return (<>
            <div className={"App"}>
                <react_router_dom_1.BrowserRouter>
                    {/* 여러 개의 바텀 시트와 얼럿을 상태에 맞춰 표시 */}
                    {BottomSheetObserver_tsx_1.default.isBottomSheetVisible && BottomSheetObserver_tsx_1.default.bottomSheetList.map((content, index) => (<CustomBottomSheet_tsx_1.default child={content} key={index} index={index}/>))}

                    {TextAlertObserver_tsx_1.default.isTextAlertVisible && TextAlertObserver_tsx_1.default.textAlertList.map((content, index) => (<CustomTextAlert_tsx_1.default child={content} key={index} index={index}/>))}

                    <react_router_dom_1.Routes>
                        {/*<Route path="/" element={<LoginView />} />*/}
                        <react_router_dom_1.Route path="/" element={<MainView_tsx_1.default />}/>
                        <react_router_dom_1.Route path="/oauth2/succeed" element={<OAuth2SucceedView_tsx_1.default />}/>

                    </react_router_dom_1.Routes>
                </react_router_dom_1.BrowserRouter>
            </div>
        </>);
});
exports.default = App;
