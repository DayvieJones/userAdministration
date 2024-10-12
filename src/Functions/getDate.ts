export default function getDate() {
  const today = new Date();
  let month = String(today.getMonth() + 1);
  month = month.padStart(2, "0");
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}

export { getDate };
