export const LOCAL_NOTATION = {
  EU: 'EUROPEAN',
  US: 'USA',
};

export const NOTATION_OPTIONS = [
  {
    label: 'European',
    value: LOCAL_NOTATION.EU,
  },
  {
    label: 'American',
    value: LOCAL_NOTATION.US,
  },
];

export const CHROMATIC_SCALE = {
  [LOCAL_NOTATION.EU]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B", "H"],
  [LOCAL_NOTATION.US]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B♭", "B"]
}

export const TYPE_OF_SCALES = {
  CHROMATIC: 'CHROMATIC_SCALE',
  MAJOR: 'MAJOR_SCALE',
  MINOR: 'MINOR_SCALE',
  PASSAGE: 'CHORD_PASSAGE',
  PROGRESSION: 'CHORD_PROGRESSION'
};

export const SCALES_OPTIONS = [
  {
    label: 'Chromatic scale',
    value: TYPE_OF_SCALES.CHROMATIC_SCALE,
  },
  {
    label: 'Major',
    value: CHROMATIC_SCALE.MAJOR,
  },
  {
    label: 'Minor',
    value: CHROMATIC_SCALE.MINOR,
  },
  {
    label: 'Passage',
    value: CHROMATIC_SCALE.PASSAGE,
  },
  {
    label: 'Progression',
    value: CHROMATIC_SCALE.PROGRESSION,
  },
];