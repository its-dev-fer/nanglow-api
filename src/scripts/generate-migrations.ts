import { db } from "../config/database";
import { generateMigration } from "sequelize-typescript-model-migration";

export const composeMigrations = async (): Promise<void> => {
  await generateMigration(db.sequelize, {
    outDir: "src/migrations",
    snapshotDir: "src/snapshots",
    migrationName: "migration",
  });
};