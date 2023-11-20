export function calculatePerformanceData(orders, products) {
  if (orders && products) {    
    const currentDate = new Date();
    const months = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    const performanceData = {
      monthlyRevenue: 0,
      monthlyProfit: 0,
      monthlyPerformance: 0,
      currentMonth: months[currentDate.getMonth()],
      yearlyRevenue: 0,
      yearlyProfit: 0,
      yearlyPerformance: 0, // Assuming 0 for last year
      currentYear: currentDate.getFullYear(),
      totalAmountClients: 0,
      totalAmountRegisteredUser: 0,
      ammountOrderd: 0,
      shippedOrders: 0,
      totalAmountProducts: 0,
    };

    const lastYear = currentDate.getFullYear() - 1;

    for (const order of orders) {
      const orderDate = new Date(order.created);
      const orderYear = orderDate.getFullYear();
      const orderMonth = orderDate.getMonth();

      // Monthly data
      if (orderYear === performanceData.currentYear) {
        performanceData.monthlyRevenue += order.totalGross;
        performanceData.ammountOrderd++;
        if (order.shipped) {
          performanceData.shippedOrders++;
        }
        performanceData.totalAmountClients++;

        if (order.email) {
          performanceData.totalAmountRegisteredUser++;
        }
      }

      // Yearly data
      if (orderYear === performanceData.currentYear) {
        performanceData.yearlyRevenue += order.totalGross;
      }

      if (orderYear === lastYear) {
        performanceData.yearlyPerformance += order.totalGross;
      }

      // Update total products based on ordered products
      for (const product of order.products) {
        const productData = products.find(p => p.id === product.id);
        if (productData) {
          performanceData.totalAmountProducts += productData.quantity * product.quantity;
        }
      }
    }

    // Calculate monthly profit
    performanceData.monthlyProfit = performanceData.monthlyRevenue - performanceData.monthlyPerformance;

    return performanceData;
  }
}
