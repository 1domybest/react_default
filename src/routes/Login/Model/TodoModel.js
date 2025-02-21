"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
class TodoModel {
    completed = false;
    id = -99;
    title = "";
    userId = -99;
    constructor(json) {
        if (json) {
            this.completed = json.completed || this.completed;
            this.id = json.id || this.id;
            this.title = json.title || this.title;
            this.userId = json.userId || this.userId;
        }
    }
    // JSON 데이터를 Model에 매핑
    setData(json) {
        this.completed = json.completed || this.completed;
        this.id = json.id || this.id;
        this.title = json.title || this.title;
        this.userId = json.userId || this.userId;
    }
}
exports.TodoModel = TodoModel;
