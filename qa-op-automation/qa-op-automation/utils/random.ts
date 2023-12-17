import { Random } from 'random-js'

const random = new Random()

export function randomNumber(min = 1, max = 1000) {
  return random.integer(min, max)
}

export function getRandomFloat(min, max, decimals) {
  const rand = ((Math.random() * (max - min)) + min).toFixed(decimals);

  return parseFloat(rand);
}

export const sevenDigitRandomNumber = () => {
  return Math.round(Math.random() * 10000000);
}

export const getRandomItemFromArray = <T>(array: T[]):T => {

  return random.pick(array, 0, array.length)

}

export function getRandomKeyFromCollection(collection) {
  const keys = Array.from(collection.keys());

  return random.pick(keys, 0, keys.length)
}

export function getRandomValueFromCollection(collection) {
  const values = Array.from(collection.values());

  return random.pick(values, 0, values.length)
}
