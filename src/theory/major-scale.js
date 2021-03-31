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
  const chromaticScaleReordered = reorderScale(index);
  console.log("scale:", chromaticScaleReordered);
  return unison;
}

function reorderScale(index) {
  const start = CHROMATIC_SCALE.slice(0, index);
  const end = CHROMATIC_SCALE.slice(index);
  return end.concat(start);
}

const DDur = getMajorScale("D");

// console.log("CDur:", CDur); // ['C', 'D', 'E', 'F', 'G', 'A', 'H']
