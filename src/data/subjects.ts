export type YearLinks = {
  qp?: string;
  ms?: string;
};

export type PaperSpec = {
  years: Record<string, YearLinks>;
  specNote?: string;
};

export type Paper = {
  description: string;
  years: Record<string, YearLinks>;
  oldSpec?: PaperSpec;
};

export type SubjectKey = "maths" | "physics" | "comsci";

export type Subject = {
  name: string;
  description: string;
  papers: Record<string, Paper>;
};

export const SUBJECTS: Record<SubjectKey, Subject> = {
  maths: {
    name: "Mathematics",
    description: "IAL Edexcel Mathematics & Further Mathematics papers.",
    papers: {
      P1: {
        description: "Pure Mathematics 1",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_P1.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_P1.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_P1.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_P1.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_P1.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_P1.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_P1.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_P1.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202020%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/October%202020%20MS.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/January%202019%20MS.pdf",
          },
          "2019 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/June%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/June%202019%20MS.pdf",
          },
          "2019 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/October%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/October%202019%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P1/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "C1 - 6663",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C1/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      P2: {
        description: "Pure Mathematics 2",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_P2.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_P2.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_P2.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_P2.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_P2.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_P2.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_P2.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_P2.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/January%202020%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/October%202020%20MS.pdf",
          },
          "2019 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/October%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/October%202019%20MS.pdf",
          },
          "2019 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/June%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/June%202019%20MS.pdf",
          },
          "2019 January": {
            qp: "https://edemat.alevelclouds.com/19_01_QP_P2.pdf",
            ms: "https://edemat.alevelclouds.com/19_01_MS_P2.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P2/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "C2 - 6664",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C2/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      P3: {
        description: "Pure Mathematics 3",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_P3.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_P3.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_P3.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_P3.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_P3.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_P3.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_P3.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_P3.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/June%202024%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/October%202023%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/January%202020%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/October%202020%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P3/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "C3 - 6665",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (Withdrawn)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202013%20(Withdrawn)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202013%20(Withdrawn)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C3/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      P4: {
        description: "Pure Mathematics 4",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_P4.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_P4.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_P4.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_P4.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_P4.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_P4.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_P4.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_P4.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/October%202021%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/October%202020%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Pure/P4/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "C4 - 6666",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (Withdrawn)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202013%20(Withdrawn)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202013%20(Withdrawn)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/C4/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      S1: {
        description: "Statistics 1",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_S1.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_S1.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_S1.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_S1.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_S1.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_S1.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_S1.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_S1.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202020%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202020%20MS.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202019%20MS.pdf",
          },
          "2019 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202019%20MS.pdf",
          },
          "2019 October": {
            qp: "https://edemat.alevelclouds.com/19_10_QP_S1.pdf",
            ms: "https://edemat.alevelclouds.com/19_10_MS_S1.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202018%20MS.pdf",
          },
          "2018 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202017%20MS.pdf",
          },
          "2017 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202016%20MS.pdf",
          },
          "2016 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/October%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/October%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S1/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6683",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2004 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/November%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/November%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2003 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/November%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/November%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2002 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/November%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/November%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2001 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/January%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/January%202001%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S1/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      S2: {
        description: "Statistics 2",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_S2.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_S2.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_S2.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_S2.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202020%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202020%20MS.pdf",
          },
          "2019 October": {
            qp: "https://edemat.alevelclouds.com/19_10_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/19_10_MS_S2.pdf",
          },
          "2019 June": {
            qp: "https://edemat.alevelclouds.com/19_06_QP_S2.pdf",
            ms: "https://edemat.alevelclouds.com/19_06_MS_S2.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202019%20MS.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202018%20MS.pdf",
          },
          "2018 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202017%20MS.pdf",
          },
          "2017 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202016%20MS.pdf",
          },
          "2016 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/October%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/October%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S2/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6684",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S2/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      S3: {
        description: "Statistics 3",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_S3.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_S3.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_S3.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_S3.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/October%202021%20MS.pdf",
          },
          "2020 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/October%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/October%202020%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202018%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202017%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202016%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202015%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Statistics/S3/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6691",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/S3/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      M1: {
        description: "Mechanics 1",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_M1.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_M1.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_M1.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_M1.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202021%20MS.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_M1.pdf",
          },
          "2020 January": {
            qp: "https://edemat.alevelclouds.com/20_01_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/20_01_MS_M1.pdf",
          },
          "2019 October": {
            qp: "https://edemat.alevelclouds.com/19_10_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/19_10_MS_M1.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202019%20MS.pdf",
          },
          "2019 June": {
            qp: "https://edemat.alevelclouds.com/19_06_QP_M1.pdf",
            ms: "https://edemat.alevelclouds.com/19_06_MS_M1.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202018%20MS.pdf",
          },
          "2018 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202017%20MS.pdf",
          },
          "2017 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202016%20MS.pdf",
          },
          "2016 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/October%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/October%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M1/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6677",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2004 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/November%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/November%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2003 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/November%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/November%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2002 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/November%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/November%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2001 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/January%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/January%202001%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M1/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      M2: {
        description: "Mechanics 2",
        years: {
          "2025 October": {
            qp: "https://edemat.alevelclouds.com/25_10_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/25_10_MS_M2.pdf",
          },
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_M2.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_M2.pdf",
          },
          "2024 October": {
            qp: "https://edemat.alevelclouds.com/24_10_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/24_10_MS_M2.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202023%20MS.pdf",
          },
          "2023 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202022%20MS.pdf",
          },
          "2022 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202021%20MS.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_M2.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202020%20MS.pdf",
          },
          "2019 October": {
            qp: "https://edemat.alevelclouds.com/19_10_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/19_10_MS_M2.pdf",
          },
          "2019 June": {
            qp: "https://edemat.alevelclouds.com/19_06_QP_M2.pdf",
            ms: "https://edemat.alevelclouds.com/19_06_MS_M2.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202019%20MS.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202018%20MS.pdf",
          },
          "2018 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202017%20MS.pdf",
          },
          "2017 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202016%20MS.pdf",
          },
          "2016 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/October%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/October%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M2/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6678",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (Withdrawn)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202013%20(Withdrawn)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202013%20(Withdrawn)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M2/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      M3: {
        description: "Mechanics 3",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_M3.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_M3.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202022%20MS.pdf",
          },
          "2021 October": {
            qp: "https://edemat.alevelclouds.com/21_10_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/21_10_MS_M3.pdf",
          },
          "2021 January": {
            qp: "https://edemat.alevelclouds.com/21_01_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/21_01_MS_M3.pdf",
          },
          "2021 June": {
            qp: "https://edemat.alevelclouds.com/21_06_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/21_06_MS_M3.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_M3.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_M3.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202019%20MS.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Mechanics/M3/MS/Specimen%202018%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6679",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/M3/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      D1: {
        description: "Decision Mathematics 1",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_D1.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_D1.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_D1.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_D1.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202022%20MS.pdf",
          },
          "2021 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202021%20MS.pdf",
          },
          "2021 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202021%20MS.pdf",
          },
          "2021 October": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/October%202021%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/October%202021%20MS.pdf",
          },
          "2020 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202020%20MS.pdf",
          },
          "2020 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202020%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202020%20MS.pdf",
          },
          "2019 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202019%20MS.pdf",
          },
          "2019 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202019%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202019%20MS.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/June%202014%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/Specimen%202018%20MS.pdf",
          },
          "2013 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/QP/Specimen%202013%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Decision/D1/MS/Specimen%202013%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6689",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202014%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202014%20MS.pdf",
            },
            "2013 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2008 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2007 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2005 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2004 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202004%20MS.pdf",
            },
            "2004 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/November%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/November%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2003 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202003%20MS.pdf",
            },
            "2003 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/November%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/November%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
            "2002 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202002%20MS.pdf",
            },
            "2002 November": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/November%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/November%202002%20MS.pdf",
            },
            "2001 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202001%20MS.pdf",
            },
            "2001 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/January%202001%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/January%202001%20MS.pdf",
            },
            "2019 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202019%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202019%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/D1/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
          },
        },
      },
      FP1: {
        description: "Further Pure Mathematics 1",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_F1.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_F1.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202022%20MS.pdf",
          },
          "2021 October": {
            qp: "https://edemat.alevelclouds.com/21_10_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/21_10_MS_F1.pdf",
          },
          "2021 January": {
            qp: "https://edemat.alevelclouds.com/21_01_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/21_01_MS_F1.pdf",
          },
          "2021 June": {
            qp: "https://edemat.alevelclouds.com/21_06_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/21_06_MS_F1.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_F1.pdf",
          },
          "2020 January": {
            qp: "https://edemat.alevelclouds.com/20_01_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/20_01_MS_F1.pdf",
          },
          "2019 June": {
            qp: "https://edemat.alevelclouds.com/19_06_QP_F1.pdf",
            ms: "https://edemat.alevelclouds.com/19_06_MS_F1.pdf",
          },
          "2018 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202018%20MS.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202018%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/Specimen%202018%20MS.pdf",
          },
          "2017 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202017%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202017%20MS.pdf",
          },
          "2016 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202016%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202016%20MS.pdf",
          },
          "2015 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202015%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202015%20MS.pdf",
          },
          "2014 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/January%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/January%202014%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL/Further-Pure/F1/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F1/MS/June%202014%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6667",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 IAL January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202014%20(IAL)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202014%20(IAL)%20MS.pdf",
            },
            "2013 June (Withdrawn)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202013%20(Withdrawn)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202013%20(Withdrawn)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
            "2013 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202013%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202013%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2012 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2011 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2010 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2009 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/QP/January%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP1/Papers-Edexcel/MS/January%202009%20MS.pdf",
            },
          },
        },
      },
      FP2: {
        description: "Further Pure Mathematics 2",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_F2.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_F2.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202022%20MS.pdf",
          },
          "2021 October": {
            qp: "https://edemat.alevelclouds.com/21_10_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/21_10_MS_F2.pdf",
          },
          "2021 January": {
            qp: "https://edemat.alevelclouds.com/21_01_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/21_01_MS_F2.pdf",
          },
          "2021 June": {
            qp: "https://edemat.alevelclouds.com/21_06_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/21_06_MS_F2.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_F2.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_F2.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202018%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/Specimen%202018%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202017%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202016%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202015%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F2/MS/June%202014%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6668",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202016%20QP.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2013 June (Withdrawn)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202013%20(Withdrawn)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202013%20(Withdrawn)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
            "2008 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202008%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202008%20MS.pdf",
            },
            "2007 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202007%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202007%20MS.pdf",
            },
            "2006 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202006%20MS.pdf",
            },
            "2006 January": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/January%202006%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/January%202006%20MS.pdf",
            },
            "2005 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202005%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202005%20MS.pdf",
            },
            "2004 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202004%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202004%20MS.pdf",
            },
            "2003 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202003%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202003%20MS.pdf",
            },
            "2002 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/QP/June%202002%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-Edexcel/MS/June%202002%20MS.pdf",
            },
          },
        },
      },
      FP3: {
        description: "Further Pure Mathematics 3",
        years: {
          "2025 June": {
            qp: "https://edemat.alevelclouds.com/25_06_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/25_06_MS_F3.pdf",
          },
          "2025 January": {
            qp: "https://edemat.alevelclouds.com/25_01_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/25_01_MS_F3.pdf",
          },
          "2024 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/January%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/January%202024%20MS.pdf",
          },
          "2024 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202024%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202024%20MS.pdf",
          },
          "2023 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/January%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/January%202023%20MS.pdf",
          },
          "2023 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202023%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202023%20MS.pdf",
          },
          "2022 January": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/January%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/January%202022%20MS.pdf",
          },
          "2022 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202022%20MS.pdf",
          },
          "2021 October": {
            qp: "https://edemat.alevelclouds.com/21_10_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/21_10_MS_F3.pdf",
          },
          "2021 January": {
            qp: "https://edemat.alevelclouds.com/21_01_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/21_01_MS_F3.pdf",
          },
          "2021 June": {
            qp: "https://edemat.alevelclouds.com/21_06_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/21_06_MS_F3.pdf",
          },
          "2020 October": {
            qp: "https://edemat.alevelclouds.com/20_10_QP_F3.pdf",
            ms: "https://edemat.alevelclouds.com/20_10_MS_F3.pdf",
          },
          "2018 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202018%20MS.pdf",
          },
          "2018 Specimen": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/Specimen%202018%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/Specimen%202018%20MS.pdf",
          },
          "2017 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202017%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202017%20MS.pdf",
          },
          "2016 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202016%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202016%20MS.pdf",
          },
          "2015 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202015%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202015%20MS.pdf",
          },
          "2014 June": {
            qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/QP/June%202014%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/Papers/Edexcel-IAL//Further-Pure/F3/MS/June%202014%20MS.pdf",
          },
        },
        oldSpec: {
          specNote: "6669",
          years: {
            "2018 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202018%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202018%20MS.pdf",
            },
            "2017 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202017%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202017%20MS.pdf",
            },
            "2016 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202016%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202016%20MS.pdf",
            },
            "2015 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202015%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202015%20MS.pdf",
            },
            "2014 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202014%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202014%20(R)%20MS.pdf",
            },
            "2013 June (R)": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202013%20(R)%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202013%20(R)%20MS.pdf",
            },
            "2012 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202012%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202012%20MS.pdf",
            },
            "2011 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202011%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202011%20MS.pdf",
            },
            "2010 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202010%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202010%20MS.pdf",
            },
            "2009 June": {
              qp: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/QP/June%202009%20QP.pdf",
              ms: "https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-Edexcel/MS/June%202009%20MS.pdf",
            },
          },
        },
      },
    },
  },
  physics: {
    name: "Physics",
    description: "CAIE Physics 9702 papers.",
    papers: {
      P1: {
        description: "Paper 1 - Multiple Choice",
        years: {
          "November 2024 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202024%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202024%20(v3)%20MS.pdf",
          },
          "November 2024 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202024%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202024%20(v2)%20MS.pdf",
          },
          "November 2024 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202024%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202024%20(v1)%20MS.pdf",
          },
          "June 2024 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202024%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202024%20(v3)%20MS.pdf",
          },
          "June 2024 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202024%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202024%20(v2)%20MS.pdf",
          },
          "June 2024 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202024%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202024%20(v1)%20MS.pdf",
          },
          "March 2024 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202024%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202024%20(v2)%20MS.pdf",
          },
          "November 2023 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202023%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202023%20(v3)%20MS.pdf",
          },
          "November 2023 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202023%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202023%20(v2)%20MS.pdf",
          },
          "November 2023 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202023%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202023%20(v1)%20MS.pdf",
          },
          "June 2023 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202023%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202023%20(v3)%20MS.pdf",
          },
          "June 2023 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202023%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202023%20(v2)%20MS.pdf",
          },
          "June 2023 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202023%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202023%20(v1)%20MS.pdf",
          },
          "March 2023 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202023%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202023%20(v2)%20MS.pdf",
          },
          "Specimen 2022": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/Specimen%202022%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/Specimen%202022%20MS.pdf",
          },
          "November 2022 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202022%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202022%20(v3)%20MS.pdf",
          },
          "November 2022 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202022%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202022%20(v2)%20MS.pdf",
          },
          "November 2022 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202022%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202022%20(v1)%20MS.pdf",
          },
          "June 2022 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202022%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202022%20(v3)%20MS.pdf",
          },
          "June 2022 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202022%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202022%20(v2)%20MS.pdf",
          },
          "June 2022 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202022%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202022%20(v1)%20MS.pdf",
          },
          "March 2022 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202022%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202022%20(v2)%20MS.pdf",
          },
          "November 2021 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202021%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202021%20(v3)%20MS.pdf",
          },
          "November 2021 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202021%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202021%20(v2)%20MS.pdf",
          },
          "November 2021 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202021%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202021%20(v1)%20MS.pdf",
          },
          "June 2021 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202021%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202021%20(v3)%20MS.pdf",
          },
          "June 2021 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202021%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202021%20(v2)%20MS.pdf",
          },
          "June 2021 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202021%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202021%20(v1)%20MS.pdf",
          },
          "March 2021 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202021%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202021%20(v2)%20MS.pdf",
          },
          "November 2020 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202020%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202020%20(v3)%20MS.pdf",
          },
          "November 2020 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202020%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202020%20(v2)%20MS.pdf",
          },
          "November 2020 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202020%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202020%20(v1)%20MS.pdf",
          },
          "June 2020 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202020%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202020%20(v3)%20MS.pdf",
          },
          "June 2020 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202020%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202020%20(v2)%20MS.pdf",
          },
          "June 2020 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202020%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202020%20(v1)%20MS.pdf",
          },
          "March 2020 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202020%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202020%20(v2)%20MS.pdf",
          },
          "November 2019 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202019%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202019%20(v3)%20MS.pdf",
          },
          "November 2019 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202019%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202019%20(v2)%20MS.pdf",
          },
          "November 2019 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202019%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202019%20(v1)%20MS.pdf",
          },
          "June 2019 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202019%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202019%20(v3)%20MS.pdf",
          },
          "June 2019 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202019%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202019%20(v2)%20MS.pdf",
          },
          "June 2019 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202019%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202019%20(v1)%20MS.pdf",
          },
          "March 2019 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202019%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202019%20(v2)%20MS.pdf",
          },
          "November 2018 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202018%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202018%20(v3)%20MS.pdf",
          },
          "November 2018 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202018%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202018%20(v2)%20MS.pdf",
          },
          "November 2018 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202018%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202018%20(v1)%20MS.pdf",
          },
          "June 2018 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202018%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202018%20(v3)%20MS.pdf",
          },
          "June 2018 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202018%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202018%20(v2)%20MS.pdf",
          },
          "June 2018 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202018%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202018%20(v1)%20MS.pdf",
          },
          "March 2018 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202018%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202018%20(v2)%20MS.pdf",
          },
          "November 2017 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202017%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202017%20(v3)%20MS.pdf",
          },
          "November 2017 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202017%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202017%20(v2)%20MS.pdf",
          },
          "November 2017 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202017%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202017%20(v1)%20MS.pdf",
          },
          "June 2017 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202017%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202017%20(v3)%20MS.pdf",
          },
          "June 2017 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202017%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202017%20(v2)%20MS.pdf",
          },
          "June 2017 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202017%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202017%20(v1)%20MS.pdf",
          },
          "March 2017 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202017%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202017%20(v2)%20MS.pdf",
          },
          "November 2016 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202016%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202016%20(v3)%20MS.pdf",
          },
          "November 2016 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202016%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202016%20(v2)%20MS.pdf",
          },
          "November 2016 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202016%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202016%20(v1)%20MS.pdf",
          },
          "June 2016 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202016%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202016%20(v3)%20MS.pdf",
          },
          "June 2016 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202016%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202016%20(v2)%20MS.pdf",
          },
          "June 2016 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202016%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202016%20(v1)%20MS.pdf",
          },
          "March 2016 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/March%202016%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/March%202016%20(v2)%20MS.pdf",
          },
          "November 2015 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202015%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202015%20(v3)%20MS.pdf",
          },
          "November 2015 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202015%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202015%20(v2)%20MS.pdf",
          },
          "November 2015 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202015%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202015%20(v1)%20MS.pdf",
          },
          "June 2015 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202015%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202015%20(v3)%20MS.pdf",
          },
          "June 2015 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202015%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202015%20(v2)%20MS.pdf",
          },
          "June 2015 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202015%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202015%20(v1)%20MS.pdf",
          },
          "November 2014 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202014%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202014%20(v3)%20MS.pdf",
          },
          "November 2014 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202014%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202014%20(v2)%20MS.pdf",
          },
          "November 2014 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202014%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202014%20(v1)%20MS.pdf",
          },
          "June 2014 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202014%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202014%20(v3)%20MS.pdf",
          },
          "June 2014 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202014%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202014%20(v2)%20MS.pdf",
          },
          "June 2014 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202014%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202014%20(v1)%20MS.pdf",
          },
          "November 2013 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202013%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202013%20(v3)%20MS.pdf",
          },
          "November 2013 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202013%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202013%20(v2)%20MS.pdf",
          },
          "November 2013 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202013%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202013%20(v1)%20MS.pdf",
          },
          "June 2013 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202013%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202013%20(v3)%20MS.pdf",
          },
          "June 2013 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202013%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202013%20(v2)%20MS.pdf",
          },
          "June 2013 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202013%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202013%20(v1)%20MS.pdf",
          },
          "November 2012 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202012%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202012%20(v3)%20MS.pdf",
          },
          "November 2012 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202012%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202012%20(v2)%20MS.pdf",
          },
          "November 2012 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202012%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202012%20(v1)%20MS.pdf",
          },
          "June 2012 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202012%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202012%20(v3)%20MS.pdf",
          },
          "June 2012 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202012%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202012%20(v2)%20MS.pdf",
          },
          "June 2012 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202012%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202012%20(v1)%20MS.pdf",
          },
          "November 2011 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202011%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202011%20(v3)%20MS.pdf",
          },
          "November 2011 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202011%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202011%20(v2)%20MS.pdf",
          },
          "November 2011 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202011%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202011%20(v1)%20MS.pdf",
          },
          "June 2011 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202011%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202011%20(v3)%20MS.pdf",
          },
          "June 2011 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202011%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202011%20(v2)%20MS.pdf",
          },
          "June 2011 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202011%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202011%20(v1)%20MS.pdf",
          },
          "November 2010 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202010%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202010%20(v3)%20MS.pdf",
          },
          "November 2010 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202010%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202010%20(v2)%20MS.pdf",
          },
          "November 2010 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202010%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202010%20(v1)%20MS.pdf",
          },
          "June 2010 (v3)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202010%20(v3)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202010%20(v3)%20MS.pdf",
          },
          "June 2010 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202010%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202010%20(v2)%20MS.pdf",
          },
          "June 2010 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202010%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202010%20(v1)%20MS.pdf",
          },
          "November 2009 (v2)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202009%20(v2)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202009%20(v2)%20MS.pdf",
          },
          "November 2009 (v1)": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202009%20(v1)%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202009%20(v1)%20MS.pdf",
          },
          "June 2009": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202009%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202009%20MS.pdf",
          },
          "November 2008": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/November%202008%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/November%202008%20MS.pdf",
          },
          "June 2008": {
            qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/QP/June%202008%20QP.pdf",
            ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-1/MS/June%202008%20MS.pdf",
          },
        },
      },
      P2: {
        description: "Paper 2 - AS Level Structured Questions",
        years: {
          "November 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202024%20(v3)%20MS.pdf" },
          "November 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202024%20(v2)%20MS.pdf" },
          "November 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202024%20(v1)%20MS.pdf" },
          "Specimen 2022": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/Specimen%202022%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/Specimen%202022%20MS.pdf" },
          "Specimen 2016": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/Specimen%202016%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/Specimen%202016%20MS.pdf" },
          "June 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202024%20(v3)%20MS.pdf" },
          "June 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202024%20(v2)%20MS.pdf" },
          "June 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202024%20(v1)%20MS.pdf" },
          "March 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202024%20(v2)%20MS.pdf" },
          "November 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202023%20(v3)%20MS.pdf" },
          "November 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202023%20(v2)%20MS.pdf" },
          "November 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202023%20(v1)%20MS.pdf" },
          "June 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202023%20(v3)%20MS.pdf" },
          "June 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202023%20(v2)%20MS.pdf" },
          "June 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202023%20(v1)%20MS.pdf" },
          "March 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202023%20(v2)%20MS.pdf" },
          "November 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202022%20(v3)%20MS.pdf" },
          "November 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202022%20(v2)%20MS.pdf" },
          "November 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202022%20(v1)%20MS.pdf" },
          "June 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202022%20(v3)%20MS.pdf" },
          "June 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202022%20(v2)%20MS.pdf" },
          "June 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202022%20(v1)%20MS.pdf" },
          "March 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202022%20(v2)%20MS.pdf" },
          "November 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202021%20(v3)%20MS.pdf" },
          "November 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202021%20(v2)%20MS.pdf" },
          "November 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202021%20(v1)%20MS.pdf" },
          "June 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202021%20(v3)%20MS.pdf" },
          "June 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202021%20(v2)%20MS.pdf" },
          "June 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202021%20(v1)%20MS.pdf" },
          "March 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202021%20(v2)%20MS.pdf" },
          "November 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202020%20(v3)%20MS.pdf" },
          "November 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202020%20(v2)%20MS.pdf" },
          "November 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202020%20(v1)%20MS.pdf" },
          "June 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202020%20(v3)%20MS.pdf" },
          "June 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202020%20(v2)%20MS.pdf" },
          "June 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202020%20(v1)%20MS.pdf" },
          "March 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202020%20(v2)%20MS.pdf" },
          "November 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202019%20(v3)%20MS.pdf" },
          "November 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202019%20(v2)%20MS.pdf" },
          "November 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202019%20(v1)%20MS.pdf" },
          "June 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202019%20(v3)%20MS.pdf" },
          "June 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202019%20(v2)%20MS.pdf" },
          "June 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202019%20(v1)%20MS.pdf" },
          "March 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202019%20(v2)%20MS.pdf" },
          "November 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202018%20(v3)%20MS.pdf" },
          "November 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202018%20(v2)%20MS.pdf" },
          "November 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202018%20(v1)%20MS.pdf" },
          "June 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202018%20(v3)%20MS.pdf" },
          "June 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202018%20(v2)%20MS.pdf" },
          "June 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202018%20(v1)%20MS.pdf" },
          "March 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202018%20(v2)%20MS.pdf" },
          "November 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202017%20(v3)%20MS.pdf" },
          "November 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202017%20(v2)%20MS.pdf" },
          "November 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202017%20(v1)%20MS.pdf" },
          "June 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202017%20(v3)%20MS.pdf" },
          "June 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202017%20(v2)%20MS.pdf" },
          "June 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202017%20(v1)%20MS.pdf" },
          "March 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202017%20(v2)%20MS.pdf" },
          "November 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202016%20(v3)%20MS.pdf" },
          "November 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202016%20(v2)%20MS.pdf" },
          "November 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202016%20(v1)%20MS.pdf" },
          "June 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202016%20(v3)%20MS.pdf" },
          "June 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202016%20(v2)%20MS.pdf" },
          "June 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202016%20(v1)%20MS.pdf" },
          "March 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/March%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/March%202016%20(v2)%20MS.pdf" },
          "November 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202015%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202015%20(v3)%20MS.pdf" },
          "November 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202015%20(v2)%20MS.pdf" },
          "November 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202015%20(v1)%20MS.pdf" },
          "June 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202015%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202015%20(v3)%20MS.pdf" },
          "June 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202015%20(v2)%20MS.pdf" },
          "June 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202015%20(v1)%20MS.pdf" },
          "November 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202014%20(v3)%20MS.pdf" },
          "November 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202014%20(v2)%20MS.pdf" },
          "November 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202014%20(v1)%20MS.pdf" },
          "June 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202014%20(v3)%20MS.pdf" },
          "June 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202014%20(v2)%20MS.pdf" },
          "June 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202014%20(v1)%20MS.pdf" },
          "November 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202013%20(v3)%20MS.pdf" },
          "November 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202013%20(v2)%20MS.pdf" },
          "November 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202013%20(v1)%20MS.pdf" },
          "June 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202013%20(v3)%20MS.pdf" },
          "June 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202013%20(v2)%20MS.pdf" },
          "June 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202013%20(v1)%20MS.pdf" },
          "November 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202012%20(v3)%20MS.pdf" },
          "November 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202012%20(v2)%20MS.pdf" },
          "November 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202012%20(v1)%20MS.pdf" },
          "June 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202012%20(v3)%20MS.pdf" },
          "June 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202012%20(v2)%20MS.pdf" },
          "June 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202012%20(v1)%20MS.pdf" },
          "November 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202011%20(v3)%20MS.pdf" },
          "November 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202011%20(v2)%20MS.pdf" },
          "November 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202011%20(v1)%20MS.pdf" },
          "June 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202011%20(v3)%20MS.pdf" },
          "June 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202011%20(v2)%20MS.pdf" },
          "June 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202011%20(v1)%20MS.pdf" },
          "November 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202010%20(v3)%20MS.pdf" },
          "November 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202010%20(v2)%20MS.pdf" },
          "November 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202010%20(v1)%20MS.pdf" },
          "June 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202010%20(v3)%20MS.pdf" },
          "June 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202010%20(v2)%20MS.pdf" },
          "June 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202010%20(v1)%20MS.pdf" },
          "November 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202009%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202009%20(v2)%20MS.pdf" },
          "November 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202009%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202009%20(v1)%20MS.pdf" },
          "June 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202009%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202009%20%28v2%29%20MS.pdf" },
          "June 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202009%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202009%20%28v1%29%20MS.pdf" },
          "November 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/November%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/November%202008%20MS.pdf" },
          "June 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/QP/June%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-2/MS/June%202008%20MS.pdf" },
        },
      },
      P3: {
        description: "Paper 3 - AS Level Practical",
        years: {
          "November 2024 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202024%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202024%20%28v6%29%20MS.pdf" },
          "November 2024 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202024%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202024%20%28v5%29%20MS.pdf" },
          "November 2024 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202024%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202024%20%28v4%29%20MS.pdf" },
          "November 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202024%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202024%20%28v3%29%20MS.pdf" },
          "November 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202024%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202024%20%28v1%29%20MS.pdf" },
          "June 2024 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202024%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202024%20%28v5%29%20MS.pdf" },
          "June 2024 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202024%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202024%20%28v4%29%20MS.pdf" },
          "June 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202024%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202024%20%28v3%29%20MS.pdf" },
          "June 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202024%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202024%20%28v2%29%20MS.pdf" },
          "June 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202024%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202024%20%28v1%29%20MS.pdf" },
          "March 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202024%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202024%20%28v3%29%20MS.pdf" },
          "November 2023 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202023%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202023%20%28v6%29%20MS.pdf" },
          "November 2023 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202023%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202023%20%28v5%29%20MS.pdf" },
          "November 2023 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202023%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202023%20%28v4%29%20MS.pdf" },
          "November 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202023%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202023%20%28v3%29%20MS.pdf" },
          "November 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202023%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202023%20%28v1%29%20MS.pdf" },
          "June 2023 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202023%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202023%20%28v5%29%20MS.pdf" },
          "June 2023 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202023%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202023%20%28v4%29%20MS.pdf" },
          "June 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202023%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202023%20%28v3%29%20MS.pdf" },
          "June 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202023%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202023%20%28v2%29%20MS.pdf" },
          "June 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202023%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202023%20%28v1%29%20MS.pdf" },
          "March 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202023%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202023%20%28v3%29%20MS.pdf" },
          "Specimen 2022": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/Specimen%202022%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/Specimen%202022%20MS.pdf" },
          "November 2022 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202022%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202022%20%28v6%29%20MS.pdf" },
          "November 2022 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202022%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202022%20%28v5%29%20MS.pdf" },
          "November 2022 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202022%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202022%20%28v4%29%20MS.pdf" },
          "November 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202022%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202022%20%28v3%29%20MS.pdf" },
          "November 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202022%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202022%20%28v1%29%20MS.pdf" },
          "June 2022 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202022%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202022%20%28v5%29%20MS.pdf" },
          "June 2022 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202022%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202022%20%28v4%29%20MS.pdf" },
          "June 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202022%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202022%20%28v3%29%20MS.pdf" },
          "June 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202022%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202022%20%28v2%29%20MS.pdf" },
          "June 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202022%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202022%20%28v1%29%20MS.pdf" },
          "March 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202022%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202022%20%28v3%29%20MS.pdf" },
          "November 2021 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202021%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202021%20%28v6%29%20MS.pdf" },
          "November 2021 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202021%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202021%20%28v5%29%20MS.pdf" },
          "November 2021 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202021%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202021%20%28v4%29%20MS.pdf" },
          "November 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202021%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202021%20%28v3%29%20MS.pdf" },
          "November 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202021%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202021%20%28v1%29%20MS.pdf" },
          "June 2021 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202021%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202021%20%28v5%29%20MS.pdf" },
          "June 2021 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202021%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202021%20%28v4%29%20MS.pdf" },
          "June 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202021%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202021%20%28v3%29%20MS.pdf" },
          "June 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202021%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202021%20%28v2%29%20MS.pdf" },
          "June 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202021%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202021%20%28v1%29%20MS.pdf" },
          "March 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202021%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202021%20%28v3%29%20MS.pdf" },
          "November 2020 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202020%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202020%20%28v6%29%20MS.pdf" },
          "November 2020 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202020%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202020%20%28v5%29%20MS.pdf" },
          "November 2020 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202020%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202020%20%28v4%29%20MS.pdf" },
          "November 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202020%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202020%20%28v3%29%20MS.pdf" },
          "November 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202020%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202020%20%28v1%29%20MS.pdf" },
          "June 2020 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202020%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202020%20%28v5%29%20MS.pdf" },
          "June 2020 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202020%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202020%20%28v4%29%20MS.pdf" },
          "June 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202020%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202020%20%28v3%29%20MS.pdf" },
          "June 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202020%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202020%20%28v2%29%20MS.pdf" },
          "June 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202020%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202020%20%28v1%29%20MS.pdf" },
          "March 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202020%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202020%20%28v3%29%20MS.pdf" },
          "November 2019 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202019%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202019%20%28v6%29%20MS.pdf" },
          "November 2019 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202019%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202019%20%28v5%29%20MS.pdf" },
          "November 2019 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202019%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202019%20%28v4%29%20MS.pdf" },
          "November 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202019%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202019%20%28v3%29%20MS.pdf" },
          "November 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202019%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202019%20%28v1%29%20MS.pdf" },
          "June 2019 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202019%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202019%20%28v5%29%20MS.pdf" },
          "June 2019 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202019%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202019%20%28v4%29%20MS.pdf" },
          "June 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202019%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202019%20%28v3%29%20MS.pdf" },
          "June 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202019%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202019%20%28v2%29%20MS.pdf" },
          "June 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202019%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202019%20%28v1%29%20MS.pdf" },
          "November 2018 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202018%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202018%20%28v6%29%20MS.pdf" },
          "November 2018 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202018%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202018%20%28v5%29%20MS.pdf" },
          "November 2018 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202018%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202018%20%28v4%29%20MS.pdf" },
          "November 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202018%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202018%20%28v3%29%20MS.pdf" },
          "November 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202018%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202018%20%28v1%29%20MS.pdf" },
          "June 2018 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202018%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202018%20%28v5%29%20MS.pdf" },
          "June 2018 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202018%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202018%20%28v4%29%20MS.pdf" },
          "June 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202018%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202018%20%28v3%29%20MS.pdf" },
          "June 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202018%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202018%20%28v2%29%20MS.pdf" },
          "June 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202018%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202018%20%28v1%29%20MS.pdf" },
          "March 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202018%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202018%20%28v3%29%20MS.pdf" },
          "November 2017 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202017%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202017%20%28v6%29%20MS.pdf" },
          "November 2017 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202017%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202017%20%28v5%29%20MS.pdf" },
          "November 2017 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202017%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202017%20%28v4%29%20MS.pdf" },
          "November 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202017%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202017%20%28v3%29%20MS.pdf" },
          "November 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202017%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202017%20%28v1%29%20MS.pdf" },
          "June 2017 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202017%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202017%20%28v5%29%20MS.pdf" },
          "June 2017 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202017%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202017%20%28v4%29%20MS.pdf" },
          "June 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202017%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202017%20%28v3%29%20MS.pdf" },
          "June 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202017%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202017%20%28v2%29%20MS.pdf" },
          "June 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202017%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202017%20%28v1%29%20MS.pdf" },
          "March 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202017%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202017%20%28v3%29%20MS.pdf" },
          "Specimen 2016": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/Specimen%202016%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/Specimen%202016%20MS.pdf" },
          "Specimen": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/Specimen%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/Specimen%20MS.pdf" },
          "November 2016 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202016%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202016%20%28v6%29%20MS.pdf" },
          "November 2016 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202016%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202016%20%28v5%29%20MS.pdf" },
          "November 2016 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202016%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202016%20%28v4%29%20MS.pdf" },
          "November 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202016%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202016%20%28v3%29%20MS.pdf" },
          "November 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202016%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202016%20%28v1%29%20MS.pdf" },
          "June 2016 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202016%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202016%20%28v5%29%20MS.pdf" },
          "June 2016 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202016%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202016%20%28v4%29%20MS.pdf" },
          "June 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202016%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202016%20%28v3%29%20MS.pdf" },
          "June 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202016%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202016%20%28v2%29%20MS.pdf" },
          "June 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202016%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202016%20%28v1%29%20MS.pdf" },
          "March 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/March%202016%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/March%202016%20%28v3%29%20MS.pdf" },
          "November 2015 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202015%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202015%20%28v6%29%20MS.pdf" },
          "November 2015 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202015%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202015%20%28v5%29%20MS.pdf" },
          "November 2015 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202015%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202015%20%28v4%29%20MS.pdf" },
          "November 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202015%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202015%20%28v3%29%20MS.pdf" },
          "November 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202015%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202015%20%28v1%29%20MS.pdf" },
          "June 2015 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202015%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202015%20%28v5%29%20MS.pdf" },
          "June 2015 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202015%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202015%20%28v4%29%20MS.pdf" },
          "June 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202015%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202015%20%28v3%29%20MS.pdf" },
          "June 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202015%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202015%20%28v2%29%20MS.pdf" },
          "June 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202015%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202015%20%28v1%29%20MS.pdf" },
          "November 2014 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202014%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202014%20%28v6%29%20MS.pdf" },
          "November 2014 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202014%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202014%20%28v5%29%20MS.pdf" },
          "November 2014 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202014%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202014%20%28v4%29%20MS.pdf" },
          "November 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202014%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202014%20%28v3%29%20MS.pdf" },
          "November 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202014%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202014%20%28v1%29%20MS.pdf" },
          "June 2014 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202014%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202014%20%28v5%29%20MS.pdf" },
          "June 2014 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202014%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202014%20%28v4%29%20MS.pdf" },
          "June 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202014%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202014%20%28v3%29%20MS.pdf" },
          "June 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202014%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202014%20%28v2%29%20MS.pdf" },
          "June 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202014%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202014%20%28v1%29%20MS.pdf" },
          "November 2013 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202013%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202013%20%28v6%29%20MS.pdf" },
          "November 2013 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202013%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202013%20%28v5%29%20MS.pdf" },
          "November 2013 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202013%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202013%20%28v4%29%20MS.pdf" },
          "November 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202013%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202013%20%28v3%29%20MS.pdf" },
          "November 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202013%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202013%20%28v1%29%20MS.pdf" },
          "June 2013 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202013%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202013%20%28v5%29%20MS.pdf" },
          "June 2013 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202013%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202013%20%28v4%29%20MS.pdf" },
          "June 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202013%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202013%20%28v3%29%20MS.pdf" },
          "June 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202013%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202013%20%28v2%29%20MS.pdf" },
          "June 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202013%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202013%20%28v1%29%20MS.pdf" },
          "November 2012 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202012%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202012%20%28v6%29%20MS.pdf" },
          "November 2012 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202012%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202012%20%28v5%29%20MS.pdf" },
          "November 2012 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202012%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202012%20%28v4%29%20MS.pdf" },
          "November 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202012%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202012%20%28v3%29%20MS.pdf" },
          "November 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202012%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202012%20%28v1%29%20MS.pdf" },
          "June 2012 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202012%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202012%20%28v5%29%20MS.pdf" },
          "June 2012 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202012%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202012%20%28v4%29%20MS.pdf" },
          "June 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202012%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202012%20%28v3%29%20MS.pdf" },
          "June 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202012%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202012%20%28v2%29%20MS.pdf" },
          "June 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202012%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202012%20%28v1%29%20MS.pdf" },
          "November 2011 (v6)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202011%20%28v6%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202011%20%28v6%29%20MS.pdf" },
          "November 2011 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202011%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202011%20%28v5%29%20MS.pdf" },
          "November 2011 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202011%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202011%20%28v4%29%20MS.pdf" },
          "November 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202011%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202011%20%28v3%29%20MS.pdf" },
          "November 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202011%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202011%20%28v1%29%20MS.pdf" },
          "June 2011 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202011%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202011%20%28v5%29%20MS.pdf" },
          "June 2011 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202011%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202011%20%28v4%29%20MS.pdf" },
          "June 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202011%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202011%20%28v3%29%20MS.pdf" },
          "June 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202011%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202011%20%28v2%29%20MS.pdf" },
          "June 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202011%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202011%20%28v1%29%20MS.pdf" },
          "November 2010 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202010%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202010%20%28v5%29%20MS.pdf" },
          "November 2010 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202010%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202010%20%28v4%29%20MS.pdf" },
          "November 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202010%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202010%20%28v3%29%20MS.pdf" },
          "November 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202010%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202010%20%28v1%29%20MS.pdf" },
          "June 2010 (v5)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202010%20%28v5%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202010%20%28v5%29%20MS.pdf" },
          "June 2010 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202010%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202010%20%28v4%29%20MS.pdf" },
          "June 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202010%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202010%20%28v3%29%20MS.pdf" },
          "June 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202010%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202010%20%28v2%29%20MS.pdf" },
          "June 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202010%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202010%20%28v1%29%20MS.pdf" },
          "November 2009 (v4)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202009%20%28v4%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202009%20%28v4%29%20MS.pdf" },
          "November 2009 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202009%20%28v3%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202009%20%28v3%29%20MS.pdf" },
          "November 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202009%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202009%20%28v2%29%20MS.pdf" },
          "November 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202009%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202009%20%28v1%29%20MS.pdf" },
          "June 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202009%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202009%20%28v2%29%20MS.pdf" },
          "June 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202009%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202009%20%28v1%29%20MS.pdf" },
          "November 2008 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202008%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202008%20%28v2%29%20MS.pdf" },
          "November 2008 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/November%202008%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/November%202008%20%28v1%29%20MS.pdf" },
          "June 2008 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202008%20%28v2%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202008%20%28v2%29%20MS.pdf" },
          "June 2008 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/QP/June%202008%20%28v1%29%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-3/MS/June%202008%20%28v1%29%20MS.pdf" },
        },
      },
      P4: {
        description: "Paper 4 - A Level Structured Questions",
        years: {
          "Specimen 2022": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/Specimen%202022%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/Specimen%202022%20MS.pdf" },
          "Specimen 2016": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/Specimen%202016%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/Specimen%202016%20MS.pdf" },
          "Specimen": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/Specimen%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/Specimen%20MS.pdf" },
          "November 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202024%20(v3)%20MS.pdf" },
          "November 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202024%20(v2)%20MS.pdf" },
          "November 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202024%20(v1)%20MS.pdf" },
          "June 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202024%20(v3)%20MS.pdf" },
          "June 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202024%20(v2)%20MS.pdf" },
          "June 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202024%20(v1)%20MS.pdf" },
          "March 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202024%20(v2)%20MS.pdf" },
          "November 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202023%20(v3)%20MS.pdf" },
          "November 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202023%20(v2)%20MS.pdf" },
          "November 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202023%20(v1)%20MS.pdf" },
          "June 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202023%20(v3)%20MS.pdf" },
          "June 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202023%20(v2)%20MS.pdf" },
          "June 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202023%20(v1)%20MS.pdf" },
          "March 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202023%20(v2)%20MS.pdf" },
          "November 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202022%20(v3)%20MS.pdf" },
          "November 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202022%20(v2)%20MS.pdf" },
          "November 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202022%20(v1)%20MS.pdf" },
          "June 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202022%20(v3)%20MS.pdf" },
          "June 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202022%20(v2)%20MS.pdf" },
          "June 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202022%20(v1)%20MS.pdf" },
          "March 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202022%20(v2)%20MS.pdf" },
          "November 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202021%20(v3)%20MS.pdf" },
          "November 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202021%20(v2)%20MS.pdf" },
          "November 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202021%20(v1)%20MS.pdf" },
          "June 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202021%20(v3)%20MS.pdf" },
          "June 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202021%20(v2)%20MS.pdf" },
          "June 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202021%20(v1)%20MS.pdf" },
          "March 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202021%20(v2)%20MS.pdf" },
          "November 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202020%20(v3)%20MS.pdf" },
          "November 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202020%20(v2)%20MS.pdf" },
          "November 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202020%20(v1)%20MS.pdf" },
          "June 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202020%20(v3)%20MS.pdf" },
          "June 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202020%20(v2)%20MS.pdf" },
          "June 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202020%20(v1)%20MS.pdf" },
          "March 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202020%20(v2)%20MS.pdf" },
          "November 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202019%20(v3)%20MS.pdf" },
          "November 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202019%20(v2)%20MS.pdf" },
          "November 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202019%20(v1)%20MS.pdf" },
          "June 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202019%20(v3)%20MS.pdf" },
          "June 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202019%20(v2)%20MS.pdf" },
          "June 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202019%20(v1)%20MS.pdf" },
          "March 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202019%20(v2)%20MS.pdf" },
          "November 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202018%20(v3)%20MS.pdf" },
          "November 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202018%20(v2)%20MS.pdf" },
          "November 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202018%20(v1)%20MS.pdf" },
          "June 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202018%20(v3)%20MS.pdf" },
          "June 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202018%20(v2)%20MS.pdf" },
          "June 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202018%20(v1)%20MS.pdf" },
          "March 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202018%20(v2)%20MS.pdf" },
          "November 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202017%20(v3)%20MS.pdf" },
          "November 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202017%20(v2)%20MS.pdf" },
          "November 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202017%20(v1)%20MS.pdf" },
          "June 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202017%20(v3)%20MS.pdf" },
          "June 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202017%20(v2)%20MS.pdf" },
          "June 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202017%20(v1)%20MS.pdf" },
          "March 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202017%20(v2)%20MS.pdf" },
          "November 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202016%20(v3)%20MS.pdf" },
          "November 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202016%20(v2)%20MS.pdf" },
          "November 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202016%20(v1)%20MS.pdf" },
          "June 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202016%20(v3)%20MS.pdf" },
          "June 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202016%20(v2)%20MS.pdf" },
          "June 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202016%20(v1)%20MS.pdf" },
          "March 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/March%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/March%202016%20(v2)%20MS.pdf" },
          "November 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202015%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202015%20(v3)%20MS.pdf" },
          "November 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202015%20(v2)%20MS.pdf" },
          "November 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202015%20(v1)%20MS.pdf" },
          "June 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202015%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202015%20(v3)%20MS.pdf" },
          "June 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202015%20(v2)%20MS.pdf" },
          "June 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202015%20(v1)%20MS.pdf" },
          "November 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202014%20(v3)%20MS.pdf" },
          "November 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202014%20(v2)%20MS.pdf" },
          "November 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202014%20(v1)%20MS.pdf" },
          "June 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202014%20(v3)%20MS.pdf" },
          "June 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202014%20(v2)%20MS.pdf" },
          "June 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202014%20(v1)%20MS.pdf" },
          "November 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202013%20(v3)%20MS.pdf" },
          "November 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202013%20(v2)%20MS.pdf" },
          "November 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202013%20(v1)%20MS.pdf" },
          "June 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202013%20(v3)%20MS.pdf" },
          "June 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202013%20(v2)%20MS.pdf" },
          "June 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202013%20(v1)%20MS.pdf" },
          "November 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202012%20(v3)%20MS.pdf" },
          "November 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202012%20(v2)%20MS.pdf" },
          "November 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202012%20(v1)%20MS.pdf" },
          "June 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202012%20(v3)%20MS.pdf" },
          "June 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202012%20(v2)%20MS.pdf" },
          "June 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202012%20(v1)%20MS.pdf" },
          "November 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202011%20(v3)%20MS.pdf" },
          "November 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202011%20(v2)%20MS.pdf" },
          "November 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202011%20(v1)%20MS.pdf" },
          "June 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202011%20(v3)%20MS.pdf" },
          "June 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202011%20(v2)%20MS.pdf" },
          "June 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202011%20(v1)%20MS.pdf" },
          "November 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202010%20(v3)%20MS.pdf" },
          "November 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202010%20(v2)%20MS.pdf" },
          "November 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202010%20(v1)%20MS.pdf" },
          "June 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202010%20(v3)%20MS.pdf" },
          "June 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202010%20(v2)%20MS.pdf" },
          "June 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202010%20(v1)%20MS.pdf" },
          "November 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202009%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202009%20(v2)%20MS.pdf" },
          "November 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202009%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202009%20(v1)%20MS.pdf" },
          "June 2009": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202009%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202009%20MS.pdf" },
          "November 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/November%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/November%202008%20MS.pdf" },
          "June 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/QP/June%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-4/MS/June%202008%20MS.pdf" },
        },
      },
      P5: {
        description: "Paper 5 - Planning, Analysis and Evaluation",
        years: {
          "Specimen 2022": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/Specimen%202022%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/Specimen%202022%20MS.pdf" },
          "Specimen 2016": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/Specimen%202016%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/Specimen%202016%20MS.pdf" },
          "Specimen": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/Specimen%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/Specimen%20MS.pdf" },
          "November 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202024%20(v3)%20MS.pdf" },
          "November 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202024%20(v2)%20MS.pdf" },
          "November 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202024%20(v1)%20MS.pdf" },
          "June 2024 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202024%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202024%20(v3)%20MS.pdf" },
          "June 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202024%20(v2)%20MS.pdf" },
          "June 2024 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202024%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202024%20(v1)%20MS.pdf" },
          "March 2024 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202024%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202024%20(v2)%20MS.pdf" },
          "November 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202023%20(v3)%20MS.pdf" },
          "November 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202023%20(v2)%20MS.pdf" },
          "November 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202023%20(v1)%20MS.pdf" },
          "June 2023 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202023%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202023%20(v3)%20MS.pdf" },
          "June 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202023%20(v2)%20MS.pdf" },
          "June 2023 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202023%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202023%20(v1)%20MS.pdf" },
          "March 2023 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202023%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202023%20(v2)%20MS.pdf" },
          "November 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202022%20(v3)%20MS.pdf" },
          "November 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202022%20(v2)%20MS.pdf" },
          "November 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202022%20(v1)%20MS.pdf" },
          "June 2022 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202022%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202022%20(v3)%20MS.pdf" },
          "June 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202022%20(v2)%20MS.pdf" },
          "June 2022 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202022%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202022%20(v1)%20MS.pdf" },
          "March 2022 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202022%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202022%20(v2)%20MS.pdf" },
          "November 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202021%20(v3)%20MS.pdf" },
          "November 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202021%20(v2)%20MS.pdf" },
          "November 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202021%20(v1)%20MS.pdf" },
          "June 2021 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202021%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202021%20(v3)%20MS.pdf" },
          "June 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202021%20(v2)%20MS.pdf" },
          "June 2021 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202021%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202021%20(v1)%20MS.pdf" },
          "March 2021 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202021%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202021%20(v2)%20MS.pdf" },
          "November 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202020%20(v3)%20MS.pdf" },
          "November 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202020%20(v2)%20MS.pdf" },
          "November 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202020%20(v1)%20MS.pdf" },
          "June 2020 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202020%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202020%20(v3)%20MS.pdf" },
          "June 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202020%20(v2)%20MS.pdf" },
          "June 2020 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202020%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202020%20(v1)%20MS.pdf" },
          "March 2020 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202020%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202020%20(v2)%20MS.pdf" },
          "November 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202019%20(v3)%20MS.pdf" },
          "November 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202019%20(v2)%20MS.pdf" },
          "November 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202019%20(v1)%20MS.pdf" },
          "June 2019 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202019%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202019%20(v3)%20MS.pdf" },
          "June 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202019%20(v2)%20MS.pdf" },
          "June 2019 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202019%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202019%20(v1)%20MS.pdf" },
          "March 2019 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202019%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202019%20(v2)%20MS.pdf" },
          "November 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202018%20(v3)%20MS.pdf" },
          "November 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202018%20(v2)%20MS.pdf" },
          "November 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202018%20(v1)%20MS.pdf" },
          "June 2018 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202018%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202018%20(v3)%20MS.pdf" },
          "June 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202018%20(v2)%20MS.pdf" },
          "June 2018 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202018%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202018%20(v1)%20MS.pdf" },
          "March 2018 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202018%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202018%20(v2)%20MS.pdf" },
          "November 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202017%20(v3)%20MS.pdf" },
          "November 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202017%20(v2)%20MS.pdf" },
          "November 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202017%20(v1)%20MS.pdf" },
          "June 2017 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202017%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202017%20(v3)%20MS.pdf" },
          "June 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202017%20(v2)%20MS.pdf" },
          "June 2017 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202017%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202017%20(v1)%20MS.pdf" },
          "March 2017 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202017%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202017%20(v2)%20MS.pdf" },
          "November 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202016%20(v3)%20MS.pdf" },
          "November 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202016%20(v2)%20MS.pdf" },
          "November 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202016%20(v1)%20MS.pdf" },
          "June 2016 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202016%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202016%20(v3)%20MS.pdf" },
          "June 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202016%20(v2)%20MS.pdf" },
          "June 2016 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202016%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202016%20(v1)%20MS.pdf" },
          "March 2016 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/March%202016%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/March%202016%20(v2)%20MS.pdf" },
          "November 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202015%20(v2)%20MS.pdf" },
          "November 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202015%20(v1)%20MS.pdf" },
          "June 2015 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202015%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202015%20(v3)%20MS.pdf" },
          "June 2015 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202015%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202015%20(v2)%20MS.pdf" },
          "June 2015 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202015%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202015%20(v1)%20MS.pdf" },
          "November 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202014%20(v3)%20MS.pdf" },
          "November 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202014%20(v2)%20MS.pdf" },
          "November 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202014%20(v1)%20MS.pdf" },
          "June 2014 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202014%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202014%20(v3)%20MS.pdf" },
          "June 2014 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202014%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202014%20(v2)%20MS.pdf" },
          "June 2014 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202014%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202014%20(v1)%20MS.pdf" },
          "November 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202013%20(v3)%20MS.pdf" },
          "November 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202013%20(v2)%20MS.pdf" },
          "November 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202013%20(v1)%20MS.pdf" },
          "June 2013 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202013%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202013%20(v3)%20MS.pdf" },
          "June 2013 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202013%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202013%20(v2)%20MS.pdf" },
          "June 2013 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202013%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202013%20(v1)%20MS.pdf" },
          "November 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202012%20(v3)%20MS.pdf" },
          "November 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202012%20(v2)%20MS.pdf" },
          "November 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202012%20(v1)%20MS.pdf" },
          "June 2012 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202012%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202012%20(v3)%20MS.pdf" },
          "June 2012 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202012%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202012%20(v2)%20MS.pdf" },
          "June 2012 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202012%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202012%20(v1)%20MS.pdf" },
          "November 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202011%20(v3)%20MS.pdf" },
          "November 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202011%20(v2)%20MS.pdf" },
          "November 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202011%20(v1)%20MS.pdf" },
          "June 2011 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202011%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202011%20(v3)%20MS.pdf" },
          "June 2011 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202011%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202011%20(v2)%20MS.pdf" },
          "June 2011 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202011%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202011%20(v1)%20MS.pdf" },
          "November 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202010%20(v3)%20MS.pdf" },
          "November 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202010%20(v2)%20MS.pdf" },
          "November 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202010%20(v1)%20MS.pdf" },
          "June 2010 (v3)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202010%20(v3)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202010%20(v3)%20MS.pdf" },
          "June 2010 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202010%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202010%20(v2)%20MS.pdf" },
          "June 2010 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202010%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202010%20(v1)%20MS.pdf" },
          "November 2009 (v2)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202009%20(v2)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202009%20(v2)%20MS.pdf" },
          "November 2009 (v1)": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202009%20(v1)%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202009%20(v1)%20MS.pdf" },
          "June 2009": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202009%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202009%20MS.pdf" },
          "November 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/November%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/November%202008%20MS.pdf" },
          "June 2008": { qp: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/QP/June%202008%20QP.pdf", ms: "https://pmt.physicsandmathstutor.com/download/Physics/A-level/Past-Papers/CAIE/Paper-5/MS/June%202008%20MS.pdf" },
        },
      },
    },
  },
  comsci: {
    name: "Computer Science",
    description: "Cambridge AS & A Level Computer Science 9618 past papers.",
    papers: {
      P1: {
        description: "Paper 1 - Theory Fundamentals (AS)",
        years: {
          "2025 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_13.pdf" },
          "2025 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_12.pdf" },
          "2025 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_11.pdf" },
          "2024 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_13.pdf" },
          "2024 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_12.pdf" },
          "2024 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_11.pdf" },
          "2024 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_13.pdf" },
          "2024 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_12.pdf" },
          "2024 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_11.pdf" },
          "2023 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_13.pdf" },
          "2023 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_12.pdf" },
          "2023 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_11.pdf" },
          "2023 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_13.pdf" },
          "2023 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_12.pdf" },
          "2023 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_11.pdf" },
          "2022 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_13.pdf" },
          "2022 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_12.pdf" },
          "2022 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_11.pdf" },
          "2022 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_13.pdf" },
          "2022 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_12.pdf" },
          "2022 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_11.pdf" },
          "2021 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_13.pdf" },
          "2021 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_12.pdf" },
          "2021 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_11.pdf" },
          "2021 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_13.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_13.pdf" },
          "2021 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_12.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_12.pdf" },
          "2021 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_11.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_11.pdf" },
        },
      },
      P2: {
        description: "Paper 2 - Problem-solving and Programming (AS)",
        years: {
          "2025 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_23.pdf" },
          "2025 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_22.pdf" },
          "2025 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_21.pdf" },
          "2024 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_23.pdf" },
          "2024 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_22.pdf" },
          "2024 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_21.pdf" },
          "2024 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_23.pdf" },
          "2024 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_22.pdf" },
          "2024 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_21.pdf" },
          "2023 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_23.pdf" },
          "2023 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_22.pdf" },
          "2023 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_21.pdf" },
          "2023 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_23.pdf" },
          "2023 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_22.pdf" },
          "2023 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_21.pdf" },
          "2022 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_23.pdf" },
          "2022 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_22.pdf" },
          "2022 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_21.pdf" },
          "2022 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_23.pdf" },
          "2022 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_22.pdf" },
          "2022 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_21.pdf" },
          "2021 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_23.pdf" },
          "2021 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_22.pdf" },
          "2021 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_21.pdf" },
          "2021 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_23.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_23.pdf" },
          "2021 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_22.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_22.pdf" },
          "2021 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_21.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_21.pdf" },
        },
      },
      P3: {
        description: "Paper 3 - Advanced Theory (A Level)",
        years: {
          "2025 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_33.pdf" },
          "2025 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_32.pdf" },
          "2025 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_31.pdf" },
          "2024 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_33.pdf" },
          "2024 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_32.pdf" },
          "2024 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_31.pdf" },
          "2024 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_33.pdf" },
          "2024 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_32.pdf" },
          "2024 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_31.pdf" },
          "2023 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_33.pdf" },
          "2023 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_32.pdf" },
          "2023 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_31.pdf" },
          "2023 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_33.pdf" },
          "2023 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_32.pdf" },
          "2023 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_31.pdf" },
          "2022 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_33.pdf" },
          "2022 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_32.pdf" },
          "2022 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_31.pdf" },
          "2022 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_33.pdf" },
          "2022 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_32.pdf" },
          "2022 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_31.pdf" },
          "2021 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_32.pdf" },
          "2021 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_31.pdf" },
          "2021 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_33.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_33.pdf" },
          "2021 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_32.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_32.pdf" },
          "2021 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_31.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_31.pdf" },
        },
      },
      P4: {
        description: "Paper 4 - Further Problem-solving and Programming (A Level)",
        years: {
          "2025 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_43.pdf" },
          "2025 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_42.pdf" },
          "2025 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s25_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_s25_ms_41.pdf" },
          "2024 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_43.pdf" },
          "2024 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_42.pdf" },
          "2024 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w24_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_w24_ms_41.pdf" },
          "2024 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_43.pdf" },
          "2024 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_42.pdf" },
          "2024 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s24_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_s24_ms_41.pdf" },
          "2023 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_43.pdf" },
          "2023 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_42.pdf" },
          "2023 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w23_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_w23_ms_41.pdf" },
          "2023 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_43.pdf" },
          "2023 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_42.pdf" },
          "2023 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s23_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_s23_ms_41.pdf" },
          "2022 November (v3)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_43.pdf" },
          "2022 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_42.pdf" },
          "2022 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w22_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_w22_ms_41.pdf" },
          "2022 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_43.pdf" },
          "2022 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_42.pdf" },
          "2022 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s22_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_s22_ms_41.pdf" },
          "2021 November (v2)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_42.pdf" },
          "2021 November (v1)": { qp: "https://pseudocode.pro/past-paper/9618_w21_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_w21_ms_41.pdf" },
          "2021 June (v3)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_43.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_43.pdf" },
          "2021 June (v2)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_42.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_42.pdf" },
          "2021 June (v1)": { qp: "https://pseudocode.pro/past-paper/9618_s21_qp_41.pdf", ms: "https://pseudocode.pro/past-paper/9618_s21_ms_41.pdf" },
        },
      },
    },
  },
};

