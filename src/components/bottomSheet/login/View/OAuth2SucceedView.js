"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const OAuth2SucceedView = () => {
    (0, react_1.useEffect)(() => {
        window.close();
    }, []);
    return <>
        성공
    </>;
};
exports.default = OAuth2SucceedView;
