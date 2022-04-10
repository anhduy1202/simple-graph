"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("../components");
exports.default = {
    component: components_1.Button,
    title: 'Button'
};
const Template = (args) => react_1.default.createElement(components_1.Button, Object.assign({}, args));
exports.Primary = Template.bind({});
exports.Primary.args = {
    backgroundColor: 'black'
};
//# sourceMappingURL=Button.stories.js.map