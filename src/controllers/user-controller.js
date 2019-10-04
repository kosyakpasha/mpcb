"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var util_1 = require("util");
var user_repository_1 = require("../repository/user-repository");
var user_entity_1 = require("../entities/user-entity");
var base_response_1 = require("../base-response");
exports.getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepo, baseResponse, users;
    return __generator(this, function (_a) {
        console.log('GET => GetAllUsers');
        userRepo = new user_repository_1.UserRepo();
        baseResponse = new base_response_1.BaseResponse();
        try {
            users = userRepo.getAllUsers();
            baseResponse.isSuccess = true;
            baseResponse.response = JSON.stringify(users);
        }
        catch (e) {
            console.log(e);
            baseResponse.isSuccess = false;
            baseResponse.response = JSON.stringify(e);
        }
        res.send(baseResponse);
        return [2 /*return*/];
    });
}); };
exports.setUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userRepo, userEntity, baseResponse, result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('POST => SaveUser');
                userRepo = new user_repository_1.UserRepo();
                userEntity = new user_entity_1.UserEntity();
                baseResponse = new base_response_1.BaseResponse();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                userEntity.id = req.body.id;
                return [4 /*yield*/, userRepo.saveUser(userEntity)];
            case 2:
                result = _a.sent();
                console.log(result);
                baseResponse.isSuccess = true;
                baseResponse.response = JSON.stringify('success');
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(util_1.inspect(e_1));
                baseResponse.isSuccess = false;
                baseResponse.response = JSON.stringify(util_1.inspect(e_1));
                return [3 /*break*/, 4];
            case 4:
                res.send(baseResponse);
                return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('DELETE ==> DeleteUser');
        return [2 /*return*/];
    });
}); };
