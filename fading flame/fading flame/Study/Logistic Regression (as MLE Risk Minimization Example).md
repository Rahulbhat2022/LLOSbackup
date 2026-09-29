***

## Logistic Regression: Predicting Probabilities

**[[Logistic Regression (as MLE/Risk Minimization Example)]]** is a fundamental algorithm for [[Classification]] problems. While its name includes "regression," its purpose is not to predict a continuous number but rather to predict the *probability* that an input belongs to a particular category.

Think of it as a switch that's not just on or off, but has a dimmer. It takes in evidence and outputs a value between 0 and 1, representing the likelihood of a specific outcome.
*   **The Data Points**: These are your observations with a binary outcome, like emails labeled as "spam" (1) or "not spam" (0).
*   **The "S" Curve**: This is your model, defined by the [[Logistic Function (G(x))]]. It takes any linear combination of features and squashes the output to be between 0 and 1.
*   **The "Best" Curve**: Logistic Regression finds the parameters ($\theta$) for the S-curve that best separate the classes by maximizing the probability of observing the correct labels in the training data.

### The Key Difference: A Probabilistic Classifier, Not a Value Predictor

Like Linear Regression, Logistic Regression can be justified from multiple perspectives, but its core function and solution method are distinct.

*   **As [[Maximum Likelihood Estimation (MLE)]] (The Probabilistic View)**: This is the most natural way to understand it. We start with a statistical assumption: the binary outcome ($y$) follows a Bernoulli distribution (a coin flip). The probability of "heads" (i.e., $y=1$) is modeled by passing a linear function of the inputs through the [[Logistic Function (G(x))]]. MLE then finds the parameters ($\theta$) that maximize the likelihood of observing our specific set of training labels.

*   **As [[Empirical Risk Minimization]] (The Loss Minimization View)**: This perspective frames the problem differently but arrives at the same solution. Maximizing the log-likelihood is mathematically identical to minimizing the **[[Negative Log Likelihood]]**, which is also known as "Logistic Loss" or "Cross-Entropy Loss." This allows us to use the general framework of [[Learning via Minimizing Average Loss]] to train the model.

*   **No Direct Calculation**: Unlike [[Linear Regression (as MLE/Risk Minimization Example)]], there is no direct [[Least-Squares Solution]] or [[Closed-Form Expression]] for the optimal parameters. The solution must be found using iterative optimization algorithms like gradient descent.

### The Recipe (Model Formulation)

The process is an iterative algorithm driven by a probabilistic objective.

1.  **Step 1: Assume a Probabilistic Model**
    *   We model the probability of the positive class ($y=1$) using the [[Logistic Function (G(x))]] applied to a linear combination of the input features ($x$):
        $P(y=1 | x; \theta) = \frac{1}{1 + e^{-x^\top\theta}}$

2.  **Step 2: Define the Objective**
    *   The goal is to find the optimal parameter vector $\theta$ that maximizes the joint probability (the likelihood) of observing the true labels in the training data.

3.  **Step 3: Frame the Problem**
    *   **Maximum Likelihood:** We assume each label $y_i$ is drawn from a Bernoulli distribution with a probability given by our model. We write down the likelihood function for the entire dataset and aim to maximize it.
    *   **Risk Minimization:** We choose the [[Negative Log Likelihood]] as our [[Loss Functional (L(z,g))]]. The objective is to find the parameters that minimize the average of this loss over the training data: $\operatorname{argmin}_{\theta} \sum_{i} -[y_i \ln(p_i) + (1-y_i) \ln(1-p_i)]$, where $p_i$ is the model's predicted probability for the i-th example.

4.  **Step 4: Solve for the Parameters**
    *   Because there is no direct formula, we use an iterative optimization algorithm (like gradient descent) to find the parameters $\theta$ that minimize the [[Negative Log Likelihood]] loss function.

### The Core Formulas

The model predicts the probability of the positive class:

**Prediction (Probability):** $p(x; \theta) = \frac{1}{1 + e^{-x^\top\theta}}$

The objective is to minimize the average [[Negative Log Likelihood]] (Logistic Loss):

**Objective:** $\mathbf{\hat{\theta} = \operatorname{argmin}_{\theta} -\frac{1}{n} \sum_{i=1}^n \left[ y_i \ln(p(x_i;\theta)) + (1-y_i) \ln(1-p(x_i;\theta)) \right]}$

### Why Use Logistic Regression?

*   **Pros**:
    *   **Probabilistic Interpretation:** It outputs well-calibrated probabilities, which is more informative than a simple class prediction.
    *   **Interpretable:** The model's coefficients can be interpreted in terms of how they affect the log-odds of the outcome.
    *   **Efficient and Simple:** It is computationally inexpensive to train and serves as an excellent baseline model for any binary [[Classification]] task.
    *   **Convex Loss Function:** The [[Negative Log Likelihood]] is a [[Convex Function]], which guarantees that optimization algorithms can find the single global minimum.

*   **Cons**:
    *   **Linearity Assumption:** Its primary weakness is that it assumes the decision boundary between classes is linear. It cannot capture more complex, non-linear relationships.
    *   **Sensitive to [[Outliers]]:** Outlying data points can have a significant influence on the position of the decision boundary.