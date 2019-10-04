"use strict";
exports.__esModule = true;
var user_entity_1 = require("../entities/user-entity");
var typeorm_1 = require("typeorm");
var UserRepo = /** @class */ (function () {
    function UserRepo() {
    }
    UserRepo.prototype.getAllUsers = function () {
        // get Employee repository and find all employees
        return typeorm_1.getManager().getRepository(user_entity_1.UserEntity).find();
    };
    UserRepo.prototype.saveUser = function (employee) {
        return typeorm_1.getManager().getRepository(user_entity_1.UserEntity).save(employee);
    };
    return UserRepo;
}());
exports.UserRepo = UserRepo;
