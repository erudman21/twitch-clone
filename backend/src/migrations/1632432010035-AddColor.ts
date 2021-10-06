import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColor1632432010035 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE "user" SET "color" = 'green' WHERE color IS NULL;
			 UPDATE "user" SET "color" = 'green' WHERE color = 'test';`
    );
  }

  public async down(_: QueryRunner): Promise<void> {}
}
