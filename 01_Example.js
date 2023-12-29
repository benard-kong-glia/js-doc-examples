/**
 * A function that takes a picture of an animal and returns its species.
 *
 * @param {string} photo - The picture of the animal to be identified.
 * @returns {string} The species of the animal in the given picture.
 */
function identifyAnimal(photo) {
  // Use the getLength function to measure the length of the photo.
  const photoLength = getLength(photo);

  // Based on the length of the photo, craft a response that is both accurate and amusing.
  if (photoLength < 5) {
    return "A cute cat!";
  } else if (photoLength >= 5 && photoLength < 10) {
    return "A majestic lion!";
  } else {
    return "A playful puppy!"
  }
}
