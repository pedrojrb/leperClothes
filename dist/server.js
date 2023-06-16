"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class ServerBooststrap {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.get("/api/", (req, res) => {
            try {
                res.status(200).json({
                    message: "Hola mundo"
                });
            }
            catch (e) {
                throw new Error(`Error to initialize server. HTTP code: ${res.status}`);
            }
        });
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}, url: localhost:${this.port}`);
        });
    }
}
new ServerBooststrap();
