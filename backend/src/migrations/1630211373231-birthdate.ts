import { MigrationInterface, QueryRunner } from "typeorm";

export class birthdate1630211373231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE "user" SET "birthdate"= date '2021-08-20' WHERE birthdate IS NULL;`
    );
  }

  public async down(_: QueryRunner): Promise<void> {}
}
