// Writes the topic outlines for the Cambridge IGCSE subjects: Mathematics 0580,
// Physics 0625, Chemistry 0620, Biology 0610 and Computer Science 0478. Topic
// numbers follow the 2023-2025 syllabuses; retired content gets a topic marked
// "(older syllabus)".
//
//   node tools/topical/syllabus/make-igcse.mjs

import { writeFileSync } from "node:fs";

function outline(spec) {
  return spec.map(([topic, ...subs]) => {
    const [, id, title] = topic.match(/^(\S+) (.+)$/);
    return {
      id,
      title,
      subtopics: subs.map((s) => {
        const [, sid, stitle] = s.match(/^(\S+) (.+)$/);
        return { id: sid, title: stitle };
      }),
    };
  });
}

const write = (key, spec) =>
  writeFileSync(new URL(`${key}.json`, import.meta.url), JSON.stringify({ topics: outline(spec) }, null, 2) + "\n");
const writeAll = (subject, papers, spec) => papers.forEach((p) => write(`${subject}-${p}`, spec));

// --- Mathematics 0580 ---------------------------------------------------------

writeAll("igcse-maths", ["P1", "P2", "P3", "P4"], [
  ["1 Number", "1.1 Types of number and sets", "1.2 Powers, roots, indices and standard form", "1.3 Fractions, decimals and percentages", "1.4 Ratio, proportion and rates", "1.5 Estimation, rounding and bounds", "1.6 Money, interest, growth and decay"],
  ["2 Algebra and graphs", "2.1 Algebraic manipulation and factorising", "2.2 Equations and inequalities", "2.3 Sequences", "2.4 Direct and inverse proportion", "2.5 Graphs of functions", "2.6 Functions: composite and inverse", "2.7 Differentiation"],
  ["3 Coordinate geometry", "3.1 Coordinates and straight-line graphs"],
  ["4 Geometry", "4.1 Geometrical terms, constructions and similarity", "4.2 Angle properties and circle theorems", "4.3 Symmetry"],
  ["5 Mensuration", "5.1 Perimeter, area and volume"],
  ["6 Trigonometry", "6.1 Pythagoras' theorem, right-angled trigonometry and bearings", "6.2 Sine and cosine rules, area of a triangle and 3D problems", "6.3 Trigonometric graphs and equations"],
  ["7 Transformations and vectors", "7.1 Transformations", "7.2 Vectors"],
  ["8 Probability", "8.1 Probability"],
  ["9 Statistics", "9.1 Averages, charts and diagrams", "9.2 Cumulative frequency, histograms and scatter diagrams"],
  ["10 Older syllabus topics", "10.1 Matrices (older syllabus)", "10.2 Linear programming (older syllabus)"],
]);

// --- Physics 0625 ------------------------------------------------------------

writeAll("igcse-physics", ["P1", "P2", "P3", "P4", "P5", "P6"], [
  ["1 Motion, forces and energy", "1.1 Physical quantities and measurement", "1.2 Motion", "1.3 Mass and weight", "1.4 Density", "1.5 Forces, moments and centre of gravity", "1.6 Momentum", "1.7 Energy, work and power", "1.8 Pressure"],
  ["2 Thermal physics", "2.1 Kinetic particle model of matter", "2.2 Thermal properties and temperature", "2.3 Transfer of thermal energy"],
  ["3 Waves", "3.1 General properties of waves", "3.2 Light", "3.3 Electromagnetic spectrum", "3.4 Sound"],
  ["4 Electricity and magnetism", "4.1 Simple phenomena of magnetism", "4.2 Electrical quantities", "4.3 Electric circuits", "4.4 Electrical safety", "4.5 Electromagnetic effects", "4.6 Electronics and logic gates (older syllabus)"],
  ["5 Nuclear physics", "5.1 The nuclear model of the atom", "5.2 Radioactivity"],
  ["6 Space physics", "6.1 Earth and the Solar System", "6.2 Stars and the Universe"],
]);

// --- Chemistry 0620 ----------------------------------------------------------

writeAll("igcse-chemistry", ["P1", "P2", "P3", "P4", "P5", "P6"], [
  ["1 States of matter", "1.1 Solids, liquids and gases", "1.2 Diffusion"],
  ["2 Atoms, elements and compounds", "2.1 Elements, compounds and mixtures", "2.2 Atomic structure and the Periodic Table", "2.3 Isotopes", "2.4 Ions and ionic bonds", "2.5 Simple molecules and covalent bonds", "2.6 Giant covalent structures", "2.7 Metallic bonding"],
  ["3 Stoichiometry", "3.1 Formulae and equations", "3.2 Relative masses of atoms and molecules", "3.3 The mole and the Avogadro constant"],
  ["4 Electrochemistry", "4.1 Electrolysis", "4.2 Hydrogen–oxygen fuel cells"],
  ["5 Chemical energetics", "5.1 Exothermic and endothermic reactions"],
  ["6 Chemical reactions", "6.1 Physical and chemical changes", "6.2 Rate of reaction", "6.3 Reversible reactions and equilibrium", "6.4 Redox"],
  ["7 Acids, bases and salts", "7.1 Properties of acids and bases", "7.2 Oxides", "7.3 Preparation of salts"],
  ["8 The Periodic Table", "8.1 Arrangement of elements", "8.2 Group I properties", "8.3 Group VII properties", "8.4 Transition elements", "8.5 Noble gases"],
  ["9 Metals", "9.1 Properties and uses of metals", "9.2 Alloys", "9.3 Reactivity series", "9.4 Corrosion of metals", "9.5 Extraction of metals"],
  ["10 Chemistry of the environment", "10.1 Water", "10.2 Fertilisers", "10.3 Air quality and climate"],
  ["11 Organic chemistry", "11.1 Formulae, functional groups and terminology", "11.2 Naming organic compounds", "11.3 Fuels", "11.4 Alkanes", "11.5 Alkenes", "11.6 Alcohols", "11.7 Carboxylic acids", "11.8 Polymers"],
  ["12 Experimental techniques and chemical analysis", "12.1 Experimental design", "12.2 Acid–base titrations", "12.3 Separation and purification", "12.4 Identification of ions and gases"],
]);

// --- Biology 0610 ------------------------------------------------------------

writeAll("igcse-biology", ["P1", "P2", "P3", "P4", "P5", "P6"], [
  ["1 Characteristics and classification of living organisms", "1.1 Characteristics of living organisms", "1.2 Classification and keys", "1.3 Features of organisms"],
  ["2 Organisation of the organism", "2.1 Cell structure", "2.2 Size of specimens and magnification"],
  ["3 Movement into and out of cells", "3.1 Diffusion", "3.2 Osmosis", "3.3 Active transport"],
  ["4 Biological molecules", "4.1 Biological molecules and food tests"],
  ["5 Enzymes", "5.1 Enzymes"],
  ["6 Plant nutrition", "6.1 Photosynthesis", "6.2 Leaf structure", "6.3 Mineral requirements"],
  ["7 Human nutrition", "7.1 Diet", "7.2 Digestive system", "7.3 Physical and chemical digestion", "7.4 Absorption"],
  ["8 Transport in plants", "8.1 Xylem and phloem", "8.2 Water uptake and transpiration", "8.3 Translocation"],
  ["9 Transport in animals", "9.1 Circulatory systems and the heart", "9.2 Blood vessels", "9.3 Blood"],
  ["10 Diseases and immunity", "10.1 Diseases and immunity"],
  ["11 Gas exchange in humans", "11.1 Gas exchange in humans"],
  ["12 Respiration", "12.1 Aerobic and anaerobic respiration"],
  ["13 Excretion in humans", "13.1 Excretion and the kidney"],
  ["14 Coordination and response", "14.1 Nervous control", "14.2 Sense organs", "14.3 Hormones", "14.4 Homeostasis", "14.5 Tropic responses"],
  ["15 Drugs", "15.1 Drugs, antibiotics and misuse"],
  ["16 Reproduction", "16.1 Asexual and sexual reproduction", "16.2 Sexual reproduction in plants", "16.3 Sexual reproduction in humans", "16.4 Sex hormones and sexually transmitted infections"],
  ["17 Inheritance", "17.1 Chromosomes, genes and proteins", "17.2 Mitosis and meiosis", "17.3 Monohybrid inheritance"],
  ["18 Variation and selection", "18.1 Variation", "18.2 Adaptive features", "18.3 Natural and artificial selection"],
  ["19 Organisms and their environment", "19.1 Energy flow, food chains and webs", "19.2 Nutrient cycles", "19.3 Populations"],
  ["20 Human influences on ecosystems", "20.1 Food supply", "20.2 Habitat destruction and pollution", "20.3 Conservation"],
  ["21 Biotechnology and genetic modification", "21.1 Biotechnology", "21.2 Genetic modification"],
]);

// --- Computer Science 0478 ---------------------------------------------------

write("igcse-comsci-P1", [
  ["1 Data representation", "1.1 Number systems", "1.2 Text, sound and images", "1.3 Data storage and compression"],
  ["2 Data transmission", "2.1 Types and methods of data transmission", "2.2 Error detection", "2.3 Encryption"],
  ["3 Hardware", "3.1 Computer architecture", "3.2 Input and output devices", "3.3 Data storage", "3.4 Network hardware"],
  ["4 Software", "4.1 Types of software and interrupts", "4.2 Programming languages, translators and IDEs"],
  ["5 The internet and its uses", "5.1 The internet and the World Wide Web", "5.2 Digital currency", "5.3 Cyber security"],
  ["6 Automated and emerging technologies", "6.1 Automated systems", "6.2 Robotics", "6.3 Artificial intelligence"],
  ["10 Boolean logic", "10.1 Logic gates, circuits and truth tables"],
  ["11 Older syllabus topics", "11.1 Ethics, copyright and computer ethics (older syllabus)"],
]);
write("igcse-comsci-P2", [
  ["7 Algorithm design and problem-solving", "7.1 Development life cycle and decomposition", "7.2 Flowcharts and pseudocode algorithms", "7.3 Standard methods: searching, sorting, counting and totalling", "7.4 Validation, verification and test data", "7.5 Trace tables and finding errors"],
  ["8 Programming", "8.1 Programming concepts", "8.2 Arrays", "8.3 File handling", "8.4 Pre-release programming task (older syllabus)"],
  ["9 Databases", "9.1 Databases and SQL"],
  ["10 Boolean logic", "10.1 Logic gates, circuits and truth tables"],
]);

console.log("written");
