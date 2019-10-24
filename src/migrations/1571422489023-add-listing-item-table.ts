import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class addListingItemTable1571422489023 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
          new Table({
              name: 'listingItem',
              columns: [
                  {
                      name: 'id',
                      type: 'varchar',
                      isPrimary: true,
                  },
                  {
                      name: 'name',
                      type: 'varchar',
                  },
                  {
                      name: 'price',
                      type: 'float',
                  },
                  {
                      name: 'desc',
                      type: 'varchar',
                  },
                  {
                      name: 'country',
                      type: 'varchar',
                  },
                  {
                      name: 'what',
                      type: 'varchar',
                  },
                  {
                      name: 'have',
                      type: 'varchar',
                  },
                  {
                      name: 'timestamp',
                      type: 'varchar',
                  },
                  {
                      name: 'postcode',
                      type: 'varchar',
                  },
              ],
          }),
          true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('listingItem');
    }
}

