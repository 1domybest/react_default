"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const BottomSheetObserver_tsx_1 = __importDefault(require("./BottomSheetObserver.tsx"));
const CustomBottomSheet = (0, mobx_react_1.observer)(({ child, index }) => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [isExiting, setIsExiting] = (0, react_1.useState)(false); // 애니메이션 종료 상태 관리
    const bottomSheetRef = (0, react_1.useRef)(null); // 애니메이션 끝나는 시점을 알기 위한 ref
    (0, react_1.useEffect)(() => {
        console.log("시트 열림");
        return () => {
            console.log("시트 닫힘");
        };
    }, []);
    (0, react_1.useEffect)(() => {
        console.log("이벤트 발생");
        if (child.show) {
            setIsVisible(true); // 컴포넌트가 나타날 때 애니메이션 시작
        }
        else {
            setIsExiting(true); // 사라지는 애니메이션을 시작
        }
        console.log("시트 열림");
        return () => {
            console.log("시트 닫힘");
        };
    }, [child.show]);
    // 바텀 시트를 닫을 때 애니메이션을 적용
    const handleClose = () => {
        setIsExiting(true); // 사라지는 애니메이션을 시작
        setTimeout(() => {
            setIsVisible(false); // 애니메이션이 끝난 후 isVisible을 false로 설정
        }, 500); // 0.5초 후 isVisible 상태 변경
    };
    // 외부 클릭 시 바텀 시트 닫기
    const handleOutsideClick = (e) => {
        if (child.backgroundTouchClose) {
            // child.view 내부 클릭은 무시하고 외부 클릭 시만 handleClose 호출
            if (e.target === e.currentTarget) {
                handleClose();
            }
        }
    };
    // 애니메이션 종료 후 상태 업데이트
    const handleAnimationEnd = () => {
        if (isExiting) {
            setIsVisible(false); // 애니메이션이 끝나면 isVisible을 false로 설정
            BottomSheetObserver_tsx_1.default.hideBottomSheet(child.pk);
        }
    };
    return (<>
            <div ref={bottomSheetRef} style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            left: "0",
            top: "0",
            backgroundColor: child.backgroundColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            zIndex: 1000 + index, // 각 바텀 시트가 올려지도록 순서대로 z-index 설정
            opacity: isExiting ? 0 : isVisible ? 1 : 0, // isExiting 상태일 때 opacity를 0으로 설정
            bottom: isExiting ? "-100vh" : isVisible ? "0" : "-100vh", // isExiting 상태일 때 bottom을 -100vh로 설정
            transition: "bottom 0.5s ease-out, opacity 0.5s ease-out", // 애니메이션 효과
        }} onClick={handleOutsideClick} // 외부 클릭 시 handleClose 호출
     onTransitionEnd={handleAnimationEnd} // 애니메이션 끝났을 때 처리
    >
                <div style={{ width: "auto", height: "auto" }} onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 중지
    >
                    {child.view}
                </div>
            </div>
        </>);
});
exports.default = CustomBottomSheet;
