# brand-music

Strongly typed music theory library.

## Types

- Pitches

  - `MidiNoteNumber`: int (0-127)

  - `PitchClass`: int (0-11)
    Integer representation of pitch class

  - `PitchClassSet` int (0-4095)
    Bit set of `PitchClass`

- Intervals

  - `PitchInterval`: int
    Ordered pitch interval

  - `Semitones`: int (0-)
    Unordered pitch interval

  - `PitchIntervalClass`: int (0-11)
    Ordered pitch-class interval

  - `IntervalClass` int (0-6)
    Unordered pitch-class interval

  - `PitchIntervalClassSet`: int (0-4095)
    Bit set of `PitchIntervalClass`
