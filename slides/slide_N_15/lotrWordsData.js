var lotrWords = [
  {
    "location": "The Shire",
    "character": "Frodo",
    "words": 679
  },
  {
    "location": "The Shire",
    "character": "Pippin",
    "words": 124
  },
  {
    "location": "The Shire",
    "character": "Sam",
    "words": 239
  },
  {
    "location": "The Shire",
    "character": "Gandalf",
    "words": 1064
  },
  {
    "location": "The Shire",
    "character": "Merry",
    "words": 173
  },
  {
    "location": "Bree",
    "character": "Aragorn",
    "words": 258
  },
  {
    "location": "Bree",
    "character": "Frodo",
    "words": 125
  },
  {
    "location": "Bree",
    "character": "Merry",
    "words": 56
  },
  {
    "location": "Bree",
    "character": "Pippin",
    "words": 76
  },
  {
    "location": "Bree",
    "character": "Sam",
    "words": 71
  },
  {
    "location": "Isengard",
    "character": "Aragorn",
    "words": 3
  },
  {
    "location": "Isengard",
    "character": "Pippin",
    "words": 108
  },
  {
    "location": "Isengard",
    "character": "Gimli",
    "words": 45
  },
  {
    "location": "Isengard",
    "character": "Gandalf",
    "words": 224
  },
  {
    "location": "Isengard",
    "character": "Merry",
    "words": 116
  },
  {
    "location": "Rivendell",
    "character": "Frodo",
    "words": 153
  },
  {
    "location": "Rivendell",
    "character": "Boromir",
    "words": 259
  },
  {
    "location": "Rivendell",
    "character": "Gimli",
    "words": 38
  },
  {
    "location": "Rivendell",
    "character": "Legolas",
    "words": 34
  },
  {
    "location": "Rivendell",
    "character": "Sam",
    "words": 105
  },
  {
    "location": "Rivendell",
    "character": "Gandalf",
    "words": 276
  },
  {
    "location": "Rivendell",
    "character": "Aragorn",
    "words": 232
  },
  {
    "location": "Rivendell",
    "character": "Merry",
    "words": 29
  },
  {
    "location": "Rivendell",
    "character": "Pippin",
    "words": 27
  },
  {
    "location": "Misty Mountains",
    "character": "Legolas",
    "words": 11
  },
  {
    "location": "Misty Mountains",
    "character": "Merry",
    "words": 17
  },
  {
    "location": "Misty Mountains",
    "character": "Pippin",
    "words": 10
  },
  {
    "location": "Misty Mountains",
    "character": "Sam",
    "words": 3
  },
  {
    "location": "Misty Mountains",
    "character": "Aragorn",
    "words": 42
  },
  {
    "location": "Misty Mountains",
    "character": "Boromir",
    "words": 76
  },
  {
    "location": "Misty Mountains",
    "character": "Gandalf",
    "words": 86
  },
  {
    "location": "Misty Mountains",
    "character": "Gimli",
    "words": 66
  },
  {
    "location": "Misty Mountains",
    "character": "Frodo",
    "words": 6
  },
  {
    "location": "Moria",
    "character": "Gandalf",
    "words": 762
  },
  {
    "location": "Moria",
    "character": "Gimli",
    "words": 102
  },
  {
    "location": "Moria",
    "character": "Legolas",
    "words": 19
  },
  {
    "location": "Moria",
    "character": "Merry",
    "words": 17
  },
  {
    "location": "Moria",
    "character": "Pippin",
    "words": 21
  },
  {
    "location": "Moria",
    "character": "Sam",
    "words": 32
  },
  {
    "location": "Moria",
    "character": "Frodo",
    "words": 90
  },
  {
    "location": "Moria",
    "character": "Boromir",
    "words": 55
  },
  {
    "location": "Moria",
    "character": "Aragorn",
    "words": 98
  },
  {
    "location": "Lothlorien",
    "character": "Legolas",
    "words": 68
  },
  {
    "location": "Lothlorien",
    "character": "Sam",
    "words": 64
  },
  {
    "location": "Lothlorien",
    "character": "Merry",
    "words": 11
  },
  {
    "location": "Lothlorien",
    "character": "Frodo",
    "words": 36
  },
  {
    "location": "Lothlorien",
    "character": "Pippin",
    "words": 1
  },
  {
    "location": "Lothlorien",
    "character": "Aragorn",
    "words": 55
  },
  {
    "location": "Lothlorien",
    "character": "Boromir",
    "words": 176
  },
  {
    "location": "Lothlorien",
    "character": "Gimli",
    "words": 165
  },
  {
    "location": "Parth Galen",
    "character": "Sam",
    "words": 89
  },
  {
    "location": "Parth Galen",
    "character": "Frodo",
    "words": 129
  },
  {
    "location": "Parth Galen",
    "character": "Pippin",
    "words": 17
  },
  {
    "location": "Parth Galen",
    "character": "Boromir",
    "words": 398
  },
  {
    "location": "Parth Galen",
    "character": "Aragorn",
    "words": 319
  },
  {
    "location": "Parth Galen",
    "character": "Gimli",
    "words": 60
  },
  {
    "location": "Parth Galen",
    "character": "Legolas",
    "words": 52
  },
  {
    "location": "Parth Galen",
    "character": "Merry",
    "words": 20
  },
  {
    "location": "Emyn Muil",
    "character": "Sam",
    "words": 347
  },
  {
    "location": "Emyn Muil",
    "character": "Frodo",
    "words": 223
  },
  {
    "location": "Rohan",
    "character": "Aragorn",
    "words": 907
  },
  {
    "location": "Rohan",
    "character": "Legolas",
    "words": 407
  },
  {
    "location": "Rohan",
    "character": "Pippin",
    "words": 203
  },
  {
    "location": "Rohan",
    "character": "Merry",
    "words": 281
  },
  {
    "location": "Rohan",
    "character": "Gandalf",
    "words": 671
  },
  {
    "location": "Rohan",
    "character": "Gimli",
    "words": 607
  },
  {
    "location": "Fangorn",
    "character": "Gandalf",
    "words": 524
  },
  {
    "location": "Fangorn",
    "character": "Legolas",
    "words": 73
  },
  {
    "location": "Fangorn",
    "character": "Merry",
    "words": 297
  },
  {
    "location": "Fangorn",
    "character": "Pippin",
    "words": 276
  },
  {
    "location": "Fangorn",
    "character": "Aragorn",
    "words": 108
  },
  {
    "location": "Fangorn",
    "character": "Gimli",
    "words": 89
  },
  {
    "location": "Gondor",
    "character": "Boromir",
    "words": 132
  },
  {
    "location": "Gondor",
    "character": "Sam",
    "words": 822
  },
  {
    "location": "Gondor",
    "character": "Frodo",
    "words": 491
  },
  {
    "location": "Gondor",
    "character": "Gandalf",
    "words": 1155
  },
  {
    "location": "Gondor",
    "character": "Pippin",
    "words": 386
  },
  {
    "location": "Gondor",
    "character": "Aragorn",
    "words": 175
  },
  {
    "location": "Gondor",
    "character": "Gimli",
    "words": 72
  },
  {
    "location": "Gondor",
    "character": "Merry",
    "words": 97
  },
  {
    "location": "Gondor",
    "character": "Legolas",
    "words": 8
  },
  {
    "location": "Mordor",
    "character": "Legolas",
    "words": 8
  },
  {
    "location": "Mordor",
    "character": "Frodo",
    "words": 361
  },
  {
    "location": "Mordor",
    "character": "Aragorn",
    "words": 128
  },
  {
    "location": "Mordor",
    "character": "Gandalf",
    "words": 32
  },
  {
    "location": "Mordor",
    "character": "Gimli",
    "words": 21
  },
  {
    "location": "Mordor",
    "character": "Merry",
    "words": 3
  },
  {
    "location": "Mordor",
    "character": "Pippin",
    "words": 12
  },
  {
    "location": "Mordor",
    "character": "Sam",
    "words": 753
  }
];