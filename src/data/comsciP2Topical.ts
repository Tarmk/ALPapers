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

export const COMSCI_P2_TOPICS: TopicalTopic[] = [
  {
    "id": "9",
    "title": "Algorithm Design and Problem-solving",
    "subtopics": [
      {
        "id": "9.1",
        "title": "Computational Thinking Skills"
      },
      {
        "id": "9.2",
        "title": "Algorithms"
      }
    ]
  },
  {
    "id": "10",
    "title": "Data Types and Structures",
    "subtopics": [
      {
        "id": "10.1",
        "title": "Data Types and Records"
      },
      {
        "id": "10.2",
        "title": "Arrays"
      },
      {
        "id": "10.3",
        "title": "Files"
      },
      {
        "id": "10.4",
        "title": "Introduction to Abstract Data Types (ADT)"
      }
    ]
  },
  {
    "id": "11",
    "title": "Programming",
    "subtopics": [
      {
        "id": "11.1",
        "title": "Programming Basics"
      },
      {
        "id": "11.2",
        "title": "Constructs"
      },
      {
        "id": "11.3",
        "title": "Structured Programming"
      }
    ]
  },
  {
    "id": "12",
    "title": "Software Development",
    "subtopics": [
      {
        "id": "12.1",
        "title": "Program Development Life cycle"
      },
      {
        "id": "12.2",
        "title": "Program Design"
      },
      {
        "id": "12.3",
        "title": "Program Testing and Maintenance"
      }
    ]
  }
];

export const COMSCI_P2_QUESTIONS: TopicalQuestion[] = [
  {
    "id": "9618_s21_qp_21_q01_11-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_21_q01_10-1",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_21_q02_11-3",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_02_Q2_part_03.png"
    ],
    "markSchemeSourcePages": [
      5,
      6,
      7
    ]
  },
  {
    "id": "9618_s21_qp_21_q03_11-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_21_q04_10-1",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_21_q04_11-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_21_q05_9-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 5,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_21_q05_11-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_21_q05_11-3",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_21_q06_10-4",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_06_Q6.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s21_qp_21_q07_10-1",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s21_qp_21_q07_11-2",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s21_qp_21_q07_11-3",
    "paperCode": "9618_s21_qp_21",
    "session": "2021 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v1_9618_s21_qp_21/9618_s21_qp_21_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v1_9618_s21_ms_21/9618_s21_ms_21_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s21_qp_22_q01_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s21_qp_22_q01_11-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s21_qp_22_q02_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_22_q03_10-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s21_qp_22_q03_10-4",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s21_qp_22_q04_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s21_qp_22_q05_10-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s21_qp_22_q05_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s21_qp_22_q06_10-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s21_qp_22_q07_10-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_22_q07_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_22_q07_11-3",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_22_q08_11-2",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_22_q08_10-1",
    "paperCode": "9618_s21_qp_22",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v2_9618_s21_qp_22/9618_s21_qp_22_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v2_9618_s21_ms_22/9618_s21_ms_22_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_23_q01_11-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_23_q01_10-1",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_23_q02_11-3",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_02_Q2_part_03.png"
    ],
    "markSchemeSourcePages": [
      5,
      6,
      7
    ]
  },
  {
    "id": "9618_s21_qp_23_q03_11-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_23_q04_10-1",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_23_q04_11-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_23_q05_9-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 5,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_23_q05_11-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_23_q05_11-3",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s21_qp_23_q06_10-4",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_06_Q6.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s21_qp_23_q07_10-1",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s21_qp_23_q07_11-2",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_s21_qp_23_q07_11-3",
    "paperCode": "9618_s21_qp_23",
    "session": "2021 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2021_June_v3_9618_s21_qp_23/9618_s21_qp_23_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2021_June_v3_9618_s21_ms_23/9618_s21_ms_23_question_07_Q7_part_04.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15,
      16
    ]
  },
  {
    "id": "9618_w21_qp_21_q01_10-1",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w21_qp_21_q01_11-2",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w21_qp_21_q02_9-2",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_21_q03_10-4",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_21_q04_11-3",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_21_q04_11-2",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_21_q04_12-3",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 4,
    "topicId": "12",
    "subtopicId": "12.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_21_q05_10-1",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_21_q05_11-2",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_21_q06_11-2",
    "paperCode": "9618_w21_qp_21",
    "session": "2021 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P2/2021_November_v1_9618_w21_qp_21/9618_w21_qp_21_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_November_v1_9618_w21_ms_21/9618_w21_ms_21_question_06_Q6_part_03.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_w21_qp_22_q01_11-1",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_22_q02_11-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_22_q02_9-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_22_q02_12-1",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_22_q03_11-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_22_q03_10-1",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_22_q04_11-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_22_q04_11-3",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_22_q04_9-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_22_q05_10-3",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w21_qp_22_q05_11-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w21_qp_22_q06_11-2",
    "paperCode": "9618_w21_qp_22",
    "session": "2021 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P2/2021_November_v2_9618_w21_qp_22/9618_w21_qp_22_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v2_9618_w21_ms_22/9618_w21_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w21_qp_23_q01_10-1",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w21_qp_23_q01_11-2",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w21_qp_23_q02_9-2",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_23_q03_10-4",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_23_q04_11-3",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_23_q04_11-2",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_23_q04_12-3",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 4,
    "topicId": "12",
    "subtopicId": "12.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_23_q05_10-1",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_23_q05_11-2",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w21_qp_23_q06_11-2",
    "paperCode": "9618_w21_qp_23",
    "session": "2021 November v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P2/2021_November_v3_9618_w21_qp_23/9618_w21_qp_23_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2-MS/2021_November_v3_9618_w21_ms_23/9618_w21_ms_23_question_06_Q6_part_03.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s22_qp_21_q01_11-1",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_21_q01_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_21_q02_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s22_qp_21_q02_11-1",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s22_qp_21_q03_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_21_q03_11-3",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_21_q03_11-1",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_21_q04_10-4",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_21_q04_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_21_q05_9-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 5,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_21_q05_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_21_q06_9-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 6,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s22_qp_21_q07_10-1",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_21_q07_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_21_q07_9-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 7,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_21_q08_10-1",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s22_qp_21_q08_11-2",
    "paperCode": "9618_s22_qp_21",
    "session": "2022 June v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v1_9618_s22_qp_21/9618_s22_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_June_v1_9618_s22_ms_21/9618_s22_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s22_qp_22_q01_11-2",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_22_q02_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_22_q02_9-2",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_22_q03_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_22_q04_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      6,
      7,
      8
    ]
  },
  {
    "id": "9618_s22_qp_22_q05_11-2",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_22_q05_10-1",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_22_q05_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_22_q06_10-1",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s22_qp_22_q06_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s22_qp_22_q07_11-3",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s22_qp_22_q08_10-1",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_05.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_06.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s22_qp_22_q08_11-2",
    "paperCode": "9618_s22_qp_22",
    "session": "2022 June v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_05.png",
      "/topical/comsci-cie/P2/2022_June_v2_9618_s22_qp_22/9618_s22_qp_22_question_08_Q8_part_06.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_June_v2_9618_s22_ms_22/9618_s22_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s22_qp_23_q01_11-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_23_q01_11-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_23_q02_10-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_23_q02_12-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_23_q02_12-3",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "12",
    "subtopicId": "12.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_23_q03_11-3",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_23_q04_11-3",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_23_q05_10-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s22_qp_23_q05_11-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s22_qp_23_q05_10-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s22_qp_23_q06_11-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s22_qp_23_q06_11-3",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s22_qp_23_q07_9-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 7,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_23_q07_10-3",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_23_q08_12-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 8,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_08_Q8.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_23_q09_10-1",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 9,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_04.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s22_qp_23_q09_11-2",
    "paperCode": "9618_s22_qp_23",
    "session": "2022 June v3",
    "questionNumber": 9,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_02.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_03.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_04.png",
      "/topical/comsci-cie/P2/2022_June_v3_9618_s22_qp_23/9618_s22_qp_23_question_09_Q9_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_June_v3_9618_s22_ms_23/9618_s22_ms_23_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w22_qp_21_q01_11-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_21_q01_9-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_21_q01_11-1",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_21_q02_11-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_21_q03_9-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_21_q04_10-4",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_21_q05_10-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_21_q06_11-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_21_q06_10-1",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_21_q07_11-1",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_21_q08_11-2",
    "paperCode": "9618_w22_qp_21",
    "session": "2022 November v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v1_9618_w22_qp_21/9618_w22_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v1_9618_w22_ms_21/9618_w22_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_22_q01_11-3",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_22_q01_10-1",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_22_q01_11-1",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_22_q02_11-1",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_22_q02_9-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_22_q03_10-4",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_22_q04_9-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_22_q04_11-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_22_q05_11-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w22_qp_22_q06_11-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_22_q06_11-3",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_22_q07_10-1",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w22_qp_22_q07_11-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w22_qp_22_q07_10-2",
    "paperCode": "9618_w22_qp_22",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v2_9618_w22_qp_22/9618_w22_qp_22_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2022_November_v2_9618_w22_ms_22/9618_w22_ms_22_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w22_qp_23_q01_12-1",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w22_qp_23_q02_11-2",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_23_q03_9-2",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_23_q04_10-1",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_23_q05_11-3",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_23_q05_10-1",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_23_q06_11-3",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_23_q07_11-2",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_05.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_06.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_23_q07_10-2",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_05.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_06.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_23_q07_11-1",
    "paperCode": "9618_w22_qp_23",
    "session": "2022 November v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_05.png",
      "/topical/comsci-cie/P2/2022_November_v3_9618_w22_qp_23/9618_w22_qp_23_question_07_Q7_part_06.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2022_November_v3_9618_w22_ms_23/9618_w22_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s23_qp_21_q01_11-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_21_q01_11-3",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_21_q02_10-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_21_q02_9-2",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_21_q02_11-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_21_q03_11-2",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_21_q04_10-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_21_q05_11-2",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_21_q06_11-2",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s23_qp_21_q06_11-3",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s23_qp_21_q06_10-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s23_qp_21_q07_11-3",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_21_q08_11-2",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_21_q08_10-1",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_21_q08_11-3",
    "paperCode": "9618_s23_qp_21",
    "session": "2023 June v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v1_9618_s23_qp_21/9618_s23_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v1_9618_s23_ms_21/9618_s23_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      9,
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_22_q01_11-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_22_q01_11-1",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_22_q02_9-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s23_qp_22_q02_11-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s23_qp_22_q02_11-1",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s23_qp_22_q03_10-4",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_22_q04_10-1",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_22_q05_11-3",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s23_qp_22_q05_11-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s23_qp_22_q05_11-1",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s23_qp_22_q06_11-3",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_22_q07_11-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s23_qp_22_q08_11-2",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_04.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s23_qp_22_q08_10-1",
    "paperCode": "9618_s23_qp_22",
    "session": "2023 June v2",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v2_9618_s23_qp_22/9618_s23_qp_22_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2-MS/2023_June_v2_9618_s23_ms_22/9618_s23_ms_22_question_08_Q8_part_04.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s23_qp_23_q01_9-2",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_23_q02_11-3",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_23_q03_10-4",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_23_q03_11-2",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_23_q04_10-1",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_23_q04_11-3",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_23_q05_11-2",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_05_Q5.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_23_q06_11-3",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_23_q07_11-3",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_23_q07_11-2",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_23_q08_11-2",
    "paperCode": "9618_s23_qp_23",
    "session": "2023 June v3",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2023_June_v3_9618_s23_qp_23/9618_s23_qp_23_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_June_v3_9618_s23_ms_23/9618_s23_ms_23_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w23_qp_21_q01_11-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_21_q01_11-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_21_q02_9-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_21_q02_11-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_21_q03_10-4",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_21_q03_11-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_21_q04_9-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_21_q04_10-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_21_q04_11-3",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_21_q05_11-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_21_q06_10-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q06_11-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q06_11-3",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q07_9-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 7,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q07_11-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q07_11-2",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_21_q08_10-1",
    "paperCode": "9618_w23_qp_21",
    "session": "2023 November v1",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2023_November_v1_9618_w23_qp_21/9618_w23_qp_21_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v1_9618_w23_ms_21/9618_w23_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w23_qp_22_q01_11-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_22_q01_11-1",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_22_q02_11-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_22_q02_9-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_22_q03_10-4",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_22_q04_11-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_22_q04_12-3",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 4,
    "topicId": "12",
    "subtopicId": "12.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_22_q05_11-3",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_22_q05_10-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_22_q06_10-3",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_22_q06_11-3",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_22_q07_11-3",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w23_qp_22_q08_11-2",
    "paperCode": "9618_w23_qp_22",
    "session": "2023 November v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2023_November_v2_9618_w23_qp_22/9618_w23_qp_22_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19,
      20
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2-MS/2023_November_v2_9618_w23_ms_22/9618_w23_ms_22_question_08_Q8_part_04.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_w23_qp_23_q01_11-1",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_23_q02_9-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_23_q02_10-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_23_q03_10-4",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_23_q03_11-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_23_q04_11-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_23_q04_11-3",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_23_q05_10-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_23_q05_11-3",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_23_q05_11-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_23_q06_11-3",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_23_q07_11-3",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_23_q07_10-1",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_23_q08_10-1",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19,
      20
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_23_q08_11-2",
    "paperCode": "9618_w23_qp_23",
    "session": "2023 November v3",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2023_November_v3_9618_w23_qp_23/9618_w23_qp_23_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19,
      20
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2023_November_v3_9618_w23_ms_23/9618_w23_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s24_qp_21_q01_11-1",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_21_q02_11-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_21_q02_11-1",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_21_q02_9-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_21_q03_10-1",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_21_q03_10-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_21_q03_10-4",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_21_q04_11-3",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_21_q04_10-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_21_q04_11-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_21_q05_11-3",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_21_q05_11-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_21_q06_11-3",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_21_q07_11-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s24_qp_21_q08_11-2",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_21_q08_11-3",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_21_q08_10-1",
    "paperCode": "9618_s24_qp_21",
    "session": "2024 June v1",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v1_9618_s24_qp_21/9618_s24_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v1_9618_s24_ms_21/9618_s24_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_22_q01_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_22_q01_11-1",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_22_q01_10-1",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_22_q02_9-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_22_q03_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s24_qp_22_q04_11-3",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_22_q04_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_22_q05_10-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_22_q05_9-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 5,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_22_q05_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_22_q06_10-1",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_22_q07_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s24_qp_22_q07_11-1",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s24_qp_22_q08_11-2",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_22_q08_11-3",
    "paperCode": "9618_s24_qp_22",
    "session": "2024 June v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v2_9618_s24_qp_22/9618_s24_qp_22_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2024_June_v2_9618_s24_ms_22/9618_s24_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_23_q01_9-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_23_q01_11-1",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_23_q02_9-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s24_qp_23_q02_11-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s24_qp_23_q03_10-1",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_23_q03_11-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_23_q04_11-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_23_q05_11-2",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_23_q05_11-3",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_23_q06_11-3",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s24_qp_23_q07_11-3",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s24_qp_23_q08_11-3",
    "paperCode": "9618_s24_qp_23",
    "session": "2024 June v3",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_June_v3_9618_s24_qp_23/9618_s24_qp_23_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_June_v3_9618_s24_ms_23/9618_s24_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_21_q01_9-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_21_q01_11-1",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_21_q01_10-1",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_21_q02_11-3",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_21_q03_9-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_21_q03_11-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_21_q03_11-1",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_21_q04_10-1",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_21_q04_11-3",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_21_q05_11-3",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_21_q05_11-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_21_q05_12-1",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_21_q06_11-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w24_qp_21_q06_11-3",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w24_qp_21_q07_11-3",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w24_qp_21_q08_11-2",
    "paperCode": "9618_w24_qp_21",
    "session": "2024 November v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_November_v1_9618_w24_qp_21/9618_w24_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v1_9618_w24_ms_21/9618_w24_ms_21_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_22_q01_11-2",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_22_q01_10-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_22_q01_11-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_22_q02_11-3",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_22_q02_10-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_22_q03_11-3",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w24_qp_22_q03_10-4",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w24_qp_22_q03_11-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w24_qp_22_q04_11-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w24_qp_22_q05_11-2",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_22_q05_11-3",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_22_q05_10-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_22_q06_10-2",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_22_q06_10-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_22_q06_11-3",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_22_q07_11-2",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_22_q07_11-3",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_22_q08_10-1",
    "paperCode": "9618_w24_qp_22",
    "session": "2024 November v2",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_November_v2_9618_w24_qp_22/9618_w24_qp_22_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v2_9618_w24_ms_22/9618_w24_ms_22_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w24_qp_23_q01_11-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_23_q02_9-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_23_q02_11-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_23_q03_10-1",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_23_q03_10-4",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_23_q03_9-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_23_q04_11-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9
    ]
  },
  {
    "id": "9618_w24_qp_23_q05_12-1",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_23_q05_11-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_23_q06_11-3",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_23_q07_11-2",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w24_qp_23_q08_10-1",
    "paperCode": "9618_w24_qp_23",
    "session": "2024 November v3",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2024_November_v3_9618_w24_qp_23/9618_w24_qp_23_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2024_November_v3_9618_w24_ms_23/9618_w24_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      13,
      14
    ]
  },
  {
    "id": "9618_s25_qp_21_q01_11-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_21_q02_10-1",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_21_q02_9-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_21_q02_11-1",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_21_q03_11-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_21_q03_11-1",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_21_q04_10-1",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_21_q04_9-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_21_q05_10-4",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_21_q06_11-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_21_q07_11-2",
    "paperCode": "9618_s25_qp_21",
    "session": "2025 June v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2025_June_v1_9618_s25_qp_21/9618_s25_qp_21_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_June_v1_9618_s25_ms_21/9618_s25_ms_21_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s25_qp_22_q01_12-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_22_q01_11-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_22_q01_11-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_22_q02_11-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_22_q02_11-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_22_q02_12-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_22_q03_9-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_22_q04_11-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_22_q04_9-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_22_q04_11-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_22_q05_11-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_05_Q5_part_03.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_s25_qp_22_q06_11-3",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_s25_qp_22_q06_10-1",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_s25_qp_22_q06_10-4",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_s25_qp_22_q07_11-2",
    "paperCode": "9618_s25_qp_22",
    "session": "2025 June v2",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2025_June_v2_9618_s25_qp_22/9618_s25_qp_22_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2-MS/2025_June_v2_9618_s25_ms_22/9618_s25_ms_22_question_07_Q7_part_05.png"
    ],
    "markSchemeSourcePages": [
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "id": "9618_s25_qp_23_q01_11-1",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_23_q02_10-4",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s25_qp_23_q03_11-3",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_23_q04_11-2",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s25_qp_23_q04_9-2",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 4,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s25_qp_23_q05_10-1",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_23_q05_11-3",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_23_q06_10-1",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s25_qp_23_q06_11-3",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s25_qp_23_q07_11-2",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_s25_qp_23_q07_10-1",
    "paperCode": "9618_s25_qp_23",
    "session": "2025 June v3",
    "questionNumber": 7,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P2/2025_June_v3_9618_s25_qp_23/9618_s25_qp_23_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_June_v3_9618_s25_ms_23/9618_s25_ms_23_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_w25_qp_21_q01_11-1",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_21_q01_10-1",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_21_q01_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_21_q02_9-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w25_qp_21_q02_10-1",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w25_qp_21_q03_10-1",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_21_q03_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_21_q04_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      10,
      11,
      12
    ]
  },
  {
    "id": "9618_w25_qp_21_q05_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_21_q06_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_06_Q6_part_03.png"
    ],
    "markSchemeSourcePages": [
      12,
      13,
      14
    ]
  },
  {
    "id": "9618_w25_qp_21_q07_11-3",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      15,
      16
    ]
  },
  {
    "id": "9618_w25_qp_21_q08_11-2",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19
    ]
  },
  {
    "id": "9618_w25_qp_21_q08_10-1",
    "paperCode": "9618_w25_qp_21",
    "session": "2025 November v1",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v1_9618_w25_qp_21/9618_w25_qp_21_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v1_9618_w25_ms_21/9618_w25_ms_21_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      17,
      18,
      19
    ]
  },
  {
    "id": "9618_w25_qp_22_q01_11-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_22_q02_9-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_22_q02_10-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_22_q02_10-1",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_22_q03_11-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w25_qp_22_q03_10-1",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w25_qp_22_q04_11-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_22_q05_11-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 5,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_22_q05_12-1",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 5,
    "topicId": "12",
    "subtopicId": "12.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_22_q06_10-1",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_22_q06_11-3",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_22_q07_12-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 7,
    "topicId": "12",
    "subtopicId": "12.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_22_q08_10-1",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w25_qp_22_q08_11-2",
    "paperCode": "9618_w25_qp_22",
    "session": "2025 November v2",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_04.png",
      "/topical/comsci-cie/P2/2025_November_v2_9618_w25_qp_22/9618_w25_qp_22_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17,
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v2_9618_w25_ms_22/9618_w25_ms_22_question_08_Q8_part_03.png"
    ],
    "markSchemeSourcePages": [
      13,
      14,
      15
    ]
  },
  {
    "id": "9618_w25_qp_23_q01_11-3",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_23_q01_11-1",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "11",
    "subtopicId": "11.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_23_q02_9-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "9",
    "subtopicId": "9.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_23_q02_11-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_23_q03_10-4",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.4",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_23_q03_11-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_23_q03_10-1",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_23_q04_11-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w25_qp_23_q04_11-3",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 4,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w25_qp_23_q04_10-1",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 4,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_04_Q4_part_03.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10
    ]
  },
  {
    "id": "9618_w25_qp_23_q05_10-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 5,
    "topicId": "10",
    "subtopicId": "10.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_23_q06_11-3",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 6,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_06_Q6_part_03.png"
    ],
    "markSchemeSourcePages": [
      11,
      12,
      13
    ]
  },
  {
    "id": "9618_w25_qp_23_q07_11-3",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 7,
    "topicId": "11",
    "subtopicId": "11.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_w25_qp_23_q08_10-1",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 8,
    "topicId": "10",
    "subtopicId": "10.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      16,
      17
    ]
  },
  {
    "id": "9618_w25_qp_23_q08_11-2",
    "paperCode": "9618_w25_qp_23",
    "session": "2025 November v3",
    "questionNumber": 8,
    "topicId": "11",
    "subtopicId": "11.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P2/2025_November_v3_9618_w25_qp_23/9618_w25_qp_23_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P2-MS/2025_November_v3_9618_w25_ms_23/9618_w25_ms_23_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      16,
      17
    ]
  }
];
