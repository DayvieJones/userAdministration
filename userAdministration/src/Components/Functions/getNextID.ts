import getProfiles from "./getProfiles";

export default function getNextId() {
  const profiles = getProfiles();

  const sortedProfiles = profiles.sort(
    (profileA: { id: number }, profileB: { id: number }) =>
      profileA.id - profileB.id
  );

  let nextId = 1;

  for (let profile of sortedProfiles) {
    if (nextId < profile.id) break;

    nextId = profile.id + 1;
  }
  return nextId;
}
