/**
 *  Sort Months Order
 *
 * @param {array} sourceArr
 * @param {string} dataKey
 * @return {array}
 */

export const sortMonthsOrder = (
  sourceArr = [],
  dataKey = "transaction_date"
) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const sortHandler = (a, b) =>
    months.indexOf(a[dataKey]) - months.indexOf(b[dataKey]);

  return sourceArr.sort(sortHandler);
};

export default sortMonthsOrder;
