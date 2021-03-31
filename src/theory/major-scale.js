const CHROMATIC_SCALE = [
  "C",
  "C#/D♭",
  "D",
  "D#/E♭",
  "E",
  "F",
  "F#/G♭",
  "G",
  "G#/A♭",
  "A",
  "A#/B",
  "H"
];

const BREAKPOINTS = [3, 6];

function getMajorScale(unison) {
  const index = CHROMATIC_SCALE.findIndex((note) => note === unison);
  const scale = constructScale(index);
  console.log("scale:", scale);
  return unison;
}

function constructScale(index) {
  console.log("constructScale", index);
  const scaleMapped = CHROMATIC_SCALE.map((element, index) =>
    transformNote(element, index)
  );
  const scaleSort = console.log(scaleMapped);
}

function transformNote(element, index) {
  return {
    index,
    value: element
  };
}

const CDur = getMajorScale("D");

// console.log("CDur:", CDur); // ['C', 'D', 'E', 'F', 'G', 'A', 'H']
