import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699190425881 implements MigrationInterface {
    name = 'InitialMigration1699190425881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
