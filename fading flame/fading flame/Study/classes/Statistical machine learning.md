
---

# Statistical Machine Learning

### Comprehensive List of Statistical Machine Learning Terms and Concepts

#### I. Core Concepts and Problem Types
*   **[[Regression]]:** A prediction problem where the output variable (y) is a **[[Numerical Variable]]**, such as cholesterol level.
*   **[[Classification]]:** A prediction problem where the output variable (y) is a **[[Categorical Variable]]**, such as heart attack or stroke prediction ({−1,+1}).
*   **[[Linear Parametric Models]]:** Models where the function $f(x;\theta)$ is defined as $x^\top\theta=\theta_0+\theta_1x_1+\cdots+\theta_dx_d$.
*   **[[Least-Squares Model]]:** The model that minimizes the [[Average Loss]] (average squared-error loss) $J(\theta)$.
*   **[[Regularization]]:** A technique used to balance the [[Cost Function]] $J(\theta)$ with a penalty term (e.g., $\lambda\|\theta\|_2^2$) to reduce [[Sensitivity (Conditioning)]] to small sample size $n$.
*   **[[Ridge Regression]]:** A specific [[Regularization]] technique defined by the [[Cost Function]] $J(\theta)+\lambda\|\theta\|_2^2$.
*   **[[Linear Classifier]]:** A [[Classifier]] defined by $f(x;\theta)=\text{sign}(x^\top\theta)$.
*   **[[Classifier Margin]]:** Defined for [[Linear Classifier]]s as $y \cdot x^\top\theta$.
*   **[[Discriminant Analysis]]:** The resulting [[Classifier]] when modeling [[Class-Conditional Input Distributions]] $p(x|y)$ and $p(y)$, which has a **[[Quadratic Decision Boundary]]** when Gaussian input distributions are assumed.
*   **[[k-Nearest Neighbour (k-NN)]]:** A **[[Nonparametric Classifier]]** that uses a weight function based on k nearest neighbors.

#### II. Error and Evaluation Metrics
*   **[[Expected New Error]]** ($E_{new}$): The expected error of a model at an unknown future point. For [[Regression]], this is often the expected new [[Squared Error]].
*   **[[Irreducible Square Error]]:** The minimal possible expected [[Squared Error]] for any problem, measured as $E[(y-f_0(x))^2]$.
*   **[[Missclassification Error]]:** The error measure used in [[Classification]], defined as $1\{y \neq f(x;\theta)\}$.
*   **[[Training Error]]** ($E_{train}(\hat{\theta})$): The average error over data in T when using the learned model $\hat{\theta}(T)$.
*   **[[Hold-Out Estimate]]:** An estimate of [[Expected New Error]] obtained by splitting observed data into [[Training Data]] and [[Validation Data]].
*   **[[Average Expected New Error]]** ($\bar{E}_{new}$): The [[Expected New Error]] averaged over possible datasets, used to **[[Evaluate the Learning Method]]**.

#### III. Model Components and Learning Principles
*   **[[Training Data]]** (T): Data used to approximate the [[Expected New Error]].
*   **[[Cost Function]]** ($J(\theta)$) / [[Average Loss]]: The average loss over the [[Training Data]], minimized to find the model parameters $\theta$.
*   **[[Conditional Mean Function]]** ($f_0(x)$): The best [[Regression]] model that minimizes [[Expected New Error]] in [[Regression]], defined as $E[y|x]$.
*   **[[Surprisal]]** / [[Negative Log-Likelihood Loss]]: For a model $\theta$, the surprisal of a [[Training Data]] point $(x_i,y_i)$ is $-\ln p(y_i|x_i;\theta)$.
*   **[[Conditional Distribution]]** ($p(y|x)$): Determines the best [[Classifier]] $f_0(x)=\operatorname{argmax}_y p(y|x)$.
*   **[[Class-Conditional Input Distributions]]** ($p(x|y)$): The distributions of inputs for a given class used in [[Discriminant Analysis]].
*   **[[Validation Data]]:** Data split from the observed data used to obtain the [[Hold-Out Estimate]] of [[Expected New Error]].
*   **[[Averaged Model]]** ($\bar{f}(x)$): The expected value of the learned model over all possible [[Training Data]]sets: $E_{T} [f(x; \hat{\theta}(T))]$.

#### IV. Loss Functions
*   **[[Logistic Loss]]:** A [[Loss Function]] based on [[Classifier Margin]], defined as $\ln[1+\exp(-yx^\top\theta)]$.

#### V. Bias-Variance Decomposition
*   **[[Bias]]:** A component of the decomposition of [[Average Expected New Error]] $\bar{E}_{new}$, measured as $E[(f_0(x)- \bar{f}(x))^2]$.
*   **[[Variance]]:** The component of [[Average Expected New Error]] $\bar{E}_{new}$ that quantifies the **[[Sensitivity of the Learning Method]]** to variable [[Training Data]].

#### VI. Cox–Ingersoll–Ross (CIR) Diffusion Specifics
*   **[[CIR Process]]:** [[Cox–Ingersoll–Ross Diffusion]]; the SDE is $dX=a(b-X)dt+\sigma\sqrt{X}dW$.
*   **[[Transition Probability Density]]:** The density computed for successive pairs $(y_{i-1} \to y_i)$.
*   **[[Noncentral Chi-square PDF]]:** The distribution used to express the [[Transition Probability Density]] of the [[CIR Process]].
*   **[[Feller Condition]]:** The condition $2ab>\sigma^2$.
*   **[[y (numpy.ndarray)]]:** 1-D array of X evaluation points.
*   **[[t (numpy.ndarray)]]:** 1-D array of times.
*   **[[CIR Model Parameters]]:** $a, b, \sigma$ are model parameters of the [[CIR Process]] SDE.
*   **[[Delta t]]:** $t[1:]-t[:-1]$.
*   **[[CIR Parameter d]]:** $\exp(-a \cdot \Delta t)$.
*   **[[CIR Parameter c]]:** Scaling constant, $2a/(\sigma^2 \cdot (1-d))$.
*   **[[Degrees of Freedom (CIR)]]**: $2ab/\sigma^2+1$ (or $2q+2$ where $q=2ab/\sigma^2-1$).
*   **[[Chi-square Variable z]]:** $2 \cdot c \cdot y[1:]$.
*   **[[Non-Centrality Parameter]]:** $\lambda$, $2 \cdot c \cdot y[:-1] \cdot d$.

### Statistical Machine Learning Methods and Algorithms

#### [[Learning via Minimizing Average Loss]]
*   **Mathematics/Formula:** The general supervised learning framework: $\mathbf{\hat{\theta}(T) = \operatorname{argmin}_{\theta} J(\theta)}$.
*   **Example/Use Case:** This is the fundamental principle behind most supervised learning algorithms, such as training a [[Linear Regression]] model by minimizing [[Squared Error]] or a [[Linear Classifier]] by minimizing [[Logistic Loss]].
*   **Similarities:** This is a general framework that encompasses many [[Optimisation]] problems where a function is minimized to find optimal parameters.
####  [[Least-Squares Solution]]
*   **Mathematics/Formula:** Finds $\theta$ for [[Linear Regression]] using the **[[Closed-Form Expression]]**: $\mathbf{\hat{\theta}(T) = (X^\top X)^{-1}X^\top y}$.
*   **Example/Use Case:** Directly calculating the optimal parameters for a [[Linear Regression]] model to predict a [[Numerical Variable]] like house prices based on features such as size, number of bedrooms, and location.
*   **Similarities:** A specific instance of [[Learning via Minimizing Average Loss]] where the [[Cost Function]] is [[Squared Error]]. It is related to [[Nonlinear Least-Squares]] in [[Optimisation]] but for linear models.

#### [[Ridge Regression Solution]]
 **Mathematics/Formula:** Finds $\theta$ for regularized [[Linear Regression]] using the **[[Closed-Form Expression]]**: $\mathbf{\hat{\theta}(T) = (X^\top X+ \lambda I)^{-1}X^\top y}$.
*   **Example/Use Case:** Predicting patient cholesterol levels using many potentially correlated medical features (e.g., age, BMI, diet habits), where [[Regularization]] helps prevent overfitting due to a small sample size relative to the number of features.
*   **Similarities:** A form of [[Regularization]] applied to [[Linear Regression]]. It is a modification of the [[Least-Squares Solution]] with an added L 2 penalty term.

#### [[Maximum Likelihood Estimation (MLE)]])
*   **Mathematics/Formula:** A general technique where model parameters are learned by minimizing the [[Average Surprisal]] (negative log-likelihood loss): $\operatorname{argmin}_{\theta} -\frac{1}{n} \sum_{i=1}^n \ln p(y_i|x_i;\theta)$.
*   **Example/Use Case:** Estimating the parameters of a [[Logistic Regression]] model by maximizing the likelihood of observing the [[Training Data]], or fitting the mean and variance of a Gaussian distribution to a set of data points.
*   **Similarities:** A general principle for parameter estimation that often aligns with other methods; for a family of [[Gaussian Distribution Models]] where the conditional mean is modeled as $x^\top\theta$, minimizing average surprisal results in the [[Least-Squares Solution]].

#### [[Learning Linear Classifiers using Logistic Loss]]
*   **Mathematics/Formula:** A method where $f(x;\theta)=\text{sign}(x^\top\theta)$ is learned by minimizing an [[Average Loss]] where the [[Loss Function]] is the **[[Convex Function]]** [[Logistic Loss]]: $\operatorname{argmin}_{\theta} \frac{1}{n} \sum_{i=1}^n \ln[1+\exp(-y_i x_i^\top\theta)]$.
*   **Example/Use Case:** Training a [[Linear Classifier]] to predict whether an email is spam or not spam, where the output is a binary category. The model learns a linear boundary that separates the two classes.
*   **Similarities:** A specific instance of [[Learning via Minimizing Average Loss]] tailored for [[Classification]]. The use of a [[Convex Function]] for the loss makes it amenable to standard [[Optimisation]] techniques.

#### [[Determining Best Classifier (p(y l x) form)]]
*   **Mathematics/Formula:** The optimal [[Classifier]] $f_0(x)$ is found by maximizing the [[Conditional Distribution]]: $f_0(x)=\operatorname{argmax}_y p(y | x)$.
*   **Example/Use Case:** In a theoretical medical diagnosis system, if the probability of having a disease given a set of symptoms ($p(\text{disease}|\text{symptoms})$) could be perfectly known, the best diagnosis would simply be the disease with the highest conditional probability.
*   **Similarities:** Represents the theoretical ideal for [[Classification]], often referred to as the Bayes optimal classifier.



#### [[Determining Best Classifier (p(x l y) form - Chain Rule)]] 
*   **Mathematics/Formula:** The optimal [[Classifier]] can alternatively be found by maximizing the chain rule form: $f_0(x)=\operatorname{argmax}_y p(x|y)p(y)$.
*   **Example/Use Case:** Used in [[Discriminant Analysis]] (e.g., Linear Discriminant Analysis, Quadratic Discriminant Analysis) where it's often easier to model the distribution of features within each class ($p(x|y)$) and the prior probability of each class ($p(y)$) separately.
*   **Similarities:** Also a theoretical ideal for [[Classification]], but breaks down the problem into more manageable parts using Bayes' theorem. It forms the basis for generative classification models.
*   **Pros:** Can be more practical than directly modeling $p(y|x)$ when [[Class-Conditional Input Distributions]] and class priors are easier to estimate.
*   **Cons:** Requires estimating $p(x|y)$ and $p(y)$, which can still be complex; the performance of the classifier depends heavily on the accuracy of these estimations.

#### [[Discriminant Analysis Classifier Formula]]
*   **Mathematics/Formula:** Minimizes a **[[Quadratic Expression]]** in x: $f(x;\theta)=\operatorname{argmin}_y (x-\mu_y)^\top\Sigma_y^{-1}(x-\mu_y)+\ln|\Sigma_y|-2\ln\pi_y$. (This specific formula applies to Quadratic Discriminant Analysis (QDA) assuming Gaussian input distributions).
*   **Example/Use Case:** Classifying customers into different segments (e.g., high-value, medium-value, low-value) based on their purchasing behavior, assuming that the features for each segment follow a Gaussian distribution.
*   **Similarities:** A practical implementation of [[Determining Best Classifier (p(x|y) form - Chain Rule)]] under the specific assumption of Gaussian [[Class-Conditional Input Distributions]].
*   **Pros:** Provides a principled way to classify when [[Class-Conditional Input Distributions]] are known or can be estimated; can handle non-linear decision boundaries (QDA) if class covariances differ.
*   **Cons:** Assumes Gaussian distributions for features within each class, which may not always hold in real-world data; sensitive to violations of this assumption.

#### [[k-NN Classifier]]
*   **Mathematics/Formula:** Defines $f(x;k,T)$ based on majority vote among neighbors using the formula $f(x;k,T)=\operatorname{argmax}_y \sum_{i=1}^n w(x,x_i;k)1\{y_i=y\}$. (Often $w(x,x_i;k)$ is 1 if $x_i$ is one of the k nearest neighbors, 0 otherwise, and $k$ is a hyperparameter).
*   **Example/Use Case:** Recommending movies to a user based on the preferences of their k most similar friends, or classifying a new image by finding the k most similar images in a labeled dataset.
*   **Similarities:** A [[Nonparametric Classifier]], meaning it makes no assumptions about the underlying data distribution, contrasting with parametric models like [[Linear Classifier]]s or [[Discriminant Analysis]].
*   **Pros:** Simple to understand and implement; no explicit training phase (lazy learning); can model complex decision boundaries and adapt to local data structure.
*   **Cons:** Computationally expensive during prediction (needs to calculate distances to all training points for each new prediction); sensitive to the choice of k and the distance metric; does not learn an explicit model; sensitive to irrelevant features and the curse of dimensionality.

#### [[Hold-out Method]]
*   **Mathematics/Formula:** Randomly splitting observed data into [[Training Data]] (T) and [[Validation Data]] ($T_{validation}$) to obtain the [[Hold-Out Estimate]] $\mathbf{E_{hold-out}(\hat{\theta})}$.
*   **Example/Use Case:** Evaluating a newly trained model's performance on unseen data before deploying it, by splitting a dataset into 80% for training and 20% for validation.
*   **Similarities:** A basic method for [[Method Evaluation]] and estimating [[Expected New Error]].
*   **Pros:** Simple and fast to implement and understand.
*   **Cons:** High [[Variance]] in the estimate of performance, especially with small datasets (the estimate can vary significantly depending on the random split); not all available data is used for training the final model.

#### [[k-Fold Cross-Validation]]
*   **Mathematics/Formula:** Systematically splits observed data into k sets to estimate [[Average Expected New Error]] using $\mathbf{E_{k-fold} = 1/k \sum_{\ell=1}^k E_{hold-out}(\hat{\theta}(T_\ell))}$.
*   **Example/Use Case:** Tuning hyperparameters for a [[Support Vector Machine]] by trying different C and gamma values, and using 5-fold cross-validation to select the best combination that generalizes well.
*   **Similarities:** An improved and more robust version of the [[Hold-out Method]] for [[Method Evaluation]].
*   **Pros:** Provides a more robust and less biased estimate of model performance than the [[Hold-out Method]]; uses all data for both training and validation (across different folds), leading to a more stable estimate.
*   **Cons:** Computationally more expensive than a single hold-out split (requires training k models); still has some [[Variance]], especially for small k, but generally lower than a single hold-out.

#### [[Decomposition of Squared Error (Regression)]]
*   **Mathematics/Formula:** Any [[Learning Method]]'s [[Average Expected New Error]] is decomposed as: $\bar{E}_{new}=\text{Bias}^2+\text{Variance}+\text{Irreducible noise level}$.
*   **Example/Use Case:** Analyzing why a [[Regression]] model is performing poorly; if [[Bias]] is high, the model might be too simple (underfitting); if [[Variance]] is high, the model might be too complex (overfitting). This helps in diagnosing model issues.
*   **Similarities:** A fundamental concept for understanding model performance, especially in [[Regression]], and is closely related to the [[Bias]] and [[Variance]] terms defined as concepts.
*   **Pros:** Provides a clear framework for understanding and diagnosing the sources of model errors; helps in choosing appropriate model complexity to balance the bias-variance trade-off.
*   **Cons:** Primarily applicable to [[Regression]] problems with [[Squared Error]] as the loss function; the decomposition itself doesn't directly provide a solution, but rather a diagnostic tool.

#### [[Computing CIR Transition Density]]
*   **Mathematics/Formula:** Calculates density values by calling `ncx2.pdf(z,df,_lambda)` and multiplying the result by $2c$.
*   **Example/Use Case:** Modeling interest rate dynamics or commodity prices using the [[CIR Process]], and needing to calculate the probability of the process moving from one state to another over a given time period for risk management or option pricing.
*   **Similarities:** Specific to the [[CIR Process]], a stochastic process used in financial modeling.
*   **Pros:** Provides a way to quantify the probability of state changes in a [[CIR Process]], which is crucial for analytical solutions in finance.
*   **Cons:** Relies on the specific assumptions of the [[CIR Process]] and the [[Noncentral Chi-square PDF]]; requires careful handling of the [[Feller Condition]] to ensure valid results.

#### [[Vectorization]]
*   **Mathematics/Formula:** The computation is implemented in a **[[Vectorized Form]]** to calculate all pairwise successive [[Transition Probability Density]] simultaneously. (This refers to the technique of performing operations on entire arrays/matrices rather than element-by-element loops).
*   **Example/Use Case:** Performing matrix multiplications or element-wise operations on large arrays in Python with libraries like NumPy, rather than using explicit `for` loops, to significantly speed up calculations.
*   **Similarities:** A computational optimization technique, not a statistical learning method itself, but crucial for efficient implementation of many methods.
*   **Pros:** Significantly improves computational efficiency and speed, especially for large datasets; often leads to cleaner, more concise, and more readable code.
*   **Cons:** Requires understanding how to express mathematical operations in a vectorized manner, which can sometimes be less intuitive for beginners than explicit loops; not all problems can be easily vectorized.

### Important Considerations and Properties

#### I. Statistical Machine Learning (SML)
1.  **[[Learning Goal (SML)]]:** The aim of supervised learning is to learn a model $\theta$ by minimizing [[Cost Function]] $J(\theta)$ to **[[Reduce Expected New Error]]** $E_{new}(\theta)$.
2.  **[[Least-Squares Cost Property]]:** The [[Squared Error]] [[Cost Function]] for [[Linear Regression]], $J(\theta)=1/n\|y-X\theta\|^2$, is **[[Quadratic Functions]]** in $\theta$.
3.  **[[Small Sample Risk]]:** When the sample size ($n$) is small (especially relative to features $d$), the [[Least-Squares Solution]] parameters ($\hat{\theta}(T)$) can become **[[Sensitivity (Conditioning)|very sensitive]]** with respect to the [[Training Data]] T.
4.  **[[Best Regression Model]]:** The optimal [[Regression]] model $f_0(x)$ is the **[[Conditional Mean Function]]** $E[y|x]$.
5.  **[[ML and Least Squares Connection]]:** For a family of **[[Gaussian Distribution Models]]** where the conditional mean is modeled as $x^\top\theta$, minimizing [[Average Surprisal]] ([[Maximum Likelihood (ML) Estimation]]) results in the **[[Least-Squares Solution]]** for $\hat{\theta}(T)$.
6.  **[[Classification Loss Choice]]:** The [[Missclassification Error]] is **[[Computationally Challenging Loss]]** to minimize. [[Logistic Loss]] is preferred because it is a **[[Convex Function]]** of $\theta$.
7.  **[[Best Classifier Model]]:** The optimal [[Classifier]] $f_0(x)$ is determined by the [[Conditional Distribution]], maximizing $p(y|x)$.
8.  **[[Training Error Bias]]:** The average [[Training Error]] $E_{train}(\hat{\theta}(T))$ **[[Systematic Underestimation|systematically underestimates]]** the true [[Expected New Error]] $E_{new}(\hat{\theta}(T))$.
9.  **[[Method Evaluation]]:** The quantity $\bar{E}_{new}$ evaluates the **[[Learning Method]]** itself, rather than a specific learned model.
10. **[[Role of Variance]]:** The [[Variance]] term quantifies how **[[Sensitivity of Learning Method to Training Data|sensitive the learning method is to variable training data]]**.

#### II. Cox–Ingersoll–Ross (CIR) Diffusion
1.  **[[Feller Condition Failure]]:** If the [[Feller Condition]] $2ab>\sigma^2$ fails ($2ab\le\sigma^2$), the [[CIR Process]] can hit zero, which the code treats as a **[[Degenerate Boundary Condition]]**.
2.  **[[Silent Fallback]]:** If the [[Feller Condition]] fails, the function returns an array filled with $1e^{-100}$ (very small densities) as a practical, but **[[Silent Fallback]]**.
3.  **[[Recommended Improvement (CIR)]]:** The sources note that it would be better practice to **[[Error Handling Best Practices|raise an exception or return NaNs with a warning]]** upon [[Feller Condition Failure]] so the caller knows the condition failed, rather than using the [[Silent Fallback]] $1e^{-100}$.
4.  **[[Input Assumptions (CIR)]]:** The implementation assumes $\sigma>0, a>0, b\ge0$ and that the time array $t$ is ordered such that $\Delta t\ge0$.