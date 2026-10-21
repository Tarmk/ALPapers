// Writes the topic outlines for the Cambridge subjects built from scratch:
// Chemistry 9701, Biology 9700 and Mathematics 9709. Topic numbers follow the
// 2025-2027 syllabuses; content from older syllabuses gets its own topic marked
// "(older syllabus)" so pre-2016 questions have somewhere to go.
//
//   node tools/topical/syllabus/make-cie.mjs

import { writeFileSync } from "node:fs";

// "1 Title" followed by its subtopics, each "1.1 Title".
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

// --- Chemistry 9701 ----------------------------------------------------------

const CHEM_AS = [
  ["1 Atomic structure", "1.1 Particles in the atom and atomic radius", "1.2 Isotopes", "1.3 Electrons, energy levels and atomic orbitals", "1.4 Ionisation energy"],
  ["2 Atoms, molecules and stoichiometry", "2.1 Relative masses of atoms and molecules", "2.2 The mole and the Avogadro constant", "2.3 Formulae and equations", "2.4 Reacting masses, volumes and titration calculations"],
  ["3 Chemical bonding", "3.1 Electronegativity and bonding", "3.2 Ionic and metallic bonding", "3.3 Covalent and coordinate bonding", "3.4 Shapes of molecules", "3.5 Intermolecular forces", "3.6 Dot-and-cross diagrams"],
  ["4 States of matter", "4.1 The gaseous state and the ideal gas equation", "4.2 Bonding and structure (giant and simple lattices)"],
  ["5 Chemical energetics", "5.1 Enthalpy change and calorimetry", "5.2 Hess's law and bond energies"],
  ["6 Electrochemistry", "6.1 Redox processes and oxidation numbers"],
  ["7 Equilibria", "7.1 Chemical equilibria, Kc and Kp", "7.2 Brønsted–Lowry acids and bases"],
  ["8 Reaction kinetics", "8.1 Rate of reaction and the Boltzmann distribution", "8.2 Catalysts"],
  ["9 The Periodic Table: chemical periodicity", "9.1 Periodicity of physical properties", "9.2 Periodicity of chemical properties (oxides and chlorides)"],
  ["10 Group 2", "10.1 Similarities and trends in Group 2"],
  ["11 Group 17", "11.1 Physical and chemical properties of the halogens", "11.2 Hydrogen halides and halide ions", "11.3 Reactions of chlorine"],
  ["12 Nitrogen and sulfur", "12.1 Nitrogen, ammonia and nitrogen oxides", "12.2 Sulfur and sulfur dioxide"],
  ["13 Introduction to organic chemistry", "13.1 Formulae, functional groups and naming", "13.2 Characteristic organic reactions and mechanisms", "13.3 Isomerism (structural and stereoisomerism)"],
  ["14 Hydrocarbons", "14.1 Alkanes", "14.2 Alkenes"],
  ["15 Halogen compounds", "15.1 Halogenoalkanes"],
  ["16 Hydroxy compounds", "16.1 Alcohols"],
  ["17 Carbonyl compounds", "17.1 Aldehydes and ketones"],
  ["18 Carboxylic acids and derivatives", "18.1 Carboxylic acids", "18.2 Esters"],
  ["19 Nitrogen compounds", "19.1 Amines", "19.2 Nitriles and hydroxynitriles"],
  ["20 Polymerisation", "20.1 Addition polymerisation"],
  ["21 Organic synthesis", "21.1 Multi-step synthesis routes"],
  ["22 Analytical techniques", "22.1 Infrared spectroscopy", "22.2 Mass spectrometry"],
];

const CHEM_A = [
  ["23 Chemical energetics (A Level)", "23.1 Lattice energy and Born–Haber cycles", "23.2 Enthalpies of solution and hydration", "23.3 Entropy change", "23.4 Gibbs free energy change"],
  ["24 Electrochemistry (A Level)", "24.1 Electrolysis and the Faraday constant", "24.2 Electrode potentials, cell potentials and the Nernst equation"],
  ["25 Equilibria (A Level)", "25.1 pH, Ka and buffer solutions", "25.2 Solubility product", "25.3 Partition coefficients"],
  ["26 Reaction kinetics (A Level)", "26.1 Rate equations, orders and rate constants", "26.2 Mechanisms and catalysis"],
  ["27 Group 2 (A Level)", "27.1 Thermal stability and solubility of Group 2 compounds"],
  ["28 Transition elements", "28.1 Properties and electronic configurations", "28.2 Ligands, complexes and ligand exchange", "28.3 Colour of complexes and d-orbital splitting", "28.4 Stereoisomerism in complexes", "28.5 Redox reactions and stability constants"],
  ["29 Organic chemistry (A Level)", "29.1 Naming, functional groups and optical isomerism"],
  ["30 Arenes", "30.1 Benzene and methylbenzene: electrophilic substitution"],
  ["31 Halogenoarenes", "31.1 Halogenoarenes"],
  ["32 Hydroxy compounds (A Level)", "32.1 Phenol and its reactions"],
  ["33 Carboxylic acids and derivatives (A Level)", "33.1 Acidity of carboxylic acids", "33.2 Acyl chlorides"],
  ["34 Nitrogen compounds (A Level)", "34.1 Amines, phenylamine and azo dyes", "34.2 Amides", "34.3 Amino acids, peptides and electrophoresis"],
  ["35 Polymerisation (A Level)", "35.1 Condensation polymers", "35.2 Predicting polymer type and degradable polymers"],
  ["36 Organic synthesis (A Level)", "36.1 Synthetic routes and chiral drugs"],
  ["37 Analytical techniques (A Level)", "37.1 Chromatography (TLC and GLC)", "37.2 Carbon-13 NMR spectroscopy", "37.3 Proton NMR spectroscopy"],
  ["38 Applications of chemistry (older syllabus)", "38.1 Chemistry of life: proteins, enzymes and DNA", "38.2 Applications of analytical chemistry", "38.3 Design and materials"],
];

write("chemistry-P1", CHEM_AS);
write("chemistry-P2", CHEM_AS);
// A Level papers are synoptic, so they can be labelled with AS topics too.
write("chemistry-P4", [...CHEM_AS, ...CHEM_A]);
write("chemistry-P3", [
  ["1 Quantitative experiments", "1.1 Titrations (volumetric analysis)", "1.2 Enthalpy change experiments", "1.3 Rates of reaction experiments", "1.4 Gravimetric and other quantitative experiments"],
  ["2 Qualitative analysis", "2.1 Inorganic ions and gases", "2.2 Organic functional group tests"],
]);
write("chemistry-P5", [
  ["1 Planning", "1.1 Planning an experiment: procedure, variables and safety"],
  ["2 Analysis and evaluation", "2.1 Processing data, graphs and uncertainties", "2.2 Conclusions and evaluation"],
]);

// --- Biology 9700 ------------------------------------------------------------

const BIO_AS = [
  ["1 Cell structure", "1.1 Microscopy, magnification and resolution", "1.2 Cells, organelles and prokaryotes", "1.3 Viruses"],
  ["2 Biological molecules", "2.1 Testing for biological molecules", "2.2 Carbohydrates and lipids", "2.3 Proteins", "2.4 Water"],
  ["3 Enzymes", "3.1 Mode of action of enzymes", "3.2 Factors that affect enzyme action and inhibition"],
  ["4 Cell membranes and transport", "4.1 Fluid mosaic membranes", "4.2 Movement into and out of cells"],
  ["5 The mitotic cell cycle", "5.1 Chromosomes, mitosis and the cell cycle"],
  ["6 Nucleic acids and protein synthesis", "6.1 Structure and replication of DNA", "6.2 Protein synthesis and mutation"],
  ["7 Transport in plants", "7.1 Structure of transport tissues", "7.2 Transpiration and transport mechanisms"],
  ["8 Transport in mammals", "8.1 Blood vessels and blood", "8.2 Transport of oxygen and carbon dioxide", "8.3 The heart and the cardiac cycle"],
  ["9 Gas exchange", "9.1 The gas exchange system", "9.2 Smoking and disease (older syllabus)"],
  ["10 Infectious diseases", "10.1 Infectious diseases", "10.2 Antibiotics and resistance"],
  ["11 Immunity", "11.1 The immune system", "11.2 Antibodies and vaccination"],
];
const BIO_ECOLOGY = ["21 Ecology (older syllabus)", "21.1 Ecosystems, energy flow and the nitrogen cycle"];

const BIO_A = [
  ["12 Energy and respiration", "12.1 Energy and ATP", "12.2 Respiration"],
  ["13 Photosynthesis", "13.1 Photosynthesis as an energy transfer process", "13.2 Limiting factors"],
  ["14 Homeostasis", "14.1 Homeostasis in mammals: kidneys and blood glucose", "14.2 Homeostasis in plants: stomata"],
  ["15 Control and coordination", "15.1 Nervous and hormonal control in mammals", "15.2 Muscle contraction", "15.3 Control and coordination in plants"],
  ["16 Inheritance", "16.1 Meiosis and gametes", "16.2 Genetic crosses and the chi-squared test", "16.3 Gene control"],
  ["17 Selection and evolution", "17.1 Variation", "17.2 Natural and artificial selection", "17.3 Evolution and speciation"],
  ["18 Classification, biodiversity and conservation", "18.1 Classification", "18.2 Biodiversity and sampling", "18.3 Conservation"],
  ["19 Genetic technology", "19.1 Principles of genetic technology", "19.2 Genetic technology in medicine", "19.3 Genetically modified organisms in agriculture"],
  ["20 Applications of biology (older syllabus)", "20.1 Crop plants", "20.2 Human reproduction and fertility", "20.3 Biotechnology and other applications"],
];

write("biology-P1", [...BIO_AS, BIO_ECOLOGY]);
write("biology-P2", [...BIO_AS, BIO_ECOLOGY]);
write("biology-P4", [...BIO_AS, ...BIO_A, BIO_ECOLOGY]);
write("biology-P3", [
  ["1 Investigations", "1.1 Enzyme investigations", "1.2 Osmosis, water potential and diffusion", "1.3 Food tests and other investigations"],
  ["2 Microscopy and drawing", "2.1 Drawing from slides and photomicrographs", "2.2 Measurement with graticules and magnification"],
]);
write("biology-P5", [
  ["1 Planning", "1.1 Planning an investigation: variables, method and safety"],
  ["2 Analysis and evaluation", "2.1 Processing data, graphs and statistics", "2.2 Conclusions and evaluation"],
]);

// --- Mathematics 9709 --------------------------------------------------------

write("maths-cie-P1", [
  ["1 Quadratics", "1.1 Quadratics: completing the square, discriminant and inequalities"],
  ["2 Functions", "2.1 Domain, range, composite and inverse functions", "2.2 Transformations of graphs"],
  ["3 Coordinate geometry", "3.1 Straight lines", "3.2 Circles"],
  ["4 Circular measure", "4.1 Radians, arc length and sector area"],
  ["5 Trigonometry", "5.1 Trigonometric graphs and exact values", "5.2 Identities and equations"],
  ["6 Series", "6.1 Binomial expansion", "6.2 Arithmetic and geometric progressions"],
  ["7 Differentiation", "7.1 Differentiation and the chain rule", "7.2 Tangents, normals and stationary points", "7.3 Rates of change"],
  ["8 Integration", "8.1 Integration and finding a curve's equation", "8.2 Areas and volumes of revolution"],
  ["9 Vectors (older syllabus)", "9.1 Vectors in two and three dimensions"],
]);

const PURE_23 = (withP3) => [
  ["1 Algebra", "1.1 The modulus function", "1.2 Polynomials, factor and remainder theorems", ...(withP3 ? ["1.3 Partial fractions", "1.4 Binomial expansion for rational n"] : [])],
  ["2 Logarithmic and exponential functions", "2.1 Logarithms and exponential equations", "2.2 Reducing to linear form"],
  ["3 Trigonometry", "3.1 Reciprocal functions and identities", "3.2 Addition formulae, double angles and R cos(θ ± α)"],
  ["4 Differentiation", "4.1 Product, quotient and chain rules", "4.2 Parametric and implicit differentiation"],
  ["5 Integration", "5.1 Standard integrals", ...(withP3 ? ["5.2 Substitution and integration by parts", "5.3 Integration with partial fractions"] : []), "5.4 Trapezium rule"],
  ["6 Numerical solution of equations", "6.1 Locating roots and iteration"],
  ...(withP3
    ? [
        ["7 Vectors", "7.1 Vector geometry and lines", "7.2 Planes (older syllabus)"],
        ["8 Differential equations", "8.1 Separable differential equations"],
        ["9 Complex numbers", "9.1 Complex arithmetic and the Argand diagram", "9.2 Loci in the Argand diagram", "9.3 Polynomial equations with complex roots"],
      ]
    : []),
];

write("maths-cie-P2", PURE_23(false));
write("maths-cie-P3", PURE_23(true));
write("maths-cie-M1", [
  ["1 Forces and equilibrium", "1.1 Resolving forces and equilibrium", "1.2 Friction"],
  ["2 Kinematics of motion in a straight line", "2.1 Constant acceleration", "2.2 Displacement-time and velocity-time graphs", "2.3 Variable acceleration using calculus"],
  ["3 Momentum", "3.1 Conservation of momentum and collisions"],
  ["4 Newton's laws of motion", "4.1 Newton's second law", "4.2 Connected particles and pulleys"],
  ["5 Energy, work and power", "5.1 Work and energy", "5.2 Power"],
]);
write("maths-cie-M2", [
  ["1 Motion of a projectile", "1.1 Projectiles"],
  ["2 Equilibrium of a rigid body", "2.1 Centres of mass", "2.2 Moments and equilibrium of rigid bodies"],
  ["3 Uniform motion in a circle", "3.1 Circular motion"],
  ["4 Hooke's law", "4.1 Elastic strings and springs, elastic energy"],
  ["5 Linear motion under a variable force", "5.1 Variable forces and differential equations"],
]);
write("maths-cie-S1", [
  ["1 Representation of data", "1.1 Diagrams: stem-and-leaf, box plots, histograms, cumulative frequency", "1.2 Measures of location and spread"],
  ["2 Permutations and combinations", "2.1 Permutations and combinations"],
  ["3 Probability", "3.1 Probability, conditional probability and independence"],
  ["4 Discrete random variables", "4.1 Probability distributions, expectation and variance", "4.2 Binomial and geometric distributions"],
  ["5 The normal distribution", "5.1 The normal distribution", "5.2 Normal approximation to the binomial"],
]);
write("maths-cie-S2", [
  ["1 The Poisson distribution", "1.1 The Poisson distribution", "1.2 Approximations to the binomial and Poisson"],
  ["2 Linear combinations of random variables", "2.1 Linear combinations of random variables"],
  ["3 Continuous random variables", "3.1 Probability density functions, mean, variance and median"],
  ["4 Sampling and estimation", "4.1 Sampling and the distribution of the sample mean", "4.2 Unbiased estimates and confidence intervals"],
  ["5 Hypothesis tests", "5.1 Tests for binomial and Poisson", "5.2 Tests for a normal mean", "5.3 Type I and Type II errors"],
]);

console.log("written");
