// @ts-check

function identifyAnimal1(photo) {
  // Do somethiing
  console.log(photo);
}

const animal1 =
  /** What does the return represent? A category, or a biological species? */
  identifyAnimal1(/** I don't know what to include here - is it a blob, a URL, or string? */);

/**
 * @param {Blob} photo Include description here if it is not obvious. Prefer good naming.
 * @returns {string} The animal category
 */
function identifyAnimal2(photo) {
  // Do somethiing
}

const animal2 = identifyAnimal2("blahblah");

export {};
