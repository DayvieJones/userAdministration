import getUserCards from "./getUserCards";

export default function getNextId() {
  const userCard = getUserCards();

  const sortedUserCard = userCard.sort(
    (cardA: { id: number }, cardB: { id: number }) => cardA.id - cardB.id
  );

  let nextId = 1;

  for (let card of sortedUserCard) {
    if (nextId < card.id) break;

    nextId = card.id + 1;
  }
  return nextId;
}
