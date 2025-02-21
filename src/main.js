"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { StrictMode } from 'react'
const client_1 = require("react-dom/client");
const App_tsx_1 = __importDefault(require("./App.tsx"));
const root = document.getElementById("root");
(0, client_1.createRoot)(root).render(
// 배포시 StrictMode 이걸 빼야함
// 그이유는
// https://s-ryung.tistory.com/1 참고
<App_tsx_1.default />
// <StrictMode>
//   <App />
// </StrictMode>,
);
