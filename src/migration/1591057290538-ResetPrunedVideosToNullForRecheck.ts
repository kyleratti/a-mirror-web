import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetPrunedVideosToNullForRecheck1591057290538
  implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`UPDATE video SET lastPrunedAt = null`);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    // WARN: there is no undoing this
  }
}
