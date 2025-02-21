"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const TextAlertObserver_tsx_1 = __importDefault(require("./TextAlertObserver.tsx"));
const CustomTextAlert = (0, mobx_react_1.observer)(({ child, index }) => {
    const [didCheck, setDidCheck] = (0, react_1.useState)(false);
    const [startShowAnimation, setStartShowAnimation] = (0, react_1.useState)(false);
    const [startCloseAnimation, setStartCloseAnimation] = (0, react_1.useState)(false); // 애니메이션 종료 상태 관리
    const ref = (0, react_1.useRef)(null); // 애니메이션 끝나는 시점을 알기 위한 ref
    (0, react_1.useEffect)(() => {
        setDidCheck(false);
        return () => {
            console.log("닫힘");
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (child.show) {
            console.log("show True");
            setStartShowAnimation(true); // 열리는 애니메이션 시작
        }
        else {
            console.log("show False");
            setStartCloseAnimation(true); // 사라지는 애니메이션을 시작
        }
        return () => {
        };
    }, [child.show]);
    // 바텀 시트를 닫을 때 애니메이션을 적용
    const handleClose = () => {
        setStartCloseAnimation(true); // 사라지는 애니메이션을 시작
        setTimeout(() => {
            setStartShowAnimation(false); // 애니메이션이 끝난 후 isVisible을 false로 설정
        }, 1); // 0.5초 후 startShowAnimation 상태 변경
    };
    // 배경 클릭 시 바텀 시트 닫기
    const handleOutsideClick = (e) => {
        if (child.backgroundTouchClose) {
            // child.view 내부 클릭은 무시하고 외부 클릭 시만 handleClose 호출
            if (e.target === e.currentTarget) {
                handleClose();
                child.backgroundTouchAction();
            }
        }
    };
    return (<>
            <div ref={ref} style={{
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
            opacity: startCloseAnimation ? 0 : startShowAnimation ? 1 : 0, // startCloseAnimation 상태일 때 opacity를 0으로 설정
            bottom: startCloseAnimation ? "-100vh" : startShowAnimation ? "0" : "-100vh", // startCloseAnimation 상태일 때 bottom을 -100vh로 설정
            transition: "bottom 0.5s ease-out, opacity 0.5s ease-out", // 애니메이션 효과
        }} onClick={handleOutsideClick} // 외부 클릭 시 handleClose 호출
    >
                <div style={{
            width: "auto",
            height: "auto",
            backgroundColor: child.contentBackgroundColor,
            padding: "20px, 10px"
        }} onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 중지
    >
                    <div>
                        <span>{child.title}</span>
                    </div>
                    <div>
                        <span>{child.description}</span>
                    </div>
                    <div style={{
            display: 'flex',
            flexDirection: "column"
        }}>
                        {/*이곳에 체크박스*/}
                        {/*setDidCheck*/}
                        <div>
                            <button onClick={(event) => {
            event.preventDefault();
            console.log("버튼 클릭222");
            TextAlertObserver_tsx_1.default.hideTextAlert(child.pk);
            setTimeout(() => {
                child.leftButtonAction(didCheck);
            }, 300);
        }}>
                                {child.leftButtonText}
                            </button>
                        </div>
                        <div>
                            <button onClick={(event) => {
            event.preventDefault();
            TextAlertObserver_tsx_1.default.hideTextAlert(child.pk);
            setTimeout(() => {
                child.rightButtonAction(didCheck);
            }, 300);
        }}>
                                {child.rightButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
});
exports.default = CustomTextAlert;
