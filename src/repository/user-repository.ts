import { UserEntity } from '../entities/user-entity';
import { getManager } from "typeorm";

export class UserRepo {

  getAllUsers() {
    // get Employee repository and find all employees
    return getManager().getRepository(UserEntity).find();
  }

  saveUser(employee: UserEntity) {
    return getManager().getRepository(UserEntity).save(employee);
  }

}
