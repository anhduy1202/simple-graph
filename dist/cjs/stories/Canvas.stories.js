"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Canvas_1 = require("../components/Canvas");
exports.default = {
    component: Canvas_1.Canvas,
    title: 'Canvas'
};
const Template = (args) => react_1.default.createElement(Canvas_1.Canvas, Object.assign({}, args));
exports.Primary = Template.bind({});
//# sourceMappingURL=Canvas.stories.js.map