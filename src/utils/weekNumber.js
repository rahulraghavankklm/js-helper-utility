/**
 *  Get current week number
 *
 * @param {date} inputDate
 * @return {number}
 */

export function weekNumber(inputDate) {
  const firstJan = new Date(inputDate.getFullYear(), 0, 1);
  return Math.ceil(
    ((inputDate - firstJan) / 86400000 + firstJan.getDay() + 1) / 7
  );
}

export default weekNumber;
