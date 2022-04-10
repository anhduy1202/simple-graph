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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const react_1 = require("react");
const react_2 = __importStar(require("react"));
const Canvas = (props) => {
    const { children } = props;
    const canvasRef = (0, react_2.useRef)('');
    (0, react_1.useEffect)(() => {
        let element = document.getElementsByTagName('html')[0];
        let body = document.getElementsByTagName('body')[0];
        element.style.width = '100vw';
        element.style.height = '100vh';
        body.style.width = '100vw';
        body.style.height = '100vh';
    }, []);
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement("canvas", Object.assign({ id: "myCanvas", style: { width: '600', height: '600' }, ref: canvasRef }, props)),
        children));
};
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map