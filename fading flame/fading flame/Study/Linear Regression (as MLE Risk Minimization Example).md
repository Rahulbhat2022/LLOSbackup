***

## Linear Regression: The Straight Line of Machine Learning

**[[Linear Regression (as MLE/Risk Minimization Example)]]** is one of the simplest and most fundamental algorithms in machine learning. It serves as the starting point for understanding how we can model the relationship between variables.

Think of it like trying to draw the single best straight line through a scatter plot of data points:
*   **The Data Points**: These are your observations, like the relationship between the size of a house and its price.
*   **The Line**: This is your model. It's defined by its intercept and slope (the model parameters, $\theta$).
*   **The "Best" Line**: Linear Regression provides a precise mathematical definition for what "best" means. It's the line that minimizes the average squared vertical distance from each point to the line.

### The Key Difference: A Model with Multiple Justifications

What makes Linear Regression so powerful is that it can be understood from several different theoretical perspectives, all of which lead to the exact same solution.

*   **As [[Empirical Risk Minimization]] (The Geometric View)**: This is the most intuitive approach. We define our [[Loss Functional (L(z,g))]] to be the [[Squared Error]]. The goal is simply to find the model parameters ($\theta$) that minimize the average of these squared errors over the training data. This is a direct application of the [[Learning via Minimizing Average Loss]] principle.

*   **As [[Maximum Likelihood Estimation (MLE)]] (The Probabilistic View)**: This approach starts with a statistical assumption. We assume that the data points follow a linear relationship *on average*, but are perturbed by random noise that follows a Gaussian (bell curve) distribution. Under this assumption, finding the parameters that maximize the probability of observing our data ([[Maximum Likelihood Estimation (MLE)]]) is mathematically identical to minimizing the squared error.

*   **As a Direct Calculation (The Analytical View)**: Unlike many machine learning models that require iterative optimization, the solution to Linear Regression can be calculated directly and exactly using a formula known as the [[Least-Squares Solution]].

### The Recipe (Model Formulation)

The process isn't an iterative algorithm but a direct formulation and solution.

1.  **Step 1: Assume a Linear Model**
    *   We assume that the output variable ($y$) can be approximated as a linear combination of the input features ($x$):
        $y \approx \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_d x_d$
        In vector form, this is $y \approx x^\top\theta$.

2.  **Step 2: Define the Objective**
    *   The goal is to find the optimal parameter vector $\theta$ that makes the model's predictions, $X\theta$, as close as possible to the true outcomes, $y$.

3.  **Step 3: Frame the Problem**
    *   **Risk Minimization:** We choose the [[Squared Error]] as our loss function and aim to minimize the average loss: $\operatorname{argmin}_{\theta} \|y - X\theta\|^2$.
    *   **Maximum Likelihood:** We assume the error term ($y - x^\top\theta$) is drawn from a Gaussian distribution with zero mean. Maximizing the likelihood of the data under this assumption leads to minimizing the same [[Squared Error]] objective.

4.  **Step 4: Solve for the Parameters**
    *   Because the objective function is a simple convex quadratic, we can solve for the optimal parameters directly using the [[Least-Squares Solution]].

### The Core Formulas

The model itself is a simple linear equation:

**Prediction:** $f(x; \theta) = x^\top\theta$

The parameters are found using the direct formula:

**Solution:** $\mathbf{\hat{\theta}(T) = (X^\top X)^{-1}X^\top y}$

### Why Use Linear Regression?

*   **Pros**:
    *   **Simple and Interpretable:** It's easy to understand and the model's coefficients directly tell you how much each feature influences the outcome.
    *   **Computationally Efficient:** The direct [[Least-Squares Solution]] is very fast for datasets that aren't excessively wide (i.e., have a huge number of features).
    *   **No Hyperparameters:** In its basic form, there are no parameters to tune, making it very straightforward to apply.
    *   **Excellent Baseline:** It provides a fantastic starting point for any [[Regression]] problem. If more complex models can't beat Linear Regression, they are likely not worth the extra complexity.

*   **Cons**:
    *   **Linearity Assumption:** Its primary weakness is that it assumes the relationship between features and the outcome is linear. This assumption often does not hold for complex, real-world problems.
    *   **Sensitive to [[Outliers]]:** Because the errors are squared, a single data point that is very far from the trend can have a disproportionately large effect on the final solution.