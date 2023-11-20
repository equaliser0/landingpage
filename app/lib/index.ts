import { DatabaseManager } from "./manager";

const databaseManager = new DatabaseManager()

export function useDatabaseManager() {
  return databaseManager
}
