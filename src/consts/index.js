export const NAMING_CONVENTION = {
  EU: 'EUROPEAN',
  US: 'USA',
  NL: 'NEO_LATIN',
  IN: 'INDIAN',
  JP: 'JAPAN',
};

export const CONVENTION_OPTIONS = [
  {
    label: 'European',
    value: NAMING_CONVENTION.EU,
  },
  {
    label: 'American',
    value: NAMING_CONVENTION.US,
  },
  {
    label: 'Neo-Latin',
    value: NAMING_CONVENTION.NL,
  },
  {
    label: 'Indian',
    value: NAMING_CONVENTION.IN,
  },
  {
    label: 'Japan',
    value: NAMING_CONVENTION.JP,
  },
];

export const CHROMATIC_SCALE = {
  [NAMING_CONVENTION.EU]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B", "H"],
  [NAMING_CONVENTION.US]: ["C", "C#/D♭", "D", "D#/E♭", "E", "F", "F#/G♭", "G", "G#/A♭", "A", "A#/B♭", "B"],
  [NAMING_CONVENTION.NL]: ['do', 'do♯/re♭', 're', 're#/mi♭', 'mi', 'fa', 'fa#/sol♭', 'sol', 'sol#/la♭', 'la', 'la#/si♭', 'si', 'si#/do♭', 'do'],
  [NAMING_CONVENTION.IN]: ['সা', 'ঋ', 'রে', 'জ্ঞ', 'গ', 'ম', 'হ্ম', 'প', 'দ', 'ধ', 'ণ', 'নি'],
  [NAMING_CONVENTION.JP]: ['ハ', '嬰ハ)/変ニ', 'ニ', '嬰ニ/変ホ', 'ホ', 'ヘ', '嬰へ/変ト', 'ト', '嬰ト/変イ', 'イ', '嬰イ/変ロ', 'ロ'],
}

export const TYPE_OF_SCALES = {
  CHROMATIC: 'CHROMATIC_SCALE',
  MAJOR: 'MAJOR_SCALE',
  MINOR: 'MINOR_SCALE',
  PASSAGE: 'CHORD_PASSAGE',
  PROGRESSION: 'CHORD_PROGRESSION',
};

export const SCALES_OPTIONS = [
  {
    label: 'Chromatic scale',
    value: TYPE_OF_SCALES.CHROMATIC,
  },
  {
    label: 'Major',
    value: TYPE_OF_SCALES.MAJOR,
  },
  {
    label: 'Minor',
    value: TYPE_OF_SCALES.MINOR,
  },
  {
    label: 'Passage',
    value: TYPE_OF_SCALES.PASSAGE,
  },
  {
    label: 'Progression',
    value: TYPE_OF_SCALES.PROGRESSION,
  },
];

export const CHROMATIC_OPTIONS = nammingConvetion => {
  return CHROMATIC_SCALE[nammingConvetion].map((element, index) => {
    return {
      label: element,
      value: index,
    };
  });
};
