# Probability & Statistics - Complete Exam Guide

## 1. Random Variables: Foundations

### Core Concept: What is a Random Variable?

A **[[Random Variable (RV) (X:Ω→R)]]** maps outcomes from experiments to real numbers. It's the bridge between abstract probability spaces and numerical analysis.

**Key Types:**

- **[[Discrete Random Variable]]**: Countable outcomes (coin flips, dice)
    
    - Described by **[[Probability Mass Function (PMF) (f(x))]]**: $f(x) = P(X=x)$
    - Examples: **[[Bernoulli RV]]** (0 or 1), **[[Equiprobable de Moivre(k) RV]]** (uniform over k values)
- **[[Continuous RV]]**: Uncountable outcomes (heights, wind speeds)
    
    - Described by **[[Probability Density Function (PDF) (f(x))]]**: probability via integration
    - Key example: **[[Standard Normal / Standard Gaussian RV (Z~N(0,1))]]** (the bell curve)

**Distribution Function:** Both types have a **[[Distribution Function (DF) / Cumulative Distribution Function (CDF) (F(x))]]**: $F(x) = P(X ≤ x)$

### Core Concept: Characterizing Random Variables

**[[Expectation / Expected Value / Mean / First Moment (E(X))]]**: The "center" or weighted average

- For discrete: $E[X] = \sum_x x \cdot f(x)$
- For continuous: $E[X] = \int x \cdot f(x)dx$

**[[Variance (V(X))]]**: Measures spread around the mean

- $V(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$
- **[[Standard Deviation (sd(X))]]** = $\sqrt{V(X)}$ (same units as X)

### Core Concept: Transformations

When you apply a function $g$ to a random variable $X$, you get a new random variable $Y = g(X)$.

**[[Law of the Unconscious Statistician]]**: You can calculate $E[g(X)]$ using the original distribution of $X$:

- $E[g(X)] = \sum_x g(x) \cdot f_X(x)$ (discrete)
- $E[g(X)] = \int g(x) \cdot f_X(x)dx$ (continuous)

**Methods for finding new distributions:**

1. **[[Direct Method (for Transformations)]]**: Find CDF of $Y$, then differentiate (or take differences)
2. **[[Change of Variable Formula]]**: For continuous transformations using Jacobian

**Key Inequality:** **[[Jensen's Inequality]]**: For convex $\phi$: $\phi(E[X]) ≤ E[\phi(X)]$

---

## 2. Multivariate Random Variables & Conditioning

### Core Concept: Joint Distributions

**[[Random Vectors (RVs)]]** are vectors of random variables analyzed together.

**[[Joint Distribution Function (JDF) / Joint Cumulative Distribution Function (JCDF)]]**:

- Gives $P(X_1 ≤ x_1, X_2 ≤ x_2, ...)$
- For discrete: **[[Joint Probability Mass Function (JPMF)]]**
- For continuous: **[[Joint Probability Density Function]]**

**[[Marginal Distribution]]**: The distribution of one variable ignoring others

- Obtain by integrating/summing over other variables

### Core Concept: Independence

**[[Independence of Two RVs]]**: $X$ and $Y$ are independent if: $$F_{X,Y}(x,y) = F_X(x) \cdot F_Y(y)$$

Equivalently: knowing $Y$ tells you nothing about $X$.

**Critical distinction:**

- **[[Pairwise Independence]]**: Every pair is independent
- **[[Jointly Independent]]**: Full independence structure
- **Pairwise does NOT imply joint independence!**

### Core Concept: Conditional Probability & Distributions

**[[Conditional Probability (P(A|B))]]**: $P(A|B) = \frac{P(A \cap B)}{P(B)}$

**[[Conditional PDF or PMF (fX|Y(x|y))]]**: The distribution of $X$ given we know $Y=y$

- For discrete: $f_{X|Y}(x|y) = \frac{P(X=x, Y=y)}{P(Y=y)}$
- For continuous: $f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}$

**[[Conditional Expectation (E[X|G])]]**: Best prediction of $X$ given information $\mathcal{G}$

**[[Tower Property of Expectation]]**: $E[E[X|Y]] = E[X]$

- Average of conditional expectations equals unconditional expectation

**Key Theorems:**

- **[[Bayes' Rule / Bayes' Theorem]]**: Update beliefs with new evidence $$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$ Where $P(A)$ is **[[Prior Probability]]** and $P(A|B)$ is **[[Posterior Probability]]**
    
- **[[Total Probability Theorem]]**: $P(B) = \sum_i P(B|A_i)P(A_i)$ for partition ${A_i}$
    

### Core Concept: Covariance and Correlation

For 2D random variables, the **empirical covariance matrix** is: $$\text{Cov}(X,Y) = E[(X-E[X])(Y-E[Y])]$$

For vectors $\mathbf{X} = (X_1, X_2)$: $$\Sigma = \begin{pmatrix} V(X_1) & \text{Cov}(X_1,X_2) \ \text{Cov}(X_1,X_2) & V(X_2) \end{pmatrix}$$

---

## 3. Concentration, Risk and Estimation

### Core Concept: Concentration Inequalities

These bound how far random variables stray from their expected values.

**[[Markov's Inequality]]**: For non-negative $X$: $$P(X ≥ a) ≤ \frac{E[X]}{a}$$

**[[Chebychev's Inequality]]**: For any $X$: $$P(|X - E[X]| ≥ k) ≤ \frac{V(X)}{k^2}$$

**[[Hoeffding's Inequality (Simple Case)]]**: For bounded independent variables, gives exponential concentration: $$P(|\bar{X}_n - E[X]| ≥ \epsilon) ≤ 2\exp(-2n\epsilon^2/c^2)$$

**Why it matters:** Shows sample means concentrate around true means—foundation of statistics!
	
**Special Classes:**

- **[[Sub-Gaussian RV]]**: Tail decays like Gaussian (strongest concentration)
- **[[Sub-Exponential RV]]**: Tail decays exponentially (broader than sub-Gaussian)
- Bounded RVs are sub-Gaussian; sub-Gaussian RVs are sub-Exponential

### Core Concept: Convergence

Multiple ways a sequence of random variables $X_n$ can approach $X$:

1. **[[Convergence in Distribution (Weakly, or in Law) (Xn⇝X)]]**: CDFs converge
2. **[[Convergence in Probability (XnPX)]]**: $P(|X_n - X| > \epsilon) → 0$
3. **[[Convergence Almost Surely (or with Probability 1 / Strongly) (Xna.s.X)]]**: $X_n(\omega) → X(\omega)$ for almost all $\omega$
4. **[[Convergence in Lp / Mean-Square Convergence (L2)]]**: $E[|X_n - X|^p] → 0$

**Hierarchy:** Almost sure ⟹ in probability ⟹ in distribution

### Core Concept: Fundamental Limit Theorems

**[[Law of Large Numbers (LLN)]]**: Sample averages converge to expected value $$\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{P} E[X]$$

**[[Central Limit Theorem (CLT)]]**: Normalized sums approach normal distribution $$\frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0,1)$$

**Why it matters:** Explains why normal distributions appear everywhere! Foundation for inference.

### Core Concept: Risk and Loss

**[[Loss Functional (L(z,g))]]**: Penalty for wrong predictions

- **[[0-1 Loss Function]]**: Loss = 0 if correct, 1 if wrong (classification)
- **[[Squared Error]]**: $(y - \hat{y})^2$ (regression)
- **[[Logistic Loss]]**: $\ln[1+\exp(-yf(x))]$ (classification)

**[[Risk (R(g)) (Expected Loss)]]**: Average loss over true distribution $$R(g) = E[L(Z, g)]$$

**[[Risk Minimization Problem]]**: Find model minimizing risk

**[[Empirical Risk Minimization]]**: Minimize average loss on training data (practical approximation) $$\hat{R}_n(g) = \frac{1}{n}\sum_{i=1}^n L(z_i, g)$$

### Core Concept: Point Estimation

**[[Point Estimator (Θ^n)]]**: Use data to estimate unknown parameter $\theta$

**Key properties:**

- **[[Estimator Bias (bias(Θ^n))]]**: $E[\hat{\Theta}_n] - \theta$
    - Unbiased if bias = 0
- **[[Standard Error (se(Θ^n))]]**: Standard deviation of estimator
- **[[Mean Squared Error (MSE)]]**: Average squared error

**[[MSE-Bias-Variance Relationship]]**: $$MSE = \text{Variance} + \text{Bias}^2$$

**[[Asymptotic Consistency]]**: $\hat{\Theta}_n \xrightarrow{P} \theta$ as $n → ∞$

- Requires both bias → 0 and standard error → 0

**Example:** Sample mean $\bar{X}_n$ is unbiased and consistent for $E[X]$

**[[Empirical Distribution Function (F^n(x))]]**: Step function estimator of true CDF

- Unbiased and consistent
- **[[Dvoretzky-Kiefer-Wolfowitz (DKW) Inequality]]**: Provides uniform concentration bound

---

## 4. Maximum Likelihood Estimation (MLE)

### Core Concept: The Likelihood Principle

**[[Maximum Likelihood Estimation (MLE)]]**: Choose parameters that maximize the probability of observing the data.

For i.i.d. data $x_1, ..., x_n$ from distribution with parameter $\theta$: $$L(\theta) = \prod_{i=1}^n f(x_i; \theta)$$

Equivalently, minimize **[[Negative Log Likelihood]]**: $$\ell(\theta) = -\sum_{i=1}^n \ln f(x_i; \theta)$$

### Core Concept: MLE as Risk Minimization

MLE is equivalent to **[[Risk Minimization Problem]]** using **[[Negative Log Likelihood]]** loss, also called **[[Average Surprisal]]**.

**Connection to risk:** $$R(\theta) = E[-\ln p(Y|X;\theta)]$$

Global minimum achieved at true parameter $\theta^*$.

### Practical Implementation

**Analytical MLE (when possible):**

1. Write likelihood $L(\theta)$ or log-likelihood $\ell(\theta)$
2. Take derivative: $\frac{d\ell}{d\theta} = 0$
3. Solve for $\theta$
4. Verify it's a minimum (check second derivative)

**Numerical MLE (general case):** Use `scipy.optimize.minimize` with:

- Initial parameter guess
- Bounds on parameters (if constrained)
- Method (e.g., 'L-BFGS-B', 'cg')

**Example - Normal Distribution:** For $X \sim N(\mu, \sigma^2)$, MLE gives:

- $\hat{\mu} = \bar{X}$ (sample mean)
- $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i - \bar{X})^2$ (sample variance)

---

## 5. Random Variable Generation

### Core Concept: Pseudo-Random Number Generation

**[[Pseudo-randomness]]**: Deterministic algorithm producing numbers that appear random.

**[[UPRNG (Uniform Pseudo Random Number Generator)]]**: Generates uniform [0,1] numbers.

### Core Concept: Linear Congruential Generator (LCG)

**[[Congruential Generators]]**: $X_{n+1} = (aX_n + c) \mod M$

**[[Hull–Dobell Theorem]]**: For full **[[Period]]** = M, need:

1. $c$ and $M$ are coprime
2. $a-1$ divisible by all prime factors of $M$
3. If $M$ divisible by 4, then $a-1$ divisible by 4

**[[Random Seed]]**: Initial value $X_0$ determining entire sequence

### Core Concept: Transforming Uniform to Other Distributions

**[[Inversion Sampling Method]]**:

1. Generate $U \sim \text{Uniform}(0,1)$
2. Return $X = F^{-1}(U)$
3. Then $X \sim F$

**[[Accept-Reject Sampler (Algorithm 1)]]**: Sample from **[[Target Density]]** $f$ using simpler **[[Sampling Density]]** $g$:

1. Generate $X \sim g$
2. Generate $U \sim \text{Uniform}(0,1)$
3. Accept if $U ≤ \frac{f(X)}{Mg(X)}$ where $M = \sup_x \frac{f(x)}{g(x)}$
4. Repeat until accepted

**[[Box-Muller]]**: Generate standard normals from uniform: $$Z_1 = \sqrt{-2\ln U_1}\cos(2\pi U_2)$$ $$Z_2 = \sqrt{-2\ln U_1}\sin(2\pi U_2)$$

---

## 6. Markov Chains

### Core Concept: Markov Property

**[[Finite Markov Chain]]**: Sequence where future depends only on present, not past.

**[[Markov Chain Condition]]**: $$P(X_{t+1}|X_t, X_{t-1},...,X_0) = P(X_{t+1}|X_t)$$

### Core Concept: Transition Mechanics

**[[Transition Matrix (P)]]**: Square matrix where $P_{ij}$ = probability of moving from state $i$ to $j$

- Rows sum to 1
- All entries ≥ 0

**[[t-Step Transition Matrix (Pt)]]**: $P^t$ gives probabilities after $t$ steps

- **[[Semigroup]]** property: $P^s P^t = P^{s+t}$

**[[Homogeneous Markov Chain]]**: Transition matrix doesn't change over time

### Core Concept: Long-Term Behavior

**[[Stationary Distribution (π)]]**: Distribution unchanged after one step $$\pi P = \pi$$

**Key properties for convergence:**

- **[[Irreducible Markov Chain]]**: Can reach any state from any other
    - States **[[Communicates (si -> sj)]]** if paths exist both ways
- **[[Aperiodic Markov Chain]]**: No cyclical patterns
    - **[[Period (of a state)]]**: GCD of return times

**[[Markov Chain Convergence Theorem]]**: If irreducible + aperiodic, then: $$P^t → \text{matrix with all rows equal to } \pi$$

**[[Return Times (T(x))]]**: Expected steps to return to state $x$

### Applications

**[[PageRank]]**: Uses **[[Stationary Distribution (π)]]** of **[[Random Walk on a Connected Undirected Graph]]** representing the web

**[[Random Mapping Representation (RMR)]]**: Express chain as sequence of random functions

---

## 7. Classification

### Core Concept: The Classification Problem

**Goal:** Learn a **[[Classification Rule (h(X))]]** that maps features to labels

**[[Pattern Recognition Model (Classification)]]**: Model designed to classify data into categories

### Core Concept: Optimal Classification

**[[Bayes Rule (Classification)]]**: Optimal classifier for **[[0-1 Loss Function]]**: $$f_0(x) = \arg\max_y P(y|x)$$

This minimizes **[[Risk (R(g)) (Expected Loss)]]** = probability of incorrect classification.

Equivalently (using Bayes' theorem): $$f_0(x) = \arg\max_y P(x|y)P(y)$$

This is the **[[Determining Best Classifier (p(x l y) form - Chain Rule)]]** approach.

### Core Concept: Linear Classifiers

**[[Linear Classifiers]]**: Decision based on linear combination of features

- **[[Linear Decision Function]]**: $f(x) = \text{sign}(w^\top x + b)$
- Decision boundary is a hyperplane
- **[[Linear Separator]]**: Hyperplane perfectly separating classes

**[[Perceptrons]]**: Simple linear classifier with iterative learning

- **[[Perceptron Algorithm]]**: Update weights for each misclassified point
- Guaranteed to converge if data is **linearly separable**

### Core Concept: Kernelization

**Problem:** What if data isn't linearly separable?

**[[Kernelization]]**: Implicitly map to higher dimension where it IS separable

**[[Kernel Function (k(x, y))]]**: Computes inner product in feature space without explicit mapping

**Common kernels:**

- **[[Linear Kernel]]**: $k(x,y) = x^\top y$
- **[[Polynomial Kernel]]**: $k(x,y) = (x^\top y + c)^d$
- **[[Radial Basis Function Kernel]]**: $k(x,y) = \exp(-\gamma|x-y|^2)$

**Key:** **[[Kernel Matrix (K)]]** must be symmetric and positive semi-definite

### Core Concept: Logistic Regression

**[[Logistic Regression (as MLE/Risk Minimization Example)]]**: Model probabilities using **[[Logistic Function (G(x))]]**: $$G(z) = \frac{1}{1+\exp(-z)} = \frac{\exp(z)}{1+\exp(z)}$$

**Model:** $P(Y=1|X) = G(\beta_0 + \beta^\top X)$

**[[Log-Odds Ratio]]**: $\ln\left(\frac{P(Y=1|X)}{P(Y=0|X)}\right) = \beta_0 + \beta^\top X$

**Loss function (Logistic Loss):** $$\ell(\beta) = -\sum_{i=1}^n [y_i \ln G(f(x_i)) + (1-y_i)\ln(1-G(f(x_i)))]$$

where $f(x_i) = \beta_0 + \beta^\top x_i$

### Core Concept: Evaluation Metrics

**Train-Test Split:**

- **[[Training Set]]**: Learn parameters
- **[[Validation Data]]** / **[[Testing Set / Held Out Testing Set]]**: Evaluate **[[Generalization]]**
- **Calibration set**: Adjust probability estimates

**Split strategies:**

- **[[Hold-out Method]]**: Single train/test split (high variance)
- **[[k-Fold Cross-Validation]]**: Systematic k-way splitting (more robust)

**Metrics:**

- **[[Precision]]**: Of predicted positives, how many were correct? $$\text{Precision} = \frac{TP}{TP + FP}$$
- **[[Recall]]** / **[[Sensitivity]]**: Of actual positives, how many did we find? $$\text{Recall} = \frac{TP}{TP + FN}$$
- **Accuracy**: Overall proportion correct

**Critical:** Test set must be independent and used only once for valid guarantees

### Core Concept: Probability Calibration

**Problem:** Model outputs may not be well-calibrated probabilities.

**Calibration error:** $$\text{CalError} = \sqrt{E[|E[Y|f(X)] - f(X)|^2]}$$

**Solution:** Train a calibration model (e.g., Decision Tree) on:

- Input: Model predictions on calibration set
- Output: Actual labels

**Pipeline:**

1. Train classifier on training data
2. Get predictions on calibration data
3. Train calibrator: calibration labels → calibrated probabilities
4. Final predictions: classifier → calibrator → calibrated probabilities

---

## 8. High Dimension & PCA/SVD

### Core Concept: Geometry in High Dimensions

**[[High Dimensional Annulus Theorem]]**: In high dimensions, most volume is near the surface

- Volume of **[[Unit Ball (B1)]]** concentrates in thin shell near radius 1
- **[[Unit Sphere (S1)]]**: Surface of unit ball

**[[Spherical Gaussian Length Concentration]]**: For $d$-dimensional Gaussian, $|Z|^2$ concentrates around $d$

**Why it matters:**

- Intuition from 2D/3D fails in high dimensions
- "Curse of dimensionality" for many algorithms
- Motivates dimensionality reduction techniques like PCA/SVD

**[[Uniform at Random from the Unit Sphere (Z ~ Uniform(S1))]]**: Uniform distribution on sphere surface

**[[Rotationally Symmetric (function)]]**: Value depends only on distance from origin

---

## Key Cross-Cutting Concepts

### i.i.d. Assumption

**[[i.i.d. Sequence (Independent and Identically Distributed)]]**: Foundation of most statistical theory

- **Independent**: observations don't affect each other
- **Identically distributed**: all from same distribution

### The Bias-Variance Tradeoff

**[[Decomposition of Squared Error (Regression)]]**: $$\bar{E}_{new} = \text{Bias}^2 + \text{Variance} + \text{Irreducible noise}$$

- Simple models: high bias, low variance (underfit)
- Complex models: low bias, high variance (overfit)
- **Goal:** Balance via model selection or **[[Regularization]]** (e.g., **[[Ridge Regression Solution]]** with L2 penalty)

### Non-Parametric vs Parametric

**[[Parametric Model]]**: Assume specific form (e.g., Gaussian with mean μ, variance σ²)

- Examples: Linear regression, logistic regression
- **[[Least-Squares Solution]]**: Closed-form for linear regression
- **[[Ridge Regression Solution]]**: Regularized version

**[[Non-Parametric Model]]**: Let data determine form

- Examples: **[[k-NN Classifier]]**, **[[Empirical Distribution Function (F^n(x))]]**
- More flexible but needs more data
- **[[k-NN Classifier]]**: Classify by majority vote among k nearest neighbors

### Model Selection and Validation

**[[Method Evaluation]]**: Estimating model performance

**Approaches:**

1. **[[Hold-out Method]]**: Simple train/test split
    
    - Pros: Fast, simple
    - Cons: High variance, wastes data
2. **[[k-Fold Cross-Validation]]**: Systematic k-way splitting
    
    - Estimate: $E_{k-fold} = \frac{1}{k}\sum_{\ell=1}^k E_{hold-out}(\hat{\theta}(T_\ell))$
    - Pros: More robust, uses all data
    - Cons: Computationally expensive

### Computational Considerations

**[[Vectorization]]**: Use array operations instead of loops

- Critical for efficiency with large datasets
- Matrix operations in NumPy/similar libraries

**Optimization:**

- Use `scipy.optimize` for MLE
- Consider numerical stability
- Initial values and bounds matter

**Data handling:**

- CSV files with pandas
- Feature engineering (e.g., angles → coordinates)
- Data preprocessing and cleaning

---

## Essential Proof Techniques & Tools

### Key Inequalities

1. **[[Markov's Inequality]]**: $P(X ≥ a) ≤ E[X]/a$
2. **[[Chebychev's Inequality]]**: $P(|X-E[X]| ≥ k) ≤ V(X)/k^2$
3. **[[Hoeffding's Inequality (Simple Case)]]**: Exponential concentration for bounded variables
4. **[[Jensen's Inequality]]**: For convex $\phi$: $\phi(E[X]) ≤ E[\phi(X)]$
5. **[[Hölders Inequality]]**: Relates products to individual powers
6. **[[Boole's Inequality (Union Bound)]]**: $P(\bigcup A_i) ≤ \sum P(A_i)$
7. **[[Bonferroni Correction]]**: Adjust for multiple comparisons

### Important Formulas

**Probability basics:**

- **[[Inclusion-Exclusion Principle]]**: Count elements in unions
- **[[Bayes' Rule / Bayes' Theorem]]**: $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$
- **[[Total Probability Theorem]]**: $P(B) = \sum_i P(B|A_i)P(A_i)$

**Estimation:**

- **[[MSE-Bias-Variance Relationship]]**: $MSE = \text{Var} + \text{Bias}^2$
- Sample mean variance: $V(\bar{X}) = \sigma^2/n$

**Linear models:**

- **[[Least-Squares Solution]]**: $\hat{\theta} = (X^\top X)^{-1}X^\top y$
- **[[Ridge Regression Solution]]**: $\hat{\theta} = (X^\top X + \lambda I)^{-1}X^\top y$

---

## Study Strategy

**For each concept, master these five dimensions:**

1. **Definition**: Can I state it precisely?
2. **Intuition**: What does it mean conceptually?
3. **Connection**: How does it relate to other concepts?
4. **Application**: When/how would I use this?
5. **Computation**: Can I calculate/implement it?

**Priority order for deep understanding:**

**Tier 1 (Absolute essentials):**

- Random variables, expectation, variance
- Concentration inequalities (Markov, Chebychev, Hoeffding)
- LLN and CLT
- Independence vs conditioning
- Bayes' rule and total probability

**Tier 2 (Core theory):**

- Risk minimization framework
- Bias-variance tradeoff
- MLE principle and computation
- Markov chains (transitions, stationary distribution)
- Classification (Bayes rule, 0-1 loss)

**Tier 3 (Practical ML):**

- Random number generation (LCG, accept-reject)
- Linear classifiers and kernels
- Logistic regression
- Model evaluation (train/test, cross-validation)
- Calibration

**Tier 4 (Advanced topics):**

- High-dimensional geometry
- Convergence types
- Non-parametric estimation
- Covariance structures

**Exam preparation tips:**

- Practice computing MLEs both analytically and numerically
- Work through conditional probability problems with multiple events
- Understand when to use which concentration inequality
- Be able to implement basic algorithms (LCG, accept-reject, perceptron)
- Know how to split data properly for training/validation/testing
- Practice working with real data (CSV files, pandas, numpy)