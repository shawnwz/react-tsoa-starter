"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const usersService_1 = require("../users/usersService");
let UsersController = class UsersController extends tsoa_1.Controller {
    async getUser(userId, name) {
        return new usersService_1.UsersService().get(userId, name);
    }
    async createUser(requestBody) {
        this.setStatus(201); // set return status 201
        new usersService_1.UsersService().create(requestBody);
    }
};
__decorate([
    (0, tsoa_1.Get)('{userId}'),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)())
], UsersController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)('201', 'Created') // Custom success response
    ,
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], UsersController.prototype, "createUser", null);
UsersController = __decorate([
    (0, tsoa_1.Route)('users')
], UsersController);
exports.UsersController = UsersController;
