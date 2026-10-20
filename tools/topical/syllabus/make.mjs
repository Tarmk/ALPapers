// Writes the maths syllabus outlines (maths-<unit>.json) used by build.mjs.
// Follows the Pearson Edexcel IAL Mathematics specification (2018), plus the
// few areas only the legacy GCE units (C1-C4, old D1) examined, so older
// papers' questions still have a topic.
//
//   node tools/topical/syllabus/make.mjs

import { writeFileSync } from "node:fs";

const UNITS = {
  P1: [
    ["Algebra and functions", ["Indices and surds", "Quadratic functions and the discriminant", "Simultaneous equations", "Inequalities", "Curve sketching and transformations"]],
    ["Coordinate geometry", ["Straight lines"]],
    ["Trigonometry", ["Sine rule, cosine rule and area of a triangle", "Radians, arc length and sector area", "Trigonometric graphs"]],
    ["Differentiation", ["Differentiating powers of x", "Tangents and normals"]],
    ["Integration", ["Indefinite integration"]],
    ["Sequences and series", ["Arithmetic sequences and series", "Sequences and recurrence relations"]],
  ],
  P2: [
    ["Proof", ["Proof by deduction, exhaustion and counter-example"]],
    ["Algebra", ["Algebraic division, factor and remainder theorems"]],
    ["Coordinate geometry", ["Circles"]],
    ["Sequences and series", ["Binomial expansion", "Arithmetic sequences and series", "Geometric sequences and series", "Sequences and recurrence relations"]],
    ["Exponentials and logarithms", ["Laws of logarithms and exponential equations"]],
    ["Trigonometry", ["Trigonometric identities and equations", "Sine and cosine rules, radians, arcs and sectors", "Trigonometric graphs"]],
    ["Differentiation", ["Stationary points, increasing functions and optimisation"]],
    ["Integration", ["Definite integrals and areas", "The trapezium rule"]],
  ],
  P3: [
    ["Algebra and functions", ["Algebraic fractions", "Functions: domain, range, composite and inverse", "Modulus functions and transformations of graphs"]],
    ["Trigonometry", ["Reciprocal and inverse trigonometric functions", "Compound and double angle formulae", "Harmonic form R cos(x ± α) and trigonometric equations"]],
    ["Exponentials and logarithms", ["Exponential and natural logarithm functions, modelling", "Logarithmic graphs: y = axⁿ and y = kbˣ"]],
    ["Differentiation", ["Product, quotient and chain rules", "Applications of differentiation"]],
    ["Numerical methods", ["Locating roots and iteration"]],
    ["Integration", ["Integrating exponential, reciprocal and trigonometric functions"]],
  ],
  P4: [
    ["Proof", ["Proof by contradiction"]],
    ["Partial fractions", ["Partial fractions"]],
    ["Binomial expansion", ["Binomial series for any rational index"]],
    ["Parametric equations", ["Parametric equations and curves"]],
    ["Differentiation", ["Parametric differentiation", "Implicit differentiation", "Rates of change and connected rates"]],
    ["Integration", ["Integration by substitution", "Integration by parts", "Integration using partial fractions", "Areas and volumes of revolution", "Numerical integration"]],
    ["Differential equations", ["Separating variables and modelling"]],
    ["Vectors", ["Vector equations of lines, intersections and angles"]],
  ],
  S1: [
    ["Representation and summary of data", ["Measures of location and spread, coding", "Histograms, box plots and stem and leaf diagrams", "Skewness and outliers"]],
    ["Probability", ["Venn diagrams, independent and mutually exclusive events", "Conditional probability and tree diagrams"]],
    ["Correlation and regression", ["Product moment correlation coefficient", "Least squares regression"]],
    ["Discrete random variables", ["Probability distributions and cumulative distribution functions", "Expectation and variance", "Discrete uniform distribution"]],
    ["The Normal distribution", ["Normal probabilities and standardising", "Finding the mean and standard deviation"]],
    ["Mathematical modelling", ["Statistical models"]],
  ],
  S2: [
    ["The binomial distribution", ["Binomial distribution"]],
    ["The Poisson distribution", ["Poisson distribution"]],
    ["Approximations", ["Poisson approximation to the binomial", "Normal approximations to the binomial and Poisson"]],
    ["Continuous random variables", ["Probability density and cumulative distribution functions", "Mean, variance, median, mode and quartiles"]],
    ["The continuous uniform distribution", ["Continuous uniform (rectangular) distribution"]],
    ["Hypothesis testing", ["Populations, samples and sampling distributions", "Hypothesis tests and critical regions for binomial and Poisson"]],
  ],
  S3: [
    ["Combinations of random variables", ["Linear combinations of independent Normal variables"]],
    ["Sampling", ["Sampling methods"]],
    ["Estimation and confidence intervals", ["Estimators, bias and standard error", "Distribution of the sample mean and the Central Limit Theorem", "Confidence intervals"]],
    ["Hypothesis tests", ["Tests for a population mean", "Tests for the difference of two means"]],
    ["Goodness of fit", ["Goodness of fit tests", "Contingency tables"]],
    ["Correlation", ["Spearman's rank correlation", "Testing for correlation"]],
  ],
  M1: [
    ["Kinematics in a straight line", ["Constant acceleration formulae", "Velocity-time and speed-time graphs", "Vertical motion under gravity"]],
    ["Vectors in mechanics", ["Vectors: position, velocity and resultants"]],
    ["Statics of a particle", ["Equilibrium and resolving forces", "Friction"]],
    ["Dynamics of a particle", ["Newton's laws and inclined planes", "Connected particles and pulleys"]],
    ["Momentum and impulse", ["Conservation of momentum and impulse"]],
    ["Moments", ["Moments and equilibrium of rods and beams"]],
  ],
  M2: [
    ["Kinematics", ["Projectiles", "Variable acceleration (calculus and vectors)"]],
    ["Centres of mass", ["Laminas, rods and composite bodies", "Suspended and toppling bodies"]],
    ["Work, energy and power", ["Work-energy principle", "Power"]],
    ["Collisions", ["Impulse and Newton's law of restitution", "Successive collisions and impacts with walls"]],
    ["Statics of rigid bodies", ["Rigid bodies in equilibrium (ladders and rods)"]],
  ],
  M3: [
    ["Further kinematics", ["Variable acceleration in terms of displacement or time"]],
    ["Elastic strings and springs", ["Hooke's law and equilibrium", "Elastic potential energy and energy methods"]],
    ["Further dynamics", ["Variable forces, impulse and Newton's law of gravitation"]],
    ["Motion in a circle", ["Horizontal circles", "Vertical circles"]],
    ["Statics of rigid bodies", ["Centres of mass by integration", "Toppling and equilibrium of solids"]],
    ["Simple harmonic motion", ["Simple harmonic motion"]],
  ],
  D1: [
    ["Algorithms", ["Sorting and searching", "Bin packing", "Flow charts and tracing algorithms"]],
    ["Graphs and networks", ["Minimum spanning trees: Kruskal and Prim", "Shortest paths: Dijkstra and Floyd", "Planarity and Hamiltonian cycles"]],
    ["Route inspection and travelling salesperson", ["Route inspection (Chinese postman)", "Travelling salesperson: nearest neighbour and bounds"]],
    ["Critical path analysis", ["Activity networks and critical paths", "Floats, Gantt charts and scheduling"]],
    ["Linear programming", ["Formulating linear programming problems", "Graphical solution and objective lines", "The simplex algorithm"]],
    ["Matchings", ["Bipartite graphs and the maximum matching algorithm"]],
    ["Network flows", ["Flows, cuts and the labelling procedure"]],
  ],
  FP1: [
    ["Complex numbers", ["Complex arithmetic and solving equations", "Argand diagrams, modulus and argument"]],
    ["Roots of equations", ["Roots of quadratic equations"]],
    ["Numerical solution of equations", ["Interval bisection, linear interpolation and Newton-Raphson"]],
    ["Coordinate systems", ["Parabolas and rectangular hyperbolas"]],
    ["Matrix algebra", ["Matrix arithmetic, determinants and inverses", "Linear transformations"]],
    ["Series", ["Sums of powers of natural numbers"]],
    ["Proof", ["Proof by mathematical induction"]],
  ],
  FP2: [
    ["Inequalities", ["Algebraic and modulus inequalities"]],
    ["Series", ["Method of differences"]],
    ["Further complex numbers", ["Modulus-argument form and de Moivre's theorem", "Loci in the Argand diagram", "Transformations of the complex plane"]],
    ["First order differential equations", ["Integrating factors and substitutions"]],
    ["Second order differential equations", ["Second order linear differential equations"]],
    ["Maclaurin and Taylor series", ["Maclaurin and Taylor series"]],
    ["Polar coordinates", ["Polar curves, areas and tangents"]],
  ],
  FP3: [
    ["Hyperbolic functions", ["Definitions, identities and equations"]],
    ["Further coordinate systems", ["Ellipses and hyperbolas"]],
    ["Differentiation", ["Inverse trigonometric and hyperbolic functions"]],
    ["Integration", ["Standard integrals and substitutions", "Reduction formulae", "Arc length and surface area"]],
    ["Vectors", ["Vector product, lines and planes"]],
    ["Further matrix algebra", ["Eigenvalues, eigenvectors and diagonalisation", "3 × 3 matrices, inverses and transformations"]],
  ],
};

for (const [unit, topics] of Object.entries(UNITS)) {
  const out = {
    topics: topics.map(([title, subtopics], i) => ({
      id: String(i + 1),
      title,
      subtopics: subtopics.map((t, j) => ({ id: `${i + 1}.${j + 1}`, title: t })),
    })),
  };
  writeFileSync(new URL(`maths-${unit}.json`, import.meta.url), JSON.stringify(out, null, 2) + "\n");
}
console.log(`${Object.keys(UNITS).length} syllabus files`);
