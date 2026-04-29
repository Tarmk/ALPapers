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

export const COMSCI_P3_TOPICS: TopicalTopic[] = [
  {
    "id": "13",
    "title": "Data Representation",
    "subtopics": [
      {
        "id": "13.1",
        "title": "User-Defined Data Types"
      },
      {
        "id": "13.2",
        "title": "File Organisation And Access"
      },
      {
        "id": "13.3",
        "title": "Floating-Point Numbers, Representation And Manipulation"
      }
    ]
  },
  {
    "id": "14",
    "title": "Communication And Internet Technologies",
    "subtopics": [
      {
        "id": "14.1",
        "title": "Protocols"
      },
      {
        "id": "14.2",
        "title": "Circuit Switching, Packet Switching"
      }
    ]
  },
  {
    "id": "15",
    "title": "Hardware And Virtual Machines",
    "subtopics": [
      {
        "id": "15.1",
        "title": "Processors, Parallel Processing And Virtual Machines"
      },
      {
        "id": "15.2",
        "title": "Boolean Algebra And Logic Circuits"
      }
    ]
  },
  {
    "id": "16",
    "title": "System Software",
    "subtopics": [
      {
        "id": "16.1",
        "title": "Purposes of an Operating System (OS)"
      },
      {
        "id": "16.2",
        "title": "Translation Software"
      }
    ]
  },
  {
    "id": "17",
    "title": "Security",
    "subtopics": [
      {
        "id": "17.1",
        "title": "Encryption, Encryption Protocols And Digital Certificates"
      }
    ]
  },
  {
    "id": "18",
    "title": "Artificial Intelligence (AI)",
    "subtopics": [
      {
        "id": "18.1",
        "title": "Artificial Intelligence"
      }
    ]
  },
  {
    "id": "19",
    "title": "Computational Thinking And Problem-Solving",
    "subtopics": [
      {
        "id": "19.1",
        "title": "Algorithms"
      },
      {
        "id": "19.2",
        "title": "Recursion"
      }
    ]
  },
  {
    "id": "20",
    "title": "Further Programming",
    "subtopics": [
      {
        "id": "20.1",
        "title": "Programming Paradigms"
      },
      {
        "id": "20.2",
        "title": "File Processing And Exception Handling"
      }
    ]
  }
];

export const COMSCI_P3_QUESTIONS: TopicalQuestion[] = [
  {
    "id": "9618_s21_qp_31_q02",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_31_q09",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_s21_qp_32_q02",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_32_q09",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_s21_qp_33_q02",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_33_q09",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_w21_qp_31_q02",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 2,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_31_q03",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_31_q10",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.2",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ]
  },
  {
    "id": "9618_w21_qp_32_q02",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 2,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_32_q03",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w21_qp_32_q10",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.2",
    "topicFocus": "Parts (d)",
    "topicParts": [
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ]
  },
  {
    "id": "9618_s22_qp_31_q01",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s22_qp_31_q02",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 2,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_31_q07",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 7,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s22_qp_32_q01",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Parts (b), (b)(i), (c)",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s22_qp_32_q02",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 2,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_33_q01",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(b)(i)",
      "(b)(ii)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s22_qp_33_q02",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 2,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_02_Q2_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_33_q07",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 7,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w22_qp_31_q03",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(d)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w22_qp_31_q11",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 11,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_11_Q11.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_31_q12",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_12_Q12.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_w22_qp_32_q04",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w22_qp_32_q10",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 10,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w22_qp_32_q11",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w22_qp_33_q03",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(d)",
      "(d)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w22_qp_33_q11",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 11,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_11_Q11.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_33_q12",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_12_Q12.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_s23_qp_31_q04",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_31_q11",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_32_q04",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 4,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_32_q06",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 6,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s23_qp_32_q11",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ]
  },
  {
    "id": "9618_s23_qp_33_q04",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_33_q11",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_31_q03",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_31_q08",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 8,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_31_q10",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w23_qp_32_q02",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_32_q09",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 9,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(ii)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w23_qp_32_q12",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 12,
    "topicId": "20",
    "subtopicId": "20.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_12_Q12_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_12_Q12_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w23_qp_33_q03",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_33_q08",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 8,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_33_q10",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s24_qp_31_q03",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_s24_qp_32_q03",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_33_q03",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "9618_w24_qp_31_q06",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 6,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_06_Q6.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_31_q09",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_31_q11",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_32_q03",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_32_q10",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 10,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_10_Q10.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_w24_qp_32_q11",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_w24_qp_33_q06",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 6,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_06_Q6.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_33_q09",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w24_qp_33_q11",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_s25_qp_31_q01",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s25_qp_31_q04",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 4,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "9618_s25_qp_31_q11",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 11,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_s25_qp_31_q12",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 12,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_12_Q12.png"
    ],
    "sourcePages": [
      13
    ]
  },
  {
    "id": "9618_s25_qp_32_q01",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Parts (b)",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s25_qp_32_q11",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_32_q12",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 12,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_12_Q12_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_12_Q12_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_s25_qp_32_q13",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 13,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_13_Q13.png"
    ],
    "sourcePages": [
      13
    ]
  },
  {
    "id": "9618_s25_qp_33_q01",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s25_qp_33_q05",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 5,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_33_q11",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 11,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_11_Q11.png"
    ],
    "sourcePages": [
      13
    ]
  },
  {
    "id": "9618_w25_qp_31_q01",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(b)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w25_qp_31_q09",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 9,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "9618_w25_qp_32_q01",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(b)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w25_qp_32_q12",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_12_Q12.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_33_q01",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w25_qp_33_q10",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_10_Q10.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_31_q05",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 5,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w21_qp_32_q05",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 5,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_31_q03",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_31_q10",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 10,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_10_Q10.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_s23_qp_32_q02",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_33_q03",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s23_qp_33_q10",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 10,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_10_Q10.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w23_qp_31_q04",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_32_q03",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 3,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_32_q10",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 10,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_33_q04",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_31_q04",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_31_q10",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s24_qp_32_q02",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_32_q07",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 7,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s24_qp_32_q10",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 10,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s24_qp_33_q04",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s24_qp_33_q10",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 10,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_31_q05",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 5,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_31_q10",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 10,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_32_q02",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w24_qp_33_q05",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 5,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_33_q10",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 10,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s25_qp_32_q10",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 10,
    "topicId": "13",
    "subtopicId": "13.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_31_q10",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 10,
    "topicId": "20",
    "subtopicId": "20.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_10_Q10.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w25_qp_32_q10",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 10,
    "topicId": "20",
    "subtopicId": "20.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_31_q01",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s21_qp_32_q01",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s21_qp_33_q01",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(d)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_w21_qp_31_q01",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w21_qp_32_q01",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w22_qp_31_q01",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_w22_qp_32_q01",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w22_qp_33_q01",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(c)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s23_qp_31_q01",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_s23_qp_32_q01",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s23_qp_33_q01",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_01_Q1_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "9618_w23_qp_31_q01",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w23_qp_32_q01",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w23_qp_33_q01",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s24_qp_31_q01",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s24_qp_32_q01",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s24_qp_33_q01",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w24_qp_31_q01",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w24_qp_32_q04",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 4,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_33_q01",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 1,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_s25_qp_31_q02",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s25_qp_32_q02",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s25_qp_33_q02",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w25_qp_31_q02",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w25_qp_32_q02",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w25_qp_33_q02",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 2,
    "topicId": "13",
    "subtopicId": "13.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s21_qp_31_q04",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s21_qp_32_q04",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s21_qp_33_q04",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w21_qp_31_q04",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w21_qp_32_q04",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s22_qp_32_q03",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_32_q04",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_04_Q4_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_31_q02",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_32_q03",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_33_q02",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_31_q02",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_32_q04",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_33_q02",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_31_q02",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s24_qp_33_q02",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 2,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_31_q04",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w24_qp_32_q05",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 5,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_33_q04",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_31_q03",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_32_q03",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s25_qp_33_q04",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_32_q03",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_33_q04",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_s21_qp_31_q06",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 6,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_06_Q6.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_32_q06",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 6,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s21_qp_33_q06",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 6,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_06_Q6.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_31_q06",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 6,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_06_Q6.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w21_qp_32_q06",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 6,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_31_q03",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s22_qp_33_q03",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_31_q05",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 5,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s23_qp_32_q03",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 3,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_s23_qp_32_q07",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 7,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_33_q05",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 5,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_31_q03",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_32_q01",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 1,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "9618_w24_qp_33_q03",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s25_qp_32_q04",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_31_q03",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_32_q04",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 4,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_33_q03",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 3,
    "topicId": "14",
    "subtopicId": "14.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s21_qp_31_q05",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 5,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_31_q08",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 8,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s21_qp_32_q05",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 5,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_32_q08",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 8,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s21_qp_33_q05",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 5,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s21_qp_33_q08",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 8,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s22_qp_31_q04",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 4,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_31_q06",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_31_q08",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_s22_qp_32_q08",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 8,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s22_qp_33_q04",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 4,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s22_qp_33_q06",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_33_q08",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)(i)",
      "(a)(ii)",
      "(b)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_w22_qp_31_q10",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 10,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w22_qp_32_q05",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 5,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_33_q10",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 10,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_10_Q10.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s23_qp_31_q08",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s23_qp_32_q08",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s23_qp_33_q08",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_31_q11",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 11,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_w23_qp_32_q08",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 8,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_33_q11",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 11,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "9618_s24_qp_31_q08",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 8,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s24_qp_31_q11",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 11,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_11_Q11.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_s24_qp_32_q08",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 8,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_32_q09",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 9,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_s24_qp_33_q08",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 8,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_08_Q8_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s24_qp_33_q11",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 11,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_11_Q11.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_w24_qp_31_q02",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 2,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w24_qp_32_q08",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_33_q02",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 2,
    "topicId": "15",
    "subtopicId": "15.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w25_qp_33_q08",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 8,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s21_qp_31_q07",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_32_q07",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s21_qp_33_q07",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w21_qp_31_q07",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w21_qp_32_q07",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)",
      "(b)(iv)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_32_q06",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w22_qp_31_q07",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w22_qp_32_q08",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 8,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w22_qp_33_q07",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s23_qp_31_q06",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 6,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_31_q07",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_32_q09",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 9,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)",
      "(e)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_s23_qp_33_q06",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 6,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_33_q07",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w23_qp_31_q06",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w23_qp_32_q06",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 6,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_32_q07",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w23_qp_33_q06",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s24_qp_31_q06",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s24_qp_32_q06",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "9618_s24_qp_33_q06",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)(i)",
      "(c)(ii)",
      "(c)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w24_qp_31_q07",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w24_qp_32_q06",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w24_qp_33_q07",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)",
      "(d)(i)",
      "(c)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_31_q05",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 5,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_31_q06",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 6,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_06_Q6.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_32_q07",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 7,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s25_qp_33_q03",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 3,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_03_Q3_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "9618_w25_qp_31_q06",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_32_q06",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)",
      "(b)(iii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w25_qp_33_q06",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 6,
    "topicId": "15",
    "subtopicId": "15.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_06_Q6.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s21_qp_31_q03",
    "paperCode": "9618_s21_qp_31",
    "session": "2021 June v1",
    "questionNumber": 3,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v1_9618_s21_qp_31/9618_s21_qp_31_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s21_qp_32_q03",
    "paperCode": "9618_s21_qp_32",
    "session": "2021 June v2",
    "questionNumber": 3,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v2_9618_s21_qp_32/9618_s21_qp_32_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s21_qp_33_q03",
    "paperCode": "9618_s21_qp_33",
    "session": "2021 June v3",
    "questionNumber": 3,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_June_v3_9618_s21_qp_33/9618_s21_qp_33_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s22_qp_31_q05",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s22_qp_32_q05",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s22_qp_32_q09",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 9,
    "topicId": "20",
    "subtopicId": "20.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_s22_qp_33_q05",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_05_Q5_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_w22_qp_31_q05",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_31_q08",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w22_qp_32_q09",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w22_qp_33_q05",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_33_q08",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_31_q12",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_12_Q12_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_12_Q12_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s23_qp_33_q12",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_12_Q12_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_12_Q12_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w23_qp_31_q05",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_31_q07",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 7,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w23_qp_32_q05",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_33_q05",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w23_qp_33_q07",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 7,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)",
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_31_q05",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_32_q05",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s24_qp_33_q05",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w24_qp_31_q08",
    "paperCode": "9618_w24_qp_31",
    "session": "2024 November v1",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v1_9618_w24_qp_31/9618_w24_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w24_qp_32_q09",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)(i)",
      "(b)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w24_qp_33_q08",
    "paperCode": "9618_w24_qp_33",
    "session": "2024 November v3",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v3_9618_w24_qp_33/9618_w24_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_31_q08",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_32_q05",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_33_q06",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 6,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_06_Q6.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_33_q12",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 12,
    "topicId": "19",
    "subtopicId": "19.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_12_Q12_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_12_Q12_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_w25_qp_31_q04",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_32_q05",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_33_q05",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 5,
    "topicId": "16",
    "subtopicId": "16.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_05_Q5.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "9618_w25_qp_33_q11",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 11,
    "topicId": "19",
    "subtopicId": "19.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_11_Q11.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w25_qp_33_q12",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 12,
    "topicId": "20",
    "subtopicId": "20.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_12_Q12.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s22_qp_31_q09",
    "paperCode": "9618_s22_qp_31",
    "session": "2022 June v1",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v1_9618_s22_qp_31/9618_s22_qp_31_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_s22_qp_33_q09",
    "paperCode": "9618_s22_qp_33",
    "session": "2022 June v3",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2022_June_v3_9618_s22_qp_33/9618_s22_qp_33_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "9618_w22_qp_31_q04",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w22_qp_32_q02",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 2,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w22_qp_33_q04",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 4,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w23_qp_32_q11",
    "paperCode": "9618_w23_qp_32",
    "session": "2023 November v2",
    "questionNumber": 11,
    "topicId": "20",
    "subtopicId": "20.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2023_November_v2_9618_w23_qp_32/9618_w23_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w24_qp_32_q07",
    "paperCode": "9618_w24_qp_32",
    "session": "2024 November v2",
    "questionNumber": 7,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2024_November_v2_9618_w24_qp_32/9618_w24_qp_32_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_31_q07",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 7,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_07_Q7_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_32_q08",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_33_q08",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_33_q13",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 13,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_13_Q13.png"
    ],
    "sourcePages": [
      16
    ]
  },
  {
    "id": "9618_w25_qp_31_q08",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w25_qp_31_q11",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 11,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_11_Q11.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_w25_qp_32_q08",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 8,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w25_qp_32_q11",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 11,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_11_Q11_part_01.png",
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_11_Q11_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w25_qp_33_q07",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 7,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w25_qp_33_q13",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 13,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_13_Q13_part_01.png",
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_13_Q13_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w21_qp_31_q08",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 8,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_08_Q8.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w21_qp_32_q08",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 8,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_08_Q8.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_s22_qp_32_q07",
    "paperCode": "9618_s22_qp_32",
    "session": "2022 June v2",
    "questionNumber": 7,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_June_v2_9618_s22_qp_32/9618_s22_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_w22_qp_31_q06",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 6,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_w22_qp_32_q06",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 6,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_33_q06",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 6,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_06_Q6_part_01.png",
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "9618_s23_qp_31_q09",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 9,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s23_qp_32_q05",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 5,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_05_Q5.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_s23_qp_33_q09",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 9,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_31_q09",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_w23_qp_33_q09",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_31_q07",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 7,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s24_qp_32_q04",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 4,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_04_Q4.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s24_qp_33_q07",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 7,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_s25_qp_31_q09",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 9,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "9618_s25_qp_32_q09",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "9618_s25_qp_33_q07",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 7,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_07_Q7.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s25_qp_33_q09",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 9,
    "topicId": "16",
    "subtopicId": "16.2",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "9618_w25_qp_31_q05",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 5,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_05_Q5.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_w25_qp_32_q07",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 7,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_33_q09",
    "paperCode": "9618_w25_qp_33",
    "session": "2025 November v3",
    "questionNumber": 9,
    "topicId": "17",
    "subtopicId": "17.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v3_9618_w25_qp_33/9618_w25_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w21_qp_31_q09",
    "paperCode": "9618_w21_qp_31",
    "session": "2021 November v1",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v1_9618_w21_qp_31/9618_w21_qp_31_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w21_qp_32_q09",
    "paperCode": "9618_w21_qp_32",
    "session": "2021 November v2",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_09_Q9_part_01.png",
      "/topical/comsci-cie/P3/2021_November_v2_9618_w21_qp_32/9618_w21_qp_32_question_09_Q9_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_w22_qp_31_q09",
    "paperCode": "9618_w22_qp_31",
    "session": "2022 November v1",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v1_9618_w22_qp_31/9618_w22_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_w22_qp_32_q07",
    "paperCode": "9618_w22_qp_32",
    "session": "2022 November v2",
    "questionNumber": 7,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v2_9618_w22_qp_32/9618_w22_qp_32_question_07_Q7.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "9618_w22_qp_33_q09",
    "paperCode": "9618_w22_qp_33",
    "session": "2022 November v3",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2022_November_v3_9618_w22_qp_33/9618_w22_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      8
    ]
  },
  {
    "id": "9618_s23_qp_31_q02",
    "paperCode": "9618_s23_qp_31",
    "session": "2023 June v1",
    "questionNumber": 2,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v1_9618_s23_qp_31/9618_s23_qp_31_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_s23_qp_32_q10",
    "paperCode": "9618_s23_qp_32",
    "session": "2023 June v2",
    "questionNumber": 10,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Parts (a)",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_10_Q10_part_01.png",
      "/topical/comsci-cie/P3/2023_June_v2_9618_s23_qp_32/9618_s23_qp_32_question_10_Q10_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "9618_s23_qp_33_q02",
    "paperCode": "9618_s23_qp_33",
    "session": "2023 June v3",
    "questionNumber": 2,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2023_June_v3_9618_s23_qp_33/9618_s23_qp_33_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "9618_w23_qp_31_q12",
    "paperCode": "9618_w23_qp_31",
    "session": "2023 November v1",
    "questionNumber": 12,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v1_9618_w23_qp_31/9618_w23_qp_31_question_12_Q12.png"
    ],
    "sourcePages": [
      14
    ]
  },
  {
    "id": "9618_w23_qp_33_q12",
    "paperCode": "9618_w23_qp_33",
    "session": "2023 November v3",
    "questionNumber": 12,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2023_November_v3_9618_w23_qp_33/9618_w23_qp_33_question_12_Q12.png"
    ],
    "sourcePages": [
      14
    ]
  },
  {
    "id": "9618_s24_qp_31_q09",
    "paperCode": "9618_s24_qp_31",
    "session": "2024 June v1",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v1_9618_s24_qp_31/9618_s24_qp_31_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s24_qp_32_q11",
    "paperCode": "9618_s24_qp_32",
    "session": "2024 June v2",
    "questionNumber": 11,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v2_9618_s24_qp_32/9618_s24_qp_32_question_11_Q11.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_s24_qp_33_q09",
    "paperCode": "9618_s24_qp_33",
    "session": "2024 June v3",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [],
    "images": [
      "/topical/comsci-cie/P3/2024_June_v3_9618_s24_qp_33/9618_s24_qp_33_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  },
  {
    "id": "9618_s25_qp_31_q10",
    "paperCode": "9618_s25_qp_31",
    "session": "2025 June v1",
    "questionNumber": 10,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v1_9618_s25_qp_31/9618_s25_qp_31_question_10_Q10.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "9618_s25_qp_32_q06",
    "paperCode": "9618_s25_qp_32",
    "session": "2025 June v2",
    "questionNumber": 6,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v2_9618_s25_qp_32/9618_s25_qp_32_question_06_Q6.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "9618_s25_qp_33_q10",
    "paperCode": "9618_s25_qp_33",
    "session": "2025 June v3",
    "questionNumber": 10,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Parts (c)",
    "topicParts": [
      "(c)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_June_v3_9618_s25_qp_33/9618_s25_qp_33_question_10_Q10.png"
    ],
    "sourcePages": [
      12
    ]
  },
  {
    "id": "9618_w25_qp_31_q07",
    "paperCode": "9618_w25_qp_31",
    "session": "2025 November v1",
    "questionNumber": 7,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v1_9618_w25_qp_31/9618_w25_qp_31_question_07_Q7.png"
    ],
    "sourcePages": [
      7
    ]
  },
  {
    "id": "9618_w25_qp_32_q09",
    "paperCode": "9618_w25_qp_32",
    "session": "2025 November v2",
    "questionNumber": 9,
    "topicId": "18",
    "subtopicId": "18.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "(a)",
      "(a)(i)",
      "(a)(ii)",
      "(b)"
    ],
    "images": [
      "/topical/comsci-cie/P3/2025_November_v2_9618_w25_qp_32/9618_w25_qp_32_question_09_Q9.png"
    ],
    "sourcePages": [
      9
    ]
  }
];
