export type TopicalQuestion = {
  id: string;
  paperCode: string;
  session: string;
  questionNumber: number;
  topicId: string;
  subtopicId: string;
  topicFocus: string;
  topicParts: string[];
  images: string[];
  sourcePages: number[];
  markSchemeImages?: string[];
  markSchemeSourcePages?: number[];
};

export type TopicalSubtopic = {
  id: string;
  title: string;
};

export type TopicalTopic = {
  id: string;
  title: string;
  subtopics: TopicalSubtopic[];
};

export const COMSCI_P4_TOPICS: TopicalTopic[] = [
  {
    "id": "searching",
    "title": "Searching Algorithms",
    "subtopics": [
      {
        "id": "searching.linear",
        "title": "Linear Search"
      },
      {
        "id": "searching.binary",
        "title": "Binary Search"
      }
    ]
  },
  {
    "id": "sorting",
    "title": "Sorting Algorithms",
    "subtopics": [
      {
        "id": "sorting.bubble",
        "title": "Bubble Sort"
      },
      {
        "id": "sorting.insertion",
        "title": "Insertion Sort"
      },
      {
        "id": "sorting.merge",
        "title": "Merge Sort"
      }
    ]
  },
  {
    "id": "oop",
    "title": "Object-Oriented Programming",
    "subtopics": [
      {
        "id": "oop.classes",
        "title": "Classes And Objects"
      },
      {
        "id": "oop.inheritance",
        "title": "Inheritance"
      },
      {
        "id": "oop.polymorphism",
        "title": "Polymorphism"
      },
      {
        "id": "oop.encapsulation",
        "title": "Encapsulation"
      }
    ]
  },
  {
    "id": "data-structures",
    "title": "Data Structures",
    "subtopics": [
      {
        "id": "data.arrays",
        "title": "Arrays"
      },
      {
        "id": "data.records",
        "title": "Records"
      },
      {
        "id": "data.maps",
        "title": "Dictionaries And Maps"
      }
    ]
  },
  {
    "id": "adts",
    "title": "Abstract Data Types",
    "subtopics": [
      {
        "id": "adt.stacks",
        "title": "Stacks"
      },
      {
        "id": "adt.queues",
        "title": "Queues"
      },
      {
        "id": "adt.linked-lists",
        "title": "Linked Lists"
      }
    ]
  },
  {
    "id": "file-handling",
    "title": "File Handling",
    "subtopics": [
      {
        "id": "file.read-write",
        "title": "Read And Write Files"
      },
      {
        "id": "file.access",
        "title": "Serial, Sequential And Random Access"
      }
    ]
  },
  {
    "id": "recursion",
    "title": "Recursion",
    "subtopics": [
      {
        "id": "recursion.basic",
        "title": "Recursive Procedures And Functions"
      }
    ]
  },
  {
    "id": "algorithm-design",
    "title": "Algorithm Design And Trace Tables",
    "subtopics": [
      {
        "id": "algorithm.trace",
        "title": "Trace Tables And Dry Runs"
      },
      {
        "id": "algorithm.design",
        "title": "Pseudocode Design And Debugging"
      }
    ]
  },
  {
    "id": "programming",
    "title": "Programming Constructs",
    "subtopics": [
      {
        "id": "programming.validation",
        "title": "Validation"
      },
      {
        "id": "programming.loops-selection",
        "title": "Loops And Selection"
      },
      {
        "id": "programming.procedures",
        "title": "Procedures And Functions"
      }
    ]
  }
];

export const COMSCI_P4_QUESTIONS: TopicalQuestion[] = [
  {
    "id": "9618_s21_qp_41_q01_adt-linked-lists",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (a), (c), (d)",
    "topicParts": [
      "(a)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_42_q01_adt-linked-lists",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (a), (c), (d)",
    "topicParts": [
      "(a)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_43_q01_adt-linked-lists",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (a), (c), (d)",
    "topicParts": [
      "(a)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_41_q03_adt-linked-lists",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (b), (c), (d)",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w24_qp_43_q03_adt-linked-lists",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (b), (c), (d)",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s25_qp_43_q03_adt-linked-lists",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.linked-lists",
    "topicFocus": "Parts (a)(iii), (b), (b)(ii), (b)(iii), (b)(iv)",
    "topicParts": [
      "(a)(iii)",
      "(b)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_s22_qp_41_q03_adt-queues",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_s22_qp_43_q03_adt-queues",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w22_qp_42_q03_adt-queues",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Parts (a), (b), (c)",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_05.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s23_qp_42_q02_adt-queues",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Parts (c), (d), (e), (f)(i)",
    "topicParts": [
      "(c)",
      "(d)",
      "(e)",
      "(f)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_adt-queues",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Parts (a)(i), (a)(ii), (a)(iii), (c)(iii), (e)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(c)(iii)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_adt-queues",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Parts (a)(i), (a)(ii), (a)(iii), (c)(iii), (e)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(c)(iii)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s24_qp_41_q03_adt-queues",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s24_qp_43_q03_adt-queues",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_adt-queues",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(e)(i)",
      "(f)",
      "(g)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_41_q01_adt-queues",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_11.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_s25_qp_43_q01_adt-queues",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_w25_qp_43_q02_adt-queues",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.queues",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  },
  {
    "id": "9618_s22_qp_42_q01_adt-stacks",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)(i)",
      "(e)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_09.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s23_qp_41_q03_adt-stacks",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Parts (b)(i), (b)(ii), (b)(iii), (b)(iv), (b)(v), (c)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)",
      "(b)(v)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s23_qp_43_q03_adt-stacks",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Parts (b)(i), (b)(ii), (b)(iii), (b)(iv), (b)(v), (c)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)",
      "(b)(v)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w23_qp_42_q01_adt-stacks",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Parts (b)(i), (b)(ii), (c), (d)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_13.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s25_qp_41_q02_adt-stacks",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_42_q01_adt-stacks",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(e)",
      "(f)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_w25_qp_41_q01_adt-stacks",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "adts",
    "subtopicId": "adt.stacks",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_09.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s21_qp_41_q02_algorithm-design",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_42_q02_algorithm-design",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_43_q02_algorithm-design",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_w21_qp_41_q03_algorithm-design",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w21_qp_42_q03_algorithm-design",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_s22_qp_41_q03_algorithm-design",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_s22_qp_42_q02_algorithm-design",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b), (b)(i), (c)",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s22_qp_43_q03_algorithm-design",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w22_qp_41_q03_algorithm-design",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_w22_qp_43_q03_algorithm-design",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_s23_qp_42_q01_algorithm-design",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_07.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w23_qp_41_q01_algorithm-design",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_05.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_algorithm-design",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)(iii)",
    "topicParts": [
      "(c)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_42_q02_algorithm-design",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_05.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21
    ]
  },
  {
    "id": "9618_w23_qp_43_q01_algorithm-design",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 1,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_05.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_algorithm-design",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)(iii)",
    "topicParts": [
      "(c)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_algorithm-design",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_algorithm-design",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "algorithm-design",
    "subtopicId": "algorithm.design",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_s21_qp_41_q01_data-arrays",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_41_q02_data-arrays",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_42_q01_data-arrays",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_42_q02_data-arrays",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_43_q01_data-arrays",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_43_q02_data-arrays",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_w21_qp_41_q02_data-arrays",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (d), (e), (g)",
    "topicParts": [
      "(d)",
      "(e)",
      "(g)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_41_q03_data-arrays",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w21_qp_42_q02_data-arrays",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (d), (e), (g)",
    "topicParts": [
      "(d)",
      "(e)",
      "(g)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_42_q03_data-arrays",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_s22_qp_41_q01_data-arrays",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_15.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s22_qp_41_q03_data-arrays",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_s22_qp_42_q01_data-arrays",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_01_Q1_part_09.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s22_qp_42_q02_data-arrays",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b), (b)(ii)",
    "topicParts": [
      "(a)",
      "(b)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_data-arrays",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s22_qp_43_q01_data-arrays",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_15.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s22_qp_43_q03_data-arrays",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w22_qp_41_q01_data-arrays",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_41_q02_data-arrays",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w22_qp_41_q03_data-arrays",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_w22_qp_42_q01_data-arrays",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_42_q02_data-arrays",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_10.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_w22_qp_42_q03_data-arrays",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_05.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w22_qp_43_q01_data-arrays",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_43_q02_data-arrays",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w22_qp_43_q03_data-arrays",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_s23_qp_41_q01_data-arrays",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (a)(i)",
    "topicParts": [
      "(a)",
      "(a)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_41_q03_data-arrays",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s23_qp_42_q01_data-arrays",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_07.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_s23_qp_42_q02_data-arrays",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_s23_qp_42_q03_data-arrays",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_15.png"
    ],
    "markSchemeSourcePages": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s23_qp_43_q01_data-arrays",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (a)(i)",
    "topicParts": [
      "(a)",
      "(a)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_43_q03_data-arrays",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_data-arrays",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)(i), (c)(ii)",
    "topicParts": [
      "(a)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_42_q01_data-arrays",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)(i)",
    "topicParts": [
      "(a)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_13.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_data-arrays",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)(i), (c)(ii)",
    "topicParts": [
      "(a)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s24_qp_41_q01_data-arrays",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (e)",
    "topicParts": [
      "(a)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_41_q02_data-arrays",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b), (e)",
    "topicParts": [
      "(b)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_s24_qp_41_q03_data-arrays",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s24_qp_42_q01_data-arrays",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_15.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_16.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_17.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s24_qp_42_q02_data-arrays",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s24_qp_42_q03_data-arrays",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (d)",
    "topicParts": [
      "(a)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "9618_s24_qp_43_q01_data-arrays",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (e)",
    "topicParts": [
      "(a)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_43_q02_data-arrays",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b), (e)",
    "topicParts": [
      "(b)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_s24_qp_43_q03_data-arrays",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w24_qp_41_q01_data-arrays",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b), (d)",
    "topicParts": [
      "(a)",
      "(b)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_41_q03_data-arrays",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_data-arrays",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w24_qp_42_q03_data-arrays",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b), (c)",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_09.png"
    ],
    "markSchemeSourcePages": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  {
    "id": "9618_w24_qp_43_q01_data-arrays",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b), (d)",
    "topicParts": [
      "(a)",
      "(b)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_43_q03_data-arrays",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s25_qp_41_q01_data-arrays",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_01_Q1_part_11.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_s25_qp_41_q02_data-arrays",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a), (b), (c)",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_42_q01_data-arrays",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_data-arrays",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)(i)",
    "topicParts": [
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_s25_qp_43_q01_data-arrays",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s25_qp_43_q02_data-arrays",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b), (c), (e)",
    "topicParts": [
      "(b)",
      "(c)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_w25_qp_41_q01_data-arrays",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_01_Q1_part_09.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_data-arrays",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_w25_qp_42_q02_data-arrays",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_w25_qp_42_q03_data-arrays",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w25_qp_43_q01_data-arrays",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_07.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_13.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "9618_w25_qp_43_q02_data-arrays",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  },
  {
    "id": "9618_w25_qp_43_q03_data-arrays",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.arrays",
    "topicFocus": "Parts (a)(i), (a)(ii), (b)(ii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_data-maps",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.maps",
    "topicFocus": "Parts (e), (f)(ii)",
    "topicParts": [
      "(e)",
      "(f)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_data-maps",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.maps",
    "topicFocus": "Parts (e), (f)",
    "topicParts": [
      "(e)",
      "(f)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s21_qp_41_q01_data-records",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_42_q01_data-records",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s21_qp_43_q01_data-records",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_data-records",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s23_qp_42_q02_data-records",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(c)",
      "(d)",
      "(e)",
      "(f)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_data-records",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (c), (c)(i), (c)(iii), (d)",
    "topicParts": [
      "(c)",
      "(c)(i)",
      "(c)(iii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_data-records",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (c), (c)(i), (c)(iii), (d)",
    "topicParts": [
      "(c)",
      "(c)(i)",
      "(c)(iii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_data-records",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_data-records",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(ii)",
      "(c)",
      "(d)",
      "(e)",
      "(f)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_data-records",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "data-structures",
    "subtopicId": "data.records",
    "topicFocus": "Parts (a), (c), (d), (f), (g)",
    "topicParts": [
      "(a)",
      "(c)",
      "(d)",
      "(f)",
      "(g)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s21_qp_41_q03_file-read-write",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_42_q03_file-read-write",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_43_q03_file-read-write",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w21_qp_41_q02_file-read-write",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_42_q02_file-read-write",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s22_qp_41_q01_file-read-write",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (f)",
    "topicParts": [
      "(b)",
      "(f)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_01_Q1_part_15.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_file-read-write",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s22_qp_43_q01_file-read-write",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (f)",
    "topicParts": [
      "(b)",
      "(f)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_01_Q1_part_15.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_w22_qp_41_q01_file-read-write",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (d)(i)",
    "topicParts": [
      "(b)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_43_q01_file-read-write",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (d)(i)",
    "topicParts": [
      "(b)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_41_q01_file-read-write",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_41_q03_file-read-write",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)(v)",
    "topicParts": [
      "(b)(v)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s23_qp_43_q01_file-read-write",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_43_q03_file-read-write",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)(v)",
    "topicParts": [
      "(b)(v)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_file-read-write",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (c)",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_file-read-write",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b), (c)",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s24_qp_41_q02_file-read-write",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_s24_qp_42_q01_file-read-write",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_15.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_16.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_01_Q1_part_17.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s24_qp_43_q02_file-read-write",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_w24_qp_41_q01_file-read-write",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_42_q03_file-read-write",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_09.png"
    ],
    "markSchemeSourcePages": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  {
    "id": "9618_w24_qp_43_q01_file-read-write",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_41_q02_file-read-write",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (c), (d)",
    "topicParts": [
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s25_qp_42_q01_file-read-write",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_file-read-write",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_s25_qp_43_q01_file-read-write",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_file-read-write",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_w25_qp_42_q03_file-read-write",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (c), (d)",
    "topicParts": [
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w25_qp_43_q02_file-read-write",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "file-handling",
    "subtopicId": "file.read-write",
    "topicFocus": "Parts (d), (e)",
    "topicParts": [
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  },
  {
    "id": "9618_s21_qp_41_q03_oop-classes",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)",
      "(c)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_42_q03_oop-classes",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)",
      "(c)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_43_q03_oop-classes",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)",
      "(c)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w21_qp_41_q02_oop-classes",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a), (b), (c), (e)",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_41_q03_oop-classes",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w21_qp_42_q02_oop-classes",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a), (b), (c), (e)",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_42_q03_oop-classes",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_s22_qp_41_q02_oop-classes",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(f)",
      "(g)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_s22_qp_41_q03_oop-classes",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_oop-classes",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s22_qp_43_q02_oop-classes",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(f)",
      "(g)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_s22_qp_43_q03_oop-classes",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w22_qp_41_q02_oop-classes",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)(i), (a)(ii), (b)(i), (b)(ii), (b)(iii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w22_qp_42_q02_oop-classes",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_10.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_w22_qp_43_q02_oop-classes",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)(i), (a)(ii), (b)(i), (b)(ii), (b)(iii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_s23_qp_41_q02_oop-classes",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_s23_qp_42_q03_oop-classes",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_15.png"
    ],
    "markSchemeSourcePages": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s23_qp_43_q02_oop-classes",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w23_qp_41_q02_oop-classes",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (c)(i), (c)(ii)",
    "topicParts": [
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_41_q03_oop-classes",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w23_qp_42_q03_oop-classes",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(a)(v)",
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w23_qp_43_q02_oop-classes",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (c)(i), (c)(ii)",
    "topicParts": [
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w23_qp_43_q03_oop-classes",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s24_qp_41_q02_oop-classes",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)(i), (a)(ii), (b), (c), (d), (e)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_s24_qp_42_q02_oop-classes",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s24_qp_43_q02_oop-classes",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)(i), (a)(ii), (b), (c), (d), (e)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_w24_qp_41_q01_oop-classes",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_41_q02_oop-classes",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(i)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w24_qp_42_q01_oop-classes",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(ii)",
      "(c)",
      "(d)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_06.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_14.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_oop-classes",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w24_qp_43_q01_oop-classes",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_43_q02_oop-classes",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(i)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_s25_qp_41_q03_oop-classes",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(iii)",
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ]
  },
  {
    "id": "9618_s25_qp_42_q02_oop-classes",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_s25_qp_42_q03_oop-classes",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_s25_qp_43_q03_oop-classes",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_w25_qp_41_q02_oop-classes",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_11.png"
    ],
    "markSchemeSourcePages": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_oop-classes",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (a), (d), (e)",
    "topicParts": [
      "(a)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_w25_qp_42_q01_oop-classes",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(a)(iv)",
      "(b)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_w25_qp_42_q02_oop-classes",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_w25_qp_43_q01_oop-classes",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)",
      "(c)(i)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_01_Q1_part_07.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_01_Q1_part_13.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "9618_w25_qp_43_q02_oop-classes",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.classes",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
  },
  {
    "id": "9618_s21_qp_41_q03_oop-encapsulation",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_42_q03_oop-encapsulation",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_s21_qp_43_q03_oop-encapsulation",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w21_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_42_q02_oop-encapsulation",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s22_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_s22_qp_41",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v1_9618_s22_qp_41/9618_s22_qp_41_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v1_9618_s22_ms_41/9618_s22_ms_41_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_oop-encapsulation",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s22_qp_43_q02_oop-encapsulation",
    "paperCode": "9618_s22_qp_43",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v3_9618_s22_qp_43/9618_s22_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v3_9618_s22_ms_43/9618_s22_ms_43_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_w22_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (b)(i), (b)(ii)",
    "topicParts": [
      "(a)(i)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w22_qp_42_q02_oop-encapsulation",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a), (b)",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_02_Q2_part_10.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_w22_qp_43_q02_oop-encapsulation",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (b)(i), (b)(ii)",
    "topicParts": [
      "(a)(i)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_02_Q2_part_08.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_s23_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii), (a)(iii), (b)(i)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_s23_qp_43_q02_oop-encapsulation",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii), (a)(iii), (b)(i)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(a)(iii)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w23_qp_41_q03_oop-encapsulation",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii), (a)(iii)",
    "topicParts": [
      "(a)(ii)",
      "(a)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w23_qp_42_q03_oop-encapsulation",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii)",
    "topicParts": [
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w23_qp_43_q03_oop-encapsulation",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii), (a)(iii)",
    "topicParts": [
      "(a)(ii)",
      "(a)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s24_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_s24_qp_42_q02_oop-encapsulation",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii), (a)(iii)",
    "topicParts": [
      "(a)(ii)",
      "(a)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_15.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_02_Q2_part_16.png"
    ],
    "markSchemeSourcePages": [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s24_qp_43_q02_oop-encapsulation",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_14.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_02_Q2_part_15.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "9618_w24_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii), (c)(i)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w24_qp_42_q01_oop-encapsulation",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii), (c)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_01_Q1_part_06.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_01_Q1_part_14.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_w24_qp_43_q02_oop-encapsulation",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (a)(ii), (c)(i)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_s25_qp_41_q03_oop-encapsulation",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii)",
    "topicParts": [
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ]
  },
  {
    "id": "9618_s25_qp_42_q03_oop-encapsulation",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (c), (c)(i)",
    "topicParts": [
      "(c)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_s25_qp_43_q03_oop-encapsulation",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(ii)",
    "topicParts": [
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_w25_qp_41_q02_oop-encapsulation",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i), (c)(i)",
    "topicParts": [
      "(a)(i)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_02_Q2_part_05.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_02_Q2_part_11.png"
    ],
    "markSchemeSourcePages": [
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w25_qp_41_q03_oop-encapsulation",
    "paperCode": "9618_w25_qp_41",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v1_9618_w25_qp_41/9618_w25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v1_9618_w25_ms_41/9618_w25_ms_41_question_03_Q3_part_11.png"
    ],
    "markSchemeSourcePages": [
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_w25_qp_42_q01_oop-encapsulation",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "oop",
    "subtopicId": "oop.encapsulation",
    "topicFocus": "Parts (a)(i)",
    "topicParts": [
      "(a)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_s23_qp_41_q02_oop-inheritance",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_s23_qp_42_q03_oop-inheritance",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_14.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_03_Q3_part_15.png"
    ],
    "markSchemeSourcePages": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s23_qp_43_q02_oop-inheritance",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w23_qp_41_q03_oop-inheritance",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w23_qp_42_q03_oop-inheritance",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34
    ]
  },
  {
    "id": "9618_w23_qp_43_q03_oop-inheritance",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s25_qp_42_q03_oop-inheritance",
    "paperCode": "9618_s25_qp_42",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "oop",
    "subtopicId": "oop.inheritance",
    "topicFocus": "Parts (b), (c)",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v2_9618_s25_qp_42/9618_s25_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      9,
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v2_9618_s25_ms_42/9618_s25_ms_42_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45
    ]
  },
  {
    "id": "9618_s23_qp_42_q01_programming-loops-selection",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.loops-selection",
    "topicFocus": "Parts (b), (c)",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_07.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_s23_qp_42_q01_programming-procedures",
    "paperCode": "9618_s23_qp_42",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.procedures",
    "topicFocus": "Parts (c), (d)(i)",
    "topicParts": [
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_June_v2_9618_s23_qp_42/9618_s23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v2_9618_s23_ms_42/9618_s23_ms_42_question_01_Q1_part_07.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_s22_qp_42_q03_programming-validation",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_03_Q3_part_12.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ]
  },
  {
    "id": "9618_s23_qp_41_q01_programming-validation",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (d)(i)",
    "topicParts": [
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_43_q01_programming-validation",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (d)(i)",
    "topicParts": [
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_41_q03_programming-validation",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (e)(i)",
    "topicParts": [
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_w23_qp_42_q01_programming-validation",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (b)(i)",
    "topicParts": [
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_01_Q1_part_13.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w23_qp_43_q03_programming-validation",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (e)(i)",
    "topicParts": [
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_03_Q3_part_13.png"
    ],
    "markSchemeSourcePages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ]
  },
  {
    "id": "9618_s24_qp_41_q01_programming-validation",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_41_q03_programming-validation",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (d)(i)",
    "topicParts": [
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_s24_qp_43_q01_programming-validation",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_43_q03_programming-validation",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (d)(i)",
    "topicParts": [
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_03_Q3_part_10.png"
    ],
    "markSchemeSourcePages": [
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38
    ]
  },
  {
    "id": "9618_w24_qp_41_q02_programming-validation",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (c)(ii)",
    "topicParts": [
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w24_qp_42_q02_programming-validation",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (e)(i)",
    "topicParts": [
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_02_Q2_part_13.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  },
  {
    "id": "9618_w24_qp_43_q02_programming-validation",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (c)(ii)",
    "topicParts": [
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_02_Q2_part_06.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "9618_w25_qp_42_q01_programming-validation",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "programming",
    "subtopicId": "programming.validation",
    "topicFocus": "Parts (a)(iv)",
    "topicParts": [
      "(a)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_01_Q1_part_12.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "9618_w21_qp_41_q01_recursion-basic",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 1,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_41_q03_recursion-basic",
    "paperCode": "9618_w21_qp_41",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (e)(i)",
    "topicParts": [
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v1_9618_w21_qp_41/9618_w21_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v1_9618_w21_ms_41/9618_w21_ms_41_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_w21_qp_42_q01_recursion-basic",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 1,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_42_q03_recursion-basic",
    "paperCode": "9618_w21_qp_42",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (e)(i)",
    "topicParts": [
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2021_November_v2_9618_w21_qp_42/9618_w21_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_November_v2_9618_w21_ms_42/9618_w21_ms_42_question_03_Q3_part_06.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21,
      22
    ]
  },
  {
    "id": "9618_s22_qp_42_q02_recursion-basic",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (c), (c)(i)",
    "topicParts": [
      "(c)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w22_qp_41_q03_recursion-basic",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (c), (d)",
    "topicParts": [
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_w22_qp_42_q03_recursion-basic",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (d), (e)",
    "topicParts": [
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_03_Q3_part_05.png"
    ],
    "markSchemeSourcePages": [
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w22_qp_43_q03_recursion-basic",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (c), (d)",
    "topicParts": [
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "9618_w23_qp_41_q01_recursion-basic",
    "paperCode": "9618_w23_qp_41",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (b)(i), (b)(ii)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v1_9618_w23_qp_41/9618_w23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v1_9618_w23_ms_41/9618_w23_ms_41_question_01_Q1_part_05.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_42_q02_recursion-basic",
    "paperCode": "9618_w23_qp_42",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (b), (b)(i), (b)(ii)",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2023_November_v2_9618_w23_qp_42/9618_w23_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v2_9618_w23_ms_42/9618_w23_ms_42_question_02_Q2_part_05.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19,
      20,
      21
    ]
  },
  {
    "id": "9618_w23_qp_43_q01_recursion-basic",
    "paperCode": "9618_w23_qp_43",
    "session": "2023 November v3",
    "questionNumber": 1,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (b)(i), (b)(ii)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_November_v3_9618_w23_qp_43/9618_w23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_November_v3_9618_w23_ms_43/9618_w23_ms_43_question_01_Q1_part_05.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_s24_qp_42_q03_recursion-basic",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (b)(i), (b)(ii), (c), (c)(i), (d), (d)(i)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(c)(i)",
      "(d)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "9618_s25_qp_41_q03_recursion-basic",
    "paperCode": "9618_s25_qp_41",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2025_June_v1_9618_s25_qp_41/9618_s25_qp_41_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v1_9618_s25_ms_41/9618_s25_ms_41_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43
    ]
  },
  {
    "id": "9618_w25_qp_42_q02_recursion-basic",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (e), (f)(i)",
    "topicParts": [
      "(e)",
      "(f)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_w25_qp_43_q03_recursion-basic",
    "paperCode": "9618_w25_qp_43",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "recursion",
    "subtopicId": "recursion.basic",
    "topicFocus": "Parts (a)(i), (a)(ii)",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v3_9618_w25_qp_43/9618_w25_qp_43_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v3_9618_w25_ms_43/9618_w25_ms_43_question_03_Q3_part_08.png"
    ],
    "markSchemeSourcePages": [
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  {
    "id": "9618_s22_qp_42_q02_searching-binary",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (c), (c)(i), (c)(ii)",
    "topicParts": [
      "(c)",
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_s24_qp_41_q01_searching-binary",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (e), (e)(i), (e)(ii)",
    "topicParts": [
      "(e)",
      "(e)(i)",
      "(e)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_42_q03_searching-binary",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (d), (d)(i), (d)(ii)",
    "topicParts": [
      "(d)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "9618_s24_qp_43_q01_searching-binary",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (e), (e)(i), (e)(ii)",
    "topicParts": [
      "(e)",
      "(e)(i)",
      "(e)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s25_qp_43_q02_searching-binary",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  },
  {
    "id": "9618_w25_qp_42_q02_searching-binary",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.binary",
    "topicFocus": "Parts (e), (f)(i)",
    "topicParts": [
      "(e)",
      "(f)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_s21_qp_41_q02_searching-linear",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.linear",
    "topicFocus": "Parts (b)(i), (b)(ii)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_42_q02_searching-linear",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.linear",
    "topicFocus": "Parts (b)(i), (b)(ii)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_43_q02_searching-linear",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "searching",
    "subtopicId": "searching.linear",
    "topicFocus": "Parts (b)(i), (b)(ii)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s23_qp_41_q01_searching-linear",
    "paperCode": "9618_s23_qp_41",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "searching",
    "subtopicId": "searching.linear",
    "topicFocus": "Parts (c), (d)(i)",
    "topicParts": [
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v1_9618_s23_qp_41/9618_s23_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v1_9618_s23_ms_41/9618_s23_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_43_q01_searching-linear",
    "paperCode": "9618_s23_qp_43",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "searching",
    "subtopicId": "searching.linear",
    "topicFocus": "Parts (c), (d)(i)",
    "topicParts": [
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2023_June_v3_9618_s23_qp_43/9618_s23_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2023_June_v3_9618_s23_ms_43/9618_s23_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s21_qp_41_q02_sorting-bubble",
    "paperCode": "9618_s21_qp_41",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v1_9618_s21_qp_41/9618_s21_qp_41_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v1_9618_s21_ms_41/9618_s21_ms_41_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_42_q02_sorting-bubble",
    "paperCode": "9618_s21_qp_42",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v2_9618_s21_qp_42/9618_s21_qp_42_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v2_9618_s21_ms_42/9618_s21_ms_42_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s21_qp_43_q02_sorting-bubble",
    "paperCode": "9618_s21_qp_43",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2021_June_v3_9618_s21_qp_43/9618_s21_qp_43_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2021_June_v3_9618_s21_ms_43/9618_s21_ms_43_question_02_Q2_part_07.png"
    ],
    "markSchemeSourcePages": [
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s22_qp_42_q02_sorting-bubble",
    "paperCode": "9618_s22_qp_42",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (b), (b)(i), (b)(ii)",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2022_June_v2_9618_s22_qp_42/9618_s22_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2022_June_v2_9618_s22_ms_42/9618_s22_ms_42_question_02_Q2_part_12.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  {
    "id": "9618_w22_qp_41_q01_sorting-bubble",
    "paperCode": "9618_w22_qp_41",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v1_9618_w22_qp_41/9618_w22_qp_41_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v1_9618_w22_ms_41/9618_w22_ms_41_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_43_q01_sorting-bubble",
    "paperCode": "9618_w22_qp_43",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (e)",
    "topicParts": [
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v3_9618_w22_qp_43/9618_w22_qp_43_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v3_9618_w22_ms_43/9618_w22_ms_43_question_01_Q1_part_06.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_s24_qp_41_q01_sorting-bubble",
    "paperCode": "9618_s24_qp_41",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (d), (d)(i), (d)(ii)",
    "topicParts": [
      "(d)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v1_9618_s24_qp_41/9618_s24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v1_9618_s24_ms_41/9618_s24_ms_41_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_43_q01_sorting-bubble",
    "paperCode": "9618_s24_qp_43",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (d), (d)(i), (d)(ii)",
    "topicParts": [
      "(d)",
      "(d)(i)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v3_9618_s24_qp_43/9618_s24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v3_9618_s24_ms_43/9618_s24_ms_43_question_01_Q1_part_10.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_41_q01_sorting-bubble",
    "paperCode": "9618_w24_qp_41",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v1_9618_w24_qp_41/9618_w24_qp_41_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v1_9618_w24_ms_41/9618_w24_ms_41_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_42_q03_sorting-bubble",
    "paperCode": "9618_w24_qp_42",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (d), (e)(i)",
    "topicParts": [
      "(d)",
      "(e)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v2_9618_w24_qp_42/9618_w24_qp_42_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_November_v2_9618_w24_ms_42/9618_w24_ms_42_question_03_Q3_part_09.png"
    ],
    "markSchemeSourcePages": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  {
    "id": "9618_w24_qp_43_q01_sorting-bubble",
    "paperCode": "9618_w24_qp_43",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4/2024_November_v3_9618_w24_qp_43/9618_w24_qp_43_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_November_v3_9618_w24_ms_43/9618_w24_ms_43_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w25_qp_42_q02_sorting-bubble",
    "paperCode": "9618_w25_qp_42",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.bubble",
    "topicFocus": "Parts (c), (d)(i)",
    "topicParts": [
      "(c)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_November_v2_9618_w25_qp_42/9618_w25_qp_42_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_November_v2_9618_w25_ms_42/9618_w25_ms_42_question_02_Q2_part_09.png"
    ],
    "markSchemeSourcePages": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26
    ]
  },
  {
    "id": "9618_w22_qp_42_q01_sorting-insertion",
    "paperCode": "9618_w22_qp_42",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "sorting",
    "subtopicId": "sorting.insertion",
    "topicFocus": "Parts (e), (g)(i)",
    "topicParts": [
      "(e)",
      "(g)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4/2022_November_v2_9618_w22_qp_42/9618_w22_qp_42_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_03.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_04.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_05.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_06.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_07.png",
      "/topical/comsci-cie/P4-MS/2022_November_v2_9618_w22_ms_42/9618_w22_ms_42_question_01_Q1_part_08.png"
    ],
    "markSchemeSourcePages": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_s24_qp_42_q03_sorting-insertion",
    "paperCode": "9618_s24_qp_42",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "sorting",
    "subtopicId": "sorting.insertion",
    "topicFocus": "Parts (b)(i), (b)(ii), (c), (c)(i)",
    "topicParts": [
      "(b)(i)",
      "(b)(ii)",
      "(c)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4/2024_June_v2_9618_s24_qp_42/9618_s24_qp_42_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_05.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_06.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_07.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_08.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_09.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_10.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_11.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_12.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_13.png",
      "/topical/comsci-cie/P4-MS/2024_June_v2_9618_s24_ms_42/9618_s24_ms_42_question_03_Q3_part_14.png"
    ],
    "markSchemeSourcePages": [
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
    ]
  },
  {
    "id": "9618_s25_qp_43_q02_sorting-insertion",
    "paperCode": "9618_s25_qp_43",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "sorting",
    "subtopicId": "sorting.insertion",
    "topicFocus": "Parts (b), (d)(i)",
    "topicParts": [
      "(b)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4/2025_June_v3_9618_s25_qp_43/9618_s25_qp_43_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_04.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_05.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_06.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_07.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_08.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_09.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_10.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_11.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_12.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_13.png",
      "/topical/comsci-cie/P4-MS/2025_June_v3_9618_s25_ms_43/9618_s25_ms_43_question_02_Q2_part_14.png"
    ],
    "markSchemeSourcePages": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ]
  }
];
