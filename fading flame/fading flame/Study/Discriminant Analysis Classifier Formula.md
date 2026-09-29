***

## Discriminant Analysis: Classifying by Modeling the Data's Shape

The **[[Discriminant Analysis Classifier Formula]]** is the practical, ready-to-use recipe that results from applying a specific statistical assumption to the generative theory of classification. It's a powerful method that works by building a full "profile" or model of what the data for each class looks like.

Think of it as a quality control expert trying to identify the factory that produced a particular machine part:
*   **The Part**: This is your input data point, $x$.
*   **The Factories**: These are the possible classes, $y$.
*   **The Expert's Knowledge**: The expert has detailed blueprints for the parts from each factory. They know that each factory produces parts with a specific average size ($\mu_y$) and a characteristic pattern of variation in their dimensions (the covariance matrix, $\Sigma_y$). They also know the overall production rate of each factory (the prior probability, $\pi_y$).
*   **The Decision**: To identify the part's origin, the expert doesn't just compare it to a template. They calculate how probable it is that each factory's specific manufacturing process would produce a part with these exact dimensions. The part is assigned to the factory for which this probability is highest.

### The Key Difference: From Abstract Theory to Concrete Formula

This method is the direct implementation of the [[Determining Best Classifier (p(x l y) form - Chain Rule)]] principle under a key assumption.

*   **The Generative Principle**: This is the abstract idea that we should model $p(x|y)$ and $p(y)$ and combine them. It doesn't tell us *how* to model them.
*   **[[Discriminant Analysis]]**: This method makes a specific, powerful assumption: that the [[Class-Conditional Input Distributions]] ($p(x|y)$) are multivariate Gaussian (bell-shaped) distributions. By plugging the formula for a Gaussian distribution into the generative principle and simplifying, we get a concrete mathematical expression that can be directly calculated and minimized.

### The Recipe (The Derivation and Application)

The process involves estimating the "shape" of each class and then using the formula to classify new points.

1.  **Step 1: Assume Gaussian Distributions**
    *   The core assumption is that for any given class $y$, the features $x$ are distributed according to a multivariate Gaussian distribution with a mean vector $\mu_y$ and a covariance matrix $\Sigma_y$.

2.  **Step 2: Estimate Parameters from Data**
    *   From the [[Training Data]], calculate the empirical mean, covariance matrix, and prior probability ($\pi_y$) for each class. These are the parameters of your model.

3.  **Step 3: Apply the Decision Formula**
    *   For a new, unseen data point $x$, the goal is to find the class $y$ that maximizes $p(x|y)p(y)$. By taking the logarithm and simplifying the expression for a Gaussian distribution, this is equivalent to finding the class $y$ that *minimizes* the discriminant score.

4.  **Step 4: The Result is the Predicted Class**
    *   The class $y$ that yields the lowest value from the formula is the model's prediction. This process creates a **[[Quadratic Decision Boundary]]** between classes, allowing it to capture non-linear relationships.

### The Core Formula

The classification decision is made by finding the class $y$ that minimizes the following expression:

**Decision:** $f(x) = \operatorname{argmin}_{y} \left( (x-\mu_y)^\top\Sigma_y^{-1}(x-\mu_y) + \ln|\Sigma_y| - 2\ln\pi_y \right)$

Where:
*   $(x-\mu_y)^\top\Sigma_y^{-1}(x-\mu_y)$ is the squared Mahalanobis distance from $x$ to the mean of class $y$. It measures how "typical" $x$ is for that class.
*   $\ln|\Sigma_y|$ is a term that penalizes classes with larger variance.
*   $-2\ln\pi_y$ is a term that favors classes that are more common overall.

### Why Use Discriminant Analysis?

*   **Pros**:
    *   **Principled and Interpretable:** It is derived directly from a sound statistical framework, and the resulting models (the means and covariances for each class) are easy to interpret.
    *   **Models Non-Linear Boundaries:** In its general form (Quadratic Discriminant Analysis or QDA), it can learn curved, quadratic decision boundaries, making it more flexible than a [[Linear Classifier]].
    *   **Efficient:** If the Gaussian assumption holds true, it is a very data-efficient and powerful classification method.

*   **Cons**:
    *   **Strong Distributional Assumption:** Its greatest weakness is that it assumes the features for each class are Gaussian. If this assumption is badly violated, the model's performance can be poor.
    *   **Sensitive to [[Outliers]]:** Outliers in the training data can significantly skew the estimates of the mean ($\mu_y$) and covariance ($\Sigma_y$), leading to a suboptimal decision boundary.