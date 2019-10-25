import { ListingItemEntity } from '../entities/listing-item-entity';
import { getManager } from 'typeorm';

export class ListingItemRepo {

  getAllListingItems() {
    return getManager().getRepository(ListingItemEntity).find();
  }

  setListingItem(listingItem: ListingItemEntity) {
    return getManager().getRepository(ListingItemEntity).save(listingItem);
  }
}
