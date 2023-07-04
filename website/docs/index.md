---
id: "index"
title: "brand-music"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

# brand-music

Strongly typed music theory library.

## Types

- Pitches

  - `MidiNoteNumber`: Int (0-127)

  - `PitchClass`: Int (0-11)

    Integer representation of [pitch class](https://en.wikipedia.org/wiki/Pitch_class)

  - `PitchClassSet` Int (0-4095)

    Bit set of `PitchClass`

- Intervals

  - `PitchInterval`: Int

    [Ordered pitch interval](https://en.wikipedia.org/wiki/Pitch_interval#Ordered_Pitch_Interval)

  - `Semitones`: Int (0-)

    [Unordered pitch interval](https://en.wikipedia.org/wiki/Pitch_interval#Unordered_Pitch_Interval)

  - `PitchIntervalClass`: int (0-11)

    [Ordered pitch-class interval](<https://en.wikipedia.org/wiki/Pitch_interval#Ordered_pitch-class_intervals_('pitch_interval_class;_PIC')>)

  - `IntervalClass` Int (0-6)

    [Unordered pitch-class interval](<https://en.wikipedia.org/wiki/Pitch_interval#Unordered_pitch-class_intervals_('interval_class;_IC')>)

  - `PitchIntervalClassSet`: Int (0-4095)

    Bit set of `PitchIntervalClass`
