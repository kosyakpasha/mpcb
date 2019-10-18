import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class userTableAddUsernameColumn1570471080761 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn("user", new TableColumn({
      name: "username",
      type: "varchar"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn("user", "username");
  }
}

