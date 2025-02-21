"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 예시 사용 컴포넌트
const CustomBottomSheetModel_tsx_1 = require("../CustomBottomSheetModel.tsx");
const BottomSheetObserver_tsx_1 = __importDefault(require("./BottomSheetObserver.tsx"));
const react_1 = require("react");
const LoginBottomSheet = ({ pk }) => {
    const [newPk, setNewPk] = (0, react_1.useState)("");
    const openNewBottomSheet = () => {
        const newPk = crypto.randomUUID();
        const bottomSheetModel = new CustomBottomSheetModel_tsx_1.CustomBottomSheetModel(<LoginBottomSheet pk={newPk}/>);
        setNewPk(newPk);
        bottomSheetModel.pk = newPk;
        bottomSheetModel.backgroundColor = "white";
        BottomSheetObserver_tsx_1.default.showBottomSheet(bottomSheetModel);
    };
    const closeBottomSheet = () => {
        BottomSheetObserver_tsx_1.default.closeBottomSheet(pk);
        console.log(newPk);
    };
    return (<div>
            <h1>Main Content</h1>
            <div>
                <h3>Custom Content Inside Bottom Sheet</h3>
                <p>This is some content that can be dynamically passed into the bottom sheet.</p>
            </div>
            <button onClick={(event) => {
            event.preventDefault();
            openNewBottomSheet();
        }}>새로운 바텀 열기
            </button>

            <button onClick={(event) => {
            event.preventDefault();
            closeBottomSheet();
        }}>
                현재 바텀 닫기
            </button>

            <button onClick={(event) => {
            event.preventDefault();
            BottomSheetObserver_tsx_1.default.hideAllBottomSheet();
        }}>
                모든 바텀 닫기
            </button>
        </div>);
};
exports.default = LoginBottomSheet;
