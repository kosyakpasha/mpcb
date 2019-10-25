import { Request, Response } from 'express';
import { inspect } from 'util';
import { UserRepo } from '../repository/user-repository';
import { UserEntity } from '../entities/user-entity';
import { BaseResponse } from '../base-response';

export const getAllUsers = async (req: Request, res: Response) => {
  const userRepo: UserRepo = new UserRepo();
  const baseResponse : BaseResponse = new BaseResponse();

  try {
    const users = await userRepo.getAllUsers();

    baseResponse.isSuccess = true;
    baseResponse.response = JSON.stringify(users);
  }
  catch(e) {
    baseResponse.isSuccess = false;
    baseResponse.response = JSON.stringify(e);
  }

  res.send(baseResponse);
};

export const setUser = async (req: Request, res: Response) => {
  const userRepo : UserRepo = new UserRepo();
  const userEntity : UserEntity = new UserEntity();
  const baseResponse : BaseResponse = new BaseResponse();

  try {
    userEntity.id = req.body.id;
    userEntity.username = req.body.username;
    const result = await userRepo.saveUser(userEntity);
    console.log(result);
    baseResponse.isSuccess = true;
    baseResponse.response = JSON.stringify('success');
  }
  catch(e) {
    baseResponse.isSuccess = false;
    baseResponse.response = JSON.stringify(inspect(e));
  }

  res.send(baseResponse);
};

export const deleteUser = async (req: any, res: Response) => {
  console.log('DELETE ==> DeleteUser');
};
