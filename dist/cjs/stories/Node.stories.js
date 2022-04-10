"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Node_1 = require("../components/Node");
const components_1 = require("../components");
exports.default = {
    component: Node_1.Node,
    title: 'Node'
};
const Template = (args) => (react_1.default.createElement(components_1.Canvas, null,
    react_1.default.createElement(Node_1.Node, Object.assign({ label: 'A', x: 75, y: 75 }, args)),
    react_1.default.createElement(Node_1.Node, Object.assign({ label: 'B', x: 600, y: 85 }, args))));
exports.Primary = Template.bind({});
//# sourceMappingURL=Node.stories.js.map