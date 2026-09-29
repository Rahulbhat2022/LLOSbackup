***

## Maximum Likelihood Estimation (MLE): Finding the Most Plausible Explanation

**[[Maximum Likelihood Estimation (MLE)]]** is a foundational method in statistics and machine learning for estimating the parameters of a model. The core principle is simple yet powerful: find the model parameters that make the observed data most probable.

Think of it like a detective trying to identify a suspect based on evidence:
*   **The Evidence**: This is your observed [[Training Data]].
*   **The Suspects**: These are all the possible sets of parameters ($\theta$) for your chosen model.
*   **The Question**: The detective asks, "If suspect A were the culprit, how likely would it be to see this exact set of evidence? What about for suspect B? Or C?"
*   **MLE**: The detective concludes that the most plausible culprit is the suspect for whom the evidence is the *most likely* or least surprising. MLE selects the model parameters ($\theta$) that maximize the likelihood of having observed your actual data.

### The Key Difference: Minimizing Error vs. Maximizing Probability

The core idea that separates MLE from many other methods is its probabilistic perspective.

*   **[[Least-Squares Solution]]**: This method is geometric. It finds the line that minimizes the sum of the squared physical distances (the errors) to the data points. It doesn't inherently make any probabilistic assumptions.
*   **[[Learning via Minimizing Average Loss]]**: This is a general framework for finding parameters that make some chosen error metric small.
*   **[[Maximum Likelihood Estimation (MLE)]]**: This method is probabilistic. It starts by assuming the data comes from a specific probability distribution family (e.g., a [[Gaussian Distribution Models]]). It then asks, "What must the parameters of that distribution be to make our observed data the most likely outcome?"

Interestingly, these two approaches often converge. The famous [[ML and Least Squares Connection]] shows that minimizing the [[Squared Error]] in a [[Linear Regression (as MLE/Risk Minimization Example)]] model is mathematically equivalent to maximizing the likelihood under the assumption that the errors are Gaussian.

### The Recipe (Algorithm Steps)

The process of finding the maximum likelihood estimate follows a clear path.

1.  **Step 1: Assume a Probabilistic Model**
    *   Choose a [[Parametric Model]] and assume your data points are generated from a specific probability distribution, $p(\text{data}|\theta)$, which depends on the parameters $\theta$. For example, in [[Logistic Regression (as MLE/Risk Minimization Example)]], you assume the outcome follows a Bernoulli distribution.

2.  **Step 2: Write Down the Likelihood Function**
    *   For your entire dataset, write down the joint probability of observing all your data points. Assuming the data points are independent, this is the product of the individual probabilities:
        $L(\theta | \text{data}) = \prod_{i=1}^n p(y_i | x_i; \theta)$

3.  **Step 3: Switch to the Log-Likelihood**
    *   Maximizing a function is the same as maximizing its logarithm. Taking the log is a mathematical convenience that turns the product into a sum, which is much easier to work with:
        $\ln L(\theta | \text{data}) = \sum_{i=1}^n \ln p(y_i | x_i; \theta)$

4.  **Step 4: Maximize the Log-Likelihood**
    *   Find the parameters $\hat{\theta}$ that maximize this log-likelihood sum. This is typically done by taking the derivative with respect to $\theta$, setting it to zero, and solving.

5.  **Step 5: Connect to Loss Minimization**
    *   Maximizing the log-likelihood is equivalent to minimizing the **[[Negative Log Likelihood]]**. This reframes the MLE problem as a [[Risk Minimization Problem]], allowing it to fit neatly into the general framework of [[Learning via Minimizing Average Loss]].

### The Core Formula

While the goal is to maximize the likelihood, in practice, we almost always minimize the average [[Negative Log Likelihood]], which serves as the [[Loss Functional (L(z,g))]]:

$\mathbf{\hat{\theta} = \operatorname{argmin}_{\theta} -\frac{1}{n} \sum_{i=1}^n \ln p(y_i|x_i;\theta)}$

This formula represents the average "surprise" of seeing the data given the model. MLE finds the parameters that make the data, on average, the least surprising.

### Why Use MLE?

*   **Pros**:
    *   **Principled Framework:** It provides a well-defined, statistically sound framework for estimating parameters.
    *   **Good Statistical Properties:** Under general conditions, MLE estimators are consistent (they converge to the true parameter values as data increases) and efficient (they have the lowest possible variance among unbiased estimators).
    *   **Generality:** It is a very general principle that can be applied to a vast range of models, from simple distributions to complex machine learning models like [[Logistic Regression (as MLE/Risk Minimization Example)]].

*   **Cons**:
    *   **Requires Distributional Assumption:** Its biggest weakness is that you *must* assume a specific probability distribution for your data. If your assumption is wrong, the resulting parameter estimates may be biased or incorrect.
    *   **Computational Complexity:** For many complex models, maximizing the likelihood function does not have a simple [[Closed-Form Expression]] and requires iterative optimization algorithms, which can be computationally intensive.