// middleware/databaseMiddleware.ts
import { useDatabaseManager } from '../../lib'; // Import your DatabaseManager

export default defineEventHandler(async (event) => {
  // App Database instance
  const databaseManager = useDatabaseManager();
  event.context.databaseManager = databaseManager;
  event.context.filesDatabase = await databaseManager.accessDatabase('files') // TODO Make it Native in the Manager?

  // Shop Database instance
  event.context.productsDatabase = await databaseManager.accessDatabase('products')
  event.context.ordersDatabase = await databaseManager.accessDatabase('orders')
  event.context.categoriesDatabase = await databaseManager.accessDatabase('categories')
  event.context.subcategoriesDatabase = await databaseManager.accessDatabase('subcategories')
  event.context.clientsDatabase = await databaseManager.accessDatabase('clients')
  event.context.couponsDatabase = await databaseManager.accessDatabase('coupons')
  event.context.subscribersDatabase = await databaseManager.accessDatabase('subscribers')
  // Continue with the request
  return;
});
