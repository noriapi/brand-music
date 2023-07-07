# brand-music

[![npm version](https://img.shields.io/npm/v/brand-music)](https://www.npmjs.com/package/brand-music)

`brand-music` is a TypeScript library which provides [branded-types](https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698) related to music theory.

[Documentation](https://noriapi.github.io/brand-music/)

## Types

### Pitches

| Type                                                                                               | Representation | Description                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| [`MidiNoteNumber`](https://noriapi.github.io/brand-music/namespaces/MidiNoteNumber#midinotenumber) | Int (0-127)    |                                                                                    |
| [`PitchClass`](https://noriapi.github.io/brand-music/namespaces/PitchClass#pitchclass)             | Int (0-11)     | Integer representation of [pitch class](https://en.wikipedia.org/wiki/Pitch_class) |
| [`PitchClassSet`](https://noriapi.github.io/brand-music/namespaces/PitchClassSet#pitchclassset)    | Int (0-4095)   | Bit set of `PitchClass`                                                            |

### Intervals

| Type                                                                                                                    | Representation | Description                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [`PitchInterval`](https://noriapi.github.io/brand-music/namespaces/PitchInterval#pitchinterval)                         | Int            | [Ordered pitch interval](https://en.wikipedia.org/wiki/Pitch_interval#Ordered_Pitch_Interval)                                              |
| [`Semitones`](https://noriapi.github.io/brand-music/namespaces/Semitones#semitones)                                     | Int (0-)       | [Unordered pitch interval](https://en.wikipedia.org/wiki/Pitch_interval#Unordered_Pitch_Interval)                                          |
| [`PitchIntervalClass`](https://noriapi.github.io/brand-music/namespaces/PitchIntervalClass#pitchintervalclass)          | Int (0-11)     | [Ordered pitch-class interval](<https://en.wikipedia.org/wiki/Pitch_interval#Ordered_pitch-class_intervals_('pitch_interval_class;_PIC')>) |
| [`IntervalClass`](https://noriapi.github.io/brand-music/namespaces/IntervalClass#intervalclass)                         | Int (0-6)      | [Unordered pitch-class interval](<https://en.wikipedia.org/wiki/Pitch_interval#Unordered_pitch-class_intervals_('interval_class;_IC')>)    |
| [`PitchIntervalClassSet`](https://noriapi.github.io/brand-music/namespaces/PitchIntervalClassSet#pitchintervalclassset) | Int (0-4095)   | Bit set of `PitchIntervalClass`                                                                                                            |
