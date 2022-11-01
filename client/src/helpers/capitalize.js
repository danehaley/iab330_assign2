export default function capitalize(word) {
  if (word === undefined) {
    return null;
  }
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
