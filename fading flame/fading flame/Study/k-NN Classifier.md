
---

## k-Nearest Neighbors (k-NN): Learning by Local Example Matching

**[[k-NN Classifier]]** is one of the most intuitive and non-parametric methods in machine learning. Instead of learning explicit parameters or fitting a model, k-NN makes predictions by looking at the _closest examples_ in the training set. It’s like solving a classification question not by using formulas, but by asking nearby “experts” (similar past examples) what the answer should be.

Imagine you're in a new city trying to identify a type of building:

- **The Evidence**: You only have the building you’re looking at right now—its appearance, materials, shape, etc.
    
- **The Locals**: These are your stored [[Training Data]], each representing a building whose type you already know.
    
- **The Strategy**: Instead of building a global model, you simply walk around and find the **k nearest buildings** to the one you're observing.
    
- **k-NN**: You classify the new building as the majority type among those k nearest neighbors. k-NN relies on the simple belief that **things that are close together tend to be similar**.
    

### The Key Difference: No Training, Pure Memory-Based Prediction

The k-NN classifier is fundamentally different from algorithms like [[Maximum Likelihood Estimation (MLE)]] or [[Learning via Minimizing Average Loss]].

- **[[Least-Squares Solution]] / [[Logistic Regression]]**: These methods explicitly learn **parameters** by minimizing some average loss or maximizing some likelihood.
    
- **[[Parametric Models]]** like linear regression assume the data follows a specific shape (e.g., linear, logistic) and estimate a fixed set of parameters.
    
- **[[k-NN Classifier]]**: It does _not_ assume any parametric form and does _not_ learn parameters. The entire dataset is the model.  
    Instead of _training_, k-NN performs **lazy learning**: it waits until you query it with a new point and only does the work then.
    

In other words:  
_Parametric models generalize first and predict second.  
k-NN predicts first and only generalizes implicitly based on distance._

### The Recipe (Algorithm Steps)

Unlike MLE, k-NN has no parameter optimization. Its algorithm is procedural:

1. **Step 1: Choose k (the number of neighbors)**
    
    - Common choices are 1, 3, 5, 7, etc.
        
    - Small k → sensitive to noise.
        
    - Large k → smoother, more stable predictions.
        
2. **Step 2: Select a Distance Metric**
    
    - Usually **Euclidean distance** for numerical data.
        
    - Other options: Manhattan, cosine similarity, or domain-specific metrics.
        
3. **Step 3: For a New Input x, Find Its k Nearest Neighbors**
    
    - Compute the distance between x and every point in the training set.
        
    - Select the k closest based on the chosen metric.
        
4. **Step 4: Aggregate Neighbor Labels**
    
    - **Classification** → majority vote among k labels.
        
    - **Regression** → average the k neighbor values.
        
5. **Step 5: Output the Result**
    
    - The predicted class is simply the most common label among the nearest points.
        

### The Core Formula

While k-NN has no explicit training objective, the prediction rule follows this mathematical decision rule:
$$
\hat{y}(x) = \text{majority\_label}\!\left(\left\{\, y_i \;|\; x_i \in \mathcal{N}_k(x) \,\right\}\right)
$$


where $\mathcal{N}_k(x)$ denotes the **set of k nearest neighbors** of x in the training set.

This rule reflects the basic principle of **local decision-making based on proximity**.

### Why Use k-NN?

**Pros**:

- **No training required:** Perfect when training time must be minimal.
    
- **Non-parametric:** Makes no assumptions about distributions, linearity, or functional form.
    
- **Versatile:** Works for classification, regression, and even unsupervised tasks like anomaly detection.
    
- **Highly interpretable:** Decisions are based on real, observable examples.
    

**Cons**:

- **Computationally expensive at prediction time:** Must compute distance to _all_ points in the dataset.
    
- **Curse of Dimensionality:** Distances become less meaningful in high dimensions, degrading accuracy.
    
- **Sensitive to irrelevant or unscaled features:** Distance metrics can be misled without proper preprocessing.
    
- **Memory-heavy:** Must store the entire training dataset.
    

---

If you'd like, I can also:

- convert this into a flashcard version,
    
- compare k-NN to Bayes optimal classification,
    
- or add a visual/intuition diagram (in text format).