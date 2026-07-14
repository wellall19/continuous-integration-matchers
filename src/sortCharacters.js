export default function sortCharacters(list) {
  return list.sort((a, b) => b.health - a.health);
}
