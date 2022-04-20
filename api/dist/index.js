"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const variables_1 = require("./variables");
app_1.app.listen(variables_1.port, () => console.log(`Example app listening at http://localhost:${variables_1.port}`));
