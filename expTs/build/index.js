"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.end("Web Academy");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}`);
});
