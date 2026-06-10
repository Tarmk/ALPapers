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

export type TopicalSubtopic = { id: string; title: string };

export type TopicalTopic = { id: string; title: string; subtopics: TopicalSubtopic[] };

export const MATHS_S3_TOPICS: TopicalTopic[] = [
  {
    "id": "1",
    "title": "Combinations of Random Variables",
    "subtopics": [
      {
        "id": "1.1",
        "title": "Linear combinations of independent Normal random variables"
      }
    ]
  },
  {
    "id": "2",
    "title": "Sampling",
    "subtopics": [
      {
        "id": "2.2",
        "title": "Sampling methods: simple random, stratified, systematic and quota"
      }
    ]
  },
  {
    "id": "3",
    "title": "Estimation, Confidence Intervals and Tests",
    "subtopics": [
      {
        "id": "3.1",
        "title": "Standard error, estimators and bias"
      },
      {
        "id": "3.2",
        "title": "Distribution of the sample mean"
      },
      {
        "id": "3.3",
        "title": "Confidence intervals and confidence limits"
      },
      {
        "id": "3.5",
        "title": "Hypothesis tests, Central Limit Theorem and large samples"
      },
      {
        "id": "3.6",
        "title": "Two-sample tests for difference of means"
      }
    ]
  },
  {
    "id": "4",
    "title": "Goodness of Fit and Contingency Tables",
    "subtopics": [
      {
        "id": "4.1",
        "title": "Chi-squared goodness of fit tests"
      },
      {
        "id": "4.2",
        "title": "Degrees of freedom and contingency tables"
      }
    ]
  },
  {
    "id": "5",
    "title": "Regression and Correlation",
    "subtopics": [
      {
        "id": "5.1",
        "title": "Spearman rank correlation"
      },
      {
        "id": "5.2",
        "title": "Testing whether correlation is zero"
      }
    ]
  }
];

export const MATHS_S3_QUESTIONS: TopicalQuestion[] = [
  {
    "id": "MATH-S3-2026_January-Q1",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q2",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q3",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q4",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q5",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.6",
    "topicFocus": "Whole question",
    "topicParts": [
      "Two-sample tests for difference of means"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q6",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Distribution of the sample mean"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q7",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_07_Q7.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "MATH-S3-2026_January-Q8",
    "paperCode": "S3",
    "session": "2026 January",
    "questionNumber": 8,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_08_Q8_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2026_January_26_01_QP_S3/26_01_QP_S3_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      22,
      23,
      24
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2026_January_26_01_MS_S3/26_01_MS_S3_question_08_Q8.png"
    ],
    "markSchemeSourcePages": [
      13
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q1",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q2",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q3",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q4",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q5",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q6",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q7",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Distribution of the sample mean"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2025_June-Q8",
    "paperCode": "S3",
    "session": "2025 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_08_Q8_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_08_Q8_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_08_Q8_part_04.png",
      "/topical/maths-edexcel/MATH-S3/2025_June_25_06_QP_S3/25_06_QP_S3_question_08_Q8_part_05.png"
    ],
    "sourcePages": [
      24,
      25,
      26,
      27,
      28
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2025_June_25_06_MS_S3/25_06_MS_S3_question_08_Q8_part_02.png"
    ],
    "markSchemeSourcePages": [
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q1",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q2",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q3",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.6",
    "topicFocus": "Whole question",
    "topicParts": [
      "Two-sample tests for difference of means"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q4",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q5",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q6",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      22,
      23,
      24,
      25
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-2025_January-Q7",
    "paperCode": "S3",
    "session": "2025 January",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2025_January_25_01_QP_S3/25_01_QP_S3_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2025_January_25_01_MS_S3/25_01_MS_S3_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q1",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q2",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 2,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q3",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q4",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q5",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      16,
      17
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q6",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ]
  },
  {
    "id": "MATH-S3-2024_January-Q7",
    "paperCode": "S3",
    "session": "2024 January",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_January_January_202024_20QP/January_202024_20QP_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      22,
      23,
      24
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q1",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q2",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q3",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q4",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q5",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q6",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      13,
      14
    ]
  },
  {
    "id": "MATH-S3-2024_June-Q7",
    "paperCode": "S3",
    "session": "2024 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_07_Q7_part_04.png",
      "/topical/maths-edexcel/MATH-S3/2024_June_June_202024_20QP/June_202024_20QP_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      24,
      25,
      26,
      27,
      28
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2024_June_June_202024_20MS/June_202024_20MS_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      15,
      16
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q1",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_01_Q1_part_02.png"
    ],
    "markSchemeSourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q2",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Testing whether correlation is zero"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_02_Q2_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q3",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q4",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      12
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q5",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.6",
    "topicFocus": "Whole question",
    "topicParts": [
      "Two-sample tests for difference of means"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_05_Q5_part_02.png"
    ],
    "markSchemeSourcePages": [
      13,
      14
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q6",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "MATH-S3-2023_January-Q7",
    "paperCode": "S3",
    "session": "2023 January",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_January_January_202023_20QP/January_202023_20QP_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_January_January_202023_20MS/January_202023_20MS_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      15,
      16
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q1",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q2",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q3",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q4",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q5",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 5,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q6",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      22,
      23,
      24,
      25
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-2023_June-Q7",
    "paperCode": "S3",
    "session": "2023 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2023_June_June_202023_20QP/June_202023_20QP_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2023_June_June_202023_20MS/June_202023_20MS_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      13,
      14
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q1",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      5
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q2",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q3",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q4",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3-MS/2022_January_January_202022_20MS/January_202022_20MS_question_04_Q4_part_04.png"
    ],
    "markSchemeSourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q5",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      18,
      19,
      20,
      21
    ]
  },
  {
    "id": "MATH-S3-2022_January-Q6",
    "paperCode": "S3",
    "session": "2022 January",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2022_January_January_202022_20QP/January_202022_20QP_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      22,
      23,
      24
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q1",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q2",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q3",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 3,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q4",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.6",
    "topicFocus": "Whole question",
    "topicParts": [
      "Two-sample tests for difference of means"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q5",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "MATH-S3-2021_January-Q6",
    "paperCode": "S3",
    "session": "2021 January",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_January_January_202021_20QP/January_202021_20QP_question_06_Q6_part_03.png"
    ],
    "sourcePages": [
      18,
      19,
      20
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q1",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_01_Q1.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q2",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q3",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_03_Q3_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q4",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q5",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2021_June-Q6",
    "paperCode": "S3",
    "session": "2021 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_06_Q6_part_04.png",
      "/topical/maths-edexcel/MATH-S3/2021_June_June_202021_20QP/June_202021_20QP_question_06_Q6_part_05.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19,
      20
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2021_June_June_202021_20MS/June_202021_20MS_question_06_Q6_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q1",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q2",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_02_Q2.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q3",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      8
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q4",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_04_Q4.png"
    ],
    "markSchemeSourcePages": [
      9
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q5",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_05_Q5.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q6",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-2021_October-Q7",
    "paperCode": "S3",
    "session": "2021 October",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_07_Q7_part_04.png",
      "/topical/maths-edexcel/MATH-S3/2021_October_October_202021_20QP/October_202021_20QP_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23,
      24
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/2021_October_October_202021_20MS/October_202021_20MS_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q1",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q2",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q3",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q4",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q5",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q6",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      20,
      21
    ]
  },
  {
    "id": "MATH-S3-2020_October-Q7",
    "paperCode": "S3",
    "session": "2020 October",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2020_October_October_202020_20QP/October_202020_20QP_question_07_Q7_part_03.png"
    ],
    "sourcePages": [
      22,
      23,
      24
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q1",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q2",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q3",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q4",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q5",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q6",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "MATH-S3-2018_June-Q7",
    "paperCode": "S3",
    "session": "2018 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_04.png",
      "/topical/maths-edexcel/MATH-S3/2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q1",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q2",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q3",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q4",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q5",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q6",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      20,
      21
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q7",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "MATH-S3-2017_June-Q8",
    "paperCode": "S3",
    "session": "2017 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q1",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q2",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q3",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 3,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q4",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q5",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q6",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q7",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-2016_June-Q8",
    "paperCode": "S3",
    "session": "2016 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2016_June_June_202016_20QP/June_202016_20QP_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q1",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q2",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q3",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q4",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q5",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q6",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q7",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_07_Q7.png"
    ],
    "sourcePages": [
      13
    ]
  },
  {
    "id": "MATH-S3-2015_June-Q8",
    "paperCode": "S3",
    "session": "2015 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2015_June_June_202015_20QP/June_202015_20QP_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q1",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q2",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q3",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q4",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q5",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q6",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-2014_June-Q7",
    "paperCode": "S3",
    "session": "2014 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2014_June_June_202014_20QP/June_202014_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q1",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q2",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q3",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q4",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q5",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q6",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q7",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      24,
      25
    ]
  },
  {
    "id": "MATH-S3-2018_Specimen-Q8",
    "paperCode": "S3",
    "session": "2018 Specimen",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_08_Q8_part_02.png",
      "/topical/maths-edexcel/MATH-S3/2018_Specimen_Specimen_202018_20QP/Specimen_202018_20QP_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_01_Q1_part_04.png"
    ],
    "sourcePages": [
      2,
      3,
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 4,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_06_Q6_part_04.png"
    ],
    "sourcePages": [
      20,
      21,
      22,
      23
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2018_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2018 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_04.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2018_June_June_202018_20QP/June_202018_20QP_question_07_Q7_part_05.png"
    ],
    "sourcePages": [
      24,
      25,
      26,
      27,
      28
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_02_Q2_part_04.png"
    ],
    "sourcePages": [
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_03_Q3_part_04.png"
    ],
    "sourcePages": [
      8,
      9,
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_04_Q4_part_04.png"
    ],
    "sourcePages": [
      12,
      13,
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_05_Q5_part_04.png"
    ],
    "sourcePages": [
      16,
      17,
      18,
      19
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      20,
      21
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_03.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_07_Q7_part_04.png"
    ],
    "sourcePages": [
      22,
      23,
      24,
      25
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2017_June-Q8",
    "paperCode": "S3",
    "session": "Old spec 2017 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_02.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2017_June_June_202017_20QP/June_202017_20QP_question_08_Q8_part_03.png"
    ],
    "sourcePages": [
      26,
      27,
      28
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 3,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      5
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 6,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2016_June-Q8",
    "paperCode": "S3",
    "session": "Old spec 2016 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2016_June_June_202016_20QP/June_202016_20QP_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_07_Q7.png"
    ],
    "sourcePages": [
      13
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2015_June-Q8",
    "paperCode": "S3",
    "session": "Old spec 2015 June",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2015_June_June_202015_20QP/June_202015_20QP_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      14,
      15
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 5,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2014_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2014 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2014_June_June_202014_20QP/June_202014_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 1,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 2,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_02_Q2_part_01.png"
    ],
    "markSchemeSourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 3,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      4
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_03_Q3.png"
    ],
    "markSchemeSourcePages": [
      7
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_04_Q4_part_02.png"
    ],
    "markSchemeSourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_06_Q6.png"
    ],
    "markSchemeSourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2013 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_June_202013_20QP/June_202013_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ],
    "markSchemeImages": [
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3-MS/Old_spec_2013_June_June_202013_20MS/June_202013_20MS_question_07_Q7_part_02.png"
    ],
    "markSchemeSourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 2,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 4,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      10,
      11
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2010_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2010 June",
    "questionNumber": 7,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2010_June_June_202010_20QP/June_202010_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 1,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 2,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      3,
      4
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      5,
      6
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 4,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 5,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 6,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_06_Q6_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_06_Q6_part_02.png"
    ],
    "sourcePages": [
      11,
      12
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2008_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2008 June",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2008_June_June_202008_20QP/June_202008_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      13,
      14
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q1",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 1,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_01_Q1_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_01_Q1_part_02.png"
    ],
    "sourcePages": [
      2,
      3
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q2",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_02_Q2_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_02_Q2_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q3",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 3,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_03_Q3.png"
    ],
    "sourcePages": [
      6
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q4",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Chi-squared goodness of fit tests"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      7,
      8
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q5",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      9,
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q6",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_06_Q6.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2007_June-Q7",
    "paperCode": "S3",
    "session": "Old spec 2007 June",
    "questionNumber": 7,
    "topicId": "1",
    "subtopicId": "1.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Linear combinations of independent Normal random variables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_07_Q7_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2007_June_June_202007_20QP/June_202007_20QP_question_07_Q7_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q1",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 1,
    "topicId": "2",
    "subtopicId": "2.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Sampling methods: simple random, stratified, systematic and quota"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_01_Q1.png"
    ],
    "sourcePages": [
      2
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q2",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 2,
    "topicId": "3",
    "subtopicId": "3.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Distribution of the sample mean"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_02_Q2.png"
    ],
    "sourcePages": [
      3
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q3",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 3,
    "topicId": "5",
    "subtopicId": "5.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Spearman rank correlation"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_03_Q3_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_03_Q3_part_02.png"
    ],
    "sourcePages": [
      4,
      5
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q4",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 4,
    "topicId": "4",
    "subtopicId": "4.2",
    "topicFocus": "Whole question",
    "topicParts": [
      "Degrees of freedom and contingency tables"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_04_Q4_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_04_Q4_part_02.png"
    ],
    "sourcePages": [
      6,
      7
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q5",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 5,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_05_Q5_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_05_Q5_part_02.png"
    ],
    "sourcePages": [
      8,
      9
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q6",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 6,
    "topicId": "3",
    "subtopicId": "3.3",
    "topicFocus": "Whole question",
    "topicParts": [
      "Confidence intervals and confidence limits"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_06_Q6.png"
    ],
    "sourcePages": [
      10
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q7",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 7,
    "topicId": "3",
    "subtopicId": "3.5",
    "topicFocus": "Whole question",
    "topicParts": [
      "Hypothesis tests, Central Limit Theorem and large samples"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_07_Q7.png"
    ],
    "sourcePages": [
      11
    ]
  },
  {
    "id": "MATH-S3-Old_spec_2013_June_R-Q8",
    "paperCode": "S3",
    "session": "Old spec 2013 June (R)",
    "questionNumber": 8,
    "topicId": "3",
    "subtopicId": "3.1",
    "topicFocus": "Whole question",
    "topicParts": [
      "Standard error, estimators and bias"
    ],
    "images": [
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_08_Q8_part_01.png",
      "/topical/maths-edexcel/MATH-S3/Old_spec_2013_June_R_June_202013_20_R_20QP/June_202013_20_R_20QP_question_08_Q8_part_02.png"
    ],
    "sourcePages": [
      12,
      13
    ]
  }
];
