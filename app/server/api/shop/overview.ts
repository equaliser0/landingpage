interface Result {
  monthlyRevenue: number; // Current revenue this month
  monthlyProfit: number; // Current profit this month
  monthlyPerformance: number; // current increased or decreased percentage compared this month with last month
  currentMonth: Date // current month
  yearlyRevenue: number; // Current revenue this year
  yearlyProfit: number; // Current profit this year
  yearlyPerformance: number; // current increased or decreased percentage compared this year with last year
  currentYear: Date; // current year
  totalAmountClients: number; // sum of all clients
  totalAmountRegisteredUser: number; // sum of all registered users
  ammountOrders: number; // sum of all orders
  shippedOrders: number; // sum of all shipped orders
  totalAmountProducts: number; // total amount of products
}

export default defineEventHandler(async (event) => {
  try {
    const ordersDatabase = event.context.ordersDatabase;
    const productsDatabase = event.context.productsDatabase;
    const clientsDatabase = event.context.clientsDatabase;
    const userDatabase = event.context.userDatabase;

    // Function to calculate performance compared to the previous month
    const calcPerformance = (currentMonthData: number, lastMonthData: number) => {
      if (lastMonthData === 0) return 0; // To prevent division by zero

      return ((currentMonthData - lastMonthData) / lastMonthData) * 100;
    };

    // Get all orders from the database
    const allOrders = await ordersDatabase.all();

    // Get the current date
    const currentDate = new Date();

    // Calculate the start and end date of the current month
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentMonthStart = new Date(currentYear, currentMonth, 1);
    const currentMonthEnd = new Date(currentYear, currentMonth + 1, 0);

    // Calculate the start and end date of the previous month
    const lastMonthStart = new Date(currentYear, currentMonth - 1, 1);
    const lastMonthEnd = new Date(currentYear, currentMonth, 0);

    // Filter orders for the current month
    const currentMonthOrders = allOrders.filter((order) => {
      const orderDate = new Date(order.created);
      return orderDate >= currentMonthStart && orderDate <= currentMonthEnd;
    });

    // Filter orders for the previous month
    const lastMonthOrders = allOrders.filter((order) => {
      const orderDate = new Date(order.created);
      return orderDate >= lastMonthStart && orderDate <= lastMonthEnd;
    });

    // Calculate revenue for the current month
    const currentMonthRevenue = currentMonthOrders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );

    // Calculate profit for the current month (assuming a profit margin of 30%)
    const currentMonthProfit = currentMonthOrders.reduce(
      (total, order) => total + (order.totalPrice * 0.3),
      0
    );

    // Calculate revenue for the current year
    const currentYearRevenue = allOrders
      .filter((order) => {
        const orderDate = new Date(order.created);
        return orderDate.getFullYear() === currentYear;
      })
      .reduce((total, order) => total + order.totalPrice, 0);

    // Calculate profit for the current year (assuming a profit margin of 30%)
    const currentYearProfit = allOrders
      .filter((order) => {
        const orderDate = new Date(order.created);
        return orderDate.getFullYear() === currentYear;
      })
      .reduce((total, order) => total + (order.totalPrice * 0.3), 0);

    // Calculate performance compared to the previous month
    const lastMonthRevenue = lastMonthOrders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    const performance = calcPerformance(currentMonthRevenue, lastMonthRevenue);

    // Count the number of clients and registered users (example counts)
    const totalAmountClients = await clientsDatabase.all().length; // Example: Replace with actual client count
    const totalAmountRegisteredUser = await userDatabase.all().length; // Example: Replace with actual user count

    // Count the number of shipped orders and total products (example counts)
    const shippedOrders = allOrders.filter((order) => order.shipped).length;
    const totalAmountProducts = productsDatabase.all.length; // Example: Replace with actual product count

    // Complete result object
    const result: Result = {
      monthlyRevenue: currentMonthRevenue,
      monthlyProfit: currentMonthProfit,
      monthlyPerformance: performance,
      currentMonth: currentDate,
      yearlyRevenue: currentYearRevenue,
      yearlyProfit: currentYearProfit,
      yearlyPerformance: calcPerformance(currentYearRevenue, 0), // No data for last year, assuming 0
      currentYear: new Date(currentYear, 0, 1),
      totalAmountClients,
      totalAmountRegisteredUser,
      ammountOrders: allOrders.length,
      shippedOrders,
      totalAmountProducts,
    };

    return result;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
