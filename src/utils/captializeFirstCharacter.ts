export function capitalizeFirstCharacter(
  str: string,
): string {
  if (str.length === 0) {
    return str; // Return an empty string if the input string is empty
  }

  const firstChar = str.charAt(0).toUpperCase(); // Get the first character and convert it to uppercase
  const restOfString = str.slice(1); // Get the rest of the string starting from index 1

  return firstChar + restOfString; // Concatenate the capitalized first character with the rest of the string
}
