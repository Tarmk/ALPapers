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

export const COMSCI_P1_TOPICS: TopicalTopic[] = [
  {
    "id": "1",
    "title": "Information Representation",
    "subtopics": [
      {
        "id": "1.1",
        "title": "Data Representation"
      },
      {
        "id": "1.2",
        "title": "Multimedia"
      },
      {
        "id": "1.3",
        "title": "Compression"
      }
    ]
  },
  {
    "id": "2",
    "title": "Communication",
    "subtopics": [
      {
        "id": "2.1",
        "title": "Networks including the internet"
      }
    ]
  },
  {
    "id": "3",
    "title": "Hardware",
    "subtopics": [
      {
        "id": "3.1",
        "title": "Computers and their components"
      },
      {
        "id": "3.2",
        "title": "Logic Gates and Logic Circuits"
      }
    ]
  },
  {
    "id": "4",
    "title": "Processor Fundamentals",
    "subtopics": [
      {
        "id": "4.1",
        "title": "Central Processing Unit (CPU) Architecture"
      },
      {
        "id": "4.2",
        "title": "Assembly Language"
      },
      {
        "id": "4.3",
        "title": "Bit manipulation"
      }
    ]
  },
  {
    "id": "5",
    "title": "System Software",
    "subtopics": [
      {
        "id": "5.1",
        "title": "Operating Systems"
      },
      {
        "id": "5.2",
        "title": "Language Translators"
      }
    ]
  },
  {
    "id": "6",
    "title": "Security, privacy and data integrity",
    "subtopics": [
      {
        "id": "6.1",
        "title": "Data Security"
      },
      {
        "id": "6.2",
        "title": "Data Integrity"
      }
    ]
  },
  {
    "id": "7",
    "title": "Ethics and Ownership",
    "subtopics": [
      {
        "id": "7.1",
        "title": "Ethics and Ownership"
      }
    ]
  },
  {
    "id": "8",
    "title": "Databases",
    "subtopics": [
      {
        "id": "8.1",
        "title": "Database Concepts"
      },
      {
        "id": "8.2",
        "title": "Database Management Systems (DBMS)"
      },
      {
        "id": "8.3",
        "title": "Data Definition Language (DDL) and Data Manipulation Language (DML)"
      }
    ]
  },
  {
    "id": "18",
    "title": "Artificial Intelligence (legacy Paper 1 questions)",
    "subtopics": [
      {
        "id": "18.1",
        "title": "Artificial Intelligence"
      }
    ]
  }
];

export const COMSCI_P1_QUESTIONS: TopicalQuestion[] = [
  {
    "id": "9618_s21_qp_11_q01_1-3",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_11_q01_1-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_11_q01_1-2",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_11_q02_5-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_02_Q2.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_11_q03_4-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s21_qp_11_q03_4-2",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s21_qp_11_q04_2-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s21_qp_11_q05_3-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_05_Q5.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_11_q06_6-2",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 6,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_06_Q6.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_11_q07_8-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 7,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_11_q08_7-1",
    "paperCode": "9618_s21_qp_11",
    "session": "2021 June v1",
    "questionNumber": 8,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v1_9618_s21_qp_11/9618_s21_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v1_9618_s21_ms_11/9618_s21_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s21_qp_12_q01_8-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s21_qp_12_q02_7-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_12_q03_3-2",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s21_qp_12_q04_4-2",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s21_qp_12_q05_2-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_12_q06_1-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s21_qp_12_q07_5-2",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 7,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_12_q08_6-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_12_q08_7-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_12_q08_2-1",
    "paperCode": "9618_s21_qp_12",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v2_9618_s21_qp_12/9618_s21_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v2_9618_s21_ms_12/9618_s21_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s21_qp_13_q01_1-3",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_13_q01_1-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_13_q01_1-2",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_01_Q1_part_03.png"
    ],
    "sourcePages": [
      2,
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s21_qp_13_q02_5-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_13_q03_4-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s21_qp_13_q03_4-2",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_04.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_03_Q3_part_05.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s21_qp_13_q04_2-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s21_qp_13_q05_3-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_13_q06_6-2",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 6,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_13_q07_8-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 7,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_13_q08_7-1",
    "paperCode": "9618_s21_qp_13",
    "session": "2021 June v3",
    "questionNumber": 8,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_June_v3_9618_s21_qp_13/9618_s21_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_June_v3_9618_s21_ms_13/9618_s21_ms_13_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w21_qp_11_q01_1-1",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_11_q02_6-2",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w21_qp_11_q02_6-1",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w21_qp_11_q03_3-2",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_11_q04_5-2",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_11_q05_8-1",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_11_q06_4-2",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_11_q06_4-1",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_11_q07_1-3",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_11_q08_2-1",
    "paperCode": "9618_w21_qp_11",
    "session": "2021 November v1",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v1_9618_w21_qp_11/9618_w21_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v1_9618_w21_ms_11/9618_w21_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w21_qp_12_q01_6-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 1,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_12_q02_3-2",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w21_qp_12_q03_2-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w21_qp_12_q04_4-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w21_qp_12_q05_1-2",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 5,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_12_q05_1-3",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 5,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w21_qp_12_q06_8-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 6,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_12_q07_4-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_12_q08_4-2",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      13,
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w21_qp_12_q08_4-1",
    "paperCode": "9618_w21_qp_12",
    "session": "2021 November v2",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P1/2021_November_v2_9618_w21_qp_12/9618_w21_qp_12_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      13,
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v2_9618_w21_ms_12/9618_w21_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w21_qp_13_q01_1-1",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_13_q02_6-2",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 2,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w21_qp_13_q02_6-1",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 2,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w21_qp_13_q03_3-2",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_13_q04_5-2",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w21_qp_13_q05_8-1",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_13_q06_4-2",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_13_q06_4-1",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_13_q07_1-3",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_13_q08_2-1",
    "paperCode": "9618_w21_qp_13",
    "session": "2021 November v3",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2021_November_v3_9618_w21_qp_13/9618_w21_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2021_November_v3_9618_w21_ms_13/9618_w21_ms_13_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_11_q01_1-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_11_q02_3-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s22_qp_11_q03_6-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_11_q04_8-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s22_qp_11_q05_5-2",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 5,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_11_q05_3-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_11_q06_4-1",
    "paperCode": "9618_s22_qp_11",
    "session": "2022 June v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P1/2022_June_v1_9618_s22_qp_11/9618_s22_qp_11_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v1_9618_s22_ms_11/9618_s22_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s22_qp_12_q01_1-2",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_12_q02_3-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_12_q03_4-2",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_12_q03_4-3",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_12_q03_1-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_12_q04_6-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 4,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_12_q04_2-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_12_q05_8-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s22_qp_12_q06_5-2",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 6,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_12_q07_3-2",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s22_qp_12_q08_18-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 8,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s22_qp_12_q09_2-1",
    "paperCode": "9618_s22_qp_12",
    "session": "2022 June v2",
    "questionNumber": 9,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v2_9618_s22_qp_12/9618_s22_qp_12_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v2_9618_s22_ms_12/9618_s22_ms_12_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_13_q01_1-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s22_qp_13_q02_4-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s22_qp_13_q03_4-2",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_13_q03_4-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_13_q04_5-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_04_Q4.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s22_qp_13_q05_6-2",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 5,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_13_q06_8-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 6,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s22_qp_13_q07_3-2",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_13_q08_7-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 8,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s22_qp_13_q08_2-1",
    "paperCode": "9618_s22_qp_13",
    "session": "2022 June v3",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_June_v3_9618_s22_qp_13/9618_s22_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_June_v3_9618_s22_ms_13/9618_s22_ms_13_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_11_q01_1-2",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_11_q01_1-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_11_q02_6-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_11_q03_3-2",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w22_qp_11_q04_8-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_04_Q4_part_03.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_11_q05_4-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_11_q06_4-2",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_04.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_05.png",
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_06_Q6_part_06.png"
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
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_11_q07_5-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 7,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_07_Q7.png"
    ],
    "sourcePages": [
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_11_q08_2-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_11_q09_3-1",
    "paperCode": "9618_w22_qp_11",
    "session": "2022 November v1",
    "questionNumber": 9,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v1_9618_w22_qp_11/9618_w22_qp_11_question_09_Q9.png"
    ],
    "sourcePages": [
      19
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v1_9618_w22_ms_11/9618_w22_ms_11_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w22_qp_12_q01_5-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_12_q01_5-2",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_12_q02_1-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w22_qp_12_q03_3-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_12_q04_6-2",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 4,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_12_q05_8-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_12_q06_1-2",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_12_q07_4-2",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_12_q07_4-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_04.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_12_q08_1-3",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 8,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_12_q08_1-2",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 8,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w22_qp_12_q09_7-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 9,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_09_Q9.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_12_q10_2-1",
    "paperCode": "9618_w22_qp_12",
    "session": "2022 November v2",
    "questionNumber": 10,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v2_9618_w22_qp_12/9618_w22_qp_12_question_10_Q10.png"
    ],
    "sourcePages": [
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v2_9618_w22_ms_12/9618_w22_ms_12_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_13_q01_1-2",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_13_q02_8-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w22_qp_13_q03_5-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_13_q04_4-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w22_qp_13_q05_3-2",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_13_q06_4-2",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_06_Q6_part_03.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w22_qp_13_q07_2-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 7,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_13_q08_3-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w22_qp_13_q09_1-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 9,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_09_Q9.png"
    ],
    "sourcePages": [
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_13_q10_7-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 10,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_10_Q10.png"
    ],
    "sourcePages": [
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_13_q10_3-1",
    "paperCode": "9618_w22_qp_13",
    "session": "2022 November v3",
    "questionNumber": 10,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2022_November_v3_9618_w22_qp_13/9618_w22_qp_13_question_10_Q10.png"
    ],
    "sourcePages": [
      18
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2022_November_v3_9618_w22_ms_13/9618_w22_ms_13_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s23_qp_11_q01_1-2",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_11_q02_8-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_02_Q2_part_03.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s23_qp_11_q03_5-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s23_qp_11_q03_1-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s23_qp_11_q04_3-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_11_q04_2-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_11_q05_3-2",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_05_Q5.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_11_q06_7-1",
    "paperCode": "9618_s23_qp_11",
    "session": "2023 June v1",
    "questionNumber": 6,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v1_9618_s23_qp_11/9618_s23_qp_11_question_06_Q6.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v1_9618_s23_ms_11/9618_s23_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s23_qp_12_q01_2-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_12_q02_8-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s23_qp_12_q03_4-2",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_03_Q3.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_12_q04_1-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 4,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_12_q05_4-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_12_q05_5-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_12_q05_3-1",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_12_q06_3-2",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_12_q07_5-2",
    "paperCode": "9618_s23_qp_12",
    "session": "2023 June v2",
    "questionNumber": 7,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v2_9618_s23_qp_12/9618_s23_qp_12_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v2_9618_s23_ms_12/9618_s23_ms_12_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s23_qp_13_q01_3-2",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_13_q02_2-1",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s23_qp_13_q03_1-2",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_13_q04_8-1",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_13_q05_5-2",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 5,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s23_qp_13_q06_2-1",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 6,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s23_qp_13_q06_6-1",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 6,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s23_qp_13_q07_4-1",
    "paperCode": "9618_s23_qp_13",
    "session": "2023 June v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2023_June_v3_9618_s23_qp_13/9618_s23_qp_13_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_June_v3_9618_s23_ms_13/9618_s23_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_11_q01_1-2",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_01_Q1.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_11_q02_2-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w23_qp_11_q03_8-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w23_qp_11_q04_3-2",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_04_Q4.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w23_qp_11_q05_4-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_11_q06_5-2",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 6,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_11_q07_3-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_11_q08_4-2",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w23_qp_11_q09_7-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 9,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_09_Q9.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w23_qp_11_q09_3-1",
    "paperCode": "9618_w23_qp_11",
    "session": "2023 November v1",
    "questionNumber": 9,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v1_9618_w23_qp_11/9618_w23_qp_11_question_09_Q9.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v1_9618_w23_ms_11/9618_w23_ms_11_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w23_qp_12_q01_3-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_12_q02_8-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w23_qp_12_q03_1-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w23_qp_12_q04_3-2",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_12_q05_6-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 5,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w23_qp_12_q06_1-2",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w23_qp_12_q07_2-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 7,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_07_Q7_part_03.png"
    ],
    "markSchemeSourcePages": [
      7,
      8,
      9
    ]
  },
  {
    "id": "9618_w23_qp_12_q08_5-1",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 8,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w23_qp_12_q09_4-2",
    "paperCode": "9618_w23_qp_12",
    "session": "2023 November v2",
    "questionNumber": 9,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v2_9618_w23_qp_12/9618_w23_qp_12_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v2_9618_w23_ms_12/9618_w23_ms_12_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_13_q01_1-2",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_13_q02_1-2",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_13_q03_8-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w23_qp_13_q03_6-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w23_qp_13_q04_3-2",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_13_q05_5-2",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_13_q05_3-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_13_q06_3-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w23_qp_13_q06_7-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 6,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w23_qp_13_q07_3-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w23_qp_13_q08_6-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 8,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w23_qp_13_q09_4-1",
    "paperCode": "9618_w23_qp_13",
    "session": "2023 November v3",
    "questionNumber": 9,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_09_Q9_part_02.png",
      "/topical/comsci-cie/P1/2023_November_v3_9618_w23_qp_13/9618_w23_qp_13_question_09_Q9_part_03.png"
    ],
    "sourcePages": [
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1-MS/2023_November_v3_9618_w23_ms_13/9618_w23_ms_13_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_s24_qp_11_q01_3-2",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_11_q02_3-1",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s24_qp_11_q03_5-2",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_11_q04_4-2",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_04_Q4_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_11_q05_6-1",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 5,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_11_q05_6-2",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 5,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_11_q06_8-1",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 6,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_11_q07_1-1",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_07_Q7.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_11_q08_2-1",
    "paperCode": "9618_s24_qp_11",
    "session": "2024 June v1",
    "questionNumber": 8,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v1_9618_s24_qp_11/9618_s24_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v1_9618_s24_ms_11/9618_s24_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_12_q01_3-2",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_12_q02_3-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s24_qp_12_q02_1-2",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s24_qp_12_q03_6-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_12_q03_2-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_12_q04_8-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_12_q05_4-2",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      10,
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_12_q06_5-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 6,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_06_Q6.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_12_q07_1-1",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s24_qp_12_q08_5-2",
    "paperCode": "9618_s24_qp_12",
    "session": "2024 June v2",
    "questionNumber": 8,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v2_9618_s24_qp_12/9618_s24_qp_12_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v2_9618_s24_ms_12/9618_s24_ms_12_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s24_qp_13_q01_1-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_13_q02_1-3",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s24_qp_13_q03_4-2",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_13_q03_4-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_03.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_13_q04_8-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s24_qp_13_q05_2-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s24_qp_13_q06_3-2",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_06_Q6.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_13_q07_3-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      13,
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s24_qp_13_q07_4-1",
    "paperCode": "9618_s24_qp_13",
    "session": "2024 June v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_03.png",
      "/topical/comsci-cie/P1/2024_June_v3_9618_s24_qp_13/9618_s24_qp_13_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      13,
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_June_v3_9618_s24_ms_13/9618_s24_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w24_qp_11_q01_1-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_11_q02_8-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w24_qp_11_q03_4-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_11_q03_3-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_11_q04_5-2",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_11_q04_1-3",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_11_q04_5-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_11_q05_6-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_11_q05_3-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_11_q06_18-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 6,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_06_Q6.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_11_q07_4-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_07_Q7.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_11_q08_4-1",
    "paperCode": "9618_w24_qp_11",
    "session": "2024 November v1",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v1_9618_w24_qp_11/9618_w24_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v1_9618_w24_ms_11/9618_w24_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_12_q01_3-2",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_12_q02_3-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w24_qp_12_q03_4-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w24_qp_12_q04_3-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_12_q05_3-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_05_Q5.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w24_qp_12_q05_7-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_05_Q5.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w24_qp_12_q06_8-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 6,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w24_qp_12_q07_1-2",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_12_q08_4-2",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_12_q09_7-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 9,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_09_Q9.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_12_q09_3-1",
    "paperCode": "9618_w24_qp_12",
    "session": "2024 November v2",
    "questionNumber": 9,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v2_9618_w24_qp_12/9618_w24_qp_12_question_09_Q9.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v2_9618_w24_ms_12/9618_w24_ms_12_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_13_q01_3-2",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_13_q02_3-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_13_q03_4-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_13_q03_3-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_13_q04_8-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_04_Q4_part_02.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_04_Q4_part_03.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      5,
      6,
      7,
      8
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w24_qp_13_q05_4-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_13_q05_3-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_13_q05_7-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_05_Q5.png"
    ],
    "sourcePages": [
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w24_qp_13_q06_1-3",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w24_qp_13_q06_1-2",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w24_qp_13_q07_4-2",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w24_qp_13_q07_4-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w24_qp_13_q08_1-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 8,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_13_q08_4-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w24_qp_13_q09_2-1",
    "paperCode": "9618_w24_qp_13",
    "session": "2024 November v3",
    "questionNumber": 9,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1/2024_November_v3_9618_w24_qp_13/9618_w24_qp_13_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1-MS/2024_November_v3_9618_w24_ms_13/9618_w24_ms_13_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_11_q01_4-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_11_q01_3-2",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_11_q02_1-3",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_11_q02_2-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_11_q03_1-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s25_qp_11_q04_4-2",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_11_q04_3-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_11_q04_5-2",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_11_q05_8-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_11_q06_3-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_11_q06_4-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_11_q07_4-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s25_qp_11_q07_2-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 7,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_s25_qp_11_q08_4-1",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_s25_qp_11_q08_4-2",
    "paperCode": "9618_s25_qp_11",
    "session": "2025 June v1",
    "questionNumber": 8,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_03.png",
      "/topical/comsci-cie/P1/2025_June_v1_9618_s25_qp_11/9618_s25_qp_11_question_08_Q8_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v1_9618_s25_ms_11/9618_s25_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_s25_qp_12_q01_4-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_12_q02_1-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_12_q03_3-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s25_qp_12_q03_4-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_s25_qp_12_q04_4-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_12_q05_8-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_12_q05_4-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_05_Q5_part_03.png"
    ],
    "sourcePages": [
      8,
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_12_q06_2-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 6,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_12_q07_4-2",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_s25_qp_12_q07_4-1",
    "paperCode": "9618_s25_qp_12",
    "session": "2025 June v2",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v2_9618_s25_qp_12/9618_s25_qp_12_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v2_9618_s25_ms_12/9618_s25_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_s25_qp_13_q01_1-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_13_q02_4-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_13_q03_5-2",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_13_q04_4-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_13_q04_3-2",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_13_q05_4-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_03.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_13_q05_4-2",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_03.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_13_q06_8-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 6,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_06_Q6_part_02.png",
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      14,
      15,
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_13_q07_4-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_07_Q7.png"
    ],
    "sourcePages": [
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_s25_qp_13_q07_7-1",
    "paperCode": "9618_s25_qp_13",
    "session": "2025 June v3",
    "questionNumber": 7,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_June_v3_9618_s25_qp_13/9618_s25_qp_13_question_07_Q7.png"
    ],
    "sourcePages": [
      17
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_June_v3_9618_s25_ms_13/9618_s25_ms_13_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_11_q01_1-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_11_q01_4-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_11_q02_8-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w25_qp_11_q02_4-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_02_Q2_part_03.png"
    ],
    "sourcePages": [
      4,
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_w25_qp_11_q03_3-2",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_11_q03_4-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_03_Q3.png"
    ],
    "sourcePages": [
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_11_q04_4-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_11_q04_4-2",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_11_q05_5-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 5,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_05_Q5.png"
    ],
    "sourcePages": [
      10
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_11_q06_4-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_11_q07_2-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 7,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w25_qp_11_q08_6-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 8,
    "topicId": "6",
    "subtopicId": "6.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_08_Q8.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      13
    ]
  },
  {
    "id": "9618_w25_qp_11_q09_3-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 9,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_09_Q9.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_09_Q9.png"
    ],
    "markSchemeSourcePages": [
      14
    ]
  },
  {
    "id": "9618_w25_qp_11_q10_7-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 10,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_10_Q10.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      15
    ]
  },
  {
    "id": "9618_w25_qp_11_q10_3-1",
    "paperCode": "9618_w25_qp_11",
    "session": "2025 November v1",
    "questionNumber": 10,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v1_9618_w25_qp_11/9618_w25_qp_11_question_10_Q10.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v1_9618_w25_ms_11/9618_w25_ms_11_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      15
    ]
  },
  {
    "id": "9618_w25_qp_12_q01_6-2",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_12_q02_4-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w25_qp_12_q02_7-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w25_qp_12_q03_4-2",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_12_q03_4-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_03_Q3_part_03.png"
    ],
    "sourcePages": [
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_12_q04_8-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 4,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_12_q05_2-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_w25_qp_12_q06_1-3",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_12_q06_1-2",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_12_q06_4-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_12_q07_1-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_07_Q7.png"
    ],
    "sourcePages": [
      12
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_12_q08_3-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_08_Q8.png"
    ],
    "sourcePages": [
      13
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_12_q09_3-2",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 9,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_09_Q9.png"
    ],
    "sourcePages": [
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_09_Q9_part_02.png"
    ],
    "markSchemeSourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w25_qp_12_q10_5-2",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 10,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_10_Q10.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_12_q10_3-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 10,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_10_Q10.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_10_Q10.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_12_q11_7-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 11,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_11_Q11.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_11_Q11.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_12_q11_3-1",
    "paperCode": "9618_w25_qp_12",
    "session": "2025 November v2",
    "questionNumber": 11,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v2_9618_w25_qp_12/9618_w25_qp_12_question_11_Q11.png"
    ],
    "sourcePages": [
      16
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v2_9618_w25_ms_12/9618_w25_ms_12_question_11_Q11.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_13_q01_1-2",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "1",
    "subtopicId": "1.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_13_q02_1-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_13_q02_4-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_13_q03_3-2",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_13_q04_2-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_13_q05_8-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 5,
    "topicId": "8",
    "subtopicId": "8.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_03.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_13_q05_4-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_03.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w25_qp_13_q06_4-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_13_q07_4-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 7,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w25_qp_13_q07_6-2",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 7,
    "topicId": "6",
    "subtopicId": "6.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w25_qp_13_q07_3-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_02.png",
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      12,
      13,
      14
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w25_qp_13_q08_5-2",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 8,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_13_q08_7-1",
    "paperCode": "9618_w25_qp_13",
    "session": "2025 November v3",
    "questionNumber": 8,
    "topicId": "7",
    "subtopicId": "7.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Whole question"
    ],
    "images": [
      "/topical/comsci-cie/P1/2025_November_v3_9618_w25_qp_13/9618_w25_qp_13_question_08_Q8.png"
    ],
    "sourcePages": [
      15
    ],
    "markSchemeImages": [
      "/topical/comsci-cie/P1-MS/2025_November_v3_9618_w25_ms_13/9618_w25_ms_13_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  }
];
