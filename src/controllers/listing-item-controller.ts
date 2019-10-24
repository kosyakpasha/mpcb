import { Request, Response } from 'express';
import { inspect } from 'util';
import { ListingItemRepo } from '../repository/listing-item-repository';
import { ListingItemEntity } from '../entities/listing-item-entity';
import { BaseResponse } from '../base-response';

export const getAllListingItems = async (req: Request, res: Response) => {
  const listingItemRepo: ListingItemRepo = new ListingItemRepo();
  const baseResponse : BaseResponse = new BaseResponse();

  try {
    const users = listingItemRepo.getAllListingItems();
    baseResponse.isSuccess = true;
    baseResponse.response = JSON.stringify(users);
  }
  catch(e) {
    baseResponse.isSuccess = false;
    baseResponse.response = JSON.stringify(e);
  }

  res.send(baseResponse);
};

export const setListingItem = async (req: Request, res: Response) => {
  const listingItemRepo : ListingItemRepo = new ListingItemRepo();
  const listingItemEntity : ListingItemEntity = new ListingItemEntity();
  const baseResponse : BaseResponse = new BaseResponse();

  try {
    listingItemEntity.id = req.body.id;
    listingItemEntity.name = req.body.name;
    listingItemEntity.price = req.body.price;
    listingItemEntity.desc = req.body.desc;
    listingItemEntity.country = req.body.country;
    listingItemEntity.what = req.body.what;
    listingItemEntity.have = req.body.have;
    listingItemEntity.timestamp = req.body.timestamp;
    listingItemEntity.postcode = req.body.postcode;
    const result = await listingItemRepo.setListingItem(listingItemEntity);
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
