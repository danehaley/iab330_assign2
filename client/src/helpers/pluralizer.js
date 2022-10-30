export default function pluralizer(number, object, stop = false) {
  return `${number} ${object}${number > 1 && "s"}${stop ? "" : ","}`;
}
