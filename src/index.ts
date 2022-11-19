/*
 * This program generates 250 random numbers in an array
 * and allows the user to search the array for a number.
 *
 * By:      Mr Coxall
 * Version: 0.5
 * Since:   2020-09-01
 */

import promptSync from 'prompt-sync'

/**
 * The min number for array.
 */
const MIN: number = 0
/**
 * The max number for array.
 */
const MAX: number = 999
/**
 * The number of elements in the array.
 */
const ARRAY_SIZE: number = 250

/**
 * Function finds the index of a number, using Binary Search recursively.
 *
 * @param {number[]} userArray The numbers we generate
 * @param {number} userNumber The number the user wants to search
 * @param {number} lowIndex The lowest index in the searching area
 * @param {number} highIndex The highest index in the searching area
 * @returns {number} binarySearch The answer or search again
 */
function binarySearch (
  userArray: number[],
  userNumber: number,
  lowIndex: number,
  highIndex: number
): number {
  // solve this function!
  if (userArray[lowIndex] > userArray[highIndex]) {
    return -1
  } else {
    const middle: number = (lowIndex + highIndex) / 2
    if (userArray[middle] < userNumber) {
      return binarySearch(userArray, userNumber, middle + 1, highIndex)
    } else if (userArray[middle] > userNumber) {
      return binarySearch(userArray, userNumber, lowIndex, middle - 1)
    } else {
      return middle
    }
  }
}

/**
 * Function that format the string.
 *
 * @param {number} number A number in the array
 * @param {number} length The length of the string should have
 * @param {string} string The string that add space before element
 * @returns {string} string The formatted string
 */

console.log('Binary Search Program')

// Initializing array of numbers
const randomNumberArray: number[] = []

// Adding numbers to the array
for (let counter: number = 0; counter < ARRAY_SIZE; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX) + 1
}

// Sorting the array
const numberArray: number[] = randomNumberArray
numberArray.sort(function (a, b) {
  return a - b
})

console.log('\nSorted list of numbers:\n')
for (let counter2: number = 0; counter2 < numberArray.length; counter2++) {
  const padded: string = numberArray[counter2].padStart(3, ' ')
  console.log(padded + ', ')
}
console.log('\n\n')

// Getting user input as to what number they wish to search for
const prompt = promptSync()
console.log('What number are you searching for in the array')
const searchString = prompt(' (integer between 0 and 999): ')
console.log('')

const searchNumber = parseInt(searchString)
if (isNaN(searchNumber)) {
  console.log('ERROR: Invalid Input')
} else {
  // Ensuring the user inputs an appropriate integer
  if (searchNumber > MAX || searchNumber < MIN) {
    console.log('ERROR: Invalid Input')
  } else {
    // Using binary search to find the user's chosen number in the array
    const searchResult: number = binarySearch(
      numberArray,
      searchNumber,
      0,
      numberArray.length - 1
    )

    // Outputing the results of the search
    console.log()
    console.log(`Your number is in index: ${searchResult}`)
  }
}
